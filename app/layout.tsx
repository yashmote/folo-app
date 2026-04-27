import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Folo — Invest in startups from ₹1',
  description: 'Discover and invest in early-stage Indian startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}