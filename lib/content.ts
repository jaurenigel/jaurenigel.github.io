export type ProjectLink = { label: string; href: string }

export type Shot = {
  alt: string
  light: string
  dark?: string // when set, the shot follows the site theme
}

export type Project = {
  title: string
  summary: string
  year: string
  tags: string[]
  href?: string
  links?: ProjectLink[]
  shots?: Shot[]
}

const voucherShot = (name: string, alt: string): Shot => ({
  alt,
  light: `/projects/contipay-voucher-${name}-light.webp`,
  dark: `/projects/contipay-voucher-${name}-dark.webp`,
})

const agentShot = (name: string, alt: string): Shot => ({
  alt: `ContiPay Agent — ${alt}`,
  light: `/projects/contipay-agent-${name}-light.webp`,
  dark: `/projects/contipay-agent-${name}-dark.webp`,
})

// Add portfolio entries here.
export const projects: Project[] = [
  {
    title: 'ContiPay Voucher',
    summary:
      'Buy a voucher for any mobile number, top up Econet and NetOne airtime, buy ZESA tokens, or redeem a voucher straight to EcoCash, InnBucks or O’mari — on the web and on Android, with a light and dark theme.',
    year: '2026',
    tags: ['Web', 'Android', 'Payments'],
    links: [
      { label: 'Web app', href: 'https://voucher.contipay.co.zw/' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.contipay.contipayvoucher' },
    ],
    shots: [
      voucherShot('voucher', 'ContiPay Voucher — buy a voucher'),
      voucherShot('airtime', 'ContiPay Voucher — buy airtime'),
      voucherShot('zesa', 'ContiPay Voucher — buy ZESA tokens'),
      voucherShot('redeem', 'ContiPay Voucher — redeem a voucher'),
      voucherShot('history', 'ContiPay Voucher — transaction history'),
    ],
  },
  {
    title: 'Dynamos FC',
    summary:
      'The official Dynamos FC website plus iOS and Android apps — next match, upcoming fixtures, league tables and quick services in one place — with a WhatsApp bot that lets supporters buy airtime from chat.',
    year: '2026',
    tags: ['Web', 'iOS', 'Android', 'WhatsApp'],
    links: [
      { label: 'Website', href: 'https://dynamosfc.africa/' },
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.contipay.dynamosfc' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/dynamos-fc/id6761410278' },
    ],
    shots: [
      ['home', 'home, next match and upcoming fixtures'],
      ['fixtures', 'fixtures and results'],
      ['league', 'league table'],
      ['news', 'club news'],
      ['gallery', 'photo gallery'],
      ['players', 'players'],
    ].map(([n, a]) => ({ alt: `Dynamos FC app — ${a}`, light: `/projects/dynamos-app-${n}.webp` })),
  },
  {
    title: 'ContiPay Agent',
    summary: 'The ContiPay voucher system for agents. Agents run their counter from one app: top up float, sell ContiPay vouchers, ZESA tokens and Econet or NetOne airtime, and follow every sale in statements and the ledger.',
    year: 'Live',
    tags: ['iOS', 'Android', 'Payments'],
    links: [
      { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.contipay.contipay_voucher_system' },
      { label: 'App Store', href: 'https://apps.apple.com/zw/app/contipay-agent/id6443781008' },
    ],
    shots: [
      agentShot('home', 'float balance and daily takings'),
      agentShot('float', 'request float'),
      agentShot('activity', 'activity and statements'),
      agentShot('sell', 'sell vouchers, ZESA and airtime'),
    ],
  },
]

// Software products shipped. Empty for now.
export const products: Project[] = []
