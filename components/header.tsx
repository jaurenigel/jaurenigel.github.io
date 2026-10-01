'use client'

import { ArrowUpRight, Moon, Sun } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const links = [
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/products', label: 'Products' },
  { href: '/about', label: 'About' },
]

function toggleTheme() {
  const root = document.documentElement
  const dark = !(root.classList.contains('dark') ||
    (!root.classList.contains('light') && matchMedia('(prefers-color-scheme: dark)').matches))
  root.classList.remove('light', 'dark')
  root.classList.add(dark ? 'dark' : 'light')
  try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
}

function ThemeToggle() {
  return (
    <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
      <Moon className="theme-moon" aria-hidden="true" />
      <Sun className="theme-sun" aria-hidden="true" />
    </button>
  )
}

export function Header({ nav = false }: { nav?: boolean }) {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  // Close the menu on navigation, Escape, or when growing past the mobile breakpoint.
  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const mq = matchMedia('(min-width: 701px)')
    const onMq = () => mq.matches && setOpen(false)
    document.documentElement.style.overflow = 'hidden'
    addEventListener('keydown', onKey)
    mq.addEventListener('change', onMq)
    return () => {
      document.documentElement.style.overflow = ''
      removeEventListener('keydown', onKey)
      mq.removeEventListener('change', onMq)
    }
  }, [open])

  if (!nav) {
    return (
      <header className="site-header">
        <div className="container nav-inner">
          <a className="wordmark" href="/">tiny detour<span className="wordmark-dot">.</span></a>
          <div className="header-right">
            <span className="header-note">the internet, briefly</span>
            <ThemeToggle />
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className={open ? 'site-header site-header--nav is-open' : 'site-header site-header--nav'}>
      <div className="container">
        <div className="menu-sheet" id="menu-sheet" aria-hidden={!open} inert={!open}>
          <nav className="menu-links" aria-label="Mobile">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} style={{ '--i': i } as React.CSSProperties}
                aria-current={pathname === l.href ? 'page' : undefined}>
                <span className="menu-num">0{i + 1}</span>
                <span className="menu-label">{l.label}</span>
                <ArrowUpRight aria-hidden="true" />
              </a>
            ))}
          </nav>
          <p className="menu-foot">Harare, Zimbabwe · full-stack &amp; AI engineer</p>
        </div>

        <div className="nav-pill">
          <a className="wordmark" href="/about">nigel jaure<span className="wordmark-dot">.</span></a>
          <nav className="site-nav" aria-label="Main">
            {links.map((l) => (
              <a key={l.href} href={l.href} aria-current={pathname === l.href ? 'page' : undefined}>{l.label}</a>
            ))}
          </nav>
          <div className="pill-actions">
            <ThemeToggle />
            <button
              className="menu-button"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="menu-sheet"
              onClick={() => setOpen((o) => !o)}
            >
              <span /><span />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
