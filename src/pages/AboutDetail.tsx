import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { ImagePlaceholder } from '../components/Placeholders'
import PullQuote from '../components/PullQuote'
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
        <PullQuote quote="Ma ka hana ka ʻike" attribution="It is in the doing that we learn — ʻŌlelo Noʻeau" />
        <div>
          <p className="eyebrow text-papaya mb-3">Since 1995</p>
          <p className="text-ink/75 leading-relaxed drop-cap">
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

const staff = [
  {
    name: 'Denise M. Pierson, M.Ed., CVM',
    role: 'Outreach Coordinator, Civic & Community Engagement',
    bio: 'Working in service-learning since 1994, including 19 years as State Network Director for Hawaiʻi Pacific Islands Campus Compact before joining KCC. Certified in Urban & Community Forestry and FEMA/NDPTC disaster preparedness training.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/denise_orig.jpeg',
  },
  {
    name: 'Krista Hiser',
    role: 'Faculty Outreach Coordinator',
    bio: 'Facilitates connections between faculty, service learners, and community partners — organizing Service-Learning Faculty Field Trips, Sustainability Institutes, and Faculty Institutes.',
    photo: 'https://kapiolaniserve.weebly.com/uploads/8/5/0/6/8506005/krista_orig.jpg',
  },
]

const studentLeaders = [
  { name: 'Darlene Michubu', role: 'Health Promotion Team Leader | Health Pathway Leader' },
  { name: 'Barbara Keola', role: 'KSSLP Admin Assistant | Education Pathway Leader' },
  { name: 'Kailaniʻopuʻu (Kai) Yamasato', role: 'Intercultural Pathway Leader' },
  { name: 'Ari Smith', role: 'Environment Promotion Team Leader | Environment Pathway Leader' },
]

export function MeetTheTeam() {
  return (
    <div>
      <PageHero
        eyebrow="About KSSL"
        title="Meet the Team"
        description="The staff and student pathway leaders behind KSSLP."
      />
      <section className="mx-auto max-w-4xl px-5 lg:px-8 py-16 space-y-10">
        <Link to="/about" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to About
        </Link>
        <PullQuote
          quote="The best way to find yourself is to lose yourself in the service of others."
          attribution="Mahatma Gandhi"
        />

        <div>
          <p className="eyebrow text-ocean mb-4">KSSL Faculty & Staff</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {staff.map((t) => (
              <div key={t.name} className="card-lift gold-hairline rounded-xl p-6 bg-white flex gap-4">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="h-20 w-20 rounded-full object-cover gold-hairline shrink-0"
                  loading="lazy"
                />
                <div>
                  <h2 className="font-display text-lg text-kalo leading-snug">{t.name}</h2>
                  <p className="text-xs eyebrow text-papaya mt-1 mb-2">{t.role}</p>
                  <p className="text-sm text-ink/70 leading-relaxed">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="rounded-xl overflow-hidden gold-hairline">
            <img
              src="https://kapionews.com/wp-content/uploads/2024/05/IMG_9321.jpg"
              alt="Denise Pierson works with service-learning students in the ʻIliahi building"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
          <p className="mt-2 text-xs text-ink/45 text-right">Photo: Shawna Takaki / Kapiʻo News</p>
        </div>

        <div>
          <p className="eyebrow text-ocean mb-4">KSSL Student Leaders</p>
          <div className="grid sm:grid-cols-2 gap-5">
            {studentLeaders.map((t) => (
              <div key={t.name} className="card-lift gold-hairline rounded-xl p-6 bg-white">
                <div className="mb-4 max-w-[100px]">
                  <ImagePlaceholder label={`${t.name} headshot`} aspect="aspect-square" accent="#1c6b72" />
                </div>
                <h2 className="font-display text-lg text-kalo">{t.name}</h2>
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">{t.role}</p>
              </div>
            ))}
          </div>
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
        <div className="border-t border-kalo/10 pt-8">
          <p className="text-sm text-ink/70">
            Interested in becoming a Pathway Leader? Contact the KSSLP office to learn more.
          </p>
        </div>
      </section>
    </div>
  )
}
