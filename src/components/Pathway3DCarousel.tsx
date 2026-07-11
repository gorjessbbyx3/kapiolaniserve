import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { pathways } from '../data/pathways'
import PathwayMarker from './PathwayMarker'
import BotanicalScatter, { WatercolorWash, GoldDust } from './BotanicalScatter'

gsap.registerPlugin(ScrollTrigger)

export default function Pathway3DCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion || !sectionRef.current || !ringRef.current) return

    const count = pathways.length
    const step = 360 / count
    const isMobile = window.innerWidth < 640
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024
    const radius = isMobile ? 230 : isTablet ? 320 : 420
    const cardW = isMobile ? 190 : isTablet ? 230 : 260
    const cardH = isMobile ? 260 : isTablet ? 320 : 380

    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const angle = i * step
      card.style.width = `${cardW}px`
      card.style.height = `${cardH}px`
      card.style.left = `${-cardW / 2}px`
      card.style.top = `${-cardH / 2}px`
      card.style.transform = `rotateY(${angle}deg) translateZ(${radius}px)`
    })

    const state = { rotation: 0 }

    function updateCardFocus() {
      cardRefs.current.forEach((card, i) => {
        if (!card) return
        const angle = i * step
        let effective = (angle + state.rotation) % 360
        if (effective > 180) effective -= 360
        if (effective < -180) effective += 360
        const closeness = 1 - Math.min(Math.abs(effective) / 180, 1)
        const opacity = 0.35 + closeness * 0.65
        const scale = 0.82 + closeness * 0.18
        card.style.opacity = String(opacity)
        card.style.setProperty('--card-scale', String(scale))
      })
    }

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=2500',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        state.rotation = -self.progress * 360 * 1.4
        if (ringRef.current) {
          ringRef.current.style.transform = `rotateY(${state.rotation}deg)`
        }
        updateCardFocus()
      },
    })

    updateCardFocus()

    return () => {
      trigger.kill()
    }
  }, [])

  if (reducedMotion) {
    return (
      <section className="relative py-20 overflow-hidden bg-kalo-dark text-sand">
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow text-gold mb-3">Seven trailheads, one journey</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl">Which pathway is yours?</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {pathways.map((p) => (
              <Link
                key={p.slug}
                to={`/pathways/${p.slug}`}
                className="card-lift rounded-2xl p-4 sm:p-6 flex flex-col gap-2 sm:gap-4 border border-sand/10"
                style={{ backgroundColor: `${p.color}dd` }}
              >
                <PathwayMarker marker={p.marker} color="rgba(255,255,255,0.2)" size="sm" />
                <h3 className="font-display text-sm sm:text-lg leading-snug">{p.name}</h3>
                <p className="hidden sm:block text-xs text-sand/75 leading-relaxed">{p.short}</p>
                <span className="mt-auto text-xs font-medium text-gold">View →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-kalo-dark foil-texture text-sand flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-kalo-dark via-kalo-dark to-[#0f1a14]" />
      <WatercolorWash color="#1c6b72" size={420} top="-10%" left="-10%" opacity={0.18} />
      <WatercolorWash color="#c9a24b" size={300} bottom="-15%" right="-8%" opacity={0.12} />
      <GoldDust count={16} seedOffset={80} />
      <BotanicalScatter
        lineColor="#c9a24b"
        items={[
          { type: 'taro-outline', top: '6%', left: '4%', size: 150, rotate: -12, opacity: 0.22 },
          { type: 'hibiscus-outline', bottom: '8%', right: '6%', size: 110, rotate: 10, opacity: 0.22, delay: 1.3 },
          { type: 'fern', top: '2%', right: '4%', size: 150, rotate: 100, opacity: 0.2, delay: 0.4 },
        ]}
      />
      <div className="z-10 text-center px-5 absolute top-14 sm:top-20 left-0 right-0">
        <p className="eyebrow text-gold mb-3">Seven trailheads, one journey</p>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl mb-2">Which pathway is yours?</h2>
        <p className="text-sand/60 text-sm">
          Keep scrolling to spin the wheel, or{' '}
          <Link to="/become-certified" className="text-gold underline underline-offset-4 hover:text-plumeria">
            go straight to becoming certified
          </Link>
        </p>
      </div>

      <div className="perspective-1200 absolute inset-0 flex items-center justify-center">
        <div ref={ringRef} className="preserve-3d relative" style={{ width: 1, height: 1 }}>
          {pathways.map((p, i) => (
            <div
              key={p.slug}
              ref={(el) => {
                cardRefs.current[i] = el
              }}
              className="absolute preserve-3d"
              style={{
                width: 260,
                height: 380,
                left: -130,
                top: -190,
                transform: 'translateZ(0)',
              }}
            >
              <Link
                to={`/pathways/${p.slug}`}
                className="overflow-hidden block w-full h-full rounded-2xl p-6 flex flex-col gap-3 border border-gold/30 shadow-[0_0_30px_-8px_rgba(201,162,75,0.25)] backdrop-blur-sm transition-transform hover:scale-[1.03]"
                style={{
                  backgroundColor: `${p.color}dd`,
                  transform: 'scale(var(--card-scale, 1))',
                }}
              >
                <PathwayMarker marker={p.marker} color="rgba(255,255,255,0.2)" />
                <h3 className="font-display text-lg leading-snug">{p.name}</h3>
                <p className="text-xs text-sand/75 leading-relaxed line-clamp-3">{p.short}</p>
                <span className="mt-auto text-xs font-medium text-gold">View pathway →</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
