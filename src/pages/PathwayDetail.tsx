import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'
import { partnersByPathway } from '../data/partners'
import PathwayMarker from '../components/PathwayMarker'
import PartnerCard from '../components/PartnerCard'
import BotanicalScatter, { GoldDust } from '../components/BotanicalScatter'
import { ImagePlaceholder } from '../components/Placeholders'

export default function PathwayDetail() {
  const { slug } = useParams()
  const pathway = pathways.find((p) => p.slug === slug)

  if (!pathway) return <Navigate to="/pathways" replace />

  const others = pathways.filter((p) => p.slug !== pathway.slug)
  const partners = partnersByPathway[pathway.slug] ?? []

  return (
    <div>
      <section className="relative text-sand contour-field overflow-hidden" style={{ backgroundColor: pathway.color }}>
        <GoldDust count={8} seedOffset={200} />
        <BotanicalScatter
          lineColor="#c9a24b"
          items={[
            { type: 'taro-outline', top: '-12%', right: '-5%', size: 190, rotate: 18, opacity: 0.28 },
            { type: 'hibiscus-outline', bottom: '-10%', left: '2%', size: 100, rotate: -10, opacity: 0.26, delay: 1 },
          ]}
        />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
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

      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16 grid lg:grid-cols-4 gap-12">
        <div className="lg:col-span-3">
          <div className="mb-10 max-w-md">
            <ImagePlaceholder label={`${pathway.name} pathway in action`} aspect="aspect-[16/9]" accent={pathway.color} />
          </div>

          <h2 className="font-display text-2xl text-kalo mb-4">What service looks like here</h2>
          <ul className="space-y-3 mb-10">
            {pathway.focus.map((f) => (
              <li key={f} className="flex items-start gap-3 text-ink/80">
                <span className="mt-2 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: pathway.color }} />
                {f}
              </li>
            ))}
          </ul>

          {pathway.culturalNote && (
            <div className="mb-10 border border-kalo/10 rounded-xl p-6" style={{ backgroundColor: `${pathway.color}0d` }}>
              <p className="font-display text-lg text-kalo mb-4">{pathway.culturalNote.heading}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {pathway.culturalNote.values.map((v) => (
                  <div key={v.term}>
                    <p className="font-display text-sm" style={{ color: pathway.color }}>
                      {v.term}
                    </p>
                    <p className="text-sm text-ink/70 mt-1 leading-relaxed">{v.meaning}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {partners.length > 0 && (
            <>
              <h2 className="font-display text-2xl text-kalo mb-1">Community partners</h2>
              <p className="text-sm text-ink/60 mb-6">
                {partners.length} active placement site{partners.length === 1 ? '' : 's'} in this pathway.
              </p>
              <div className="grid sm:grid-cols-2 gap-5">
                {partners.map((partner) => (
                  <PartnerCard key={partner.name} partner={partner} accent={pathway.color} />
                ))}
              </div>
            </>
          )}

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
                className="card-lift flex items-center gap-3 border border-kalo/10 rounded-lg px-4 py-3 bg-white/60 hover:bg-white"
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
