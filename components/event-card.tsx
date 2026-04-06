import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, AlertTriangle } from 'lucide-react'
import { Event, SPORT_CATEGORY_LABELS, SPORT_CATEGORY_COLORS, formatDate, formatPrice } from '@/lib/events'
import { cn } from '@/lib/utils'

interface EventCardProps {
  event: Event
}

export function EventCard({ event }: EventCardProps) {
  const minPrice = Math.min(...event.providers.map((p) => p.priceFrom))
  const maxPrice = Math.max(...event.providers.map((p) => p.priceTo))

  return (
    <Link
      href={`/esemenyek/${event.slug}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-ring outline-none"
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Category badge */}
        <span
          className={cn(
            'absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full shadow-sm',
            SPORT_CATEGORY_COLORS[event.category]
          )}
        >
          {SPORT_CATEGORY_LABELS[event.category]}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-serif font-bold text-base leading-snug text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {event.title}
        </h3>

        <div className="flex flex-col gap-1.5 text-xs text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Calendar size={13} className="shrink-0" />
            <span>{formatDate(event.date)} &bull; {event.time}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} className="shrink-0" />
            <span>{event.venue}, {event.city}</span>
          </div>
        </div>

        {/* Price range */}
        <div className="flex items-baseline gap-1.5">
          <span className="text-xs text-muted-foreground font-medium">Ártól:</span>
          <span className="text-base font-black text-primary">{formatPrice(minPrice)}</span>
          <span className="text-xs text-muted-foreground">–</span>
          <span className="text-base font-black text-primary">{formatPrice(maxPrice)}</span>
        </div>

        {/* DISCLAIMER on every card */}
        <div className="disclaimer-box px-3 py-2.5 w-full">
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} className="shrink-0 mt-0.5 text-amber-700" />
            <p className="text-xs font-bold leading-snug text-disclaimer-text">
              Másodlagos piac – <span className="underline">nem eladás</span>. Az árak viszonteladóktól származnak és{' '}
              <strong>magasabbak lehetnek a névértéknél</strong>.
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
