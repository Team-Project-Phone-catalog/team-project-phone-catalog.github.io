import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../utils/supabaseClient';
import { Loader } from '../ui/Loader/Loader.tsx';

export const AuthCallbackPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      await supabase.auth.getSession();
      navigate('/profile');
    };

    handleCallback();
  }, [navigate]);

  return <Loader />;
};
