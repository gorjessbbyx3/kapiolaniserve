import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Accordion from '../components/Accordion'
import JsonLd from '../components/JsonLd'
import type { QA } from '../components/Accordion'

function FAQPage({
  eyebrow,
  title,
  description,
  backTo,
  backLabel,
  items,
}: {
  eyebrow: string
  title: string
  description: string
  backTo: string
  backLabel: string
  items: QA[]
}) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  }

  return (
    <div>
      <JsonLd data={faqSchema} />
      <PageHero eyebrow={eyebrow} title={title} description={description} />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16">
        <Link to={backTo} className="text-sm text-ocean hover:text-papaya">
          &larr; Back to {backLabel}
        </Link>
        <div className="mt-6">
          <Accordion items={items} />
        </div>
      </section>
    </div>
  )
}

export function FAQStudents() {
  const items: QA[] = [
    {
      q: 'Do I need to be enrolled in a specific course to volunteer through KSSLP?',
      a: 'No. Course-linked placements fulfill a class requirement, but you can also volunteer independently through Get Involved! opportunities or work toward a certificate without a course attached.',
    },
    {
      q: 'How do I choose a pathway?',
      a: 'Start with what you already care about — the seven pathways cover environment, health, education, arts & culture, intercultural work, intergenerational support, and neighborhood resilience. You can also switch pathways between terms.',
    },
    {
      q: 'How are my hours verified?',
      a: 'Your community partner supervisor signs off on logged hours throughout the term, and a final evaluation is completed by both you and the partner before hours are certified.',
    },
    {
      q: 'What happens if I can\u2019t complete my placement hours?',
      a: 'Contact the KSSLP office as early as possible. Partial hours, extensions, and alternative placements are handled case by case with your instructor.',
    },
    {
      q: 'Can service-learning hours count toward more than one course?',
      a: 'Generally no \u2014 hours are tied to the course and pathway you registered under. Ask the KSSLP office if you\u2019re juggling more than one service-learning course in the same term.',
    },
  ]
  return (
    <FAQPage
      eyebrow="For Students"
      title="FAQs for Students"
      description="Common questions about registering, logging hours, choosing a pathway, and earning your certificate."
      backTo="/for-students"
      backLabel="For Students"
      items={items}
    />
  )
}

export function FAQFaculty() {
  const items: QA[] = [
    {
      q: 'How do I add a service-learning component to my course?',
      a: 'Reach out to the KSSLP office at the start of a planning term. We\u2019ll help you connect course outcomes to an appropriate pathway and vetted community partners.',
    },
    {
      q: 'Who handles liability and partner vetting?',
      a: 'KSSLP maintains agreements with approved community partners and handles the liability paperwork. New partner sites go through a vetting process before students are placed.',
    },
    {
      q: 'What\u2019s expected of me as the instructor of record?',
      a: 'You set the academic reflection requirement (often the standard reflection essay), review student hour logs, and factor the partner evaluation into your course assessment.',
    },
    {
      q: 'Can I require a specific pathway for my course?',
      a: 'Yes \u2014 many courses are aligned to one pathway that fits the discipline, though some instructors allow students to choose across pathways.',
    },
    {
      q: 'Is there support if a placement isn\u2019t working out for a student?',
      a: 'Yes. Contact the KSSLP office directly \u2014 we can help troubleshoot with the partner or move the student to an alternative placement.',
    },
  ]
  return (
    <FAQPage
      eyebrow="For Faculty"
      title="FAQs for Faculty"
      description="Common questions about integrating service-learning, evaluation requirements, and coordinating with the KSSLP office."
      backTo="/for-faculty"
      backLabel="For Faculty"
      items={items}
    />
  )
}

export function FAQPartners() {
  const items: QA[] = [
    {
      q: 'How do we become an approved KSSLP partner site?',
      a: 'Contact the KSSLP office to start the vetting process, which covers site safety, supervision capacity, and alignment with one of the seven pathways.',
    },
    {
      q: 'What\u2019s expected of a supervising staff member?',
      a: 'A designated supervisor signs off on student hours, provides basic onboarding for volunteers, and completes a short evaluation at the end of the term.',
    },
    {
      q: 'Can we request students with specific skills or availability?',
      a: 'Yes. Let the KSSLP office know your needs and scheduling constraints, and we\u2019ll match students accordingly where possible.',
    },
    {
      q: 'Is there a minimum or maximum number of hours we can host?',
      a: 'It varies by course requirement, typically between 15 and 30 hours per term, but this is flexible \u2014 talk with our office about what works for your organization.',
    },
  ]
  return (
    <FAQPage
      eyebrow="Community Partners"
      title="FAQs for Community Partners"
      description="Answers for organizations hosting KSSLP service learners."
      backTo="/for-faculty"
      backLabel="For Faculty"
      items={items}
    />
  )
}
