import { Header } from '@/components/header'
import { SiteFooter } from '@/components/site-footer'
import type { Project } from '@/lib/content'

type Props = {
  eyebrow: string
  title: string
  intro: string
  items: Project[]
  emptyTitle: string
  emptyCopy: string
}

export function Listing({ eyebrow, title, intro, items, emptyTitle, emptyCopy }: Props) {
  return (
    <div className="page" id="top">
      <Header nav />
      <main className="listing-main">
        <section className="container listing">
          <p className="eyebrow"><span className="status-dot" /> {eyebrow}</p>
          <h1 className="listing-title">{title}</h1>
          <p className="supporting-copy">{intro}</p>

          {items.length === 0 ? (
            <div className="empty-state">
              <p className="empty-mark" aria-hidden="true">∅</p>
              <h2>{emptyTitle}</h2>
              <p>{emptyCopy}</p>
            </div>
          ) : (
            <ul className="item-grid">
              {items.map((p) => (
                <li key={p.title} className={p.shots ? 'item-card has-shots' : 'item-card'}>
                  <div className="item-meta"><span>{p.year}</span><span>{p.tags.join(' · ')}</span></div>
                  <h2>{p.href ? <a href={p.href}>{p.title} <span aria-hidden="true">↗</span></a> : p.title}</h2>
                  <p>{p.summary}</p>
                  {p.links && (
                    <div className="item-links">
                      {p.links.map((l) => (
                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="item-link">
                          {l.label} <span aria-hidden="true">↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                  {p.shots && (
                    <div className="shots" tabIndex={0} aria-label={`${p.title} screenshots`}>
                      {p.shots.map((s) => (
                        <figure key={s.light} className="shot">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={s.light} alt={s.alt} loading="lazy" className={s.dark ? 'shot-light' : undefined} />
                          {s.dark && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img src={s.dark} alt="" aria-hidden="true" loading="lazy" className="shot-dark" />
                          )}
                        </figure>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
