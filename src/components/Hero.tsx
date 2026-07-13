import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import BotanicalScatter, { GoldDust } from './BotanicalScatter'

export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )

  useEffect(() => {
    if (reducedMotion || !imageRef.current || !cardRef.current) return

    function playEntrance() {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from(imageRef.current, { opacity: 0, scale: 1.08, duration: 1.3 })
        .from(cardRef.current, { opacity: 0, y: 60, duration: 0.9 }, '-=0.6')
        .from('.hero-badge', { opacity: 0, y: -10, scale: 0.85, duration: 0.5 }, '-=0.5')
        .from('.hero-line', { opacity: 0, y: 22, duration: 0.6, stagger: 0.1 }, '-=0.3')
        .from('.hero-tagline', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-copy', { opacity: 0, y: 10, duration: 0.5 }, '-=0.3')
        .from('.hero-cta', { opacity: 0, y: 10, duration: 0.5, stagger: 0.08 }, '-=0.3')
    }

    const splashAlreadyDone = (window as unknown as { __splashDone?: boolean }).__splashDone
    if (splashAlreadyDone) {
      playEntrance()
      return
    }
    const onSplashDone = () => playEntrance()
    window.addEventListener('splash-done', onSplashDone)
    return () => window.removeEventListener('splash-done', onSplashDone)
  }, [reducedMotion])

  return (
    <div className="relative">
      {/* Bold cropped photo, fixed height — a statement image, not a document scan */}
      <div ref={imageRef} className="relative h-[62vh] sm:h-[75vh] lg:h-[82vh] overflow-hidden bg-kalo-dark">
        <div className="ken-burns absolute inset-0">
          <img
            src="/images/hero-diamond-head.jpg"
            alt="Diamond Head and Waikīkī coastline"
            className="w-full h-full object-cover"
            style={{ objectPosition: '50% 38%' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-kalo-dark via-kalo-dark/10 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-transparent" />
      </div>

      {/* Floating gold-edged card bridging the photo into the page */}
      <div className="relative -mt-24 sm:-mt-32 lg:-mt-40 z-10 px-5 lg:px-8">
        <div
          ref={cardRef}
          className="relative mx-auto max-w-4xl rounded-3xl bg-kalo-dark foil-texture frame-shadow gold-hairline overflow-hidden px-6 py-10 sm:px-14 sm:py-14 text-center"
        >
          <GoldDust count={10} />
          <BotanicalScatter
            lineColor="#c9a24b"
            items={[
              { type: 'taro-outline', bottom: '-20%', left: '-8%', size: 180, rotate: -15, opacity: 0.22 },
              { type: 'fern', top: '-10%', right: '-5%', size: 150, rotate: 10, opacity: 0.24 },
            ]}
          />
          <div className="relative">
            <div className="hero-badge flex items-center justify-center gap-3 mb-6">
              <img src="/images/kssl-logo.png" alt="" className="h-12 w-12 rounded-full bg-sand/95 p-1.5 shadow-lg shrink-0" />
              <p className="eyebrow text-gold">Kapiʻolani Community College</p>
            </div>

            <h1 className="font-display leading-[0.95] text-sand">
              <span className="hero-line block text-4xl sm:text-5xl lg:text-6xl tracking-tight">Kapiʻolani</span>
              <span className="hero-line block text-xl sm:text-2xl lg:text-3xl font-semibold text-plumeria mt-1">
                Service &amp; Sustainability
              </span>
              <span className="hero-line block text-3xl sm:text-4xl lg:text-5xl italic font-normal mt-1">
                Learning
              </span>
            </h1>

            <div className="hero-tagline mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wide text-sand/90">
              <span>SERVE.</span>
              <span className="text-hibiscus">●</span>
              <span>SUSTAIN.</span>
              <span className="text-hibiscus">●</span>
              <span>INSPIRE.</span>
            </div>

            <p className="hero-copy mt-6 max-w-lg mx-auto text-base sm:text-lg text-sand/80 leading-relaxed">
              KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
              from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
              academic credit, certification, and real community relationships.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </div>
      </div>
    </div>
  )
}
