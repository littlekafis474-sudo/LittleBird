'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Posts');
  const tabs = ['Posts', 'Media', 'Replies', 'Saved'];

  return (
    <div style={{ display: 'flex', backgroundColor: '#0d1117', minHeight: '100vh' }}>
      <Sidebar />
      <main style={{ marginLeft: '250px', flex: 1, maxWidth: '650px', borderRight: '1px solid #2a2a2a', color: '#ffffff' }}>
        
        {/* Cover Photo */}
        <div style={{ height: '220px', background: 'linear-gradient(135deg, #1a3a5c, #0d1117)', position: 'relative' }}>
          <button style={{
            position: 'absolute', top: '1rem', right: '1rem',
            background: 'rgba(0,0,0,0.5)', border: '1px solid #555',
            color: 'white', padding: '0.4rem 0.8rem', borderRadius: '6px', cursor: 'pointer'
          }}>Edit Cover</button>

          {/* Avatar */}
          <div style={{
            position: 'absolute', bottom: '-55px', left: '1.5rem',
            width: '110px', height: '110px', borderRadius: '50%',
            backgroundColor: '#e8643a', border: '4px solid #0d1117',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '2.5rem', cursor: 'pointer'
          }}>👤</div>
        </div>

        {/* Edit Profile Button */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem 1.5rem 0' }}>
          <button style={{
            backgroundColor: 'transparent', border: '1px solid #555',
            color: 'white', padding: '0.5rem 1.2rem', borderRadius: '20px',
            cursor: 'pointer', fontWeight: 'bold'
          }}>Edit Profile</button>
        </div>

        {/* Profile Info */}
        <div style={{ padding: '1rem 1.5rem 1.5rem' }}>
          <h2 style={{ margin: '0 0 0.25rem' }}>Little Kafis</h2>
          <p style={{ color: '#888', margin: '0 0 0.75rem', fontSize: '0.95rem' }}>@littlekafis</p>
          <p style={{ margin: '0 0 0.75rem', lineHeight: '1.5' }}>
            Founder of KSAD. Building LittleBird for the future. Dream. Build. Inspire. 🚀
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', color: '#888', fontSize: '0.9rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
            <span>📍 Accra, Ghana</span>
            <span>🔗 littlebird.app</span>
            <span>🗓 Joined June 2026</span>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <span><strong style={{ color: 'white' }}>650</strong> <span style={{ color: '#888' }}>Following</span></span>
            <span><strong style={{ color: 'white' }}>12.4K</strong> <span style={{ color: '#888' }}>Followers</span></span>
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', borderBottom: '1px solid #2a2a2a' }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              flex: 1, padding: '1rem', background: 'none', border: 'none',
              color: activeTab === tab ? '#e8643a' : '#888',
              borderBottom: activeTab === tab ? '2px solid #e8643a' : '2px solid transparent',
              cursor: 'pointer', fontSize: '0.95rem', fontWeight: activeTab === tab ? 'bold' : 'normal',
              transition: 'all 0.2s'
            }}>{tab}</button>
          ))}
        </div>

        {/* Tab Content */}
        <div style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>
          {activeTab === 'Posts' && <p>No posts yet. Create your first post! 🐦</p>}
          {activeTab === 'Media' && <p>No media yet.</p>}
          {activeTab === 'Replies' && <p>No replies yet.</p>}
          {activeTab === 'Saved' && <p>No saved posts yet.</p>}
        </div>

      </main>
    </div>
  );
}