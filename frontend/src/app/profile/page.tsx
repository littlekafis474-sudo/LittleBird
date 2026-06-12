import Sidebar from '@/components/Sidebar';

export default function ProfilePage() {
  return (
    <div style={{ display: 'flex', backgroundColor: '#0d1117', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: '250px', flex: 1, maxWidth: '600px', color: '#ffffff' }}>
        <div style={{ height: '200px', backgroundColor: '#1a3a5c', position: 'relative' }}>
          <div style={{
            position: 'absolute', bottom: '-50px', left: '1.5rem',
            width: '100px', height: '100px', borderRadius: '50%',
            backgroundColor: '#e8643a', border: '4px solid #0d1117',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2rem'
          }}>👤</div>
        </div>
        <div style={{ padding: '4rem 1.5rem 1.5rem' }}>
          <h2 style={{ margin: 0 }}>Little Kafis</h2>
          <p style={{ color: '#888', margin: '0.25rem 0' }}>@littlekafis</p>
          <p style={{ margin: '0.75rem 0' }}>Founder of KSAD. Building LittleBird for the future.</p>
          <p style={{ color: '#888', fontSize: '0.9rem' }}>📍 Accra, Ghana &nbsp; 🗓 Joined June 2026</p>
          <div style={{ display: 'flex', gap: '2rem', marginTop: '1rem' }}>
            <div><strong>0</strong> <span style={{ color: '#888' }}>Following</span></div>
            <div><strong>0</strong> <span style={{ color: '#888' }}>Followers</span></div>
          </div>
        </div>
        <div style={{ display: 'flex', borderBottom: '1px solid #2a2a2a' }}>
          {['Posts', 'Media', 'Replies', 'Saved'].map((tab) => (
            <button key={tab} style={{
              flex: 1, padding: '1rem', background: 'none', border: 'none',
              color: tab === 'Posts' ? '#e8643a' : '#888', cursor: 'pointer',
              borderBottom: tab === 'Posts' ? '2px solid #e8643a' : 'none',
              fontSize: '0.95rem'
            }}>{tab}</button>
          ))}
        </div>
        <div style={{ padding: '3rem', textAlign: 'center', color: '#888' }}>
          No posts yet 🐦
        </div>
      </main>
    </div>
  );
}