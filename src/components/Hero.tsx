import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import BotanicalScatter, { WatercolorWash, GoldDust } from './BotanicalScatter'

export default function Hero() {
  const rootRef = useRef<HTMLDivElement>(null)
  const frameWrapRef = useRef<HTMLDivElement>(null)
  const frameInnerRef = useRef<HTMLDivElement>(null)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  // Grand-entrance reveal — waits for the splash screen to clear first
  useEffect(() => {
    if (reducedMotion || !rootRef.current) return

    function playEntrance() {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
        tl.from('.hero-badge', { opacity: 0, y: -12, scale: 0.8, duration: 0.6 })
          .from('.hero-line', { opacity: 0, y: 28, duration: 0.7, stagger: 0.12 }, '-=0.35')
          .from('.hero-tagline', { opacity: 0, y: 12, duration: 0.5 }, '-=0.25')
          .from('.hero-copy', { opacity: 0, y: 12, duration: 0.5 }, '-=0.3')
          .from('.hero-cta', { opacity: 0, y: 12, duration: 0.5, stagger: 0.1 }, '-=0.3')
          .from(
            frameWrapRef.current,
            { opacity: 0, scale: 0.92, rotateY: -8, rotateX: 4, duration: 1, ease: 'power2.out' },
            '-=0.9'
          )
          .from('.hero-scrollcue', { opacity: 0, duration: 0.6 }, '-=0.2')
      }, rootRef)
      return () => ctx.revert()
    }

    const splashAlreadyDone = (window as unknown as { __splashDone?: boolean }).__splashDone
    if (splashAlreadyDone) {
      return playEntrance()
    }
    let cleanup: (() => void) | undefined
    const onSplashDone = () => {
      cleanup = playEntrance()
    }
    window.addEventListener('splash-done', onSplashDone)
    return () => {
      window.removeEventListener('splash-done', onSplashDone)
      cleanup?.()
    }
  }, [reducedMotion])

  // Cursor-follow 3D tilt on the framed photo — desktop pointer only
  useEffect(() => {
    if (reducedMotion) return
    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const wrap = frameWrapRef.current
    const inner = frameInnerRef.current
    if (!canHover || !wrap || !inner) return

    function handleMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      gsap.to(inner, {
        rotateY: px * 10,
        rotateX: -py * 10,
        duration: 0.6,
        ease: 'power2.out',
        transformPerspective: 900,
      })
    }
    function handleLeave() {
      gsap.to(inner!, { rotateY: 0, rotateX: 0, duration: 0.8, ease: 'power3.out' })
    }
    wrap.addEventListener('mousemove', handleMove)
    wrap.addEventListener('mouseleave', handleLeave)
    return () => {
      wrap.removeEventListener('mousemove', handleMove)
      wrap.removeEventListener('mouseleave', handleLeave)
    }
  }, [reducedMotion])

  function scrollToNext() {
    const next = rootRef.current?.nextElementSibling
    next?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section ref={rootRef} className="relative bg-kalo-dark foil-texture overflow-hidden">
      <WatercolorWash color="#1c6b72" size={480} top="-15%" right="-10%" opacity={0.22} />
      <WatercolorWash color="#c9a24b" size={360} bottom="-20%" left="-8%" opacity={0.12} />
      <GoldDust count={14} />
      <BotanicalScatter
        lineColor="#c9a24b"
        items={[
          { type: 'taro-outline', bottom: '-14%', left: '-6%', size: 260, rotate: -15, opacity: 0.28 },
          { type: 'fern', top: '4%', right: '3%', size: 200, rotate: 8, opacity: 0.3 },
          { type: 'hibiscus-outline', bottom: '8%', right: '10%', size: 60, rotate: -6, opacity: 0.3, delay: 1.4 },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-12 pb-16 lg:pt-20 lg:pb-16 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
        {/* Caption panel — all text lives here, never on top of the photo */}
        <div className="order-2 lg:order-1 text-sand">
          <div className="hero-badge flex items-center gap-3 mb-7">
            <img src="/images/kssl-logo.png" alt="" className="h-12 w-12 rounded-full bg-sand/95 p-1.5 shadow-lg shrink-0" />
            <p className="eyebrow text-gold">Kapiʻolani Community College</p>
          </div>

          <h1 className="font-display leading-[0.95]">
            <span className="hero-line block text-4xl sm:text-5xl lg:text-6xl tracking-tight">Kapiʻolani</span>
            <span className="hero-line block text-xl sm:text-2xl lg:text-3xl font-semibold text-plumeria mt-1">
              Service &amp; Sustainability
            </span>
            <span className="hero-line block text-3xl sm:text-4xl lg:text-5xl italic font-normal mt-1">Learning</span>
          </h1>

          <div className="hero-tagline mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wide text-sand/90">
            <span>SERVE.</span>
            <span className="text-hibiscus">●</span>
            <span>SUSTAIN.</span>
            <span className="text-hibiscus">●</span>
            <span>INSPIRE.</span>
          </div>

          <p className="hero-copy mt-6 max-w-md text-base sm:text-lg text-sand/80 leading-relaxed">
            KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
            from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
            academic credit, certification, and real community relationships.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/pathways"
              className="hero-cta press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hibiscus text-sand font-medium shadow-lg shadow-hibiscus/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Explore the pathways <ArrowRight size={18} />
            </Link>
            <Link
              to="/service-learners-start-here"
              className="hero-cta press inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sand/40 text-sand hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Start here as a student
            </Link>
          </div>
        </div>

        {/* Framed photo — always fully visible, object-contain, no crop, tilts gently toward your cursor */}
        <div ref={frameWrapRef} className="order-1 lg:order-2 relative perspective-1200">
          <div ref={frameInnerRef} className="preserve-3d">
            <div className="frame-shadow rounded-2xl bg-gradient-to-br from-koa via-kalo to-kalo-dark p-3 sm:p-4">
              <div className="rounded-xl border border-gold/40 p-1.5 bg-kalo-dark">
                <div className="relative rounded-lg overflow-hidden">
                  <div className="ken-burns">
                    <img
                      src="/images/hero-diamond-head.jpg"
                      alt="Diamond Head and Waikīkī coastline"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.25)] pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gold text-kalo-dark flex items-center justify-center font-display text-xs text-center leading-tight shadow-lg float-slow"
            style={{ ['--tilt' as string]: '-8deg' }}
          >
            Since
            <br />
            1995
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        aria-label="Scroll to next section"
        className="hero-scrollcue press hidden sm:flex absolute bottom-5 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-sand/60 hover:text-gold transition-colors"
      >
        <span className="eyebrow text-[10px]">Scroll</span>
        <ChevronDown size={18} className="scroll-bounce" />
      </button>
    </section>
  )
}
