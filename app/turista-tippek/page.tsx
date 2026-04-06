import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'
import { Disclaimer } from '@/components/disclaimer'
import { MapPin, Clock, CreditCard, Star, Trophy, Info, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Turista Tippek – GoHungary Sports Tours',
  description:
    'Hasznos útmutatók sportrendezvényekre látogató turistáknak Budapesten – közlekedés, helyszínek, jegyvásárlás, szállás és étkezés.',
}

const TIP_SECTIONS = [
  {
    icon: MapPin,
    color: 'bg-blue-50 border-blue-200',
    iconColor: 'text-blue-700',
    tag: 'Helyszínek',
    title: 'Budapest legfontosabb sporthelyszínei',
    items: [
      { heading: 'Puskás Aréna', body: '67 000 férőhelyes, futball és rendezvények. Megközelítés: M2/M4 metró Keleti pályaudvar + 100-as busz.' },
      { heading: 'Duna Aréna', body: 'Úszás és vízisportok VB-szintű helyszíne, XIII. kerület, 12-es trolibusz.' },
      { heading: 'Groupama Aréna', body: '22 000 férőhelyes, Ferencváros futball, M3 metró: Népliget + 10 perc séta.' },
      { heading: 'Papp László Sportaréna', body: 'Zárt aréna NBA, jégkorong, kézilabda, M2 metró: Keleti pályaudvar.' },
      { heading: 'Hungaroring', body: 'F1 és motorsport, Mogyoród – autóval 30 perc, eseménynapon különjáratú busz indul a belvárosból.' },
    ],
  },
  {
    icon: Clock,
    color: 'bg-amber-50 border-amber-200',
    iconColor: 'text-amber-700',
    tag: 'Jegyvásárlás',
    title: 'Mikor és hogyan érdemes jegyet venni?',
    items: [
      { heading: 'F1 és BL', body: 'Legalább 3–6 hónappal korábban. A másodlagos piacon az árak az esemény közeledtével drasztikusan emelkednek.' },
      { heading: 'NB1 meccsek', body: 'Általában 1–2 héttel korábban is vannak jegyek, de rangadókra érdemes korábban keresni.' },
      { heading: 'Platformok összehasonlítása', body: 'Az árkülönbség a Ticketmaster, Viagogo és StubHub között akár 30–40% is lehet – mindig hasonlítson!' },
      { heading: 'Fontos figyelmeztetés', body: 'A másodlagos piaci árak magasabbak lehetnek a névértéknél. Vásárlás előtt mindig ellenőrizze a feltételeket.' },
    ],
  },
  {
    icon: Trophy,
    color: 'bg-red-50 border-red-200',
    iconColor: 'text-red-700',
    tag: '2026 sportok',
    title: 'Kiemelt sportesemények 2026-ban',
    items: [
      { heading: 'Magyar F1 Nagydíj', body: 'Hungaroring, július vége. Hagyományosan az egyik leglátogatottabb F1 verseny Európában.' },
      { heading: 'Úszó Világbajnokság', body: 'Duna Aréna, Budapest, júliusban. Magyarország a vízisportokban világszínvonalú.' },
      { heading: 'Ferencváros BL/EL', body: 'Groupama Aréna, szeptembertől. Magyar csapat Európa legrangosabb kupasorozataiban.' },
      { heading: 'NBA Global Game', body: 'Papp László Sportaréna, október. Élő NBA meccs Budapesten – ritka és különleges élmény.' },
    ],
  },
  {
    icon: CreditCard,
    color: 'bg-green-50 border-green-200',
    iconColor: 'text-green-700',
    tag: 'Biztonság',
    title: 'Biztonságos vásárlás & fizetési tippek',
    items: [
      { heading: 'Megbízható platformok', body: 'Kizárólag ismert nevű platformokon vásároljon: Ticketmaster, Viagogo, StubHub, AXS, Eventim.' },
      { heading: 'Visszatérítési feltételek', body: 'Mindig olvassa el a visszatérítési irányelveket – ezek platformonként és eseményenként eltérők.' },
      { heading: 'Nincs fizetés nálunk', body: 'A GoHungary Sports Tours-on semmilyen fizetési adatot nem kell megadni – mi csak összehasonlítunk.' },
      { heading: 'Valuta', body: 'Magyarország pénzneme a forint (HUF). Bankkártya szinte mindenhol elfogadott.' },
    ],
  },
  {
    icon: MapPin,
    color: 'bg-purple-50 border-purple-200',
    iconColor: 'text-purple-700',
    tag: 'Szállás & közlekedés',
    title: 'Szállás és megközelítés',
    items: [
      { heading: 'Belvárosi szállás', body: 'Az V–VII. kerület a legközpontosabb – innen metróval minden helyszín elérhető 20 percen belül.' },
      { heading: 'Hungaroring körül', body: 'A legtöbb látogató Budapesten száll meg és különjárattal jár ki. Közvetlen helyi szálláskínálat korlátozott.' },
      { heading: 'BKV napi bérlet', body: '1 650 Ft-ért korlátlan metró, villamos, busz egy napra – rendezvényen az egyik legjobb befektetés.' },
      { heading: 'Taxi és ride-sharing', body: 'Bolt és Uber is működik Budapesten. Esemény után a helyszín előtt hosszú sor lehet – előbb rendelje meg.' },
    ],
  },
  {
    icon: Star,
    color: 'bg-cyan-50 border-cyan-200',
    iconColor: 'text-cyan-700',
    tag: 'Gasztronómia',
    title: 'Étkezés sportesemény előtt és után',
    items: [
      { heading: 'Puskás Aréna körül', body: 'Számos étterem és gyorsétterem – érkezzen legalább 1,5 órával korábban, hogy elkerülje a sorokat.' },
      { heading: 'Helyszíni büfé', body: 'Minden nagy arénában van büfé, de a legnépszerűbb meccseken hosszú sorok alakulhatnak ki.' },
      { heading: 'Magyar ételek', body: 'Gulyás, lángos, kürtőskalács – kötelező kóstolók minden Budapestre látogató sportfan számára.' },
      { heading: 'Gozsdu udvar és Ráday utca', body: 'A VII. kerületi Gozsdu udvar és a IX. kerületi Ráday utca teli van étteremmel – sportbuli előtti vacsora tökéletes helyszíne.' },
    ],
  },
]

export default function TuristaTippekPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-navy text-white py-14 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-white/50 block mb-3">Hasznos útmutatók</span>
            <h1 className="font-serif font-bold text-3xl md:text-4xl text-white text-balance mb-4">
              Turista tippek sporteseményekhez
            </h1>
            <p className="text-base text-white/70 max-w-2xl mx-auto leading-relaxed">
              Minden, amit tudnia kell Budapestre látogató sportrajongóként – helyszínek, közlekedés, jegyvásárlás és gasztronómia.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 py-12">
          <Disclaimer variant="page" className="mb-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TIP_SECTIONS.map(({ icon: Icon, color, iconColor, tag, title, items }) => (
              <div key={title} className={`rounded-2xl border-2 p-6 ${color}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-white/80 flex items-center justify-center shrink-0">
                    <Icon size={18} className={iconColor} />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground block">{tag}</span>
                    <h2 className="font-serif font-bold text-base text-foreground leading-snug">{title}</h2>
                  </div>
                </div>
                <ul className="space-y-3">
                  {items.map(({ heading, body }) => (
                    <li key={heading} className="text-sm">
                      <span className="font-bold text-foreground">{heading}: </span>
                      <span className="text-muted-foreground leading-relaxed">{body}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-secondary rounded-2xl border border-border p-6 flex items-start gap-4">
            <Info size={20} className="text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-foreground mb-1">Fontos megjegyzés</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A GoHungary Sports Tours egy másodlagos jegypiaci összehasonlító oldal. Nem értékesítünk jegyeket, és nem vagyunk kapcsolatban a sportrendezvények szervezőivel vagy a helyszínekkel. A feltüntetett árak viszonteladóktól származnak és eltérhetnek a névértéktől.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/esemenyek" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 transition-opacity">
              Böngésszen sportesemények között <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
