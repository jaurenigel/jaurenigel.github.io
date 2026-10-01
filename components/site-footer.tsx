export function SiteFooter() {
  return (
    <footer className="site-footer full-footer">
      <div className="container full-footer-inner">
        <div className="full-footer-brand">
          <a className="wordmark footer-brand" href="/about">nigel jaure<span className="wordmark-dot">.</span></a>
          <p>Designing and building software.</p>
        </div>
        <nav className="full-footer-col" aria-label="Footer">
          <span className="footer-heading">Explore</span>
          <a href="/portfolio">Portfolio</a>
          <a href="/products">Products</a>
          <a href="/about">About</a>
        </nav>
        <div className="full-footer-col">
          <span className="footer-heading">Contact</span>
          <a href="mailto:me@iamnigel.co">me@iamnigel.co</a>
        </div>
      </div>
      <div className="container full-footer-base">
        <span>© {new Date().getFullYear()} Nigel. All rights reserved.</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  )
}
