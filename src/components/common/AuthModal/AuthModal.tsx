import React, { useState } from 'react';
import { supabase } from '../../../utils/supabaseClient';
import styles from '../AuthModal/AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setMessage(`Google error: ${error.message}`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const cleanEmail = email.trim();

    if (!cleanEmail || !password) {
      setMessage('Please fill in all fields!');
      return;
    }

    setLoading(true);
    setMessage('');

    const { error } =
      isRegistering ?
        await supabase.auth.signUp({ email: cleanEmail, password })
      : await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      if (isRegistering) {
        const { error: signInError } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password,
        });
        if (signInError) {
          setMessage(`Registered, but login failed: ${signInError.message}`);
          setLoading(false);
          return;
        }
      }

      setMessage(
        isRegistering ? 'Registration successful! 🎉' : 'Login successful! 🎉',
      );

      setTimeout(() => {
        onClose();
        window.location.reload();
      }, 1500);
    }

    setLoading(false);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>

        <h2 className={styles.title}>
          {isRegistering ? 'Create an account' : 'Sign in to your account'}
        </h2>

        <button
          className={styles.googleBtn}
          onClick={handleGoogleLogin}
          type="button"
        >
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google Logo"
          />
          Continue with Google
        </button>

        <div className={styles.divider}>or use email</div>

        <form
          className={styles.form}
          onSubmit={handleSubmit}
        >
          <input
            className={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            className={styles.submitBtn}
            type="submit"
            disabled={loading}
          >
            {loading ?
              'Loading...'
            : isRegistering ?
              'Sign up'
            : 'Sign in'}
          </button>
        </form>

        <p className={styles.toggleWrapper}>
          {isRegistering ?
            'Already have an account?'
          : "Don't have an account yet?"}

          <button
            className={styles.toggleBtn}
            type="button"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setMessage('');
            }}
          >
            {isRegistering ? 'Sign in' : 'Sign up'}
          </button>
        </p>

        {message && (
          <p
            className={`${styles.message} ${
              message.includes('Error') ?
                styles['message--error']
              : styles['message--success']
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
