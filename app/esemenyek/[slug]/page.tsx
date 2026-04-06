import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'
import { CookieBanner } from '@/components/cookie-banner'
import { EVENTS, CATEGORY_LABELS, CATEGORY_COLORS, formatDate, formatPrice } from '@/lib/events'
import { Calendar, MapPin, Clock, ArrowLeft, ExternalLink, AlertTriangle, Tag } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)
  if (!event) return { title: 'Esemény nem található' }
  return {
    title: `${event.title} – Jegyárak összehasonlítása | GoHungary Sports Tours`,
    description: `Hasonlítsa össze a(z) "${event.title}" jegyárait a legnagyobb platformokon. ${event.venue}, ${event.city} – ${formatDate(event.date)}. Másodlagos piac – árak eltérhetnek a névértéktől.`,
  }
}

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }))
}

export default async function EventDetailPage({ params }: Props) {
  const { slug } = await params
  const event = EVENTS.find((e) => e.slug === slug)

  if (!event) notFound()

  const minPrice = Math.min(...event.providers.map((p) => p.priceFrom))
  const maxPrice = Math.max(...event.providers.map((p) => p.priceTo))
  const related = EVENTS.filter((e) => e.category === event.category && e.id !== event.id).slice(0, 3)

  return (
    <>
      <Header />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav aria-label="Morzsamorzsák" className="flex items-center gap-2 text-xs text-muted-foreground font-semibold">
            <Link href="/" className="hover:text-primary transition-colors">Főoldal</Link>
            <span>/</span>
            <Link href="/esemenyek" className="hover:text-primary transition-colors">Események</Link>
            <span>/</span>
            <span className="text-foreground">{event.title}</span>
          </nav>
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left: main content */}
            <div className="lg:col-span-2">
              {/* Hero image */}
              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-6 shadow-md">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <span
                  className={cn(
                    'absolute top-4 left-4 px-3 py-1.5 text-xs font-bold rounded-full shadow',
                    CATEGORY_COLORS[event.category]
                  )}
                >
                  {CATEGORY_LABELS[event.category]}
                </span>
              </div>

              {/* Title and meta */}
              <h1 className="font-serif font-black text-2xl md:text-4xl text-foreground leading-snug text-balance mb-4">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-semibold mb-6">
                <div className="flex items-center gap-1.5">
                  <Calendar size={15} className="text-primary" />
                  {formatDate(event.date)}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock size={15} className="text-primary" />
                  {event.time}
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-primary" />
                  {event.venue}, {event.city}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {event.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 text-xs font-bold px-3 py-1 bg-secondary rounded-full text-foreground/70 border border-border">
                    <Tag size={11} />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div className="bg-paper-1 rounded-2xl border border-border p-6 mb-8">
                <h2 className="font-serif font-bold text-lg text-foreground mb-3">Az eseményről</h2>
                <p className="text-sm text-foreground/80 leading-relaxed">{event.description}</p>
              </div>

              {/* DISCLAIMER – PAGE LEVEL, most prominent */}
              <Disclaimer variant="page" className="mb-8" />
            </div>

            {/* Right: price comparison sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Price range summary */}
                <div className="bg-primary text-primary-foreground rounded-2xl p-5 mb-4">
                  <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-1">Ártartomány összesen</p>
                  <p className="font-black text-2xl font-serif">{formatPrice(minPrice)}</p>
                  <p className="text-sm opacity-75">– {formatPrice(maxPrice)}</p>
                </div>

                {/* PROMINENT CARD DISCLAIMER */}
                <div className="disclaimer-box px-4 py-4 mb-5">
                  <div className="flex items-start gap-2 mb-2">
                    <AlertTriangle size={18} className="shrink-0 mt-0.5 text-amber-700" />
                    <p className="text-sm font-black uppercase tracking-wide text-amber-800">
                      Fontos – Ez árösszehasonlítás!
                    </p>
                  </div>
                  <p className="text-sm font-bold leading-snug text-disclaimer-text">
                    <strong>Nem értékesítünk jegyeket.</strong> Az alábbi árak másodlagos piaci viszonteladóktól származnak és{' '}
                    <strong>eltérhetnek a névértéktől</strong> – magasabbak is lehetnek. Fizetési adatokat nem gyűjtünk. Vásárlás előtt ellenőrizze az árat a szolgáltatónál!
                  </p>
                </div>

                {/* Provider cards */}
                <div className="space-y-3">
                  <h2 className="font-serif font-bold text-base text-foreground px-1">Árak platformonként</h2>
                  {event.providers
                    .sort((a, b) => a.priceFrom - b.priceFrom)
                    .map((provider) => (
                      <a
                        key={provider.name}
                        href={provider.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        className="flex items-center justify-between bg-background rounded-xl border-2 border-border hover:border-primary p-4 transition-all group shadow-sm hover:shadow-md"
                        aria-label={`${provider.name} – ártól ${formatPrice(provider.priceFrom)} – megnyitás új lapon`}
                      >
                        <div>
                          <p className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                            {provider.name}
                          </p>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            {formatPrice(provider.priceFrom)} – {formatPrice(provider.priceTo)}
                          </p>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-black text-base text-primary">{formatPrice(provider.priceFrom)}-tól</span>
                          <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                        </div>
                      </a>
                    ))}
                </div>

                <p className="text-xs text-muted-foreground text-center mt-4 leading-relaxed px-2">
                  A &ldquo;Megnyitás&rdquo; gombra kattintva a partner platformra kerül. A tranzakció ott zajlik, mi abban nem veszünk részt.
                </p>
              </div>
            </div>
          </div>

          {/* Related events */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="font-serif font-black text-2xl text-foreground mb-6">
                Hasonló események – {CATEGORY_LABELS[event.category]}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {related.map((e) => {
                  const min = Math.min(...e.providers.map((p) => p.priceFrom))
                  return (
                    <Link
                      key={e.id}
                      href={`/esemenyek/${e.slug}`}
                      className="group flex gap-4 bg-background rounded-xl border border-border p-4 hover:shadow-md transition-all hover:-translate-y-0.5"
                    >
                      <div className="relative w-20 h-16 rounded-lg overflow-hidden shrink-0">
                        <Image src={e.image} alt={e.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div>
                        <p className="font-serif font-bold text-sm text-foreground leading-snug line-clamp-2 group-hover:text-primary transition-colors">{e.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{formatDate(e.date)}</p>
                        <p className="text-xs font-bold text-primary mt-0.5">{formatPrice(min)}-tól</p>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          <div className="mt-8">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft size={15} /> Vissza az összes eseményhez
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
