import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';

export const ProfilePage = () => {
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        setUserEmail(session.user.email ?? '');
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
    window.location.reload();
  };

  return (
    <div
      style={{ padding: '50px 20px', textAlign: 'center', minHeight: '50vh' }}
    >
      <h1>Мій Профіль</h1>
      {userEmail ?
        <>
          <p style={{ fontSize: '18px', margin: '20px 0' }}>
            Ви увійшли як: <strong>{userEmail}</strong>
          </p>
          <button
            onClick={handleLogout}
            style={{
              padding: '10px 20px',
              cursor: 'pointer',
              backgroundColor: '#e74c3c',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
            }}
          >
            Вийти з акаунту
          </button>
        </>
      : <p>Завантаження...</p>}
    </div>
  );
};
