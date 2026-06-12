'use client';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside style={{
      width: '250px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      backgroundColor: '#0d1117',
      borderRight: '1px solid #2a2a2a',
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 1rem',
      gap: '0.5rem',
    }}>
      <h1 style={{ color: '#e8643a', fontSize: '1.5rem', marginBottom: '2rem' }}>🐦 LittleBird</h1>
      <Link href="/home" style={navLink}>🏠 Home</Link>
      <Link href="/explore" style={navLink}>🔍 Explore</Link>
      <Link href="/notifications" style={navLink}>🔔 Notifications</Link>
      <Link href="/messages" style={navLink}>✉️ Messages</Link>
      <Link href="/profile" style={navLink}>👤 Profile</Link>
    </aside>
  );
}

const navLink: React.CSSProperties = {
  color: '#ffffff',
  textDecoration: 'none',
  padding: '0.75rem 1rem',
  borderRadius: '8px',
  fontSize: '1rem',
  transition: 'background 0.2s',
};
