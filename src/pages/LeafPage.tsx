import { useLocation, Link, Navigate } from 'react-router-dom'
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
      </section>
    </div>
  )
}
