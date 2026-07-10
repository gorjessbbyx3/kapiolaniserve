import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'
import PathwayMarker from '../components/PathwayMarker'
import PageHero from '../components/PageHero'

export default function PathwaysOverview() {
  return (
    <div>
      <PageHero
        eyebrow="Seven pathways"
        title="Pathways"
        description="Every KSSLP service placement is organized under one of seven pathways. Each one points toward different community partners, skills, and outcomes — pick the one that matches where you want to go."
      />
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 gap-6">
          {pathways.map((p) => (
            <Link
              key={p.slug}
              to={`/pathways/${p.slug}`}
              className="group border border-kalo/10 rounded-xl p-7 bg-white hover:shadow-md transition-shadow flex gap-5"
            >
              <PathwayMarker marker={p.marker} color={p.color} size="lg" />
              <div>
                <h2 className="font-display text-xl text-kalo">{p.name}</h2>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{p.summary}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-papaya font-medium">
                  View pathway <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
