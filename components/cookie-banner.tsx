'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

export function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-consent')
    if (!accepted) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" aria-hidden="true" />
      <div className="relative w-full p-4 md:p-6">
        <div className="max-w-4xl mx-auto rounded-2xl shadow-2xl border border-white/10 overflow-hidden relative">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'url(/events/sport-hero.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center 30%',
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-navy/90" aria-hidden="true" />
          <div className="relative z-10 p-5 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex-1">
              <p className="text-sm font-semibold leading-relaxed text-white/85">
                Ez a weboldal sütiket (cookie-kat) használ a jobb felhasználói élmény érdekében.
                Böngészésének folytatásával elfogadja a{' '}
                <Link href="/cookie-szabalyzat" className="underline text-amber-300 hover:opacity-80">
                  Süti szabályzatunkat
                </Link>
                {' '}és az{' '}
                <Link href="/adatvedelmi-iranyelvek" className="underline text-amber-300 hover:opacity-80">
                  Adatvédelmi irányelveinket
                </Link>.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={decline}
                className="text-sm font-semibold px-4 py-2 rounded-lg border border-white/25 hover:bg-white/10 transition-colors text-white"
              >
                Elutasítás
              </button>
              <button
                onClick={accept}
                className="text-sm font-bold px-5 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity"
              >
                Elfogadás
              </button>
              <button onClick={decline} className="text-white/50 hover:text-white transition-colors">
                <X size={20} />
                <span className="sr-only">Bezárás</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
