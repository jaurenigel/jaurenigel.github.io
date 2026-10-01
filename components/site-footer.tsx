import { ArrowUp, ArrowUpRight } from 'lucide-react'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
]

const elsewhere = [
  { href: 'https://github.com/iamnigelzw', label: 'GitHub' },
  { href: 'https://x.com/amnigelzw', label: 'X' },
  { href: 'https://iamnigel.co', label: 'iamnigel.co' },
]

export function SiteFooter() {
  return (
    <footer className="site-footer full-footer">
      <div className="container footer-card">
        <div className="footer-cta">
          <p className="footer-heading">Get in touch</p>
          <a className="footer-mail" href="mailto:me@iamnigel.co">
            <span>Let’s build something <em>together.</em></span>
            <span className="footer-mail-addr">
              me@iamnigel.co
              <span className="footer-mail-arrow" aria-hidden="true"><ArrowUpRight /></span>
            </span>
          </a>
        </div>

        <div className="footer-grid">
          <nav className="footer-links" aria-label="Footer">
            <span className="footer-heading">Explore</span>
            {links.map((l) => (
              <a key={l.href} href={l.href}>{l.label}<ArrowUpRight aria-hidden="true" /></a>
            ))}
          </nav>
          <div className="footer-links">
            <span className="footer-heading">Elsewhere</span>
            {elsewhere.map((l) => (
              <a key={l.href} href={l.href} {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
                {l.label}<ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} Nigel Jaure<br />Harare, Zimbabwe</span>
          <a className="to-top" href="#top" aria-label="Back to top"><ArrowUp aria-hidden="true" /></a>
        </div>

        <p className="footer-mark" aria-hidden="true">nigel jaure.</p>
      </div>
    </footer>
  )
}
