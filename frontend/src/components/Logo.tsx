import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <Link href="/home" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <div style={{
        width: size,
        height: size,
        borderRadius: '50%',
        background: '#CC0000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <svg width={size * 0.6} height={size * 0.6} viewBox="0 0 60 60" fill="white">
          <path d="M30 8 L45 28 L38 28 L38 52 L22 52 L22 28 L15 28 Z" />
          <path d="M10 18 Q18 8 30 8 Q18 12 15 28 Z" />
          <path d="M50 18 Q42 8 30 8 Q42 12 45 28 Z" />
        </svg>
      </div>
      <span style={{
        fontSize: size * 0.4,
        fontWeight: '800',
        color: '#FFFFFF',
        letterSpacing: '1px',
        fontFamily: 'Georgia, serif',
      }}>
        LITTLEBIRD
      </span>
    </Link>
  );
}
