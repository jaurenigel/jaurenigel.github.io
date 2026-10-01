const HOME = 'https://iamnigel.co'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <a className="wordmark small footer-brand" href={HOME} aria-label="iamnigel.co">iamnigel<span className="wordmark-dot">.</span>co</a>
        <span>no cookies. no nonsense.</span>
        <span>destination: iamnigel.co</span>
      </div>
    </footer>
  )
}
