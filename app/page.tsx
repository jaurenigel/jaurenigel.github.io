'use client'

import { useEffect, useState } from 'react'

const DESTINATION = 'https://iamnigel.co'
const REDIRECT_DELAY = 4600

const messages = [
  'Wait... why are you here?',
  'You weren\'t supposed to find this.',
  'Okay, okay. We\'ll fix that.',
]

export default function Page() {
  const [messageIndex, setMessageIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startedAt = Date.now()
    const messageTimer = window.setInterval(() => {
      setMessageIndex((current) => (current + 1) % messages.length)
    }, 1500)
    const progressTimer = window.setInterval(() => {
      setProgress(Math.min(((Date.now() - startedAt) / REDIRECT_DELAY) * 100, 100))
    }, 40)
    const redirectTimer = window.setTimeout(() => {
      window.location.replace(DESTINATION)
    }, REDIRECT_DELAY)

    return () => {
      window.clearInterval(messageTimer)
      window.clearInterval(progressTimer)
      window.clearTimeout(redirectTimer)
    }
  }, [])

  return (
    <main className="redirect-page">
      <div className="grain" aria-hidden="true" />
      <div className="orb orb-one" aria-hidden="true" />
      <div className="orb orb-two" aria-hidden="true" />

      <header className="topbar">
        <div className="mark" aria-label="A tiny detour">
          <span className="mark-dot" />
          <span>tiny detour</span>
        </div>
        <span className="topbar-note">the internet, briefly</span>
      </header>

      <section className="message-card" aria-live="polite">
        <div className="eyebrow">
          <span className="status-dot" />
          <span>rerouting in progress</span>
        </div>

        <div className="message-wrap">
          <p className="message-number">0{messageIndex + 1}</p>
          <h1 key={messageIndex} className="message-title">
            {messages[messageIndex]}
          </h1>
        </div>

        <p className="supporting-copy">
          We&apos;re sending you somewhere more interesting in just a moment.
        </p>

        <div className="progress-area">
          <div className="progress-meta">
            <span>finding the good stuff</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="progress-track" role="progressbar" aria-label="Redirect progress" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <a className="destination-link" href={DESTINATION}>
          <span>Take me there</span>
          <span className="arrow" aria-hidden="true">↗</span>
        </a>
      </section>

      <footer className="footer">
        <span>no cookies. no nonsense.</span>
        <span className="footer-line" aria-hidden="true" />
        <span>destination: iamnigel.co</span>
      </footer>
    </main>
  )
}
