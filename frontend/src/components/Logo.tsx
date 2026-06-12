import Image from 'next/image';
import Link from 'next/link';

export default function Logo({ size = 40, showText = true }: { size?: number; showText?: boolean }) {
  return (
    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: showText ? '12px' : '0', textDecoration: 'none' }}>
      <Image
        src="/logo for littlebird.jpeg"
        alt="LittleBird"
        width={size}
        height={size}
        priority
        style={{ borderRadius: '4px' }}
      />
      {showText && (
        <span style={{
          fontSize: size * 0.5,
          fontWeight: '800',
          color: '#FFFFFF',
          letterSpacing: '1px',
          fontFamily: 'Georgia, serif',
        }}>
          LITTLEBIRD
        </span>
      )}
    </Link>
  );
}
