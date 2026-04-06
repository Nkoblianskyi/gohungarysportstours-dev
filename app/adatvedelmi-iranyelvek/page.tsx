import type { Metadata } from 'next'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieBanner } from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi Irányelvek – GoHungary Sports Tours',
  description:
    'A gohungarysportstours.com adatvédelmi irányelvei. Tájékoztató a személyes adatok kezeléséről, a felhasználói jogokról és a GDPR-megfelelőségről.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-secondary border-b border-border py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Jogi dokumentum</span>
            <h1 className="font-serif font-black text-3xl md:text-4xl text-foreground mt-3 mb-4 text-balance">
              Adatvédelmi Irányelvek
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl mx-auto">
              Utolsó frissítés: 2026. január 1. &bull; GDPR-kompatibilis
            </p>
          </div>
        </section>

        <article className="max-w-3xl mx-auto px-4 py-14 space-y-10">

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">1. Az adatkezelő</h2>
            <div className="rounded-xl border-2 border-border bg-background p-5 text-sm space-y-1.5">
              <p>
                <strong className="text-foreground">K.C. NTOMATA LIMITED</strong> (GoHungary Sports Tours – gohungarysportstours.com)
              </p>
              <p className="text-muted-foreground">
                Székhely: Stylianou Lena, 24 Christiana Court, Flat/Office 202, Strovolos, 2019 Nicosia, Cyprus
              </p>
              <p className="text-muted-foreground">
                Adatvédelmi kapcsolattartó:{' '}
                <a href="mailto:adatvedelem@gohungarysportstours.com" className="underline hover:text-primary">
                  adatvedelem@gohungarysportstours.com
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">2. Milyen adatokat gyűjtünk?</h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Automatikusan gyűjtött adatok',
                  items: [
                    'IP-cím (anonimizálva)',
                    'Böngésző típusa és verziója',
                    'Meglátogatott oldalak és kattintások',
                    'Munkamenet időtartama',
                    'Hivatkozó URL-cím',
                  ],
                },
                {
                  title: 'Kapcsolatfelvételi adatok (ha üzenetet küld)',
                  items: [
                    'Teljes név',
                    'Email cím',
                    'Üzenet tartalma',
                    'Megkeresés tárgya',
                  ],
                },
              ].map(({ title, items }) => (
                <div key={title} className="rounded-xl border border-border bg-background p-5">
                  <p className="font-bold text-sm text-foreground mb-3">{title}</p>
                  <ul className="space-y-1.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-emerald-50 border-2 border-emerald-200 p-4">
              <p className="text-sm font-bold text-emerald-800">
                Fizetési adatokat NEM gyűjtünk és NEM tárolunk. Minden tranzakció a partner platformokon zajlik, amelyek saját adatvédelmi szabályzattal rendelkeznek.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">3. Miért kezeljük az adatokat?</h2>
            <div className="space-y-3">
              {[
                {
                  purpose: 'Az oldal működtetése és fejlesztése',
                  basis: 'GDPR 6. cikk (1)(f) – jogos érdek',
                  retention: '12 hónap',
                },
                {
                  purpose: 'Kapcsolatfelvételi megkeresések megválaszolása',
                  basis: 'GDPR 6. cikk (1)(b) – szerződéses alap',
                  retention: '36 hónap',
                },
                {
                  purpose: 'Analitika és statisztika (névtelen)',
                  basis: 'GDPR 6. cikk (1)(a) – hozzájárulás',
                  retention: '24 hónap',
                },
                {
                  purpose: 'Jogi kötelezettségek teljesítése',
                  basis: 'GDPR 6. cikk (1)(c) – jogi kötelezettség',
                  retention: 'Törvény által előírt ideig',
                },
              ].map(({ purpose, basis, retention }) => (
                <div key={purpose} className="grid sm:grid-cols-3 gap-2 rounded-xl border border-border bg-background p-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Cél</p>
                    <p className="text-sm font-semibold text-foreground">{purpose}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Jogalap</p>
                    <p className="text-xs font-semibold text-muted-foreground">{basis}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-0.5">Megőrzés</p>
                    <p className="text-xs font-semibold text-muted-foreground">{retention}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">4. Az Ön jogai (GDPR)</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                { right: 'Hozzáférés joga', desc: 'Tájékoztatást kérhet a kezelt adatairól.' },
                { right: 'Helyesbítés joga', desc: 'Kérheti a pontatlan adatok javítását.' },
                { right: 'Törlés joga', desc: 'Kérheti adatai törlését ("elfeledtetés").' },
                { right: 'Korlátozás joga', desc: 'Kérheti az adatkezelés korlátozását.' },
                { right: 'Hordozhatóság joga', desc: 'Kérheti adatait géppel olvasható formában.' },
                { right: 'Tiltakozás joga', desc: 'Tiltakozhat az adatkezelés ellen.' },
              ].map(({ right, desc }) => (
                <div key={right} className="rounded-xl border border-border bg-background p-4">
                  <p className="font-bold text-sm text-foreground mb-1">{right}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              Jogai érvényesítéséhez írjon a{' '}
              <a href="mailto:adatvedelem@gohungarysportstours.com" className="underline font-semibold hover:text-primary">
                adatvedelem@gohungarysportstours.com
              </a>{' '}
              címre; 30 napon belül válaszolunk. Panasszal fordulhat a szokásos tartózkodási helye, munkahelye vagy a jogsértés helye szerinti
              felügyeleti hatósághoz (Magyarországon például a{' '}
              <a href="https://naih.hu" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">
                NAIH
              </a>
              , Cipruson az illetékes adatvédelmi hatósághoz).
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">5. Harmadik felek és adattovábbítás</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Személyes adatait nem adjuk el harmadik félnek. Az alábbi esetekben továbbíthatunk adatokat:
            </p>
            <ul className="space-y-2">
              {[
                'Google LLC (Analytics) – névtelen statisztikák, EU adattovábbítási keretrendszer alapján',
                'Tárhelyszolgáltató (Vercel Inc.) – az oldal üzemeltetéséhez szükséges mértékben',
                'Jogi kötelezettség esetén hatóságoknak – csak törvény által előírt esetekben',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">6. Biztonság</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Az adatok védelme érdekében HTTPS titkosítást alkalmazunk, a hozzáférést korlátozzuk, és rendszeresen felülvizsgáljuk biztonsági eljárásainkat. Fizetési adatokat soha nem kezelünk – minden vásárlás a partner platformokon zajlik.
            </p>
          </section>

          <section>
            <h2 className="font-serif font-bold text-xl text-foreground mb-3">7. Irányelvek módosítása</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fenntartjuk a jogot az irányelvek módosítására. Lényeges változás esetén az oldalon értesítjük a felhasználókat. A rendszeres felülvizsgálat ajánlott.
            </p>
          </section>

          <div className="pt-4 border-t border-border flex flex-col sm:flex-row gap-3">
            <Link href="/cookie-szabalyzat" className="text-sm font-bold text-primary hover:underline">
              Cookie szabályzat megtekintése
            </Link>
            <Link href="/kapcsolat" className="text-sm font-bold text-primary hover:underline">
              Kapcsolat / Adatvédelmi megkeresés
            </Link>
          </div>
        </article>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
