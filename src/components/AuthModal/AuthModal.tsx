import React, { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';
import styles from './AutrhModal.module.scss';

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
    if (error) setMessage(`Помилка Google: ${error.message}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();
    if (!cleanEmail || !password) {
      setMessage('Заповніть усі поля!');
      return;
    }

    setLoading(true);
    setMessage('');

    const { error } =
      isRegistering ?
        await supabase.auth.signUp({ email: cleanEmail, password })
      : await supabase.auth.signInWithPassword({ email: cleanEmail, password });

    if (error) {
      setMessage(`Помилка: ${error.message}`);
    } else {
      setMessage(isRegistering ? 'Реєстрація успішна!' : 'Вхід успішний! 🎉');
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
          aria-label="Закрити"
        >
          ✕
        </button>

        <h2 className={styles.title}>
          {isRegistering ? 'Створити акаунт' : 'Вхід у кабінет'}
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
          Продовжити з Google
        </button>

        <div className={styles.divider}>або через email</div>

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
            placeholder="Пароль"
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
              'Завантаження...'
            : isRegistering ?
              'Зареєструватися'
            : 'Увійти'}
          </button>
        </form>

        <p className={styles.toggleWrapper}>
          {isRegistering ? 'Вже маєте акаунт?' : 'Ще не маєте акаунту?'}
          <button
            className={styles.toggleBtn}
            type="button"
            onClick={() => {
              setIsRegistering(!isRegistering);
              setMessage('');
            }}
          >
            {isRegistering ? 'Увійти' : 'Зареєструватися'}
          </button>
        </p>

        {message && (
          <p
            className={`${styles.message} ${message.includes('Помилка') ? styles['message--error'] : styles['message--success']}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
