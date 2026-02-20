import { useEffect } from 'react';
import { supabase } from '../utils/supabaseClient';

export const useSupportRealtime = (
  selectedUserId: string,
  onNewMessage: (msg: {
    role: string;
    text: string;
    created_at: string;
  }) => void,
) => {
  useEffect(() => {
    if (!selectedUserId) return;

    const channel = supabase
      .channel('support-chat')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'support_messages',
          filter: `user_id=eq.${selectedUserId}`,
        },
        (payload) =>
          onNewMessage(
            payload.new as { role: string; text: string; created_at: string },
          ),
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [selectedUserId]);
};
