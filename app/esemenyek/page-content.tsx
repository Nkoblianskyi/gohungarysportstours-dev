'use client'

import { useState, useMemo, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { EventCard } from '@/components/event-card'
import { Disclaimer } from '@/components/disclaimer'
import { EVENTS, SPORT_CATEGORY_LABELS, SportCategory } from '@/lib/events'
import { Search, SlidersHorizontal, X } from 'lucide-react'

function CatalogContent() {
  const searchParams = useSearchParams()
  const initialQ = searchParams.get('q') || ''
  const initialCat = (searchParams.get('kategoria') as SportCategory | '') || ''

  const [query, setQuery] = useState(initialQ)
  const [category, setCategory] = useState<SportCategory | ''>(initialCat)
  const [sortBy, setSortBy] = useState<'date' | 'price-asc' | 'price-desc'>('date')

  const filtered = useMemo(() => {
    let results = [...EVENTS]

    if (query) {
      const q = query.toLowerCase()
      results = results.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.venue.toLowerCase().includes(q) ||
          e.city.toLowerCase().includes(q) ||
          e.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    if (category) {
      results = results.filter((e) => e.category === category)
    }

    if (sortBy === 'date') {
      results.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    } else if (sortBy === 'price-asc') {
      results.sort(
        (a, b) =>
          Math.min(...a.providers.map((p) => p.priceFrom)) -
          Math.min(...b.providers.map((p) => p.priceFrom))
      )
    } else {
      results.sort(
        (a, b) =>
          Math.min(...b.providers.map((p) => p.priceFrom)) -
          Math.min(...a.providers.map((p) => p.priceFrom))
      )
    }

    return results
  }, [query, category, sortBy])

  return (
    <div>
      {/* Filters bar */}
      <div className="bg-secondary border border-border rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Keresés csapat, versenyző, helyszín..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-background text-sm font-semibold border border-border focus:border-primary focus:outline-none transition-colors"
            aria-label="Sport esemény keresés"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              aria-label="Keresés törlése"
            >
              <X size={14} />
            </button>
          )}
        </div>

        <div className="flex items-center gap-2">
          <SlidersHorizontal size={16} className="text-muted-foreground shrink-0" />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value as SportCategory | '')}
            className="py-2.5 px-3 rounded-xl bg-background text-sm font-semibold border border-border focus:border-primary focus:outline-none transition-colors"
            aria-label="Sportág szűrő"
          >
            <option value="">Minden sportág</option>
            {(Object.entries(SPORT_CATEGORY_LABELS) as [SportCategory, string][]).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="py-2.5 px-3 rounded-xl bg-background text-sm font-semibold border border-border focus:border-primary focus:outline-none transition-colors"
            aria-label="Rendezés"
          >
            <option value="date">Dátum szerint</option>
            <option value="price-asc">Ár: alacsonyabb–magasabb</option>
            <option value="price-desc">Ár: magasabb–alacsonyabb</option>
          </select>
        </div>
      </div>

      <p className="text-sm text-muted-foreground font-semibold mb-5">
        <span className="text-foreground font-bold">{filtered.length}</span> sportesemény található
        {category && ` – ${SPORT_CATEGORY_LABELS[category as SportCategory]}`}
        {query && ` – "${query}"`}
      </p>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-2xl font-serif font-bold text-foreground mb-2">Nincs találat</p>
          <p className="text-sm text-muted-foreground">Próbáljon más keresési feltételeket</p>
          <button
            onClick={() => { setQuery(''); setCategory('') }}
            className="mt-4 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
          >
            Szűrők törlése
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function EventsPageContent() {
  return (
    <div>
      <Disclaimer variant="page" className="mb-8" />
      <Suspense fallback={<div className="py-8 text-center text-muted-foreground text-sm">Betöltés...</div>}>
        <CatalogContent />
      </Suspense>
    </div>
  )
}
