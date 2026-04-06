import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'
import { CookieBanner } from '@/components/cookie-banner'
import { Search, BarChart2, ExternalLink, Shield, ArrowRight, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hogyan Működik? – GoHungary Sports Tours',
  description:
    'Hogyan hasonlítja össze a GoHungary Sports Tours a sportjegyárakat? Lépésről lépésre bemutatjuk a folyamatot.',
}

const STEPS = [
  {
    icon: Search,
    number: '01',
    title: 'Keresse az eseményt',
    desc: 'Írja be a keresett csapat, versenyszám vagy sportesemény nevét a keresőbe. Szűrhet sportkategória (futball, motorsport, úszás, stb.), dátum és helyszín szerint is. Az oldal valós idejű összesítést ad.',
    color: 'bg-rose-50 border-rose-200',
    numColor: 'text-rose-600',
    iconBg: 'bg-rose-100',
  },
  {
    icon: BarChart2,
    number: '02',
    title: 'Hasonlítsa össze az árakat',
    desc: 'Egy helyen látja az összes nagy jegyértékesítő – Ticketmaster, Viagogo, StubHub, AXS, Eventim, Jegy.hu, Jegymester.hu – aktuális ajánlatait. Az árak másodlagos piaci viszonteladóktól származnak, és eltérhetnek a névértéktől.',
    color: 'bg-blue-50 border-blue-200',
    numColor: 'text-blue-600',
    iconBg: 'bg-blue-100',
  },
  {
    icon: ExternalLink,
    number: '03',
    title: 'Kattintson a legjobb ajánlatra',
    desc: 'Az összehasonlítás után a kívánt jegyárra kattintva közvetlenül a partner platformra kerül. Ott fejezheti be a vásárlást az adott szolgáltató feltételei szerint. Mi ebben nem veszünk részt.',
    color: 'bg-amber-50 border-amber-200',
    numColor: 'text-amber-600',
    iconBg: 'bg-amber-100',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Vásároljon biztonságosan',
    desc: 'A tranzakció teljes egészében a partner platformon zajlik. Fizetési adatait kizárólag ők kezelik, a mi oldalunk nem kap és nem tárol semmilyen fizetési információt.',
    color: 'bg-emerald-50 border-emerald-200',
    numColor: 'text-emerald-600',
    iconBg: 'bg-emerald-100',
  },
]

const FAQ = [
  {
    q: 'Közvetlenül itt vásárolhatok jegyet?',
    a: 'Nem. A GoHungary Sports Tours kizárólag sportjegy-árösszehasonlítást nyújt. A jegyvásárlás a feltüntetett partnereknél (Ticketmaster, Viagogo, stb.) történik.',
  },
  {
    q: 'Miért különböznek az árak a névértéktől?',
    a: 'A feltüntetett árak másodlagos piaci viszonteladóktól származnak. Ezek az árak a piaci kereslet és kínálat alapján változnak, és magasabbak lehetnek az eredeti jegyárnál.',
  },
  {
    q: 'Biztonságos-e a fizetés az összehasonlított platformokon?',
    a: 'Mi semmilyen fizetési folyamatban nem veszünk részt. A partner platformok saját biztonsági rendszert alkalmaznak. Vásárlás előtt javasoljuk az adott platform értékelésének és feltételeinek áttekintését.',
  },
  {
    q: 'Milyen platformoktól kérjük le az árakat?',
    a: 'Jelenleg a következő platformok árait jelenítjük meg: Ticketmaster, Viagogo, StubHub, AXS, Eventim.hu, Jegy.hu, Jegymester.hu. A lista bővülhet.',
  },
  {
    q: 'Hogyan frissülnek az árak?',
    a: 'Az árakat rendszeresen lekérjük a partner platformokról. Ennek ellenére előfordulhat, hogy egy-egy ár időközben változik – mindig ellenőrizze az aktuális árat a szolgáltatónál.',
  },
  {
    q: 'Van garancia a legolcsóbb árra?',
    a: 'Nem garantálunk "legjobb ár" ajánlatot, mivel az árak folyamatosan változnak és tőlünk független viszonteladóktól származnak. Az összehasonlítás csak tájékoztató jellegű.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-secondary border-b border-border py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Egyszerű folyamat</span>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-foreground mt-3 mb-4 text-balance">
              Hogyan Működik?
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              A GoHungary Sports Tours kizárólag sportesemények jegyárait hasonlítja össze. 4 egyszerű lépésben megtalálhatja a legjobb ajánlatot.
            </p>
          </div>
        </section>

        {/* Mandatory disclaimer */}
        <section className="max-w-4xl mx-auto px-4 mt-8">
          <Disclaimer variant="page" />
        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-4 mt-14" aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="sr-only">Lépések</h2>
          <div className="space-y-6">
            {STEPS.map(({ icon: Icon, number, title, desc, color, numColor, iconBg }) => (
              <div key={number} className={`rounded-2xl border-2 p-6 md:p-8 ${color} flex gap-6 items-start`}>
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                    <Icon size={22} className={numColor} />
                  </div>
                  <span className={`font-black text-3xl font-serif opacity-30 ${numColor}`}>{number}</span>
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Secondary market info box */}
        <section className="mt-16 bg-paper-3 py-14 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center shrink-0">
                <AlertTriangle size={22} className="text-amber-700" />
              </div>
              <div>
                <h2 className="font-serif font-black text-xl text-foreground mb-2">
                  Másodlagos piac – fontos tudnivalók
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Az általunk összehasonlított platformok <strong>másodlagos jegypiacként</strong> működnek. Ez azt jelenti, hogy a jegyeket nem az eredeti szervező, hanem viszonteladók kínálják.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { title: 'Az árak eltérhetnek', desc: 'A másodlagos piacin az árak a piaci kereslettől függnek. Magasabbak lehetnek az eredeti névértéknél.' },
                { title: 'Nem az eredeti kiadó', desc: 'A jegyeket viszonteladók árulják, nem az esemény szervezője vagy az eredeti jegykiadó.' },
                { title: 'A vásárlás a partnernél zajlik', desc: 'Minden tranzakció közvetlenül a partner platformon történik, az ő szabályzataik és feltételeik szerint.' },
                { title: 'Ellenőrizze az árat', desc: 'Vásárlás előtt érdemes a szervező saját oldalán is megnézni az elérhető jegyárakat.' },
              ].map(({ title, desc }) => (
                <div key={title} className="bg-background rounded-xl border border-border p-5">
                  <p className="font-bold text-sm text-foreground mb-1.5">{title}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-3xl mx-auto px-4 mt-16 mb-8" aria-labelledby="faq-heading">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kérdések</span>
            <h2 id="faq-heading" className="font-serif font-black text-2xl md:text-3xl text-foreground mt-2">
              Gyakori kérdések
            </h2>
          </div>
          <div className="space-y-3">
            {FAQ.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-border bg-background overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm text-foreground hover:bg-secondary/50 transition-colors list-none">
                  {q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-lg font-light ml-4 shrink-0">+</span>
                </summary>
                <p className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-secondary border-t border-border py-14 px-4">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="font-serif font-black text-2xl text-foreground mb-3">
              Kész az összehasonlításra?
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Böngésszen a sportesemények között és hasonlítsa össze az árakat.
            </p>
            <Link
              href="/esemenyek"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity"
            >
              Böngésszen sportesemények között <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
