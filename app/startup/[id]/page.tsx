'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { startups } from '../../data/startups'
import Sidebar from '../../components/Sidebar'
import {
  ArrowLeft, ExternalLink, Heart, Users, MapPin,
  TrendingUp, Calendar, Building2, ChevronDown, ChevronUp
} from 'lucide-react'

export default function StartupDetail() {
  const params = useParams()
  const router = useRouter()
  const [followed, setFollowed] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [investAmount, setInvestAmount] = useState('500')

  const startup = startups.find(s => s.id === Number(params.id))

  if (!startup) {
    return (
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        <Sidebar />
        <main style={{ flex: 1, marginLeft: '220px', padding: '60px 40px', color: 'var(--text-secondary)' }}>
          Startup not found.
        </main>
      </div>
    )
  }

  const progressPct = startup.raised && startup.target
    ? Math.min((startup.raised / startup.target) * 100, 100)
    : null

  const isDiscovery = startup.status === 'discovery'

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />

      <main style={{ flex: 1, marginLeft: '220px', maxWidth: '900px', padding: '0 40px 80px' }}>

        {/* Back */}
        <button
          onClick={() => router.back()}
          style={{
            display: 'flex', alignItems: 'center', gap: '6px',
            background: 'none', border: 'none',
            color: 'var(--text-secondary)', fontSize: '13px',
            cursor: 'pointer', padding: '24px 0 20px',
            transition: 'color 0.15s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <ArrowLeft size={14} />
          Back to discover
        </button>

        {/* Color bar */}
        <div style={{ height: '3px', background: startup.color, borderRadius: '99px', marginBottom: '28px', opacity: 0.8 }} />

        {/* Hero section */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '28px', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{
              width: '64px', height: '64px',
              background: startup.color + '22',
              border: '1px solid ' + startup.color + '44',
              borderRadius: '14px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '18px', fontWeight: 700,
              color: startup.color,
              flexShrink: 0,
            }}>
              {startup.logo}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                <h1 style={{ fontSize: '24px', fontWeight: 600 }}>{startup.name}</h1>
                {isDiscovery ? (
                  <span style={{ fontSize: '11px', fontWeight: 500, background: 'var(--bg-hover)', color: 'var(--text-muted)', padding: '3px 9px', borderRadius: '99px' }}>
                    Discovery
                  </span>
                ) : (
                  <span style={{ fontSize: '11px', fontWeight: 500, background: 'var(--green-dim)', color: 'var(--green)', padding: '3px 9px', borderRadius: '99px' }}>
                    Fundraising live
                  </span>
                )}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <MapPin size={12} color="var(--text-muted)" />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{startup.city}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Building2 size={12} color="var(--text-muted)" />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{startup.category}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} color="var(--text-muted)" />
                  <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>Founded {startup.founded}</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
            <button
              onClick={() => setFollowed(!followed)}
              style={{
                background: followed ? 'var(--accent-dim)' : 'var(--bg-card)',
                border: '1px solid ' + (followed ? 'var(--accent)' : 'var(--border)'),
                borderRadius: '8px',
                color: followed ? 'var(--accent)' : 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 500,
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px',
                transition: 'all 0.15s',
              }}
            >
              <Heart size={14} fill={followed ? 'var(--accent)' : 'none'} />
              {followed ? 'Following' : 'Follow'}
            </button>
            <a
              href={startup.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--text-secondary)',
                fontSize: '13px', fontWeight: 500,
                padding: '8px 16px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '6px',
                textDecoration: 'none',
                transition: 'all 0.15s',
              }}
            >
              <ExternalLink size={14} />
              Try product
            </a>
          </div>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '24px', alignItems: 'start' }}>

          {/* Left column */}
          <div>

            {/* About */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '16px',
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '10px', color: 'var(--text-secondary)' }}>About</h2>
              <p style={{ fontSize: '14px', lineHeight: 1.7, color: 'var(--text-primary)' }}>
                {startup.description}
              </p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '14px' }}>
                {startup.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '11px', background: 'var(--bg-hover)', color: 'var(--text-muted)', padding: '3px 9px', borderRadius: '99px' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Founders */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '16px',
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '14px', color: 'var(--text-secondary)' }}>Founders</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {startup.founders.map(founder => (
                  <div key={founder.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px', height: '36px',
                      background: startup.color + '22',
                      border: '1px solid ' + startup.color + '33',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '12px', fontWeight: 600,
                      color: startup.color,
                      flexShrink: 0,
                    }}>
                      {founder.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: 500, margin: 0 }}>{founder.name}</p>
                      <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>
                        {founder.role} · {founder.bg}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key metrics */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
              marginBottom: '16px',
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '14px', color: 'var(--text-secondary)' }}>Key metrics</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {startup.mrr && (
                  <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Monthly Revenue</p>
                    <p style={{ fontSize: '18px', fontWeight: 600, color: 'var(--green)', margin: 0 }}>{startup.mrr}</p>
                  </div>
                )}
                {startup.valuation && (
                  <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Valuation</p>
                    <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{startup.valuation}</p>
                  </div>
                )}
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Daily Active Users</p>
                  <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{startup.dau}</p>
                </div>
                <div style={{ background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                  <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginBottom: '4px' }}>Team size</p>
                  <p style={{ fontSize: '18px', fontWeight: 600, margin: 0 }}>{startup.team} people</p>
                </div>
              </div>
            </div>

            {/* Investor traction */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
              borderRadius: '12px',
              padding: '20px',
            }}>
              <h2 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '14px', color: 'var(--text-secondary)' }}>Community traction</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                  <Users size={16} color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>Investors</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>{startup.investors.toLocaleString()}</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'var(--bg-secondary)', borderRadius: '8px', padding: '12px' }}>
                  <Heart size={16} color="var(--accent)" />
                  <div>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>Followers</p>
                    <p style={{ fontSize: '16px', fontWeight: 600, margin: 0 }}>{startup.followers.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right column — invest card */}
          <div style={{ position: 'sticky', top: '24px' }}>

            {!isDiscovery ? (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '12px',
              }}>
                <h2 style={{ fontSize: '14px', fontWeight: 500, marginBottom: '16px', color: 'var(--text-secondary)' }}>
                  Fundraising round
                </h2>

                {/* Progress */}
                {progressPct !== null && startup.daysLeft !== null && (
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px' }}>
                      <span style={{ fontWeight: 600, fontSize: '20px' }}>
                        {'₹' + startup.raised + 'L'}
                        <span style={{ fontSize: '12px', fontWeight: 400, color: 'var(--text-muted)', marginLeft: '4px' }}>
                          {'of ₹' + startup.target + 'L'}
                        </span>
                      </span>
                      <span style={{ color: startup.daysLeft <= 7 ? 'var(--amber)' : 'var(--text-muted)', fontSize: '12px', alignSelf: 'flex-end' }}>
                        {startup.daysLeft + 'd left'}
                      </span>
                    </div>
                    <div style={{ height: '6px', background: 'var(--bg-hover)', borderRadius: '99px', overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: progressPct + '%',
                        background: progressPct >= 80 ? 'var(--amber)' : startup.color,
                        borderRadius: '99px',
                      }} />
                    </div>
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
                      {Math.round(progressPct)}% funded · {startup.investors.toLocaleString()} investors
                    </p>
                  </div>
                )}

                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>Valuation</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{startup.valuation}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '8px' }}>
                    <span>Stage</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{startup.stage}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: 'var(--text-muted)' }}>
                    <span>Instrument</span>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>Convertible note</span>
                  </div>
                </div>

                {/* Amount input */}
                <div style={{ marginBottom: '12px' }}>
                  <label style={{ fontSize: '12px', color: 'var(--text-muted)', display: 'block', marginBottom: '6px' }}>
                    Investment amount (₹)
                  </label>
                  <input
                    type="number"
                    value={investAmount}
                    onChange={e => setInvestAmount(e.target.value)}
                    min="1"
                    style={{
                      width: '100%',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                      color: 'var(--text-primary)',
                      fontSize: '16px',
                      fontWeight: 500,
                      padding: '10px 12px',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                  <div style={{ display: 'flex', gap: '6px', marginTop: '8px' }}>
                    {['100', '500', '1000', '5000'].map(amt => (
                      <button
                        key={amt}
                        onClick={() => setInvestAmount(amt)}
                        style={{
                          flex: 1,
                          background: investAmount === amt ? 'var(--accent-dim)' : 'var(--bg-hover)',
                          border: '1px solid ' + (investAmount === amt ? 'var(--accent)' : 'var(--border)'),
                          borderRadius: '6px',
                          color: investAmount === amt ? 'var(--accent)' : 'var(--text-muted)',
                          fontSize: '11px',
                          fontWeight: 500,
                          padding: '5px 0',
                          cursor: 'pointer',
                        }}
                      >
                        {'₹' + amt}
                      </button>
                    ))}
                  </div>
                </div>

                <button style={{
                  width: '100%',
                  background: 'var(--accent)',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff',
                  fontSize: '14px',
                  fontWeight: 500,
                  padding: '12px',
                  cursor: 'pointer',
                  marginBottom: '8px',
                }}>
                  {'Invest ₹' + Number(investAmount).toLocaleString()}
                </button>

                <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.5 }}>
                  Investing is high risk. You may lose your entire investment. Complete KYC before investing.
                </p>
              </div>
            ) : (
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '12px',
                textAlign: 'center',
              }}>
                <TrendingUp size={28} color="var(--accent)" style={{ marginBottom: '10px' }} />
                <h3 style={{ fontSize: '15px', fontWeight: 500, marginBottom: '6px' }}>Not raising yet</h3>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '14px' }}>
                  Follow this startup to get notified when they open a fundraising round.
                </p>
                <button
                  onClick={() => setFollowed(!followed)}
                  style={{
                    width: '100%',
                    background: followed ? 'var(--accent-dim)' : 'var(--accent)',
                    border: '1px solid ' + (followed ? 'var(--accent)' : 'transparent'),
                    borderRadius: '8px',
                    color: followed ? 'var(--accent)' : '#fff',
                    fontSize: '13px', fontWeight: 500,
                    padding: '10px',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  }}
                >
                  <Heart size={14} fill={followed ? 'var(--accent)' : 'none'} />
                  {followed ? 'Following' : 'Follow startup'}
                </button>
              </div>
            )}

            {/* Product link */}
            <a
              href={startup.productUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                padding: '14px 16px',
                textDecoration: 'none',
                color: 'inherit',
                transition: 'border-color 0.15s',
              }}
            >
              <div style={{
                width: '32px', height: '32px',
                background: startup.color + '22',
                borderRadius: '8px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <ExternalLink size={14} color={startup.color} />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: '13px', fontWeight: 500, margin: 0 }}>Try the product</p>
                <p style={{ fontSize: '11px', color: 'var(--text-muted)', margin: 0 }}>
                  {startup.productUrl.replace('https://', '')} · {startup.dau} DAU
                </p>
              </div>
              <ExternalLink size={12} color="var(--text-muted)" />
            </a>

          </div>
        </div>
      </main>
    </div>
  )
}