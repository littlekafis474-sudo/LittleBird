'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

const navItems = [
  { href: '/home', label: 'Home', icon: '🏠' },
  { href: '/explore', label: 'Explore', icon: '🔍' },
  { href: '/notifications', label: 'Notifications', icon: '🔔' },
  { href: '/nest', label: 'Nest Messenger', icon: '✉️' },
  { href: '/profile', label: 'Profile', icon: '👤' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside style={{
      width: '260px',
      height: '100vh',
      position: 'fixed',
      left: 0,
      top: 0,
      background: '#0A0A0A',
      borderRight: '1px solid #222222',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px',
      gap: '8px',
      zIndex: 100,
    }}>
      <div style={{ marginBottom: '32px', paddingLeft: '12px' }}>
        <Logo size={44} />
      </div>

      {navItems.map((item) => (
        <Link key={item.href} href={item.href} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          padding: '12px 16px',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: pathname === item.href ? '700' : '400',
          color: pathname === item.href ? '#FFFFFF' : '#888888',
          background: pathname === item.href ? '#CC0000' : 'transparent',
          transition: 'all 0.2s ease',
          textDecoration: 'none',
        }}>
          <span style={{ fontSize: '20px' }}>{item.icon}</span>
          {item.label}
        </Link>
      ))}

      <div style={{ marginTop: 'auto' }}>
        <button style={{
          width: '100%',
          padding: '14px',
          background: '#CC0000',
          color: '#FFFFFF',
          borderRadius: '12px',
          fontSize: '16px',
          fontWeight: '700',
          border: 'none',
          cursor: 'pointer',
          letterSpacing: '0.5px',
        }}>
          + New Post
        </button>
      </div>
    </aside>
  );
}
