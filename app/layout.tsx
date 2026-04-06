import type { Metadata, Viewport } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gohungarysportstours.com'),
  title: 'GoHungary Sports Tours – Sportjegy Ár-összehasonlítás',
  description:
    'Hasonlítsa össze a sportrendezvény jegyárakat Magyarországon – futball, F1, úszás, NBA, tenisz és sok más sport. Nem értékesítünk jegyeket – csak árak összehasonlítása.',
  keywords:
    'sportjegy, futball jegy, F1 jegy, Budapest sport, Puskás Aréna, Hungaroring, jegyár összehasonlítás, Magyarország sport',
  openGraph: {
    title: 'GoHungary Sports Tours',
    description: 'Sportrendezvény jegyár összehasonlítás Magyarországon és az EU-ban.',
    url: 'https://gohungarysportstours.com',
    siteName: 'GoHungary Sports Tours',
    locale: 'hu_HU',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: '#0a1628',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hu" className={`${inter.variable} ${oswald.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
