import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageHero from './PageHero'

export type SectionLink = { title: string; to: string; blurb: string }

export default function SectionOverview({
  eyebrow,
  title,
  description,
  links,
  extra,
}: {
  eyebrow: string
  title: string
  description: string
  links: SectionLink[]
  extra?: React.ReactNode
}) {
  return (
    <div>
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-7xl px-5 lg:px-8 py-16">
        {links.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="card-lift group gold-hairline rounded-xl p-6 bg-white"
              >
                <h2 className="font-display text-lg text-kalo">{l.title}</h2>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{l.blurb}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm text-gold font-medium">
                  Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        )}
        {extra}
      </section>
    </div>
  )
}
