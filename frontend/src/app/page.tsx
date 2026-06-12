'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Logo from '@/components/Logo';

export default function LandingPage() {
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
      <div style={{ marginBottom: '48px' }}>
        <Logo size={80} />
      </div>

      <h1 style={{
        fontSize: '48px',
        fontWeight: '800',
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: '16px',
        lineHeight: 1.2,
      }}>
        Share Your World
      </h1>

      <p style={{
        fontSize: '18px',
        color: '#888888',
        textAlign: 'center',
        marginBottom: '48px',
        maxWidth: '400px',
      }}>
        Join LittleBird — the next generation social platform built for everyone.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '360px' }}>
        <Link href="/register" style={{
          display: 'block',
          padding: '16px',
          background: '#CC0000',
          color: '#FFFFFF',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          textAlign: 'center',
          textDecoration: 'none',
        }}>
          Create Account
        </Link>

        <Link href="/login" style={{
          display: 'block',
          padding: '16px',
          background: 'transparent',
          color: '#FFFFFF',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          textAlign: 'center',
          textDecoration: 'none',
          border: '1px solid #333333',
        }}>
          Sign In
        </Link>
      </div>

      <p style={{ marginTop: '48px', color: '#444444', fontSize: '13px' }}>
        © 2024 LittleBird — Built in Ghana 🇬🇭
      </p>
    </div>
  );
}
