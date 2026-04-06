import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-navy text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-white" aria-hidden="true">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  <path d="M2 12h20"/>
                </svg>
              </div>
              <div>
                <span className="block font-serif font-bold text-lg text-white tracking-wide">GoHungary Sports Tours</span>
                <span className="block text-xs text-white/50 uppercase tracking-widest">gohungarysportstours.com</span>
              </div>
            </Link>
            <p className="text-sm text-white/65 leading-relaxed mb-5 max-w-sm">
              Magyarország és az EU sportrendezvényeinek jegyár-összehasonlítója. Nem értékesítünk jegyeket – csak segítünk megtalálni a legjobb árat.
            </p>

            {/* Legal disclaimer in footer */}
            <div className="bg-amber-400/15 border border-amber-400/30 rounded-xl px-4 py-4 mb-5 text-xs text-amber-200 leading-relaxed font-semibold">
              <p className="font-black text-amber-300 uppercase tracking-wide mb-1">Jogi nyilatkozat</p>
              <p>
                Ez az oldal egy <strong>másodlagos jegypiaci összehasonlító</strong>. Nem vagyunk jegykiadó. A jegyek viszonteladóktól származnak, és <strong>az árak magasabbak lehetnek a névértéknél</strong>. Fizetési adatokat nem gyűjtünk.
              </p>
            </div>

            <div className="text-xs text-white/45 leading-relaxed">
              <p className="font-bold text-white/60 mb-1">K.C. NTOMATA LIMITED</p>
              <p>Stylianou Lena,</p>
              <p>24 Christiana Court, Flat/Office 202,</p>
              <p>Strovolos,</p>
              <p>2019 Nicosia,</p>
              <p>Cyprus</p>
              <a href="mailto:info@gohungarysportstours.com" className="hover:text-amber-300 transition-colors mt-1 block">
                info@gohungarysportstours.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Navigáció</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: '/esemenyek', label: 'Sportesemények' },
                { href: '/hogyan-mukodik', label: 'Hogyan működik?' },
                { href: '/turista-tippek', label: 'Turista tippek' },
                { href: '/rolunk', label: 'Rólunk' },
                { href: '/kapcsolat', label: 'Kapcsolat' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">Jogi</h3>
            <ul className="space-y-2 text-sm mb-6">
              {[
                { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelv' },
                { href: '/cookie-szabalyzat', label: 'Süti szabályzat' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Partner platformok</h3>
            <p className="text-xs text-white/45 leading-relaxed">
              Ticketmaster &bull; Viagogo &bull; StubHub &bull; AXS &bull; Eventim.hu &bull; Jegy.hu &bull; Jegymester.hu
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>&copy; 2026 GoHungary Sports Tours – K.C. NTOMATA LIMITED. Minden jog fenntartva.</p>
          <p className="text-center">
            Másodlagos piac &bull; Nem jegykiadó &bull; Árak eltérhetnek a névértéktől
          </p>
        </div>
      </div>
    </footer>
  )
}
