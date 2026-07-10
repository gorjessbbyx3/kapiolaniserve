import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

export default function NotFound() {
  return (
    <div>
      <PageHero
        eyebrow="404"
        title="This trail doesn't exist yet."
        description="The page you're looking for may have moved, or hasn't been built out yet."
      />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <Link to="/" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to home
        </Link>
      </section>
    </div>
  )
}
