import { useEffect, useState } from 'react'

const SPLASH_DURATION = 1900

export default function SplashLoader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const duration = reducedMotion ? 0 : SPLASH_DURATION
    const t = setTimeout(() => {
      setHidden(true)
      ;(window as unknown as { __splashDone?: boolean }).__splashDone = true
      window.dispatchEvent(new Event('splash-done'))
    }, duration)
    if (reducedMotion) {
      ;(window as unknown as { __splashDone?: boolean }).__splashDone = true
      window.dispatchEvent(new Event('splash-done'))
    }
    return () => clearTimeout(t)
  }, [])

  if (hidden) return null

  return (
    <div className="loader-screen fixed inset-0 z-[100] bg-kalo-dark foil-texture flex flex-col items-center justify-center gap-5">
      <div className="loader-glow absolute h-72 w-72 rounded-full bg-gold/10 blur-3xl" />

      <div className="relative flex items-center justify-center" style={{ width: 220, height: 257 }}>
        <svg width="220" height="257" viewBox="0 0 120 140" fill="none" className="absolute inset-0" xmlns="http://www.w3.org/2000/svg">
          <path
            className="loader-path"
            d="M60 18
               C 52 12 42 12 35 17
               C 18 28 8 48 9 68
               C 10 94 26 114 60 132
               C 94 114 110 94 111 68
               C 112 48 102 28 85 17
               C 78 12 68 12 60 18 Z"
            stroke="#c9a24b"
            strokeWidth="1.5"
          />
        </svg>

        <div className="loader-wordmark relative text-center px-8">
          <p className="font-display text-sand text-2xl tracking-wide leading-tight">Kapiʻolani</p>
          <p className="eyebrow text-gold text-[9px] mt-2 leading-snug">
            Service &amp;<br />Sustainability Learning
          </p>
        </div>
      </div>

      <div className="loader-bar relative h-px w-32 bg-sand/15 overflow-hidden rounded-full">
        <div className="loader-bar-fill h-full bg-gold rounded-full" />
      </div>
    </div>
  )
}
