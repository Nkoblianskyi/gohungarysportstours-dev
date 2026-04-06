'use client'

import { AlertTriangle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface DisclaimerProps {
  variant?: 'banner' | 'card' | 'page'
  className?: string
}

export function Disclaimer({ variant = 'card', className }: DisclaimerProps) {
  if (variant === 'banner') {
    return (
      <div
        className={cn(
          'disclaimer-box w-full px-4 py-3 flex items-start gap-3',
          className
        )}
      >
        <AlertTriangle className="shrink-0 mt-0.5 text-amber-700" size={20} />
        <p className="text-sm font-semibold leading-snug text-disclaimer-text">
          <span className="uppercase tracking-wide text-xs font-bold text-amber-800 block mb-0.5">Fontos figyelmeztetés</span>
          Ez az oldal kizárólag jegyárak összehasonlítására szolgál. <strong>Nem értékesítünk jegyeket és nem gyűjtünk fizetési adatokat.</strong> A megjelenített árak harmadik fél viszonteladóktól származnak, és eltérhetnek a névértéktől. A vásárlás előtt mindig ellenőrizze az árat a szolgáltatónál!
        </p>
      </div>
    )
  }

  if (variant === 'page') {
    return (
      <div
        className={cn(
          'disclaimer-box w-full px-6 py-5 flex items-start gap-4',
          className
        )}
      >
        <AlertTriangle className="shrink-0 mt-1 text-amber-700" size={24} />
        <div>
          <p className="text-base font-bold uppercase tracking-wide text-amber-800 mb-1">
            Fontos jogi nyilatkozat
          </p>
          <p className="text-sm font-semibold leading-relaxed text-disclaimer-text">
            Ez az oldal egy másodlagos jegypiac összehasonlítója. <strong>Nem vagyunk jegykiadó platform és nem értékesítünk jegyeket közvetlenül.</strong> A jegyárakat külső viszonteladóktól kérjük le, ezért az árak eltérhetnek a névértéktől, és magasabbak lehetnek az eredeti ármintáktól. Fizetési adatokat nem gyűjtünk és nem tárolunk. Minden vásárlást közvetlenül a feltüntetett harmadik fél platformon kell lebonyolítani.
          </p>
        </div>
      </div>
    )
  }

  // card variant — largest text, most prominent
  return (
    <div
      className={cn(
        'disclaimer-box w-full px-4 py-3',
        className
      )}
    >
      <div className="flex items-center gap-2 mb-1">
        <AlertTriangle className="shrink-0 text-amber-700" size={18} />
        <span className="text-xs font-bold uppercase tracking-widest text-amber-800">
          Figyelmeztetés – Nem értékesítünk jegyeket
        </span>
      </div>
      <p className="text-sm font-semibold leading-snug text-disclaimer-text">
        Ez összehasonlítás, nem eladás. Az árak viszonteladóktól származnak és <strong>eltérhetnek a névértéktől</strong>. Ellenőrizze az árat a szolgáltatónál!
      </p>
    </div>
  )
}
