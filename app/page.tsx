'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const DESTINATION = 'https://iamnigel.co'
const REDIRECT_DELAY = 4600

const messages = [
  'Wait... why are you here?',
  'You weren\'t supposed to find this.',
  'Okay, okay. We\'ll fix that.',
]

const MESSAGE_INTERVAL = 1500
const LEAVE_DURATION = 700

export default function Page() {
  const [elapsed, setElapsed] = useState(0)
  const [paused, setPaused] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const elapsedRef = useRef(0)

  const progress = Math.min((elapsed / REDIRECT_DELAY) * 100, 100)
  const messageIndex = Math.floor(elapsed / MESSAGE_INTERVAL) % messages.length

  const leave = useCallback(() => {
    setLeaving(true)
    window.setTimeout(() => window.location.replace(DESTINATION), LEAVE_DURATION)
  }, [])

  useEffect(() => {
    if (paused || leaving) return
    let frame = 0
    let last = performance.now()
    const tick = (now: number) => {
      const next = Math.min(elapsedRef.current + (now - last), REDIRECT_DELAY)
      last = now
      elapsedRef.current = next
      setElapsed(next)
      if (next >= REDIRECT_DELAY) leave()
      else frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [paused, leaving, leave])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !(e.target instanceof HTMLButtonElement || e.target instanceof HTMLAnchorElement)) {
        e.preventDefault()
        setPaused((p) => !p)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className={`page${leaving ? ' is-leaving' : ''}`}>
      <Header />
      <main>
        <section className="detour container" aria-live="polite">
          <p className="eyebrow"><span className={`status-dot${paused ? ' is-paused' : ''}`} /> {paused ? 'redirect paused' : 'rerouting in progress'}</p>
          <p className="message-number">0{messageIndex + 1}</p>
          <h1 key={messageIndex} className="message-title">{messages[messageIndex]}</h1>
          <p className="supporting-copy">
            We&apos;re sending you somewhere more interesting in just a moment.
          </p>

          <div className="progress-area">
            <div className="progress-meta">
              <span>finding the good stuff</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="progress-track" role="progressbar" aria-label="Redirect progress" aria-valuenow={Math.round(progress)} aria-valuemin={0} aria-valuemax={100}>
              <div className="progress-fill" style={{ transform: `scaleX(${progress / 100})` }} />
            </div>
          </div>

          <div className="hero-links">
            <a className="button" href={DESTINATION} onClick={(e) => { e.preventDefault(); leave() }}>Take me there <span aria-hidden="true">↗</span></a>
            <button className="text-link pause-button" type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>
              {paused ? 'Resume redirect' : 'Pause redirect'} <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span>
            </button>
          </div>
          <div className="hero-mark" aria-hidden="true"><span>09</span><span>⌁</span><span>26</span></div>
        </section>
      </main>
      <Footer />
      <div className="leave-veil" aria-hidden="true" />
    </div>
  )
}
