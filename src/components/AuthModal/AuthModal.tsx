import React, { useState } from 'react';
import { supabase } from '../../utils/supabaseClient';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !password)
      return setMessage('Будь ласка, введіть пошту та пароль!');
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email: cleanEmail,
      password,
    });

    if (error) {
      setMessage(`Error ${error.message}`);
    } else {
      setMessage('Registration successful! You can now log in.');

      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim();

    if (!cleanEmail || !password)
      return setMessage('Будь ласка, введіть пошту та пароль!');
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email: cleanEmail,
      password,
    });

    if (error) {
      setMessage(`Error ${error.message}`);
    } else {
      setMessage("'You have successfully logged in! 🎉");
      setTimeout(() => {
        onClose();
        setMessage('');
        window.location.reload();
      }, 1500);
    }
    setLoading(false);
  };

  return (
    // Темний фон на весь екран
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000, // Щоб вікно було поверх усього
      }}
    >
      {/* Саме біле віконце */}
      <div
        style={{
          backgroundColor: 'white',
          padding: '30px',
          borderRadius: '10px',
          width: '100%',
          maxWidth: '400px',
          position: 'relative',
        }}
      >
        {/* Кнопка закриття (хрестик) */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '15px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          ✕
        </button>

        <h2 style={{ textAlign: 'center', marginTop: 0 }}>Вхід в акаунт</h2>

        <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input
            type="email"
            placeholder="Ваш Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <input
            type="password"
            placeholder="Пароль (мінімум 6 символів)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ padding: '10px', fontSize: '16px' }}
          />
          <div
            style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}
          >
            <button
              onClick={handleLogin}
              disabled={loading}
              style={{ padding: '10px 20px', cursor: 'pointer', flex: 1 }}
            >
              {loading ? '...' : 'Увійти'}
            </button>
            <button
              onClick={handleSignUp}
              disabled={loading}
              style={{ padding: '10px 20px', cursor: 'pointer', flex: 1 }}
            >
              Реєстрація
            </button>
          </div>
        </form>
        {message && (
          <p style={{ marginTop: '15px', color: 'blue', textAlign: 'center' }}>
            {message}
          </p>
        )}
      </div>
    </div>
  );
};
