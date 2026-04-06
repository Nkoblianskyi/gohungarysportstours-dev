import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'
import { CookieBanner } from '@/components/cookie-banner'
import {
  Shield, Search, Users, MapPin, CheckCircle, ArrowRight, AlertTriangle,
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rólunk – GoHungary Sports Tours | Árösszehasonlítás',
  description:
    'Ismerd meg a GoHungary Sports Tours (gohungarysportstours.com) csapatát. Sportjegyárak összehasonlítása – átláthatóan, másodlagos piac jelzéssel.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-secondary border-b border-border py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kik vagyunk</span>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-foreground mt-3 mb-4 text-balance">
              Rólunk – GoHungary Sports Tours
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Célunk, hogy a rendezvényrajongók egyszerűen és <strong>átláthatóan</strong> hasonlíthassák össze a jegyárakat a legnagyobb másodlagos piaci platformokon.
            </p>
          </div>
        </section>

        {/* Mandatory top disclaimer */}
        <section className="max-w-4xl mx-auto px-4 mt-8">
          <Disclaimer variant="page" />
        </section>

        {/* Mission */}
        <section className="max-w-4xl mx-auto px-4 mt-14">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="font-serif font-black text-2xl text-foreground mb-4">Küldetésünk</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A GoHungary Sports Tours egy független sportjegy-árösszehasonlító platform. <strong>Nem értékesítünk jegyeket</strong> és nem gyűjtünk fizetési adatokat. Kizárólag az alábbi partnereink platformjain szereplő aktuális árakat jelenítjük meg, hogy Ön a legjobb döntést hozhassa.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A másodlagos jegypiacon az árak eltérhetnek az eredeti névértéktől – akár magasabbak is lehetnek. Ezt mindig egyértelműen jelöljük, hogy megvédjük fogyasztóinkat a félrevezetéstől.
              </p>
              <ul className="space-y-3 mt-6">
                {[
                  'Valós, friss árak a legnagyobb platformoktól',
                  'Nincsenek rejtett díjak az összehasonlításban',
                  'Minden ár másodlagos piaci forrásból származik',
                  'GDPR-kompatibilis adatkezelés',
                  'Fizetési adatokat nem gyűjtünk és nem tárolunk',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-foreground">
                    <CheckCircle size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Search,
                  title: 'Árösszehasonlítás',
                  desc: 'Egy helyen látja az összes nagy jegyértékesítő aktuális ajánlatait. Nem kell minden oldalon külön keresni.',
                  color: 'bg-rose-50 border-rose-200',
                  ic: 'text-rose-700',
                },
                {
                  icon: Shield,
                  title: 'Átláthatóság',
                  desc: 'Mindig egyértelműen jelöljük, hogy másodlagos piaci árakról van szó, és hogy ezek eltérhetnek a névértéktől.',
                  color: 'bg-blue-50 border-blue-200',
                  ic: 'text-blue-700',
                },
                {
                  icon: Users,
                  title: 'Fogyasztóvédelem',
                  desc: 'Soha nem tévesztjük meg látogatóinkat. Minden fontos információt az oldal tetején, jól láthatóan tüntetünk fel.',
                  color: 'bg-emerald-50 border-emerald-200',
                  ic: 'text-emerald-700',
                },
                {
                  icon: MapPin,
                  title: 'Magyar fókusz',
                  desc: 'Elsősorban magyarországi és közép-európai rendezvényekre összpontosítunk, de EU-s eseményeket is megjelenítünk.',
                  color: 'bg-amber-50 border-amber-200',
                  ic: 'text-amber-700',
                },
              ].map(({ icon: Icon, title, desc, color, ic }) => (
                <div key={title} className={`rounded-xl border-2 p-5 ${color} flex items-start gap-4`}>
                  <div className={`mt-0.5 shrink-0 ${ic}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Secondary market explainer */}
        <section className="mt-16 bg-paper-3 py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center">
                <AlertTriangle size={22} className="text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif font-black text-xl md:text-2xl text-foreground mb-2">
                  Mi az a másodlagos jegypiac?
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  A másodlagos jegypiac olyan platformokat jelent (pl. Viagogo, StubHub, Ticketmaster Resale), ahol magánszemélyek és viszonteladók árulják az általuk megvásárolt jegyeket. Ezek <strong>nem az eredeti szervező vagy kiadó</strong> oldalai.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  title: 'Az árak eltérhetnek',
                  desc: 'A másodlagos piacon az árak a piaci kereslettől és kínálattól függnek. Magasabbak vagy alacsonyabbak is lehetnek az eredeti névértéknél.',
                },
                {
                  title: 'Nem vagyunk az eredeti kiadó',
                  desc: 'A GoHungary Sports Tours kizárólag összehasonlítást végez. Jegyeket nem bocsátunk ki és nem értékesítünk.',
                },
                {
                  title: 'Vásárlás a partnernél történik',
                  desc: 'Minden tranzakció a feltüntetett harmadik fél platformon zajlik. Az ő feltételeik és adatvédelmi szabályzatuk vonatkozik a vásárlásra.',
                },
                {
                  title: 'Mindig ellenőrizze az árat',
                  desc: 'Mielőtt vásárol, ellenőrizze az aktuális árat és a szervező saját platformját, hogy összehasonlíthassa az eredeti kínálattal.',
                },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-background rounded-xl border border-border p-5">
                  <p className="font-bold text-sm text-foreground mb-1.5">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner platforms */}
        <section className="max-w-4xl mx-auto px-4 mt-14 mb-16">
          <h2 className="font-serif font-black text-2xl text-foreground mb-2">Partnereink</h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Az alábbi platformoktól kérjük le az árakat összehasonlítási célból. Semmilyen közvetlen üzleti kapcsolatunk nincs velük – kizárólag nyilvános áraikat jelenítjük meg.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {['Ticketmaster', 'Viagogo', 'StubHub', 'AXS', 'Eventim.hu', 'Jegy.hu', 'Jegymester.hu'].map((p) => (
              <span key={p} className="px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-bold text-foreground">
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Böngésszen sportesemények között <ArrowRight size={15} />
            </Link>
            <Link
              href="/kapcsolat"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors"
            >
              Kapcsolat <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
