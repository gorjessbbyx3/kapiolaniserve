import { Link } from 'react-router-dom'
import ContactForm from '../components/ContactForm'
import BotanicalScatter, { WatercolorWash, GoldDust, OrnamentDivider } from '../components/BotanicalScatter'
import { ImagePlaceholder } from '../components/Placeholders'
import Pathway3DCarousel from '../components/Pathway3DCarousel'
import Hero from '../components/Hero'

const programs = [
  {
    name: 'Pohukaina Food Pantry',
    to: '/pohukaina-food-pantry',
    blurb: 'On-campus food security for KCC students.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/pohukaina-diaper-bank-fall-2024.jpg',
  },
  {
    name: 'Māla Māunuunu',
    to: '/mala-maunuunu',
    blurb: 'The campus garden anchoring hands-on Environment pathway work.',
    photo: '/images/programs/mala-maunuunu-workday.jpg',
  },
  {
    name: 'KCC Ecology Club',
    to: '/kcc-ecology-club',
    blurb: 'Student-led restoration days and sustainability advocacy.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/kapiolani-community-college-ecology-club-1a_orig.jpg',
  },
  {
    name: 'MINA — Mālama I Nā Ahupuaʻa',
    to: '/mina',
    blurb: 'An intercollegiate gathering rooted in ahupuaʻa-based stewardship.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/mina-1_orig.jpg',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero — animated, framed photo, cursor tilt */}
      <Hero />

      {/* Carnegie recognition seal */}
      <section className="bg-sand-deep py-10">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <div className="gold-hairline rounded-2xl bg-white/70 px-6 py-6 sm:px-10 sm:py-7 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="shrink-0 relative">
              <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center ring-4 ring-gold/30 p-2">
                <img
                  src="https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/editor/carnegie-foundation-logo-removebg-preview.png"
                  alt="Carnegie Foundation logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
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
          lineColor="#c9a24b"
          items={[
            { type: 'taro-outline', top: '4%', right: '-5%', size: 240, rotate: 15, opacity: 0.14 },
            { type: 'hibiscus-outline', bottom: '2%', left: '-4%', size: 130, rotate: -10, opacity: 0.14, delay: 1.5 },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 sm:py-24">
          <p className="eyebrow text-ocean mb-3">Campus programs</p>
          <h2 className="font-display text-3xl sm:text-4xl text-kalo mb-10">Where students show up every week.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.slice(0, 3).map((prog) => (
              <Link key={prog.to} to={prog.to} className="card-lift group flex flex-col gap-4">
                {prog.photo ? (
                  <div className="aspect-[4/3] w-full rounded-xl overflow-hidden gold-hairline">
                    <img src={prog.photo} alt={prog.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ) : (
                  <ImagePlaceholder label={`${prog.name} photo`} accent="#1c6b72" />
                )}
                <div className="border-l-2 border-ocean pl-4 group-hover:border-papaya transition-colors">
                  <h3 className="font-display text-base text-kalo">{prog.name}</h3>
                  <p className="mt-2 text-sm text-ink/65 leading-relaxed">{prog.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
          {programs[3] && (
            <Link
              to={programs[3].to}
              className="card-lift group mt-6 grid sm:grid-cols-[1fr_1.4fr] gap-6 sm:gap-10 items-center border border-kalo/10 rounded-2xl p-6 sm:p-8 bg-sand-deep/40"
            >
              {programs[3].photo ? (
                <div className="aspect-[4/3] w-full rounded-xl overflow-hidden gold-hairline">
                  <img src={programs[3].photo} alt={programs[3].name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ) : (
                <ImagePlaceholder label={`${programs[3].name} photo`} accent="#c9a24b" aspect="aspect-[4/3]" />
              )}
              <div>
                <p className="eyebrow text-gold mb-2">Featured program</p>
                <h3 className="font-display text-2xl text-kalo group-hover:text-papaya transition-colors">
                  {programs[3].name}
                </h3>
                <p className="mt-3 text-ink/65 leading-relaxed max-w-md">{programs[3].blurb}</p>
              </div>
            </Link>
          )}
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

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 overflow-hidden">
        <WatercolorWash color="#1c6b72" size={340} top="10%" left="-8%" opacity={0.08} />
        <GoldDust count={6} seedOffset={40} />
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[
            { type: 'taro-outline', bottom: '-10%', left: '-5%', size: 220, rotate: -20, opacity: 0.22 },
            { type: 'fern', top: '0%', right: '4%', size: 170, rotate: -8, opacity: 0.24, delay: 0.5 },
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
