'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/Sidebar';
import Logo from '@/components/Logo';

export default function HomePage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    if (!token) {
      router.push('/login');
      return;
    }
    if (userData) setUser(JSON.parse(userData));
  }, []);

  return (
    <div style={{ display: 'flex', background: '#0A0A0A', minHeight: '100vh' }}>
      <Sidebar />

      <main style={{
        marginLeft: '260px',
        flex: 1,
        maxWidth: '600px',
        borderRight: '1px solid #222222',
        minHeight: '100vh',
      }}>
        <div style={{
          position: 'sticky',
          top: 0,
          background: 'rgba(10,10,10,0.9)',
          backdropFilter: 'blur(10px)',
          padding: '16px 20px',
          borderBottom: '1px solid #222222',
          zIndex: 10,
        }}>
          <h2 style={{ fontSize: '20px', fontWeight: '800' }}>Home</h2>
        </div>

        <div style={{
          padding: '20px',
          borderBottom: '1px solid #222222',
        }}>
          <div style={{ display: 'flex', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: '#CC0000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '18px',
              fontWeight: '700',
            }}>
              {user?.name?.[0] || '?'}
            </div>
            <div style={{ flex: 1 }}>
              <textarea
                placeholder="What's happening?"
                style={{
                  width: '100%',
                  background: 'transparent',
                  border: 'none',
                  color: '#FFFFFF',
                  fontSize: '18px',
                  resize: 'none',
                  minHeight: '80px',
                  fontFamily: 'Georgia, serif',
                }}
              />
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                borderTop: '1px solid #222222',
                paddingTop: '12px',
              }}>
                <button style={{
                  padding: '10px 24px',
                  background: '#CC0000',
                  color: '#FFFFFF',
                  borderRadius: '20px',
                  fontSize: '15px',
                  fontWeight: '700',
                  border: 'none',
                  cursor: 'pointer',
                }}>
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '60px 20px',
          color: '#444444',
        }}>
          <p style={{ fontSize: '20px' }}>🐦</p>
          <p style={{ marginTop: '8px' }}>No posts yet. Be the first!</p>
        </div>
      </main>

      <div style={{
        width: '320px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}>
        <div style={{
          background: '#111111',
          borderRadius: '16px',
          padding: '20px',
          border: '1px solid #222222',
        }}>
          <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '4px' }}>
            Welcome back{user ? `, ${user.name}!` : '!'}
          </h3>
          <p style={{ color: '#888888', fontSize: '14px' }}>
            Ghana's finest social platform 🇬🇭
          </p>
        </div>
      </div>
    </div>
  );
}
