export type SportCategory =
  | 'futball'
  | 'motorsport'
  | 'vizisportok'
  | 'uszas'
  | 'tenisz'
  | 'kosar'
  | 'jegkorong'
  | 'atletas'
  | 'egyeb'

export interface TicketProvider {
  name: string
  url: string
  priceFrom: number
  priceTo: number
}

export interface Event {
  id: string
  slug: string
  title: string
  category: SportCategory
  date: string
  time: string
  venue: string
  city: string
  image: string
  description: string
  providers: TicketProvider[]
  tags: string[]
}

export const EVENTS: Event[] = [
  {
    id: '1',
    slug: 'magyar-f1-nagydij-2026',
    title: 'Magyar Formula–1 Nagydíj 2026',
    category: 'motorsport',
    date: '2026-07-31',
    time: '15:00',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    image: '/events/hungaroring-f1.jpg',
    description:
      'A Formula–1 Magyar Nagydíj a Hungaroringen! Az F1-es szezon egyik legizgalmasabb és legnépszerűbb futama, ahol a világ legjobb pilótái mérik össze erejüket Budapest közelében.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 35000, priceTo: 280000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 42000, priceTo: 350000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 38000, priceTo: 310000 },
      { name: 'AXS', url: 'https://axs.com', priceFrom: 33000, priceTo: 265000 },
    ],
    tags: ['F1', 'motorsport', 'Hungaroring', 'nyár'],
  },
  {
    id: '2',
    slug: 'ferencvaros-bl-csoportmeccs-2026',
    title: 'Ferencváros TC – Bayern München (BL)',
    category: 'futball',
    date: '2026-09-16',
    time: '21:00',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    image: '/events/football-bl.jpg',
    description:
      'A Ferencváros TC Bajnokok Ligája csoportmeccse a Bayern München ellen! A zöld-fehérek Európa elitjével mérköznek meg a telt ház előtt zajló, felejthetetlen estén.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 12000, priceTo: 45000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 15000, priceTo: 55000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 13500, priceTo: 50000 },
    ],
    tags: ['futball', 'BL', 'Ferencváros', 'Bayern'],
  },
  {
    id: '3',
    slug: 'uszas-vilagbajnoksag-budapest-2026',
    title: 'Úszó Világbajnokság – Budapest 2026',
    category: 'uszas',
    date: '2026-07-12',
    time: '10:00',
    venue: 'Duna Aréna',
    city: 'Budapest',
    image: '/events/swimming-wc.jpg',
    description:
      'Budapest ismét otthont ad az Úszó Világbajnokságnak a világ legjobb létesítményei egyikében, a Duna Arénában. A világ legjobb úszói küzdenek az aranyért a telt ház előtt.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 4500, priceTo: 22000 },
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 4000, priceTo: 18000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 4200, priceTo: 19500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 5500, priceTo: 25000 },
    ],
    tags: ['úszás', 'VB', 'Duna Aréna', 'aquatika'],
  },
  {
    id: '4',
    slug: 'nba-global-game-budapest-2026',
    title: 'NBA Global Game Budapest 2026',
    category: 'kosar',
    date: '2026-10-10',
    time: '20:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/nba-budapest.jpg',
    description:
      'Az NBA ismét Budapestre hozza a kosárlabda varázsát! Két élvonalbeli NBA csapat mérkőzik meg a Sportarénában, egy igazi NBA-élményt hozva a magyar szurkolóknak.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 15000, priceTo: 65000 },
      { name: 'AXS', url: 'https://axs.com', priceFrom: 14000, priceTo: 60000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 18000, priceTo: 78000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 16000, priceTo: 72000 },
    ],
    tags: ['NBA', 'kosárlabda', 'aréna', 'Amerika'],
  },
  {
    id: '5',
    slug: 'budapest-grand-prix-wta-2026',
    title: 'Budapest Grand Prix – WTA Tenisz',
    category: 'tenisz',
    date: '2026-07-18',
    time: '11:00',
    venue: 'Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/tennis-budapest.jpg',
    description:
      'A Budapest Grand Prix WTA tenisztorna visszatér! A világ top 50-es teniszezőnői versengenek a főváros szívében, izgalmas meccseken és rendkívüli sportélményt nyújtva.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 4500, priceTo: 18000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 5500, priceTo: 21000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 6000, priceTo: 23000 },
    ],
    tags: ['tenisz', 'WTA', 'torna', 'nők'],
  },
  {
    id: '6',
    slug: 'fehervar-av19-ferenci-jegkorong-2026',
    title: 'Fehérvár AV19 – Ferencváros (Jégkorong NB1)',
    category: 'jegkorong',
    date: '2026-11-20',
    time: '18:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/ice-hockey.jpg',
    description:
      'A magyar jégkorongtörténelem egyik legizgalmasabb rivalizációja! A Fehérvár AV19 és a Ferencváros bajnokságdöntő meccse a Sportarénában, lenyűgöző légkörben.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 3000, priceTo: 9500 },
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 2800, priceTo: 8500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 4500, priceTo: 14000 },
    ],
    tags: ['jégkorong', 'NB1', 'Fehérvár', 'Ferencváros'],
  },
  {
    id: '7',
    slug: 'kezilabda-eb-budapest-2026',
    title: 'Kézilabda Európa-bajnokság – Budapest',
    category: 'egyeb',
    date: '2026-01-10',
    time: '18:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/handball.jpg',
    description:
      'A Kézilabda Európa-bajnokság csoportmeccseit Budapest rendezi. Magyarország és Európa legjobb csapatai küzdenek a döntőbe jutásért a Sportarénában.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 5000, priceTo: 16000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 4800, priceTo: 14500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 6500, priceTo: 20000 },
    ],
    tags: ['kézilabda', 'EB', 'Európa-bajnokság'],
  },
  {
    id: '8',
    slug: 'atletika-continental-tour-budapest-2026',
    title: 'Atlétika Continental Tour – Budapest',
    category: 'atletas',
    date: '2026-08-20',
    time: '17:00',
    venue: 'Nemzeti Atlétikai Központ',
    city: 'Budapest',
    image: '/events/athletics.jpg',
    description:
      'Az atlétika Continental Tour Budapest állomásán a világ leggyorsabb sprintereit és legjobb mezei futóit láthatja. Múlhatatlan rekordkísérletek és óriási szurkolói hangulat.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 3500, priceTo: 12000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 4200, priceTo: 14000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 3800, priceTo: 12500 },
    ],
    tags: ['atlétika', 'sprint', 'Continental Tour'],
  },
  {
    id: '9',
    slug: 'vizilabda-vilagliga-budapest-2026',
    title: 'Vízilabda Világliga – Budapest',
    category: 'vizisportok',
    date: '2026-06-05',
    time: '14:00',
    venue: 'Hajós Alfréd Sportuszoda',
    city: 'Budapest',
    image: '/events/waterpolo.jpg',
    description:
      'A vízilabda Világliga szuperdöntőjét idén Budapest rendezi! Magyarország és a világ legjobb csapatai csapnak össze az aranyért a legendás Hajós uszodában.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 2500, priceTo: 8000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 3000, priceTo: 9500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 4000, priceTo: 13000 },
    ],
    tags: ['vízilabda', 'Világliga', 'Hajós uszoda'],
  },
  {
    id: '10',
    slug: 'magyar-valogatott-vilag-eb-selejtezo-2026',
    title: 'Magyarország – Franciaország (Vb-selejtező)',
    category: 'futball',
    date: '2026-10-08',
    time: '20:45',
    venue: 'Puskás Aréna',
    city: 'Budapest',
    image: '/events/football-nt.jpg',
    description:
      'A magyar válogatott világ-bajnoki selejtezőn fogadja Franciaországot a telt Puskás Arénában! Történelmi légkör, piros-fehér-zöld tenger és óriási tét vár.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 8000, priceTo: 38000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 10000, priceTo: 48000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 9500, priceTo: 42000 },
    ],
    tags: ['futball', 'válogatott', 'Vb-selejtező', 'Puskás Aréna'],
  },
  {
    id: '11',
    slug: 'ragbi-ner-europai-kupa-budapest-2026',
    title: 'Rugby Europe Championship – Budapest',
    category: 'egyeb',
    date: '2026-03-14',
    time: '15:00',
    venue: 'Kisstadion',
    city: 'Budapest',
    image: '/events/rugby.jpg',
    description:
      'A Rugby Europe Championship meccsein Budapest ad otthont a kontinens legjobb válogatottjainak. Fizikai sport a maga tisztaságában, szenvedélyes szurkolótáborral.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 2000, priceTo: 6500 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 2200, priceTo: 7000 },
    ],
    tags: ['rögbi', 'Rugby Europe', 'válogatott'],
  },
  {
    id: '12',
    slug: 'boksz-europai-bajnoksag-budapest-2026',
    title: 'Profi Box Gála – EB Döntő Budapest',
    category: 'egyeb',
    date: '2026-05-09',
    time: '19:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/boxing.jpg',
    description:
      'Az Európai Box Bajnokság döntőjét Budapest rendezi! Négy súlycsoport döntője zajlik egyetlen estén, hatalmas szurkolói légkörben a Sportarénában.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 6000, priceTo: 28000 },
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 5500, priceTo: 24000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 7500, priceTo: 35000 },
    ],
    tags: ['boksz', 'EB', 'gála', 'döntő'],
  },
  {
    id: '13',
    slug: 'budapest-kerekparos-krit-2026',
    title: 'Budapest Classic Kerékpáros Kritérium',
    category: 'egyeb',
    date: '2026-09-06',
    time: '13:00',
    venue: 'Városliget körpálya',
    city: 'Budapest',
    image: '/events/cycling.jpg',
    description:
      'A Budapest Classic kerékpáros kritérium a Városligetben! UCI profi csapatok versengenek Budapest szívében, szurkolók sorfala között, látványos sprintekkel zárva.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 1500, priceTo: 4500 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 1800, priceTo: 5000 },
    ],
    tags: ['kerékpár', 'kritérium', 'UCI', 'Városliget'],
  },
  {
    id: '14',
    slug: 'torna-vilagkupa-budapest-2026',
    title: 'Torna Világkupa – Budapest 2026',
    category: 'atletas',
    date: '2026-10-24',
    time: '10:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/gymnastics.jpg',
    description:
      'Budapest ismét a torna Világkupa házigazdája! Férfi és női tornászok versengenek FIG Világkupa pontokért a lenyűgöző bemutató számok mellett.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 3500, priceTo: 14000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 4000, priceTo: 16000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 3800, priceTo: 14500 },
    ],
    tags: ['torna', 'Világkupa', 'FIG', 'artistika'],
  },
  {
    id: '15',
    slug: 'motogp-pannon-ring-2026',
    title: 'MotoGP – Pannon Ring 2026',
    category: 'motorsport',
    date: '2026-06-28',
    time: '14:00',
    venue: 'Pannon Ring',
    city: 'Győr',
    image: '/events/moto-gp.jpg',
    description:
      'A MotoGP Magyar Nagydíja visszatér! Marquez, Bagnaia és a világ legjobb motorosai versengenek a Pannon Ring teltházas futamán, fergeteges tempóban.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 18000, priceTo: 120000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 22000, priceTo: 145000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 20000, priceTo: 130000 },
    ],
    tags: ['MotoGP', 'motorsport', 'Pannon Ring', 'motorverseny'],
  },
  {
    id: '17',
    slug: 'budapest-triatlon-2026',
    title: 'Budapest Triatlon Verseny 2026',
    category: 'atletas',
    date: '2026-08-02',
    time: '08:00',
    venue: 'Margitsziget – Duna',
    city: 'Budapest',
    image: '/events/triathlon.jpg',
    description:
      'A Budapest Triatlon versenysorozat csúcseseménye! Az élsportolók a Duna mentén úsznak, majd kerékpároznak és futnak Budapest szívén át, lenyűgöző látványt nyújtva.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 1000, priceTo: 3500 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 1200, priceTo: 4000 },
    ],
    tags: ['triatlon', 'úszás', 'futás', 'kerékpár'],
  },
  {
    id: '18',
    slug: 'hungaroring-dtm-2026',
    title: 'DTM Magyar Forduló – Hungaroring',
    category: 'motorsport',
    date: '2026-05-16',
    time: '13:30',
    venue: 'Hungaroring',
    city: 'Mogyoród',
    image: '/events/hungaroring-f1.jpg',
    description:
      'A DTM turisztikai autóverseny sorozat is megállapodik a Hungaroringen! Gyári BMW, Audi és Porsche csapatok vetélkednek a körpályán, közel ülő nézők előtt.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 8500, priceTo: 45000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 7500, priceTo: 40000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 10000, priceTo: 52000 },
    ],
    tags: ['DTM', 'turista', 'Hungaroring', 'autóverseny'],
  },
  {
    id: '19',
    slug: 'volleyball-cev-cup-2026',
    title: 'CEV Kupa Döntő – Budapest',
    category: 'egyeb',
    date: '2026-04-05',
    time: '17:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/volleyball.jpg',
    description:
      'A CEV Kupa döntőjét Budapest rendezi! Európa legjobb röplabda csapatai csapnak össze a kontinentális kupacím megszerzéséért, fergeteges hangulat közepette.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 3000, priceTo: 9500 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 3500, priceTo: 10500 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 3200, priceTo: 10000 },
    ],
    tags: ['röplabda', 'CEV Kupa', 'döntő', 'Európa'],
  },
  {
    id: '20',
    slug: 'ujpest-honved-nb1-derby-2026',
    title: 'Újpest FC – Budapest Honvéd (NB1 Derby)',
    category: 'futball',
    date: '2026-04-19',
    time: '17:30',
    venue: 'Szusza Ferenc Stadion',
    city: 'Budapest',
    image: '/events/football-bl.jpg',
    description:
      'A Budapest fővárosi foci derby: Újpest FC fogadja a Budapest Honvédet az NB1-ben! Hatalmas rivalizáció, szurkolói tábor és garantált gólok várnak a Szusza Ferenc Stadionban.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 2500, priceTo: 8000 },
      { name: 'Jegymester.hu', url: 'https://jegymester.hu', priceFrom: 2800, priceTo: 8500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 4000, priceTo: 14000 },
    ],
    tags: ['futball', 'NB1', 'derby', 'Budapest'],
  },
  {
    id: '21',
    slug: 'fradi-playoff-el-2026',
    title: 'Ferencváros – Real Madrid (EL Playoff)',
    category: 'futball',
    date: '2026-02-19',
    time: '21:00',
    venue: 'Groupama Aréna',
    city: 'Budapest',
    image: '/events/football-nt.jpg',
    description:
      'A Ferencváros az Európa Liga playoff körében a Real Madridot fogadja! Történelmi meccs a Groupama Arénában, telt ház előtt, ahol a zöld-fehérek Európa egyik legjobb csapatával csapnak össze.',
    providers: [
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 14000, priceTo: 52000 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 18000, priceTo: 70000 },
      { name: 'StubHub', url: 'https://stubhub.com', priceFrom: 15000, priceTo: 60000 },
    ],
    tags: ['futball', 'EL', 'Ferencváros', 'Real Madrid'],
  },
  {
    id: '22',
    slug: 'usain-bolt-invitational-2026',
    title: 'Budapest Athletics Invitational 2026',
    category: 'atletas',
    date: '2026-06-12',
    time: '19:00',
    venue: 'Nemzeti Atlétikai Központ',
    city: 'Budapest',
    image: '/events/athletics.jpg',
    description:
      'A Budapest Athletics Invitational az éves atlétika szezon legfontosabb magyarországi állomása. 100m-es sprint, magasugrás, súlylökés – minden klasszikus számban a világ élmezőnye részt vesz.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 4500, priceTo: 15000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 5000, priceTo: 16500 },
      { name: 'Viagogo', url: 'https://viagogo.com', priceFrom: 6500, priceTo: 20000 },
    ],
    tags: ['atlétika', 'sprint', 'Invitational', 'NAK'],
  },
  {
    id: '23',
    slug: 'mtml-asztalitenisz-ob-2026',
    title: 'Asztalitenisz OB Döntő – Budapest',
    category: 'tenisz',
    date: '2026-03-28',
    time: '11:00',
    venue: 'Papp László Budapest Sportaréna',
    city: 'Budapest',
    image: '/events/tennis-budapest.jpg',
    description:
      'Az asztalitenisz Országos Bajnokság döntői Budapesten! Magyarország legjobb asztaliteniszezői csapnak össze a nemzeti bajnoki cím megszerzéséért, nézők ezrei előtt.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 1500, priceTo: 4500 },
      { name: 'Jegymester.hu', url: 'https://jegymester.hu', priceFrom: 1700, priceTo: 5000 },
    ],
    tags: ['asztalitenisz', 'OB', 'döntő', 'ping-pong'],
  },
  {
    id: '24',
    slug: 'szinkrousness-europa-kupa-2026',
    title: 'Szinkronúszás Európa Kupa – Budapest',
    category: 'vizisportok',
    date: '2026-05-30',
    time: '15:00',
    venue: 'Duna Aréna',
    city: 'Budapest',
    image: '/events/waterpolo.jpg',
    description:
      'A szinkronúszás Európa Kupáját a Duna Arénában rendezik! A kontinens legjobb csapatai és párjai versenyeznek a lenyűgöző szabadon választott és kötelező számokban.',
    providers: [
      { name: 'Jegy.hu', url: 'https://jegy.hu', priceFrom: 2000, priceTo: 7000 },
      { name: 'Ticketmaster', url: 'https://ticketmaster.com', priceFrom: 2500, priceTo: 8000 },
      { name: 'Eventim', url: 'https://eventim.hu', priceFrom: 2200, priceTo: 7500 },
    ],
    tags: ['szinkronúszás', 'Európa Kupa', 'Duna Aréna'],
  },
]

export const SPORT_CATEGORY_LABELS: Record<SportCategory, string> = {
  futball: 'Futball',
  motorsport: 'Motorsport',
  vizisportok: 'Vízisportok',
  uszas: 'Úszás',
  tenisz: 'Tenisz',
  kosar: 'Kosárlabda',
  jegkorong: 'Jégkorong',
  atletas: 'Atlétika & Torna',
  egyeb: 'Egyéb sportok',
}

export const SPORT_CATEGORY_COLORS: Record<SportCategory, string> = {
  futball: 'bg-green-100 text-green-800',
  motorsport: 'bg-red-100 text-red-800',
  vizisportok: 'bg-cyan-100 text-cyan-800',
  uszas: 'bg-blue-100 text-blue-800',
  tenisz: 'bg-yellow-100 text-yellow-800',
  kosar: 'bg-orange-100 text-orange-800',
  jegkorong: 'bg-sky-100 text-sky-800',
  atletas: 'bg-purple-100 text-purple-800',
  egyeb: 'bg-slate-100 text-slate-800',
}

// Legacy aliases so existing pages still compile
export type EventCategory = SportCategory
export const CATEGORY_LABELS = SPORT_CATEGORY_LABELS
export const CATEGORY_COLORS = SPORT_CATEGORY_COLORS

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('hu-HU', {
    style: 'currency',
    currency: 'HUF',
    maximumFractionDigits: 0,
  }).format(price)
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return new Intl.DateTimeFormat('hu-HU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}
