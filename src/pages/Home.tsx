import { Link } from 'react-router-dom'
import { ArrowRight, Users, Sprout, Calendar } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import BotanicalScatter, { WatercolorWash, GoldDust, OrnamentDivider } from '../components/BotanicalScatter'
import Pathway3DCarousel from '../components/Pathway3DCarousel'
import Hero from '../components/Hero'

const programs = [
  {
    name: 'Pohukaina Food Pantry',
    to: '/pohukaina-food-pantry',
    blurb: 'On-campus food security for KCC students.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/pohukaina-diaper-bank-fall-2024.jpg',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    name: 'Māla Māunuunu',
    to: '/mala-maunuunu',
    blurb: 'The campus garden anchoring hands-on Environment pathway work.',
    photo: '/images/programs/mala-maunuunu-workday.jpg',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    name: 'KCC Ecology Club',
    to: '/kcc-ecology-club',
    blurb: 'Student-led restoration days and sustainability advocacy.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/kapiolani-community-college-ecology-club-1a_orig.jpg',
    span: 'lg:col-span-1 lg:row-span-1',
  },
  {
    name: 'MINA — Mālama I Nā Ahupuaʻa',
    to: '/mina',
    blurb: 'An intercollegiate gathering rooted in ahupuaʻa-based stewardship.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/mina-1_orig.jpg',
    span: 'lg:col-span-2 lg:row-span-1',
  },
]

const stats = [
  { icon: Calendar, value: 'Since 1995', label: '30 years of student service' },
  { icon: Sprout, value: '7', label: 'Service-learning pathways' },
  { icon: Users, value: '60+', label: 'Community partner organizations' },
]

export default function Home() {
  return (
    <div>
      {/* Hero — bold cropped photo, floating gold card, entrance animation */}
      <Hero />

      {/* Trust bar — Carnegie seal + real program stats */}
      <section className="relative bg-sand-deep py-10 sm:py-14 overflow-hidden">
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[{ type: 'taro-outline', top: '-20%', right: '38%', size: 140, rotate: 8, opacity: 0.1 }]}
        />
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <div className="card-lift gold-hairline rounded-2xl bg-white overflow-hidden grid grid-cols-3 divide-x divide-kalo/10">
            {stats.map((s, i) => (
              <div key={s.label} className="flex flex-col items-center text-center gap-1.5 sm:gap-2 px-2 sm:px-5 py-5 sm:py-6">
                <span
                  className="h-8 w-8 sm:h-11 sm:w-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${['#2f4a3c', '#1c6b72', '#d43d51'][i]}14` }}
                >
                  <s.icon size={16} className="sm:hidden" style={{ color: ['#2f4a3c', '#1c6b72', '#d43d51'][i] }} strokeWidth={1.75} />
                  <s.icon size={20} className="hidden sm:block" style={{ color: ['#2f4a3c', '#1c6b72', '#d43d51'][i] }} strokeWidth={1.75} />
                </span>
                <p className="font-display text-sm sm:text-lg text-kalo leading-none">{s.value}</p>
                <p className="text-[10px] sm:text-xs text-ink/55 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 gold-hairline rounded-2xl bg-white/70 px-4 py-4 sm:px-8 sm:py-6 flex items-center gap-4 sm:gap-5 text-left">
            <div className="shrink-0 relative">
              <div className="h-11 w-11 sm:h-16 sm:w-16 rounded-full bg-white flex items-center justify-center ring-2 sm:ring-4 ring-gold/30 p-1.5 sm:p-2">
                <img
                  src="https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/editor/carnegie-foundation-logo-removebg-preview.png"
                  alt="Carnegie Foundation logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="hidden sm:block absolute -bottom-1 left-1/2 -translate-x-1/2 text-[8px] font-medium tracking-wide text-kalo-dark bg-gold rounded-full px-2 py-0.5 whitespace-nowrap">
                2015&ndash;2025
              </span>
            </div>
            <div>
              <p className="eyebrow text-papaya mb-1 sm:mb-1.5 text-[10px] sm:text-xs leading-snug">
                Carnegie Community Engagement Classification <span className="sm:hidden text-ink/50">&middot; 2015&ndash;2025</span>
              </p>
              <p className="hidden sm:block text-sm text-ink/70 leading-relaxed">
                Kapiʻolani Community College is proud to hold the Carnegie Foundation&rsquo;s Community
                Engagement Classification, honoring our sustained commitment to community partnership
                and service-based learning.
              </p>
              <p className="sm:hidden text-xs text-ink/60 leading-relaxed">
                Honoring KCC&rsquo;s sustained commitment to community partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus programs — bento-style photo grid */}
      <section className="relative bg-white overflow-hidden">
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[
            { type: 'taro-outline', top: '4%', right: '-5%', size: 240, rotate: 15, opacity: 0.14 },
            { type: 'hibiscus-outline', bottom: '2%', left: '-4%', size: 130, rotate: -10, opacity: 0.14, delay: 1.5 },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 sm:py-24">
          <p className="eyebrow text-ocean mb-3">Campus programs</p>
          <h2 className="font-display text-3xl sm:text-4xl text-kalo mb-10">Where students show up every week.</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-5 lg:h-[560px]">
            {programs.map((prog) => (
              <Link
                key={prog.to}
                to={prog.to}
                className={`card-lift group relative rounded-2xl overflow-hidden gold-hairline ${prog.span} aspect-[4/3] lg:aspect-auto`}
              >
                <img
                  src={prog.photo}
                  alt={prog.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kalo-dark via-kalo-dark/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-display text-lg sm:text-xl text-sand">{prog.name}</h3>
                  <p className="mt-1.5 text-sm text-sand/80 leading-relaxed max-w-sm">{prog.blurb}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-gold">
                    Learn more <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white py-6">
        <OrnamentDivider />
      </div>

      {/* Sponsors */}
      <section className="relative bg-sand-deep overflow-hidden">
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[{ type: 'taro-outline', top: '-15%', left: '42%', size: 160, rotate: 5, opacity: 0.15 }]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-14">
          <p className="eyebrow text-kalo/60 mb-8 text-center">Proudly sponsored by</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="card-lift flex items-center gap-4 rounded-xl overflow-hidden bg-white gold-hairline pr-6">
              <img src="/images/sponsors/state-farm.png" alt="State Farm" className="h-16 w-auto" />
              <span className="text-sm text-ink/60 border-l border-kalo/10 pl-6">Environmental Sustainability</span>
            </div>
            <div className="card-lift flex items-center gap-4 rounded-xl overflow-hidden bg-white gold-hairline pr-6">
              <img src="/images/sponsors/hawaiian-electric.jpg" alt="Hawaiian Electric" className="h-16 w-auto" />
              <span className="text-sm text-ink/60 border-l border-kalo/10 pl-6">Resiliency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 3D moment */}
      <Pathway3DCarousel />

      {/* Contact — richer two-panel treatment */}
      <section id="contact" className="relative overflow-hidden bg-kalo-dark foil-texture">
        <WatercolorWash color="#1c6b72" size={340} top="10%" left="-8%" opacity={0.18} />
        <GoldDust count={10} seedOffset={40} />
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[
            { type: 'taro-outline', bottom: '-10%', left: '-5%', size: 220, rotate: -20, opacity: 0.22 },
            { type: 'fern', top: '0%', right: '4%', size: 170, rotate: -8, opacity: 0.24, delay: 0.5 },
          ]}
        />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-20 sm:py-24 grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-sand">
            <p className="eyebrow text-gold mb-3">Get in touch</p>
            <h2 className="font-display text-3xl sm:text-4xl">Connect with us.</h2>
            <p className="mt-4 text-sand/75 leading-relaxed max-w-md">
              Whether you&rsquo;re a student, a faculty member, or a community organization
              interested in partnering with KSSLP, tell us a bit about what you&rsquo;re looking for.
            </p>
            <div className="mt-8 hidden lg:block">
              <OrnamentDivider className="max-w-xs" />
            </div>
          </div>
          <div className="rounded-2xl gold-hairline overflow-hidden">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}
