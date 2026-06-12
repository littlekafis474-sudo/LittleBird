import Sidebar from '@/components/Sidebar';

export default function HomePage() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#0d1117', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{
        marginLeft: '250px',
        flex: 1,
        padding: '2rem',
        color: '#ffffff',
        borderRight: '1px solid #2a2a2a',
        maxWidth: '600px',
      }}>
        <h2 style={{ marginBottom: '1.5rem' }}>Home</h2>
        <div style={{
          backgroundColor: '#161b22',
          borderRadius: '12px',
          padding: '1rem',
          color: '#888',
          textAlign: 'center',
        }}>
          Posts will appear here soon 🐦
        </div>
      </main>
    </div>
  );
}
