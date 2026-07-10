import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'
import PathwayMarker from '../components/PathwayMarker'

export default function PathwayDetail() {
  const { slug } = useParams()
  const pathway = pathways.find((p) => p.slug === slug)

  if (!pathway) return <Navigate to="/pathways" replace />

  const others = pathways.filter((p) => p.slug !== pathway.slug)

  return (
    <div>
      <section className="text-sand contour-field" style={{ backgroundColor: pathway.color }}>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
          <Link to="/pathways" className="text-sm text-sand/70 hover:text-sand">
            &larr; All pathways
          </Link>
          <div className="mt-6 flex items-center gap-5">
            <PathwayMarker marker={pathway.marker} color="rgba(255,255,255,0.18)" size="lg" />
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl">{pathway.name}</h1>
          </div>
          <p className="mt-6 max-w-xl text-sand/90 leading-relaxed text-lg">{pathway.summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <h2 className="font-display text-2xl text-kalo mb-4">What service looks like here</h2>
          <ul className="space-y-3">
            {pathway.focus.map((f) => (
              <li key={f} className="flex items-start gap-3 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: pathway.color }} />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-10 border border-kalo/10 rounded-xl p-6 bg-white">
            <p className="font-display text-lg text-kalo">Ready to register for this pathway?</p>
            <p className="mt-2 text-sm text-ink/70">
              Start with orientation and registration, then bring your course details to the KSSLP office.
            </p>
            <Link
              to="/service-learners-start-here"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-papaya"
            >
              Service Learners Start Here <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <aside>
          <p className="eyebrow text-ocean mb-4">Other pathways</p>
          <div className="space-y-3">
            {others.map((p) => (
              <Link
                key={p.slug}
                to={`/pathways/${p.slug}`}
                className="flex items-center gap-3 border border-kalo/10 rounded-lg px-4 py-3 hover:bg-white transition-colors"
              >
                <PathwayMarker marker={p.marker} color={p.color} size="sm" />
                <span className="text-sm text-kalo">{p.name}</span>
              </Link>
            ))}
          </div>
        </aside>
      </section>
    </div>
  )
}
