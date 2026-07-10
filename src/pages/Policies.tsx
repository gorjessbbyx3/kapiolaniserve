import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'

function PolicyBlock({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="border-l-2 border-ocean pl-6 py-1">
      <h2 className="font-display text-xl text-kalo">{title}</h2>
      <ul className="mt-3 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3 text-sm text-ink/75 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-ocean shrink-0" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function PoliciesStudents() {
  return (
    <div>
      <PageHero
        eyebrow="For Students"
        title="Policies"
        description="Attendance, safety, and conduct policies that apply to all KSSLP service placements."
      />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16 space-y-10">
        <Link to="/for-students" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to For Students
        </Link>
        <PolicyBlock
          title="Attendance & scheduling"
          points={[
            'Confirm your schedule directly with your community partner supervisor before your first shift.',
            'Notify both your supervisor and the KSSLP office as early as possible if you need to miss a scheduled shift.',
            'Repeated unexcused absences may affect certification of your service hours.',
          ]}
        />
        <PolicyBlock
          title="Safety & conduct"
          points={[
            'Follow all site-specific safety guidance provided during orientation and by your partner supervisor.',
            'Represent KCC and KSSLP professionally \u2014 treat partner staff, clients, and fellow volunteers with respect.',
            'Report any safety concerns or incidents to your supervisor and the KSSLP office immediately.',
          ]}
        />
        <PolicyBlock
          title="Hour logging"
          points={[
            'Log hours promptly after each shift rather than batching them at the end of the term.',
            'Hours must be verified by your partner supervisor before they count toward certification.',
            'Only hours completed at an approved KSSLP partner site are eligible.',
          ]}
        />
      </section>
    </div>
  )
}

export function PoliciesFaculty() {
  return (
    <div>
      <PageHero
        eyebrow="For Faculty"
        title="Policies"
        description="Guidelines for faculty designing a service-learning component, including partner vetting and liability requirements."
      />
      <section className="mx-auto max-w-3xl px-5 lg:px-8 py-16 space-y-10">
        <Link to="/for-faculty" className="text-sm text-ocean hover:text-papaya">
          &larr; Back to For Faculty
        </Link>
        <PolicyBlock
          title="Partner sites"
          points={[
            'Only KSSLP-approved partner sites may be used to fulfill course service-learning requirements.',
            'New partner requests go through the KSSLP office for vetting before students are placed.',
            'The KSSLP office maintains liability agreements with all approved partners.',
          ]}
        />
        <PolicyBlock
          title="Course design"
          points={[
            'Service-learning components should tie explicitly to a course learning outcome, not stand alone as extra credit.',
            'A structured reflection requirement (essay, journal, or presentation) is required alongside logged hours.',
            'Recommended minimums are 15\u201330 hours per term, adjustable to course credit load.',
          ]}
        />
        <PolicyBlock
          title="Evaluation"
          points={[
            'Instructors review student hour logs and partner evaluations as part of course assessment.',
            'The KSSLP office is available to help resolve placement issues before they affect a student\u2019s grade.',
          ]}
        />
      </section>
    </div>
  )
}
