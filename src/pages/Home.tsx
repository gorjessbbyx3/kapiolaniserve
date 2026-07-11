import { Link } from 'react-router-dom'
import { ArrowRight, Award } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import BotanicalScatter, { WatercolorWash } from '../components/BotanicalScatter'
import { ImagePlaceholder } from '../components/Placeholders'
import Pathway3DCarousel from '../components/Pathway3DCarousel'

const programs = [
  {
    name: 'Pohukaina Food Pantry',
    to: '/pohukaina-food-pantry',
    blurb: 'On-campus food security for KCC students.',
    photo: 'Pohukaina Food Pantry shelves/volunteers',
  },
  {
    name: 'Māla Māunuunu',
    to: '/mala-maunuunu',
    blurb: 'The campus garden anchoring hands-on Environment pathway work.',
    photo: 'Māla Māunuunu garden, behind Mānele building',
  },
  {
    name: 'KCC Ecology Club',
    to: '/kcc-ecology-club',
    blurb: 'Student-led restoration days and sustainability advocacy.',
    photo: 'Ecology Club / Nā Kiaʻi Honua work day',
  },
  {
    name: 'MINA — Mālama I Nā Ahupuaʻa',
    to: '/mina',
    blurb: 'An intercollegiate gathering rooted in ahupuaʻa-based stewardship.',
    photo: 'MINA students at a loʻi or fishpond site',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero — framed photo + caption panel, never overlapping */}
      <section className="relative bg-kalo-dark overflow-hidden">
        <WatercolorWash color="#1c6b72" size={480} top="-15%" right="-10%" opacity={0.25} />
        <WatercolorWash color="#c9a24b" size={360} bottom="-20%" left="-8%" opacity={0.15} />
        <BotanicalScatter
          taroColor="#c9a24b"
          hibiscusColor="#d43d51"
          lineColor="#f6f1e4"
          items={[
            { type: 'arcs', top: '6%', left: '3%', size: 130, rotate: 0, opacity: 0.3 },
            { type: 'taro', top: '-6%', left: '-4%', size: 200, rotate: -18, opacity: 0.14 },
            { type: 'hibiscus', bottom: '4%', left: '6%', size: 90, rotate: 8, opacity: 0.2, delay: 1.2 },
            { type: 'taro', bottom: '-8%', right: '-3%', size: 220, rotate: 24, opacity: 0.12, delay: 0.6 },
            { type: 'taro-outline', bottom: '10%', right: '4%', size: 130, rotate: -10, opacity: 0.3, delay: 0.8 },
            { type: 'hibiscus', top: '8%', right: '10%', size: 70, rotate: -12, opacity: 0.16, delay: 2 },
            { type: 'waves', bottom: '2%', left: '30%', size: 260, rotate: 0, opacity: 0.25, delay: 1.6 },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-12 lg:py-20 grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Caption panel — all text lives here, never on top of the photo */}
          <div className="order-2 lg:order-1 text-sand">
            <div className="flex items-center gap-3 mb-7">
              <img src="/images/kssl-logo.png" alt="" className="h-12 w-12 rounded-full bg-sand/95 p-1.5 shadow-lg shrink-0" />
              <p className="eyebrow text-gold">Kapiʻolani Community College</p>
            </div>

            <h1 className="font-display leading-[0.95]">
              <span className="block text-4xl sm:text-5xl lg:text-6xl tracking-tight">Kapiʻolani</span>
              <span className="block text-xl sm:text-2xl lg:text-3xl font-semibold text-plumeria mt-1">
                Service &amp; Sustainability
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl italic font-normal mt-1">Learning</span>
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-medium tracking-wide text-sand/90">
              <span>SERVE.</span>
              <span className="text-hibiscus">●</span>
              <span>SUSTAIN.</span>
              <span className="text-hibiscus">●</span>
              <span>INSPIRE.</span>
            </div>

            <p className="mt-6 max-w-md text-base sm:text-lg text-sand/80 leading-relaxed">
              KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
              from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
              academic credit, certification, and real community relationships.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/pathways"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-hibiscus text-sand font-medium shadow-lg shadow-hibiscus/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
              >
                Explore the pathways <ArrowRight size={18} />
              </Link>
              <Link
                to="/service-learners-start-here"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-sand/40 text-sand hover:bg-white/10 hover:-translate-y-0.5 transition-all"
              >
                Start here as a student
              </Link>
            </div>
          </div>

          {/* Framed photo — always fully visible, object-contain, no crop */}
          <div className="order-1 lg:order-2 relative">
            <div className="frame-shadow gold-hairline rounded-2xl bg-kalo p-2.5 sm:p-3">
              <div className="rounded-xl overflow-hidden bg-kalo-dark">
                <img
                  src="/images/hero-diamond-head.jpg"
                  alt="Diamond Head and Waikīkī coastline"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 sm:-bottom-5 sm:-right-5 h-16 w-16 sm:h-20 sm:w-20 rounded-full bg-gold text-kalo-dark flex items-center justify-center font-display text-xs text-center leading-tight shadow-lg rotate-[-8deg] float-slow">
              Since
              <br />
              1995
            </div>
          </div>
        </div>
      </section>

      {/* Carnegie recognition seal */}
      <section className="bg-sand-deep py-10">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="gold-hairline rounded-2xl bg-white/70 px-6 py-6 sm:px-10 sm:py-7 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="shrink-0 relative">
              <div className="h-20 w-20 rounded-full bg-kalo flex items-center justify-center ring-4 ring-gold/30">
                <Award size={34} className="text-gold" strokeWidth={1.5} />
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-medium tracking-wide text-kalo-dark bg-gold rounded-full px-2 py-0.5 whitespace-nowrap">
                2015&ndash;2025
              </span>
            </div>
            <div>
              <p className="eyebrow text-papaya mb-1.5">Carnegie Community Engagement Classification</p>
              <p className="text-sm text-ink/70 leading-relaxed">
                Kapiʻolani Community College is proud to hold the Carnegie Foundation&rsquo;s Community
                Engagement Classification, honoring our sustained commitment to community partnership
                and service-based learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Campus programs */}
      <section className="relative bg-white overflow-hidden">
        <BotanicalScatter
          taroColor="#2f4a3c"
          hibiscusColor="#d43d51"
          items={[
            { type: 'taro', top: '4%', right: '-5%', size: 240, rotate: 15, opacity: 0.05 },
            { type: 'hibiscus', bottom: '2%', left: '-4%', size: 130, rotate: -10, opacity: 0.06, delay: 1.5 },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20">
          <p className="eyebrow text-ocean mb-3">Campus programs</p>
          <h2 className="font-display text-3xl sm:text-4xl text-kalo mb-10">Where students show up every week.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((prog) => (
              <Link key={prog.to} to={prog.to} className="card-lift group flex flex-col gap-4">
                <ImagePlaceholder label={prog.photo} accent="#1c6b72" />
                <div className="border-l-2 border-ocean pl-4 group-hover:border-papaya transition-colors">
                  <h3 className="font-display text-base text-kalo">{prog.name}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{prog.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="relative bg-sand-deep overflow-hidden">
        <BotanicalScatter
          taroColor="#2f4a3c"
          hibiscusColor="#d43d51"
          items={[{ type: 'taro', top: '-15%', left: '42%', size: 160, rotate: 5, opacity: 0.06 }]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-14">
          <p className="eyebrow text-kalo/60 mb-4 text-center">Proudly sponsored by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-kalo/70 font-display text-lg">
            <span>State Farm &mdash; Environmental Sustainability</span>
            <span className="text-kalo/30">&middot;</span>
            <span>Hawaiian Electric &mdash; Resiliency</span>
          </div>
        </div>
      </section>

      {/* Signature 3D moment */}
      <Pathway3DCarousel />

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 overflow-hidden">
        <WatercolorWash color="#1c6b72" size={340} top="10%" left="-8%" opacity={0.1} />
        <BotanicalScatter
          taroColor="#2f4a3c"
          hibiscusColor="#e8792b"
          lineColor="#2f4a3c"
          items={[
            { type: 'taro', bottom: '-10%', left: '-5%', size: 220, rotate: -20, opacity: 0.14 },
            { type: 'hibiscus', top: '2%', right: '4%', size: 100, rotate: 12, opacity: 0.18, delay: 1 },
            { type: 'arcs', bottom: '4%', right: '6%', size: 100, rotate: 180, opacity: 0.15, delay: 0.5 },
          ]}
        />
        <div className="relative grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="eyebrow text-papaya mb-3">Get in touch</p>
            <h2 className="font-display text-3xl sm:text-4xl text-kalo">Connect with us.</h2>
            <p className="mt-4 text-ink/70 leading-relaxed max-w-md">
              Whether you&rsquo;re a student, a faculty member, or a community organization
              interested in partnering with KSSLP, tell us a bit about what you&rsquo;re looking for.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  )
}
