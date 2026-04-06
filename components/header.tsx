'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { href: '/esemenyek', label: 'Sportesemények' },
  { href: '/hogyan-mukodik', label: 'Hogyan működik?' },
  { href: '/turista-tippek', label: 'Turista tippek' },
  { href: '/rolunk', label: 'Rólunk' },
  { href: '/kapcsolat', label: 'Kapcsolat' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-foreground backdrop-blur-sm border-b border-white/10">
      {/* Top disclaimer strip */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4">
        <p className="text-xs font-bold tracking-wide uppercase">
          Másodlagos jegypiac &bull; Nem értékesítünk jegyeket &bull; Az árak viszonteladóktól származnak és magasabbak lehetnek a névértéknél
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="GoHungary Sports Tours főoldal">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow group-hover:scale-105 transition-transform shrink-0">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              <path d="M2 12h20"/>
            </svg>
          </div>
          <div className="leading-tight">
            <span className="block text-base font-serif font-bold tracking-wide text-white">GoHungary</span>
            <span className="block text-[11px] font-semibold text-white/60 -mt-0.5 uppercase tracking-widest">Sports Tours</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Főmenü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-semibold text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-white/10 bg-navy px-4 py-3 flex flex-col gap-1" aria-label="Mobil menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2.5 text-sm font-semibold text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
