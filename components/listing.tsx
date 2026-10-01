import { ArrowUpRight, Globe, Smartphone } from 'lucide-react'
import type { CSSProperties } from 'react'
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

const pad = (n: number) => String(n).padStart(2, '0')

export function Listing({ eyebrow, title, intro, items, emptyTitle, emptyCopy }: Props) {
  return (
    <div className="page" id="top">
      <Header nav />
      <main className="listing-main">
        <section className="container listing">
          <p className="eyebrow"><span className="status-dot" /> {eyebrow}</p>
          <div className="listing-head">
            <h1 className="listing-title">{title}</h1>
            {items.length > 0 && <p className="listing-count">{pad(items.length)} <span>projects</span></p>}
          </div>
          <p className="supporting-copy">{intro}</p>

          {items.length === 0 ? (
            <div className="empty-state">
              <p className="empty-mark" aria-hidden="true">∅</p>
              <h2>{emptyTitle}</h2>
              <p>{emptyCopy}</p>
            </div>
          ) : (
            <ol className="projects">
              {items.map((p, i) => (
                <li
                  key={p.title}
                  className="project"
                  style={{ '--glow': p.accent ?? 'var(--accent)', '--ratio': p.ratio ?? '1080 / 2106' } as CSSProperties}
                >
                  <div className="project-info">
                    <span className="project-index">{pad(i + 1)}</span>
                    <h2 className="project-title">
                      {p.href ? <a href={p.href}>{p.title}</a> : p.title}
                    </h2>
                    <ul className="pills" aria-label="Platforms">
                      <li className="pill pill-year">{p.year}</li>
                      {p.tags.map((t) => <li key={t} className="pill">{t}</li>)}
                    </ul>
                    <p className="project-summary">{p.summary}</p>
                    {p.links && (
                      <div className="item-links">
                        {p.links.map((l) => (
                          <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="item-link">
                            {l.label === 'Website' || l.label === 'Web app' ? <Globe size={14} aria-hidden="true" /> : <Smartphone size={14} aria-hidden="true" />}
                            {l.label}
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                  {p.shots && (
                    <div className="project-stage">
                      <div className="shots" tabIndex={0} role="group" aria-label={`${p.title} screenshots`}>
                        {p.shots.map((s) => (
                          <figure key={s.light} className="shot">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={s.light} alt={s.alt} loading="lazy" decoding="async" className={s.dark ? 'shot-light' : undefined} />
                            {s.dark && (
                              // eslint-disable-next-line @next/next/no-img-element
                              <img src={s.dark} alt="" aria-hidden="true" loading="lazy" decoding="async" className="shot-dark" />
                            )}
                          </figure>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ol>
          )}
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
