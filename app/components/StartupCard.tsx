'use client'

import { useState } from 'react'
import { ExternalLink, Users, Heart, MapPin } from 'lucide-react'
import type { Startup } from '../data/startups'
import { useRouter } from 'next/navigation'


export default function StartupCard({ startup }: { startup: Startup }) {
  const [followed, setFollowed] = useState(false)
  const router = useRouter()

  const progressPct = startup.raised && startup.target
    ? Math.min((startup.raised / startup.target) * 100, 100)
    : null

  const isAlmostFunded = progressPct !== null && progressPct >= 80
  const isDiscovery = startup.status === 'discovery'

  const productLinkStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    background: 'var(--bg-secondary)',
    border: '1px solid var(--border)',
    borderRadius: '8px',
    padding: '8px 12px',
    marginBottom: '14px',
    transition: 'border-color 0.15s',
    textDecoration: 'none',
    color: 'inherit',
  }

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
        borderRadius: '16px',
        overflow: 'hidden',
        transition: 'border-color 0.2s, transform 0.2s',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border-hover)'
        el.style.transform = 'translateY(-2px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLDivElement
        el.style.borderColor = 'var(--border)'
        el.style.transform = 'translateY(0)'
      }}
    >
      <div style={{ height: '4px', background: startup.color, opacity: 0.8 }} />

      <div style={{ padding: '20px' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '14px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              background: startup.color + '22',
              border: '1px solid ' + startup.color + '44',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              fontWeight: 700,
              color: startup.color,
              flexShrink: 0,
            }}>
              {startup.logo}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 600 }}>{startup.name}</h3>
                {isDiscovery && (
                  <span style={{ fontSize: '10px', fontWeight: 500, background: 'var(--bg-hover)', color: 'var(--text-muted)', padding: '2px 7px', borderRadius: '99px' }}>
                    Discovery
                  </span>
                )}
                {!isDiscovery && isAlmostFunded && (
                  <span style={{ fontSize: '10px', fontWeight: 500, background: 'var(--amber-dim)', color: 'var(--amber)', padding: '2px 7px', borderRadius: '99px' }}>
                    Almost funded
                  </span>
                )}
                {!isDiscovery && !isAlmostFunded && (
                  <span style={{ fontSize: '10px', fontWeight: 500, background: 'var(--green-dim)', color: 'var(--green)', padding: '2px 7px', borderRadius: '99px' }}>
                    Live
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                <MapPin size={11} color="var(--text-muted)" />
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  {startup.city} · {startup.stage}
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={e => { e.stopPropagation(); setFollowed(!followed) }}
            style={{
              background: followed ? 'var(--accent-dim)' : 'var(--bg-hover)',
              border: '1px solid ' + (followed ? 'var(--accent)' : 'var(--border)'),
              borderRadius: '8px',
              color: followed ? 'var(--accent)' : 'var(--text-secondary)',
              fontSize: '12px',
              fontWeight: 500,
              padding: '6px 12px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              transition: 'all 0.15s',
              flexShrink: 0,
            }}
          >
            <Heart size={12} fill={followed ? 'var(--accent)' : 'none'} />
            {followed ? 'Following' : 'Follow'}
          </button>
        </div>

        {/* Tagline */}
        <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.5, marginBottom: '14px' }}>
          {startup.tagline}
        </p>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: startup.mrr ? '1fr 1fr 1fr' : '1fr 1fr',
          gap: '8px',
          marginBottom: '14px',
        }}>
          {startup.mrr && (
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '8px 10px' }}>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '2px' }}>MRR</p>
              <p style={{ fontSize: '13px', fontWeight: 600, color: 'var(--green)' }}>{startup.mrr}</p>
            </div>
          )}
          {startup.valuation && (
            <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '8px 10px' }}>
              <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '2px' }}>Valuation</p>
              <p style={{ fontSize: '13px', fontWeight: 600 }}>{startup.valuation}</p>
            </div>
          )}
          <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '8px 10px' }}>
            <p style={{ fontSize: '10px', color: 'var(--text-muted)', marginBottom: '2px' }}>DAU</p>
            <p style={{ fontSize: '13px', fontWeight: 600 }}>{startup.dau}</p>
          </div>
        </div>

        {/* Progress bar */}
        {progressPct !== null && startup.daysLeft !== null && (
          <div style={{ marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--text-muted)', marginBottom: '6px' }}>
              <span>
                <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>
                  {'₹' + startup.raised + 'L'}
                </span>
                {' raised of ₹' + startup.target + 'L'}
              </span>
              <span style={{ color: startup.daysLeft <= 7 ? 'var(--amber)' : 'var(--text-muted)' }}>
                {startup.daysLeft + 'd left'}
              </span>
            </div>
            <div style={{ height: '4px', background: 'var(--bg-hover)', borderRadius: '99px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: progressPct + '%',
                background: progressPct >= 80 ? 'var(--amber)' : startup.color,
                borderRadius: '99px',
                transition: 'width 0.3s',
              }} />
            </div>
          </div>
        )}

        {/* Product link */}
        <a
          href={startup.productUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={e => e.stopPropagation()}
          style={productLinkStyle}
        >
          <div style={{
            width: '24px',
            height: '24px',
            background: startup.color + '22',
            borderRadius: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}>
            <ExternalLink size={11} color={startup.color} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ fontSize: '12px', fontWeight: 500, margin: 0 }}>Try the product</p>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {startup.productUrl.replace('https://', '')}
            </p>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', flexShrink: 0 }}>
            {startup.dau + ' DAU'}
          </span>
        </a>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
          {startup.tags.map(tag => (
            <span key={tag} style={{ fontSize: '11px', background: 'var(--bg-hover)', color: 'var(--text-muted)', padding: '3px 8px', borderRadius: '99px' }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: isDiscovery ? '1fr' : '1fr 1fr', gap: '8px' }}>
          {!isDiscovery && (
            <button style={{
              background: 'var(--accent)',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
              fontSize: '13px',
              fontWeight: 500,
              padding: '10px',
              cursor: 'pointer',
            }}>
              Invest from ₹1
            </button>
          )}
          <button
            onClick={() => router.push('/startup/' + startup.id)}
            style={{
                background: 'var(--bg-hover)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                fontSize: '13px',
                fontWeight: 500,
                padding: '10px',
                cursor: 'pointer',
            }}
            >
            View details
            </button>
        </div>

        {/* Social proof */}
        {startup.investors > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Users size={11} color="var(--text-muted)" />
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {startup.investors.toLocaleString()}
                </span>
                {' invested'}
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Heart size={11} color="var(--text-muted)" />
              <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>
                  {startup.followers.toLocaleString()}
                </span>
                {' following'}
              </span>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}