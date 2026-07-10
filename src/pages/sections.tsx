import SectionOverview from '../components/SectionOverview'
import { leafPages } from '../data/siteContent'

function childrenOf(sectionPath: string) {
  return leafPages
    .filter((p) => p.sectionPath === sectionPath)
    .map((p) => ({ title: p.title, to: p.path, blurb: p.blurb }))
}

export function StartHere() {
  return (
    <SectionOverview
      eyebrow="Step one"
      title="Service Learners Start Here"
      description="New to KSSLP? These four steps take you from orientation to a completed, certified service placement."
      links={childrenOf('/service-learners-start-here')}
    />
  )
}

export function EventsOpportunities() {
  return (
    <SectionOverview
      eyebrow="Get involved"
      title="Events & Opportunities"
      description="Ways to plug into KSSLP outside of a course requirement — one-time events, seasonal drives, and open volunteer roles."
      links={childrenOf('/events-opportunities')}
    />
  )
}

export function BecomeCertified() {
  return (
    <SectionOverview
      eyebrow="Go deeper"
      title="Become Certified"
      description="Sustained, reflective service across one or more pathways can earn you a KSSLP service-learning certificate."
      links={childrenOf('/become-certified')}
    />
  )
}

export function ResourceLibrary() {
  return (
    <SectionOverview
      eyebrow="Reference"
      title="KSSL Resource Library"
      description="Guides, species profiles, and program resources supporting service learners across every pathway."
      links={childrenOf('/resource-library')}
    />
  )
}

export function About() {
  return (
    <SectionOverview
      eyebrow="Who we are"
      title="About KSSL"
      description="The mission, people, and track record behind Kapiʻolani's Service & Sustainability Learning Program."
      links={childrenOf('/about')}
      extra={
        <div className="mt-10 border-t border-kalo/10 pt-8 flex flex-wrap gap-6 text-sm">
          <a
            href="https://drive.google.com/file/d/1L4QvP_XyoSkQH9yhSDT-8bo4llgyLXqi/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-papaya underline underline-offset-4"
          >
            Civic Action Plan (PDF)
          </a>
          <a
            href="https://drive.google.com/file/d/1zFgLyVbiDRTjKz7ghrFnWu6c2y_4wBWg/view"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-papaya underline underline-offset-4"
          >
            KCC Sustainability &amp; Climate Action Plan 2022&ndash;2026 (PDF)
          </a>
        </div>
      }
    />
  )
}

export function ForStudents() {
  return (
    <SectionOverview
      eyebrow="Students"
      title="For Students"
      description="Programs, resources, and policies built for KCC students doing service-learning work."
      links={childrenOf('/for-students')}
    />
  )
}

export function ForFaculty() {
  return (
    <SectionOverview
      eyebrow="Faculty"
      title="For Faculty"
      description="Everything faculty need to embed service-learning into a course, from policy to planning tools."
      links={[
        ...childrenOf('/for-faculty'),
        { title: 'FAQs for Community Partners', to: '/faqs-community-partners', blurb: 'Answers for organizations hosting KSSLP service learners.' },
      ]}
      extra={
        <div className="mt-10 border-t border-kalo/10 pt-8 text-sm">
          <a
            href="http://cerenehawaii.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean hover:text-papaya underline underline-offset-4"
          >
            CERENE Website &mdash; regional service-learning consortium
          </a>
        </div>
      }
    />
  )
}
