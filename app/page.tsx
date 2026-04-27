'use client'

import { useState } from 'react'
import { startups } from './data/startups'
import Navbar from './components/Navbar'
import StartupCard from './components/StartupCard'
import Sidebar from './components/Sidebar'

const CATEGORIES = ['All', 'B2B SaaS', 'Agritech', 'Healthtech', 'D2C', 'Edtech', 'Logistics']

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [activeTab, setActiveTab] = useState<'all' | 'fundraising' | 'discovery'>('all')

  const filtered = startups.filter(s => {
    const catMatch = activeCategory === 'All' || s.category === activeCategory
    const tabMatch = activeTab === 'all' || s.status === activeTab
    return catMatch && tabMatch
  })

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <main style={{ flex: 1, marginLeft: '220px', padding: '0 32px 64px' }}>
        {/* Header */}
        <div style={{ padding: '32px 0 24px', borderBottom: '1px solid var(--border)' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '4px' }}>
            Discover Startups
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            Follow startups you believe in. Invest when they raise.
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '4px', margin: '20px 0 0', borderBottom: '1px solid var(--border)', paddingBottom: '0' }}>
          {(['all', 'fundraising', 'discovery'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                color: activeTab === tab ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: activeTab === tab ? 500 : 400,
                padding: '8px 16px',
                cursor: 'pointer',
                borderBottom: activeTab === tab ? '2px solid var(--accent)' : '2px solid transparent',
                marginBottom: '-1px',
                textTransform: 'capitalize',
                transition: 'all 0.15s',
              }}
            >
              {tab === 'all' ? 'All Startups' : tab === 'fundraising' ? 'Fundraising' : 'Discovery'}
              <span style={{
                marginLeft: '6px',
                fontSize: '11px',
                background: activeTab === tab ? 'var(--accent-dim)' : 'transparent',
                color: activeTab === tab ? 'var(--accent)' : 'var(--text-muted)',
                padding: '1px 6px',
                borderRadius: '99px',
              }}>
                {tab === 'all' ? startups.length : startups.filter(s => s.status === tab).length}
              </span>
            </button>
          ))}
        </div>

        {/* Category filters */}
        <div style={{ display: 'flex', gap: '8px', margin: '16px 0 24px', flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? 'var(--accent-dim)' : 'var(--bg-card)',
                border: `1px solid ${activeCategory === cat ? 'var(--accent)' : 'var(--border)'}`,
                color: activeCategory === cat ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '12px',
                fontWeight: 500,
                padding: '5px 12px',
                borderRadius: '99px',
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '16px',
        }}>
          {filtered.map(startup => (
            <StartupCard key={startup.id} startup={startup} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--text-muted)' }}>
            No startups found in this category.
          </div>
        )}
      </main>
    </div>
  )
}