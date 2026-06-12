import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LittleBird',
  description: 'Share your world with LittleBird',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
