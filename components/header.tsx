'use client'

import { Moon, Sun } from 'lucide-react'

export function Header() {
  function toggleTheme() {
    const root = document.documentElement
    const dark = !(root.classList.contains('dark') ||
      (!root.classList.contains('light') && matchMedia('(prefers-color-scheme: dark)').matches))
    root.classList.remove('light', 'dark')
    root.classList.add(dark ? 'dark' : 'light')
    try { localStorage.setItem('theme', dark ? 'dark' : 'light') } catch {}
  }

  return (
    <header className="site-header">
      <div className="container nav-inner">
        <a className="wordmark" href="/">tiny detour<span className="wordmark-dot">.</span></a>
        <div className="header-right">
          <span className="header-note">the internet, briefly</span>
          <button className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
            <Moon className="theme-moon" aria-hidden="true" />
            <Sun className="theme-sun" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}
