import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import { User } from '@supabase/supabase-js'; // Імпортуємо тип для TS
import styles from './ProfilePage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { Loader } from '../../components/ui/Loader/Loader.tsx';

export const ProfilePage = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session?.user) {
        setUser(session.user);
      } else {
        navigate('/');
      }
    };

    getUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  // Функція для гарного форматування дати
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.profileContainer}>
      <Breadcrumbs />
      <h1 className={styles.profileContainer__title}>Profile</h1>

      {user ?
        <>
          <div className={styles.userInfo}>
            <img
              src={
                user.user_metadata.avatar_url ||
                'https://via.placeholder.com/150'
              }
              className={styles.userInfo__photo}
              alt="Profile"
            />

            <p className={styles.userInfo__title}>Name:</p>
            <span className={styles.userInfo__info}>
              {user.user_metadata.full_name || '-'}
            </span>

            <p className={styles.userInfo__title}>Email:</p>
            <span className={styles.userInfo__info}>{user.email}</span>

            <p className={styles.userInfo__title}>Created:</p>
            <span className={styles.userInfo__info}>
              {formatDate(user.created_at)}
            </span>
          </div>

          <button
            onClick={handleLogout}
            className={styles.logoutButton}
          >
            Log out
          </button>
        </>
      : <div className={styles.loading}>
          <Loader />
        </div>
      }
    </div>
  );
};
