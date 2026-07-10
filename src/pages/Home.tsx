import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'
import PathwayMarker from '../components/PathwayMarker'
import ContactForm from '../components/ContactForm'

const programs = [
  {
    name: 'Pohukaina Food Pantry',
    to: '/pohukaina-food-pantry',
    blurb: 'On-campus food security for KCC students.',
  },
  {
    name: 'Māla Māunuunu',
    to: '/mala-maunuunu',
    blurb: 'The campus garden anchoring hands-on Environment pathway work.',
  },
  {
    name: 'KCC Ecology Club',
    to: '/kcc-ecology-club',
    blurb: 'Student-led restoration days and sustainability advocacy.',
  },
  {
    name: 'MINA — Mālama I Nā Ahupuaʻa',
    to: '/mina',
    blurb: 'An intercollegiate gathering rooted in ahupuaʻa-based stewardship.',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-kalo text-sand contour-field">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
          <p className="eyebrow text-ilima mb-5">Kapiʻolani Community College</p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] max-w-3xl">
            Service and sustainability learning, rooted in Oʻahu&rsquo;s communities.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-sand/80 leading-relaxed">
            KSSLP connects students to sustained, reciprocal service across seven pathways &mdash;
            from restoring native ecosystems to supporting kūpuna &mdash; and turns that work into
            academic credit, certification, and real community relationships.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              to="/pathways"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-papaya text-sand font-medium hover:brightness-110 transition"
            >
              Explore the pathways <ArrowRight size={18} />
            </Link>
            <Link
              to="/service-learners-start-here"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-sand/30 text-sand hover:bg-white/10 transition"
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
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-papaya mb-3">Seven pathways</p>
          <h2 className="font-display text-3xl sm:text-4xl text-kalo">Find where your service fits.</h2>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Every KSSLP placement sits on one of seven pathways, each pointing toward different
            partners, skills, and communities. Think of them as trailheads &mdash; pick the one
            that matches where you want to go.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pathways.map((p) => (
            <Link
              key={p.slug}
              to={`/pathways/${p.slug}`}
              className="group border border-kalo/10 rounded-xl p-6 bg-white/60 hover:bg-white transition-colors flex flex-col gap-4"
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
            className="rounded-xl p-6 bg-kalo text-sand flex flex-col justify-between gap-4"
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {programs.map((prog) => (
              <Link
                key={prog.to}
                to={prog.to}
                className="border-l-2 border-ocean pl-5 py-1 hover:border-papaya transition-colors"
              >
                <h3 className="font-display text-base text-kalo">{prog.name}</h3>
                <p className="mt-2 text-sm text-ink/65 leading-relaxed">{prog.blurb}</p>
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
      <section id="contact" className="mx-auto max-w-7xl px-5 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
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
