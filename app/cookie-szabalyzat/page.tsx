import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookie (Süti) Szabályzat – GoHungary Sports Tours',
  description:
    'A gohungarysportstours.com süti (cookie) szabályzata. Tájékoztató az oldalon használt sütik típusairól és kezeléséről.',
}

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary border-b border-border py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Jogi dokumentum</span>
            <h1 className="font-serif font-black text-3xl md:text-4xl text-foreground mt-3 mb-4 text-balance">
              Cookie (Süti) Szabályzat
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Utolsó frissítés: 2026. január 1. &bull; Hatályos: 2026. január 1-jétől
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 py-14 space-y-10">

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">1. Mik azok a sütik (cookie-k)?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A sütik (cookie-k) kis szöveges fájlok, amelyeket az Ön böngészője ment el az eszközén, amikor meglátogat egy weboldalt. Ezek a fájlok segítenek az oldalnak felismerni Önt a következő látogatáskor, megjegyezni a beállításait, és javítani a felhasználói élményt.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">2. Milyen sütiket használunk?</h2>
            <div className="space-y-4">
              {[
                {
                  name: 'Feltétlenül szükséges sütik',
                  desc: 'Ezek a sütik az oldal alapvető működéséhez szükségesek. Nélkülük az oldal nem tud megfelelően működni. Ezekhez nem szükséges az Ön hozzájárulása.',
                  examples: 'Munkamenet-sütik, biztonsági tokenek, cookie-hozzájárulás állapota',
                  legal: 'GDPR 6. cikk (1)(f) – jogos érdek',
                },
                {
                  name: 'Analitikai / statisztikai sütik',
                  desc: 'Névtelen statisztikákat gyűjtünk arról, hogyan használja az oldalt. Az adatokat nem kapcsoljuk össze személyes adatokkal.',
                  examples: 'Oldalmegtekintések, munkamenet időtartama, legnépszerűbb tartalmak',
                  legal: 'GDPR 6. cikk (1)(a) – hozzájárulás alapján',
                },
                {
                  name: 'Funkcionális sütik',
                  desc: 'Megjegyzik az Ön által megadott beállításokat, például a preferált kategóriát vagy keresési előzményeket.',
                  examples: 'Preferált szűrők, kosár státusz',
                  legal: 'GDPR 6. cikk (1)(a) – hozzájárulás alapján',
                },
                {
                  name: 'Harmadik féltől származó sütik',
                  desc: 'Egyes partnereink (pl. Google Analytics, partnerplatformok) saját sütiket helyezhetnek el az Ön böngészőjében, amikor az oldalunkon tartózkodik.',
                  examples: 'Google Analytics (_ga, _gid), partnerhivatkozások',
                  legal: 'GDPR 6. cikk (1)(a) – hozzájárulás alapján',
                },
              ].map(({ name, desc, examples, legal }) => (
                <div key={name} className="rounded-xl border-2 border-border bg-background p-5">
                  <p className="font-bold text-sm text-foreground mb-1.5">{name}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">{desc}</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <div className="text-xs bg-secondary rounded-lg px-3 py-1.5 font-semibold text-foreground/70 flex-1">
                      <span className="font-black text-foreground/50 uppercase tracking-wide text-[10px] block mb-0.5">Példák</span>
                      {examples}
                    </div>
                    <div className="text-xs bg-primary/5 rounded-lg px-3 py-1.5 font-semibold text-primary flex-1">
                      <span className="font-black text-primary/60 uppercase tracking-wide text-[10px] block mb-0.5">Jogalap</span>
                      {legal}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">3. Hogyan kezelhetők a sütik?</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              A nem kötelező sütiket az első látogatáskor megjelenő süti hozzájárulási sávban kezelheti. Bármikor visszavonhatja hozzájárulását a következő módokon:
            </p>
            <ul className="space-y-2">
              {[
                'Az oldal alján lévő "Süti beállítások" linkre kattintva',
                'A böngésző beállításaiban törölheti és letilthatja a sütiket',
                'Inkognitó / privát böngészési módban nem tárolódnak sütik',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Felhívjuk figyelmét, hogy a sütik letiltása esetén az oldal egyes funkciói nem megfelelően működhetnek.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">4. Sütik megőrzési ideje</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { type: 'Munkamenet sütik', duration: 'Böngésző bezárásáig' },
                { type: 'Hozzájárulás süti', duration: '12 hónap' },
                { type: 'Google Analytics', duration: '2 év' },
                { type: 'Funkcionális sütik', duration: '30 nap – 6 hónap' },
              ].map(({ type, duration }) => (
                <div key={type} className="flex items-center justify-between rounded-lg border border-border bg-secondary px-4 py-3 text-sm font-semibold">
                  <span className="text-foreground">{type}</span>
                  <span className="text-muted-foreground">{duration}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">5. Kapcsolat és panaszkezelés</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Ha kérdése van a sütikezeléssel kapcsolatban, lépjen kapcsolatba velünk:
            </p>
            <div className="rounded-xl border-2 border-border bg-background p-5 space-y-1.5 text-sm">
              <p><strong className="text-foreground">K.C. NTOMATA LIMITED</strong> (gohungarysportstours.com)</p>
              <p className="text-muted-foreground">
                Email:{' '}
                <a href="mailto:adatvedelem@gohungarysportstours.com" className="underline hover:text-primary">
                  adatvedelem@gohungarysportstours.com
                </a>
              </p>
              <p className="text-muted-foreground">
                Cím: Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus
              </p>
            </div>
          </section>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
            <Link href="/adatvedelmi-iranyelvek" className="text-sm font-bold text-primary hover:underline">
              Adatvédelmi irányelvek megtekintése
            </Link>
            <Link href="/kapcsolat" className="text-sm font-bold text-primary hover:underline">
              Kapcsolat
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
