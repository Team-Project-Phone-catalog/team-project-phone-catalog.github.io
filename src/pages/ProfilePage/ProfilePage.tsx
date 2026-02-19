import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import { User } from '@supabase/supabase-js';
import styles from './ProfilePage.module.scss';
import { Breadcrumbs } from '../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { Loader } from '../../components/ui/Loader/Loader.tsx';
import { Sidebar } from '../../components/SideBar/SideBar.tsx';

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('uk-UA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar
            userName={user?.user_metadata.full_name || ''}
            userEmail={user?.email || ''}
          />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Profile</h1>

            {user ?
              <div className={styles.userInfoWrapper}>
                <div className={styles.userInfo}>
                  <img
                    src={
                      user.user_metadata.avatar_url ||
                      'https://via.placeholder.com/150'
                    }
                    className={styles.userInfo__photo}
                    alt="Profile"
                  />

                  <div className={styles.userInfo__details}>
                    <p className={styles.userInfo__label}>Name:</p>
                    <span className={styles.userInfo__value}>
                      {user.user_metadata.full_name || '-'}
                    </span>

                    <p className={styles.userInfo__label}>Email:</p>
                    <span className={styles.userInfo__value}>{user.email}</span>

                    <p className={styles.userInfo__label}>Created:</p>
                    <span className={styles.userInfo__value}>
                      {formatDate(user.created_at)}
                    </span>

                    <button
                      onClick={handleLogout}
                      className={styles.logoutButton}
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </div>
            : <div className={styles.loading}>
                <Loader />
              </div>
            }
          </main>
        </div>
      </div>
    </div>
  );
};
