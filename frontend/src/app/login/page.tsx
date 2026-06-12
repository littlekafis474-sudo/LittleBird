'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message);
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      router.push('/home');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0A0A0A',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{ marginBottom: '40px' }}>
        <Logo size={50} />
      </div>

      <div style={{
        width: '100%',
        maxWidth: '400px',
        background: '#111111',
        borderRadius: '16px',
        padding: '32px',
        border: '1px solid #222222',
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '24px' }}>
          Sign in to LittleBird
        </h2>

        {error && (
          <div style={{
            background: '#2A0000',
            border: '1px solid #CC0000',
            borderRadius: '8px',
            padding: '12px',
            color: '#FF4444',
            marginBottom: '16px',
            fontSize: '14px',
          }}>
            {error}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              padding: '14px 16px',
              background: '#0A0A0A',
              border: '1px solid #333333',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontSize: '15px',
              width: '100%',
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              padding: '14px 16px',
              background: '#0A0A0A',
              border: '1px solid #333333',
              borderRadius: '10px',
              color: '#FFFFFF',
              fontSize: '15px',
              width: '100%',
            }}
          />
          <button
            onClick={handleLogin}
            disabled={loading}
            style={{
              padding: '14px',
              background: loading ? '#880000' : '#CC0000',
              color: '#FFFFFF',
              borderRadius: '10px',
              fontSize: '16px',
              fontWeight: '700',
              border: 'none',
              cursor: loading ? 'not-allowed' : 'pointer',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In'}
          </button>
        </div>

        <p style={{ marginTop: '24px', color: '#888888', textAlign: 'center', fontSize: '14px' }}>
          Don't have an account?{' '}
          <Link href="/register" style={{ color: '#CC0000', fontWeight: '600' }}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
