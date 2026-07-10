import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'
import PathwayMarker from '../components/PathwayMarker'
import ContactForm from '../components/ContactForm'
import CornerLeaves from '../components/CornerLeaves'
import { ImagePlaceholder } from '../components/Placeholders'

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
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src="/images/hero-diamond-head.jpg"
          alt="Diamond Head and Waikīkī coastline"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-kalo-dark via-kalo-dark/75 to-kalo-dark/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-kalo-dark/60 via-transparent to-transparent" />

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 text-sand">
          <div className="flex items-center gap-3 mb-8">
            <img src="/images/kssl-logo.png" alt="" className="h-14 w-14 rounded-full bg-sand/95 p-1.5 shadow-lg" />
            <p className="eyebrow text-plumeria">Kapiʻolani Community College</p>
          </div>

          <h1 className="font-display leading-[0.95]">
            <span className="block text-5xl sm:text-6xl lg:text-7xl tracking-tight" style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}>
              Kapiʻolani
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-plumeria mt-1">
              Service &amp; Sustainability
            </span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl italic font-normal mt-1">Learning</span>
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm sm:text-base font-medium tracking-wide">
            <span>SERVE.</span>
            <span className="text-hibiscus">●</span>
            <span>SUSTAIN.</span>
            <span className="text-hibiscus">●</span>
            <span>INSPIRE.</span>
          </div>

          <p className="mt-6 max-w-xl text-lg text-sand/85 leading-relaxed">
            KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
            from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
            academic credit, certification, and real community relationships.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
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
      </section>

      {/* Carnegie note */}
      <section className="bg-sand-deep">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-6 flex flex-col sm:flex-row items-start sm:items-center gap-3 text-sm text-kalo/80">
          <span className="eyebrow text-kalo shrink-0">Recognized</span>
          <p>
            Kapiʻolani Community College holds the Carnegie Foundation&rsquo;s Community Engagement
            Classification for 2015&ndash;2025, honoring our commitment to community partnership and
            service-based learning.
          </p>
        </div>
      </section>

      {/* Pathways — signature trailhead grid */}
      <section className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 overflow-hidden">
        <CornerLeaves corners={['top-right']} color="#2f4a3c" size={220} opacity={0.5} />
        <div className="relative max-w-2xl mb-12">
          <p className="eyebrow text-papaya mb-3">Seven pathways</p>
          <h2 className="font-display text-3xl sm:text-4xl text-kalo">Find where your service fits.</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Every KSSLP placement sits on one of seven pathways, each pointing toward different
            partners, skills, and communities. Think of them as trailheads &mdash; pick the one
            that matches where you want to go.
          </p>
        </div>
        <div className="relative grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pathways.map((p) => (
            <Link
              key={p.slug}
              to={`/pathways/${p.slug}`}
              className="card-lift group border border-kalo/10 rounded-xl p-6 bg-white/70 hover:bg-white flex flex-col gap-4"
            >
              <PathwayMarker marker={p.marker} color={p.color} />
              <div>
                <h3 className="font-display text-lg text-kalo">{p.name}</h3>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.summary}</p>
              </div>
              <span className="mt-auto inline-flex items-center gap-1 text-sm text-papaya font-medium">
                View pathway <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
          <Link
            to="/become-certified"
            className="card-lift rounded-xl p-6 bg-kalo text-sand flex flex-col justify-between gap-4"
          >
            <p className="font-display text-lg">Ready to go deeper?</p>
            <p className="text-sm text-sand/80 leading-relaxed">
              Turn sustained service into a KSSLP certificate through our training programs.
            </p>
            <span className="inline-flex items-center gap-1 text-sm text-ilima font-medium">
              Become certified <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </section>

      {/* Campus programs */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
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
      <section className="bg-sand-deep">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14">
          <p className="eyebrow text-kalo/60 mb-4 text-center">Proudly sponsored by</p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-3 text-kalo/70 font-display text-lg">
            <span>State Farm &mdash; Environmental Sustainability</span>
            <span className="text-kalo/30">&middot;</span>
            <span>Hawaiian Electric &mdash; Resiliency</span>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-7xl px-5 lg:px-8 py-20 overflow-hidden">
        <CornerLeaves corners={['bottom-left']} color="#e8792b" size={200} opacity={0.35} />
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
