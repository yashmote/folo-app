'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {
  Compass, Briefcase, Bell, User, TrendingUp, Settings
} from 'lucide-react'

const NAV = [
  { icon: Compass, label: 'Discover', href: '/' },
  { icon: TrendingUp, label: 'Portfolio', href: '/portfolio' },
  { icon: Bell, label: 'Activity', href: '/activity' },
  { icon: User, label: 'Profile', href: '/profile' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside style={{
      position: 'fixed',
      left: 0, top: 0, bottom: 0,
      width: '220px',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      padding: '0',
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{
        padding: '24px 20px',
        borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: '32px', height: '32px',
            background: 'var(--accent)',
            borderRadius: '8px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '14px', fontWeight: 700, color: '#fff',
          }}>F</div>
          <span style={{ fontSize: '18px', fontWeight: 600 }}>folo</span>
        </div>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px' }}>
          Invest from ₹1
        </p>
      </div>

      {/* Nav */}
      <nav style={{ padding: '12px 10px', flex: 1 }}>
        {NAV.map(({ icon: Icon, label, href }) => {
          const active = pathname === href
          return (
            <Link key={href} href={href} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              padding: '10px 12px',
              borderRadius: '8px',
              color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
              background: active ? 'var(--bg-hover)' : 'transparent',
              fontSize: '14px',
              fontWeight: active ? 500 : 400,
              marginBottom: '2px',
              transition: 'all 0.15s',
            }}>
              <Icon size={16} strokeWidth={active ? 2 : 1.5} />
              {label}
              {active && (
                <div style={{
                  marginLeft: 'auto', width: '4px', height: '4px',
                  borderRadius: '50%', background: 'var(--accent)',
                }} />
              )}
            </Link>
          )
        })}
      </nav>

      {/* Bottom — Sign in CTA */}
      <div style={{
        padding: '16px',
        borderTop: '1px solid var(--border)',
      }}>
        <button style={{
          width: '100%',
          background: 'var(--accent)',
          border: 'none',
          borderRadius: '8px',
          color: '#fff',
          fontSize: '13px',
          fontWeight: 500,
          padding: '10px',
          cursor: 'pointer',
        }}>
          Sign in
        </button>
        <p style={{ fontSize: '11px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '8px' }}>
          KYC takes 3 minutes
        </p>
      </div>
    </aside>
  )
}