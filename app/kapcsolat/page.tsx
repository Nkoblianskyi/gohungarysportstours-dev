'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Disclaimer } from '@/components/disclaimer'
import { CookieBanner } from '@/components/cookie-banner'
import { Mail, Phone, Clock, CheckCircle, AlertCircle, Send, MapPin } from 'lucide-react'

export default function ContactPage() {
  const [form, setForm] = useState({ nev: '', email: '', targy: '', uzenet: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    // Simulated submit — replace with real API call
    setTimeout(() => {
      if (form.email && form.nev && form.uzenet) {
        setStatus('sent')
        setForm({ nev: '', email: '', targy: '', uzenet: '' })
      } else {
        setStatus('error')
      }
    }, 1000)
  }

  return (
    <>
      <Header />
      <main>
        {/* Page hero */}
        <section className="bg-secondary border-b border-border py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Lépjen kapcsolatba velünk</span>
            <h1 className="font-serif font-black text-3xl md:text-5xl text-foreground mt-3 mb-4 text-balance">
              Kapcsolat
            </h1>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-xl mx-auto">
              Kérdése van az oldalunkkal kapcsolatban? Keressen minket bátran. Minden megkeresésre 2 munkanapon belül válaszolunk.
            </p>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 py-14">
          <div className="grid md:grid-cols-5 gap-10">

            {/* Left: info */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif font-bold text-lg text-foreground mb-4">Elérhetőségek</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Mail size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Email</p>
                      <a
                        href="mailto:info@gohungarysportstours.com"
                        className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        info@gohungarysportstours.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin size={16} className="text-primary" aria-hidden />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Cég / székhely</p>
                      <p className="text-sm font-semibold text-foreground leading-relaxed">
                        K.C. NTOMATA LIMITED
                        <br />
                        Stylianou Lena, 24 Christiana Court, Flat/Office 202
                        <br />
                        Strovolos, 2019 Nicosia, Cyprus
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Clock size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Ügyfélszolgálat</p>
                      <p className="text-sm font-semibold text-foreground">H–P: 9:00–17:00</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Phone size={16} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">Telefon</p>
                      <p className="text-sm font-semibold text-foreground">+36 1 234 5678</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important note */}
              <div className="rounded-xl bg-amber-50 border-2 border-amber-300 p-4">
                <p className="text-xs font-black uppercase tracking-wide text-amber-800 mb-1.5">Fontos</p>
                <p className="text-xs font-semibold text-amber-900 leading-relaxed">
                  Jegyekkel, megrendelésekkel vagy visszatérítéssel kapcsolatban kizárólag az érintett jegyértékesítő platform ügyfélszolgálatával tudunk foglalkozni. Mi csak árösszehasonlítást végzünk.
                </p>
              </div>

              {/* Disclaimer */}
              <Disclaimer variant="card" />
            </div>

            {/* Right: form */}
            <div className="md:col-span-3">
              <div className="bg-background rounded-2xl border-2 border-border p-6 shadow-sm">
                <h2 className="font-serif font-bold text-lg text-foreground mb-6">Üzenetküldés</h2>

                {status === 'sent' ? (
                  <div className="flex flex-col items-center text-center gap-4 py-10">
                    <CheckCircle size={40} className="text-emerald-600" />
                    <div>
                      <p className="font-bold text-base text-foreground">Üzenete megérkezett!</p>
                      <p className="text-sm text-muted-foreground mt-1">2 munkanapon belül felvesszük Önnel a kapcsolatot.</p>
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 text-sm font-bold text-primary hover:underline"
                    >
                      Új üzenet küldése
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="nev" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Teljes név <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="nev"
                          name="nev"
                          type="text"
                          required
                          value={form.nev}
                          onChange={handleChange}
                          placeholder="Pl. Kovács Péter"
                          className="w-full px-3.5 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm font-semibold focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                          Email cím <span className="text-destructive">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="pelda@email.hu"
                          className="w-full px-3.5 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm font-semibold focus:border-primary focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="targy" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Tárgy
                      </label>
                      <select
                        id="targy"
                        name="targy"
                        value={form.targy}
                        onChange={handleChange}
                        className="w-full px-3.5 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm font-semibold focus:border-primary focus:outline-none transition-colors"
                      >
                        <option value="">Válasszon témát...</option>
                        <option value="kerdes">Általános kérdés</option>
                        <option value="esemeny">Esemény információ</option>
                        <option value="ar">Árral kapcsolatos kérdés</option>
                        <option value="adatvédelem">Adatvédelem / GDPR</option>
                        <option value="hiba">Hibajelentés</option>
                        <option value="egyeb">Egyéb</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="uzenet" className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        Üzenet <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        id="uzenet"
                        name="uzenet"
                        required
                        rows={5}
                        value={form.uzenet}
                        onChange={handleChange}
                        placeholder="Írja le kérdését vagy megjegyzését..."
                        className="w-full px-3.5 py-3 rounded-xl border-2 border-border bg-background text-foreground text-sm font-semibold focus:border-primary focus:outline-none transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-destructive text-sm font-semibold">
                        <AlertCircle size={16} />
                        Kérjük, töltse ki az összes kötelező mezőt.
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:opacity-90 active:scale-95 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Küldés...
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          Üzenet küldése
                        </>
                      )}
                    </button>

                    <p className="text-xs text-muted-foreground text-center leading-relaxed">
                      Az adatok megadásával elfogadja{' '}
                      <a href="/adatvedelmi-iranyelvek" className="underline hover:text-primary">adatvédelmi irányelveinket</a>.
                      Adatait kizárólag a megkeresés megválaszolásához használjuk.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}
