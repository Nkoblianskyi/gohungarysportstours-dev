import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import EventsPageContent from './page-content'
import type { Metadata } from 'next'
import { EVENTS } from '@/lib/events'

const eventCount = EVENTS.length

export const metadata: Metadata = {
  title: 'Sportesemények – GoHungary Sports Tours',
  description: `Böngésszen ${eventCount} kizárólag sportesemény között Magyarországon és az EU-ban – futball, F1, úszás, NBA és sok más. Hasonlítsa össze a jegyárakat.`,
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-10">
        <div className="mb-8">
          <h1 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-2 text-balance">
            Sportesemények
          </h1>
          <p className="text-sm text-muted-foreground font-medium">
            Böngésszen a 2026-os sportesemények között és hasonlítsa össze a jegyárakat a legnagyobb platformokon
          </p>
        </div>

        <EventsPageContent />
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
