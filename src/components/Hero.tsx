import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BotanicalScatter, { WatercolorWash, GoldDust } from './BotanicalScatter'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const imageSectionRef = useRef<HTMLDivElement>(null)
  const textSectionRef = useRef<HTMLDivElement>(null)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  // Full-screen photo fades in once the splash screen clears
  useEffect(() => {
    if (reducedMotion || !imageSectionRef.current) return

    function playImageReveal() {
      gsap.from(imageSectionRef.current, { opacity: 0, scale: 1.04, duration: 1.2, ease: 'power2.out' })
    }

    const splashAlreadyDone = (window as unknown as { __splashDone?: boolean }).__splashDone
    if (splashAlreadyDone) {
      playImageReveal()
      return
    }
    const onSplashDone = () => playImageReveal()
    window.addEventListener('splash-done', onSplashDone)
    return () => window.removeEventListener('splash-done', onSplashDone)
  }, [reducedMotion])

  // Text section reveals as you scroll down to it
  useEffect(() => {
    if (reducedMotion || !textSectionRef.current) return
    const ctx = gsap.context(() => {
      gsap.from('.hero-text-badge', {
        opacity: 0,
        y: -12,
        scale: 0.85,
        duration: 0.6,
        scrollTrigger: { trigger: textSectionRef.current, start: 'top 75%' },
      })
      gsap.from('.hero-text-line', {
        opacity: 0,
        y: 24,
        duration: 0.7,
        stagger: 0.12,
        scrollTrigger: { trigger: textSectionRef.current, start: 'top 75%' },
      })
      gsap.from('.hero-text-tagline', {
        opacity: 0,
        y: 12,
        duration: 0.5,
        delay: 0.3,
        scrollTrigger: { trigger: textSectionRef.current, start: 'top 75%' },
      })
      gsap.from('.hero-text-copy', {
        opacity: 0,
        y: 12,
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: { trigger: textSectionRef.current, start: 'top 75%' },
      })
      gsap.from('.hero-text-cta', {
        opacity: 0,
        y: 12,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        scrollTrigger: { trigger: textSectionRef.current, start: 'top 75%' },
      })
    }, textSectionRef)
    return () => ctx.revert()
  }, [reducedMotion])

  function scrollToText() {
    textSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Full-screen photo — the entire first viewport */}
      <div ref={imageSectionRef} className="relative h-[62vh] min-h-[380px] sm:h-[100svh] sm:min-h-[520px] overflow-hidden">
        <div className="ken-burns absolute inset-0">
          <img
            src="/images/hero-diamond-head.jpg"
            alt="Diamond Head and Waikīkī coastline"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-kalo-dark via-black/10 to-black/20" />

        <div
          className="absolute bottom-8 right-6 sm:bottom-10 sm:right-10 h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gold text-kalo-dark flex items-center justify-center font-display text-xs sm:text-sm text-center leading-tight shadow-lg float-slow"
          style={{ ['--tilt' as string]: '-8deg' }}
        >
          Since
          <br />
          1995
        </div>

        <button
          onClick={scrollToText}
          aria-label="Scroll to learn more"
          className="press flex flex-col items-center gap-1 absolute bottom-6 left-1/2 -translate-x-1/2 text-sand/80 hover:text-gold transition-colors"
        >
          <span className="eyebrow text-[10px]">Scroll</span>
          <ChevronDown size={20} className="scroll-bounce" />
        </button>
      </div>

      {/* Text content — reveals as you scroll down */}
      <section ref={textSectionRef} className="relative bg-kalo-dark foil-texture overflow-hidden py-16 lg:py-24">
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
        <div className="relative mx-auto max-w-2xl px-5 lg:px-8 text-sand text-center">
          <div className="hero-text-badge flex items-center justify-center gap-3 mb-6">
            <img src="/images/kssl-logo.png" alt="" className="h-12 w-12 rounded-full bg-sand/95 p-1.5 shadow-lg shrink-0" />
            <p className="eyebrow text-gold">Kapiʻolani Community College</p>
          </div>

          <h1 className="font-display leading-[0.95]">
            <span className="hero-text-line block text-4xl sm:text-5xl lg:text-6xl tracking-tight">Kapiʻolani</span>
            <span className="hero-text-line block text-xl sm:text-2xl lg:text-3xl font-semibold text-plumeria mt-1">
              Service &amp; Sustainability
            </span>
            <span className="hero-text-line block text-3xl sm:text-4xl lg:text-5xl italic font-normal mt-1">
              Learning
            </span>
          </h1>

          <div className="hero-text-tagline mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wide text-sand/90">
            <span>SERVE.</span>
            <span className="text-hibiscus">●</span>
            <span>SUSTAIN.</span>
            <span className="text-hibiscus">●</span>
            <span>INSPIRE.</span>
          </div>

          <p className="hero-text-copy mt-6 text-base sm:text-lg text-sand/80 leading-relaxed mx-auto">
            KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
            from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
            academic credit, certification, and real community relationships.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/pathways"
              className="hero-text-cta press inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hibiscus text-sand font-medium shadow-lg shadow-hibiscus/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Explore the pathways <ArrowRight size={18} />
            </Link>
            <Link
              to="/service-learners-start-here"
              className="hero-text-cta press inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sand/40 text-sand hover:bg-white/10 hover:-translate-y-0.5 transition-all"
            >
              Start here as a student
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
