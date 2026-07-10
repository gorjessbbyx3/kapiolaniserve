import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { pathways } from '../data/pathways'

export function MissionVision() {
  return (
    <div>
      <PageHero
        eyebrow="About KSSL"
        title="Mission & Vision"
        description="What KSSLP stands for and where the program is headed."
      />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16 space-y-10">
        <Link to="/about" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to About
        </Link>
        <div>
          <p className="font-display text-2xl italic text-kalo leading-snug">
            &ldquo;Ma ka hana ka ʻike&rdquo;
          </p>
          <p className="mt-2 text-sm text-ink/60">It is in the doing that we learn — ʻŌlelo Noʻeau</p>
        </div>
        <div>
          <p className="eyebrow text-papaya mb-3">Since 1995</p>
          <p className="text-ink/75 leading-relaxed">
            Service-learning was first integrated into Kapiʻolani Community College coursework in 1995.
            Since then it has grown into a recognized student-engagement pedagogy, connecting classrooms,
            campus, community, and beyond into one continuous ecology of learning.
          </p>
        </div>
        <div>
          <p className="eyebrow text-papaya mb-3">Mission</p>
          <p className="text-xl font-display text-kalo leading-snug">
            To connect Kapiʻolani Community College students to sustained, reciprocal service across
            Oʻahu&rsquo;s communities, grounded in sustainability and cultural respect.
          </p>
        </div>
        <div>
          <p className="eyebrow text-papaya mb-3">Where service-learning shows up</p>
          <div className="grid sm:grid-cols-2 gap-2">
            {[
              'Arts, History & Culture',
              'P-20 Education & Support for Families',
              'Elder Care',
              'Environmental Awareness & Sustainability',
              'Community Health & Public Safety',
              'Intercultural Perspectives & Education',
              'Resilient Neighborhoods',
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 text-sm text-ink/75">
                <span className="h-1.5 w-1.5 rounded-full bg-ocean shrink-0" />
                {area}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow text-papaya mb-3">How we work</p>
          <p className="text-ink/75 leading-relaxed">
            Reciprocal community partnerships built on clear communication, clearly defined roles, and
            shared goals mean faculty and community partners take collective responsibility for student
            learning &mdash; not just a service hour requirement checked off a list.
          </p>
        </div>
      </section>
    </div>
  )
}

const team = [
  { name: 'Program Director', role: 'Oversees KSSLP strategy, partner relationships, and faculty coordination.' },
  { name: 'Service-Learning Coordinator', role: 'Manages student registration, orientation, and hour certification.' },
  { name: 'Community Partnerships Lead', role: 'Vets and onboards new community partner sites across all seven pathways.' },
  { name: 'Pathway Faculty Coordinators', role: 'One per pathway, connecting coursework to service placements within their discipline.' },
]

export function MeetTheTeam() {
  return (
    <div>
      <PageHero
        eyebrow="About KSSL"
        title="Meet the Team"
        description="The staff and faculty coordinators behind KSSLP."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 space-y-8">
        <Link to="/about" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to About
        </Link>
        <div className="grid sm:grid-cols-2 gap-5">
          {team.map((t) => (
            <div key={t.name} className="border border-kalo/10 rounded-xl p-6 bg-white">
              <h2 className="font-display text-lg text-kalo">{t.name}</h2>
              <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t.role}</p>
            </div>
          ))}
        </div>
        <div className="border-t border-kalo/10 pt-8">
          <p className="eyebrow text-ocean mb-4">Pathway coordinators by focus area</p>
          <div className="flex flex-wrap gap-2">
            {pathways.map((p) => (
              <span
                key={p.slug}
                className="text-xs px-3 py-1.5 rounded-full text-sand"
                style={{ backgroundColor: p.color }}
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
