import type { Metadata } from 'next'
import { Header } from '@/components/header'
import { SiteFooter } from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'About — Nigel',
  description: 'Nigel Jaure is a full-stack developer and AI engineer based in Harare, Zimbabwe.',
}

const facts = [
  { label: 'Based in', value: 'Harare, Zimbabwe' },
  { label: 'Experience', value: '7+ years' },
  { label: 'Role', value: 'Full-stack developer & AI engineer' },
]

const skills = ['Laravel', 'Flutter', 'Python', 'Mobile apps', 'Full-stack web', 'USSD', 'WhatsApp bots', 'AI engineering']

export default function Page() {
  return (
    <div className="page" id="top">
      <Header nav />
      <main className="listing-main">
        <section className="container listing">
          <p className="eyebrow"><span className="status-dot" /> about</p>
          <h1 className="listing-title">Hi, I&apos;m Nigel<em>.</em></h1>
          <p className="supporting-copy about-lead">
            I&apos;m a Zimbabwean software engineer based in Harare. For over seven years I&apos;ve been
            building full-stack web platforms and mobile apps, and now I&apos;m putting AI to work inside them.
          </p>

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.label} className="fact">
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>

          <div className="about-block now">
            <h2 className="footer-heading">Currently</h2>
            <p className="now-role">Full-stack developer at <a href="https://contipay.co.zw" target="_blank" rel="noopener noreferrer">ContiPay <span aria-hidden="true">↗</span></a></p>
            <p className="supporting-copy">Building web and mobile solutions, USSD services, WhatsApp bots and more.</p>
          </div>

          <div className="about-block">
            <h2 className="footer-heading">What I work with</h2>
            <ul className="chips">
              {skills.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>

          <div className="about-block about-cta">
            <h2>Have something in mind?</h2>
            <p className="supporting-copy">Tell me about it. I&apos;m always up for a good project or a quick hello.</p>
            <div className="hero-links">
              <a className="button" href="mailto:me@iamnigel.co">me@iamnigel.co <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
