import React, { useEffect, useRef, useState } from 'react';
import styles from './SupportChat.module.scss';
import { Sidebar } from '../../../components/SideBar/SideBar.tsx';
import { Breadcrumbs } from '../../../components/ui/Breadcrumbs/Breadcrumbs.tsx';
import { supabase } from '../../../utils/supabaseClient.ts';

interface Message {
  id: string;
  role: 'user' | 'admin';
  text: string;
  created_at: string;
}

export const SupportChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState('');
  const [userId, setUserId] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) return;
      setUserId(user.id);
      supabase
        .from('support_messages')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at')
        .then(({ data }) => data && setMessages(data));
    });
  }, []);

  const handleSend = async () => {
    const trimmed = text.trim();
    if (!trimmed || !userId) return;
    setText('');

    const isFirstMessage = messages.length === 0;

    const { data } = await supabase
      .from('support_messages')
      .insert({ user_id: userId, role: 'user', text: trimmed })
      .select()
      .single();

    if (!data) return;
    setMessages((prev) => [...prev, data]);

    if (isFirstMessage) {
      const { data: autoReply } = await supabase
        .from('support_messages')
        .insert({
          user_id: userId,
          role: 'admin',
          text: 'Thank you for your inquiry! Wait for a response from technical support.',
        })
        .select()
        .single();

      if (autoReply) setMessages((prev) => [...prev, autoReply]);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={styles.profilePage}>
      <div className={styles.profilePage__container}>
        <div className={styles.profilePage__layout}>
          <Sidebar />

          <main className={styles.profilePage__content}>
            <Breadcrumbs />
            <h1 className={styles.profilePage__title}>Support Chat</h1>

            <div className={styles.chat}>
              <div className={styles.messages}>
                {messages.length === 0 && (
                  <p className={styles.empty}>
                    No messages yet. Feel free to ask!
                  </p>
                )}
                {messages.map((msg) => (
                  <React.Fragment key={msg.id}>
                    <div
                      className={`${styles.bubble} ${styles[`bubble--${msg.role}`]}`}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={`${styles.time} ${styles[`time--${msg.role}`]}`}
                    >
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </React.Fragment>
                ))}
                <div ref={bottomRef} />
              </div>

              <div className={styles.inputArea}>
                <textarea
                  className={styles.textarea}
                  placeholder="Type a message…"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                />
                <button
                  className={styles.sendBtn}
                  onClick={handleSend}
                  disabled={!text.trim()}
                >
                  ↑
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
