'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { SPORT_CATEGORY_LABELS, SportCategory } from '@/lib/events'

export function HeroSearch() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<SportCategory | ''>('')

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query) params.set('q', query)
    if (category) params.set('kategoria', category)
    router.push(`/esemenyek?${params.toString()}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto"
      role="search"
      aria-label="Sport esemény keresés"
    >
      <div className="relative flex-1">
        <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Keresés: futball, F1, úszás, NBA..."
          className="w-full pl-10 pr-4 py-3.5 rounded-xl bg-background text-foreground text-sm font-semibold border-2 border-border focus:border-primary focus:outline-none transition-colors shadow-sm"
          aria-label="Keresési kifejezés"
        />
      </div>
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value as SportCategory | '')}
        className="py-3.5 px-4 rounded-xl bg-background text-foreground text-sm font-semibold border-2 border-border focus:border-primary focus:outline-none transition-colors shadow-sm min-w-44"
        aria-label="Sportág szűrő"
      >
        <option value="">Minden sportág</option>
        {(Object.entries(SPORT_CATEGORY_LABELS) as [SportCategory, string][]).map(([val, label]) => (
          <option key={val} value={val}>{label}</option>
        ))}
      </select>
      <button
        type="submit"
        className="py-3.5 px-8 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-sm"
      >
        Keresés
      </button>
    </form>
  )
}
