import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'
import { EventCard } from '@/components/event-card'
import { HeroSearch } from '@/components/hero-search'
import { CookieBanner } from '@/components/cookie-banner'
import { EVENTS } from '@/lib/events'
import {
  ArrowRight, Star, CheckCircle, AlertTriangle,
} from 'lucide-react'

export default function HomePage() {
  const featuredEvents = EVENTS.slice(0, 6)

  return (
    <>
      <Header />
      <main>
        {/* ─── HERO ─────────────────────────────────────────── */}
        <section className="relative overflow-hidden" aria-label="Főoldal hero">

          {/* ══════════════════════════════════════════════════
              TOP DISCLAIMER — minimum 20vh, non-closeable,
              always visible, Google Ads compliant
          ══════════════════════════════════════════════════ */}
          <div
            className="relative z-20 w-full bg-amber-400 border-b-4 border-amber-600 flex items-center"
            style={{ minHeight: '20vh' }}
            role="alert"
            aria-label="Fontos figyelmeztetés – másodlagos jegypiac"
          >
            <div className="max-w-5xl mx-auto px-6 py-8 w-full">
              <div className="flex items-start gap-5">
                <AlertTriangle size={44} className="shrink-0 text-amber-900 mt-1" aria-hidden="true" />
                <div className="space-y-3">
                  <p className="text-xl font-black uppercase tracking-widest text-amber-900">
                    Fontos figyelmeztetés – Másodlagos jegypiac
                  </p>
                  <p className="text-base font-semibold leading-relaxed text-amber-950">
                    A <strong className="underline underline-offset-2">GoHungary Sports Tours</strong> egy{' '}
                    <strong className="underline underline-offset-2">másodlagos jegypiaci összehasonlító platform</strong> —
                    nem elsődleges jegykiadó, nem vagyunk kapcsolatban a rendezőkkel vagy a helyszínekkel.
                    A megjelenített jegyek független viszonteladóktól (harmadik felektől) származnak.
                  </p>
                  <p className="text-base font-semibold leading-relaxed text-amber-950">
                    <strong className="underline underline-offset-2">Az árak magasabbak lehetnek az eredeti névértéknél.</strong>{' '}
                    Fizetési adatokat nem gyűjtünk és nem dolgozunk fel. A vásárlás kizárólag a kiválasztott külső partnernél
                    (pl. Viagogo, StubHub, Ticketmaster) történik, közvetlenül az ő platformján és az ő feltételeik szerint.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-1">
                    <span className="inline-flex items-center gap-1.5 bg-amber-900/10 border border-amber-700 rounded-full px-4 py-1.5 text-sm font-bold text-amber-900">
                      <AlertTriangle size={14} aria-hidden="true" /> Viszonteladói piactér
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-amber-900/10 border border-amber-700 rounded-full px-4 py-1.5 text-sm font-bold text-amber-900">
                      <AlertTriangle size={14} aria-hidden="true" /> Árak &gt; névérték lehetséges
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-amber-900/10 border border-amber-700 rounded-full px-4 py-1.5 text-sm font-bold text-amber-900">
                      <AlertTriangle size={14} aria-hidden="true" /> Nem gyűjtünk fizetési adatot
                    </span>
                    <span className="inline-flex items-center gap-1.5 bg-amber-900/10 border border-amber-700 rounded-full px-4 py-1.5 text-sm font-bold text-amber-900">
                      <AlertTriangle size={14} aria-hidden="true" /> Nem hivatalos jegyirodai platform
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ══ END DISCLAIMER ══ */}

          {/* Hero image — compact */}
          <div className="relative h-[160px] md:h-[200px]">
            <Image
              src="/events/sport-hero.jpg"
              alt="GoHungary Sports Tours – Sportrendezvény jegyár összehasonlítás"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy/65" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center gap-3">
              <div className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Sportjegy Ár-összehasonlítás &bull; Magyarország & EU
              </div>
              <h1 className="font-serif font-bold text-2xl md:text-3xl text-white leading-tight text-balance max-w-2xl">
                Találja meg a legjobb sportjegyárakat Magyarországon
              </h1>
            </div>
          </div>

          {/* Floating search box */}
          <div className="relative z-10 -mt-6 mx-4 max-w-3xl md:mx-auto">
            <div className="bg-background rounded-2xl shadow-xl border border-border p-5">
              <HeroSearch />
            </div>
          </div>
        </section>

        {/* ─── SPORT CATEGORY PILLS ─────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 mt-10" aria-label="Sportágak">
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: '/esemenyek?kategoria=futball', label: 'Futball', bg: 'bg-green-50 border-green-200 text-green-800 hover:bg-green-100' },
              { href: '/esemenyek?kategoria=motorsport', label: 'Motorsport', bg: 'bg-red-50 border-red-200 text-red-800 hover:bg-red-100' },
              { href: '/esemenyek?kategoria=uszas', label: 'Úszás', bg: 'bg-blue-50 border-blue-200 text-blue-800 hover:bg-blue-100' },
              { href: '/esemenyek?kategoria=kosar', label: 'Kosárlabda', bg: 'bg-orange-50 border-orange-200 text-orange-800 hover:bg-orange-100' },
              { href: '/esemenyek?kategoria=tenisz', label: 'Tenisz', bg: 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100' },
              { href: '/esemenyek?kategoria=jegkorong', label: 'Jégkorong', bg: 'bg-sky-50 border-sky-200 text-sky-800 hover:bg-sky-100' },
              { href: '/esemenyek?kategoria=atletas', label: 'Atlétika & Torna', bg: 'bg-purple-50 border-purple-200 text-purple-800 hover:bg-purple-100' },
              { href: '/esemenyek?kategoria=vizisportok', label: 'Vízisportok', bg: 'bg-cyan-50 border-cyan-200 text-cyan-800 hover:bg-cyan-100' },
            ].map(({ href, label, bg }) => (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border font-semibold text-sm transition-colors ${bg}`}
              >
                {label}
              </Link>
            ))}
          </div>
        </section>

        {/* ─── FEATURED EVENTS ──────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 mt-14" aria-labelledby="featured-heading">
          <div className="flex items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">2026 legjobb meccsek & versenyek</span>
              <h2 id="featured-heading" className="font-serif font-bold text-2xl md:text-3xl text-foreground mt-1">
                Kiemelt Sportesemények
              </h2>
            </div>
            <Link href="/esemenyek" className="flex items-center gap-1.5 text-sm font-bold text-primary hover:underline shrink-0">
              Összes esemény <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────────── */}
        <section className="mt-20 bg-secondary py-16 px-4" aria-labelledby="how-heading">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Egyszerű folyamat</span>
              <h2 id="how-heading" className="font-serif font-bold text-2xl md:text-3xl text-foreground mt-2 text-balance">
                Hogyan működik az ár-összehasonlítás?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: '01',
                  title: 'Keressen sporteseményt',
                  desc: 'Írja be a csapat, versenyző vagy sportág nevét. Szűrjön sportág és dátum szerint.',
                  color: 'bg-blue-50 border-blue-200',
                  num: 'text-blue-700',
                },
                {
                  step: '02',
                  title: 'Hasonlítsa össze az árakat',
                  desc: 'Egy helyen látja az összes nagy jegyértékesítő – Ticketmaster, Viagogo, StubHub, Eventim – aktuális ajánlatait.',
                  color: 'bg-red-50 border-red-200',
                  num: 'text-red-700',
                },
                {
                  step: '03',
                  title: 'Vásároljon a partnernél',
                  desc: 'Mi nem értékesítünk jegyeket. A legjobb ajánlatra kattintva a partner platformon fejezze be a vásárlást.',
                  color: 'bg-green-50 border-green-200',
                  num: 'text-green-700',
                },
              ].map(({ step, title, desc, color, num }) => (
                <div key={step} className={`rounded-2xl border-2 p-6 ${color} relative`}>
                  <span className={`font-black text-5xl font-serif opacity-20 absolute top-4 right-5 ${num}`}>{step}</span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm mb-4 ${num} bg-white/80 border border-current`}>
                    {step}
                  </div>
                  <h3 className="font-serif font-bold text-lg text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 max-w-2xl mx-auto">
              <Disclaimer variant="page" />
            </div>
          </div>
        </section>

        {/* ─── ABOUT PREVIEW ────────────────────────────────── */}
        <section className="max-w-7xl mx-auto px-4 mt-20" aria-labelledby="about-preview-heading">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kik vagyunk</span>
              <h2 id="about-preview-heading" className="font-serif font-bold text-2xl md:text-3xl text-foreground mt-2 mb-4 text-balance">
                A megbízható forrás a magyar sporteseményekhez
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                A GoHungary Sports Tours csapata elkötelezett amellett, hogy a sportrajongók egyszerűen és átláthatóan hasonlíthassák össze a sportjegy-árakat. Minden partnertől valós, aktuális adatokat jelenítünk meg.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'Valós árak a legnagyobb platformoktól',
                  'Nincsenek rejtett díjak vagy félrevezetés',
                  'Átlátható másodlagos piac jelzés minden oldalon',
                  'GDPR-kompatibilis adatkezelés',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
                    <CheckCircle size={16} className="text-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/rolunk" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity">
                Tudjon meg többet <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: `${EVENTS.length}+`, label: 'Sportesemény 2026-ban' },
                { val: '7', label: 'Partner platform' },
                { val: '100%', label: 'Fizetési adatok nélkül' },
                { val: 'HU + EU', label: 'Rendezvények lefedettség' },
              ].map(({ val, label }) => (
                <div key={label} className="rounded-2xl bg-secondary border border-border p-5 text-center">
                  <p className="font-black text-2xl font-serif text-foreground">{val}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── TOURISM TIPS PREVIEW ─────────────────────────── */}
        <section className="mt-20 bg-secondary py-16 px-4" aria-labelledby="tips-heading">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Hasznos útmutatók</span>
                <h2 id="tips-heading" className="font-serif font-bold text-2xl md:text-3xl text-foreground mt-2 text-balance">
                  Turista tippek sporteseményekhez
                </h2>
              </div>
              <Link href="/turista-tippek" className="flex items-center gap-1.5 text-sm font-bold text-primary hover:underline shrink-0">
                Összes tipp <ArrowRight size={15} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                {
                  title: 'Eljutás a helyszínre',
                  desc: 'A Puskás Aréna és a Sportaréna jól megközelíthető metróval és busszal. Érdemes napijegyet venni.',
                  tag: 'Közlekedés',
                },
                {
                  title: 'Mikor érdemes jegyet venni?',
                  desc: 'A másodlagos piacon az árak az esemény közeledtével változnak – F1-re és BL-re érdemes korán foglalni.',
                  tag: 'Jegyvásárlás',
                },
                {
                  title: 'Budapest sporthelyszínei',
                  desc: 'Puskás Aréna, Duna Aréna, Groupama Aréna, Hungaroring – ismerje meg a legfontosabb helyszíneket.',
                  tag: 'Helyszínek',
                },
              ].map(({ title, desc, tag }) => (
                <div key={title} className="bg-background rounded-xl border border-border p-5 hover:shadow-md transition-shadow">
                  <span className="inline-block text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full mb-3">
                    {tag}
                  </span>
                  <h3 className="font-serif font-bold text-base text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ PREVIEW ──────────────────────────────────── */}
        <section className="max-w-3xl mx-auto px-4 mt-20 mb-8" aria-labelledby="faq-heading">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Kérdések & válaszok</span>
            <h2 id="faq-heading" className="font-serif font-bold text-2xl md:text-3xl text-foreground mt-2">
              Gyakran Ismételt Kérdések
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Közvetlenül itt vásárolhatok sportjegyet?',
                a: 'Nem. A GoHungary Sports Tours kizárólag árösszehasonlítási szolgáltatást nyújt. A jegyvásárlás a feltüntetett partnereknél (Ticketmaster, Viagogo, stb.) történik.',
              },
              {
                q: 'Miért különböznek az árak a névértéktől?',
                a: 'A feltüntetett árak másodlagos piaci viszonteladóktól származnak. Ezek az árak a piaci kereslet és kínálat alapján változnak és magasabbak lehetnek az eredeti jegyárnál.',
              },
              {
                q: 'Biztonságos-e az oldalon böngészni?',
                a: 'Igen. Fizetési adatokat nem gyűjtünk és nem tárolunk. Minden tranzakció közvetlenül a partner platformon zajlik.',
              },
              {
                q: 'Milyen sportágak jegyeit találom itt?',
                a: 'Futball (NB1, BL, válogatott), F1 és MotoGP motorsport, úszás és vízisportok, NBA kosárlabda, WTA tenisz, jégkorong, kézilabda, atlétika, torna és sok más sportág.',
              },
            ].map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-border bg-background overflow-hidden">
                <summary className="flex items-center justify-between px-5 py-4 cursor-pointer font-semibold text-sm text-foreground hover:bg-secondary/50 transition-colors list-none">
                  {q}
                  <span className="text-muted-foreground group-open:rotate-45 transition-transform text-lg font-light">+</span>
                </summary>
                <p className="px-5 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/kapcsolat" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-primary text-primary font-bold text-sm hover:bg-primary/5 transition-colors">
              Kérdése van? Lépjen kapcsolatba velünk <ArrowRight size={15} />
            </Link>
          </div>
        </section>

        {/* ─── PARTNERS STRIP ───────────────────────────────── */}
        <section className="bg-secondary border-t border-b border-border py-8 px-4 mt-10" aria-label="Partner platformok">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-muted-foreground mb-5">
              Árakat összehasonlítunk a következő platformokon
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold text-muted-foreground">
              {['Ticketmaster', 'Viagogo', 'StubHub', 'AXS', 'Eventim.hu', 'Jegy.hu', 'Jegymester.hu'].map((p) => (
                <span key={p} className="px-4 py-2 rounded-lg bg-background border border-border hover:border-primary transition-colors cursor-default">
                  {p}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <CookieBanner />
    </>
  )
}
