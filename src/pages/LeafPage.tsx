import { useLocation, Link, Navigate } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { leafPages } from '../data/siteContent'
import PageHero from '../components/PageHero'

export default function LeafPage() {
  const { pathname } = useLocation()
  const page = leafPages.find((p) => p.path === pathname)

  if (!page) return <Navigate to="/" replace />

  return (
    <div>
      <PageHero eyebrow={page.section} title={page.title} description={page.blurb} />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <Link to={page.sectionPath} className="text-sm text-ocean hover:text-papaya">
          &larr; Back to {page.section}
        </Link>
        <div className="mt-6 space-y-5 text-ink/80 leading-relaxed">
          {page.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        {page.links && page.links.length > 0 && (
          <div className="mt-8 pt-6 border-t border-kalo/10 flex flex-wrap gap-3">
            {page.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-kalo/20 text-sm text-kalo hover:border-papaya hover:text-papaya transition-colors"
              >
                {l.label} <ExternalLink size={14} />
              </a>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
