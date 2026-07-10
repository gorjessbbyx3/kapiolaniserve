import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { pathways } from '../data/pathways'

type NavItem = {
  label: string
  to: string
  children?: { label: string; to: string }[]
}

const nav: NavItem[] = [
  {
    label: 'Service Learners Start Here',
    to: '/service-learners-start-here',
    children: [
      { label: 'Orientation', to: '/orientation' },
      { label: 'Registration', to: '/registration' },
      { label: 'Timesheet / Evaluation', to: '/timesheet-evaluation' },
      { label: 'Reflection Essay', to: '/essay' },
    ],
  },
  {
    label: 'Pathways',
    to: '/pathways',
    children: pathways.map((p) => ({ label: p.name, to: `/pathways/${p.slug}` })),
  },
  {
    label: 'Events & Opportunities',
    to: '/events-opportunities',
    children: [{ label: 'Get Involved!', to: '/get-involved' }],
  },
  {
    label: 'Become Certified',
    to: '/become-certified',
    children: [{ label: 'Certificate Training Programs', to: '/certificate-training-programs' }],
  },
  {
    label: 'Resource Library',
    to: '/resource-library',
  },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Mission & Vision', to: '/mission-vision' },
      { label: 'Meet the Team', to: '/meet-the-team' },
      { label: 'Assessment Reports Archive', to: '/assessment-reports' },
    ],
  },
  {
    label: 'For Students',
    to: '/for-students',
  },
  {
    label: 'For Faculty',
    to: '/for-faculty',
  },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-kalo text-sand">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ilima text-kalo-dark font-display text-lg">
              K
            </span>
            <span className="font-display text-lg leading-tight">
              Kapiʻolani<span className="block text-xs eyebrow text-sand/70">Service &amp; Sustainability Learning</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
            {nav.map((item) => (
              <div key={item.to} className="relative group">
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors hover:bg-white/10 ${
                      isActive ? 'text-ilima' : 'text-sand'
                    }`
                  }
                >
                  {item.label}
                  {item.children && <ChevronDown size={14} strokeWidth={2} />}
                </NavLink>
                {item.children && (
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-opacity absolute left-0 top-full pt-2 w-64">
                    <ul className="bg-kalo-dark rounded-lg shadow-xl py-2 border border-white/10">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="block px-4 py-2 text-sm text-sand/90 hover:bg-white/10 hover:text-ilima"
                          >
                            {c.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/#contact"
              className="ml-2 px-4 py-2 text-sm rounded-md bg-papaya text-sand font-medium hover:brightness-110 transition"
            >
              Connect
            </Link>
          </nav>

          <button
            className="lg:hidden p-2"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-kalo-dark">
          <nav className="px-5 py-3 space-y-1" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.to}>
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="block py-2 text-sm" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label="Expand section"
                      className="p-2"
                      onClick={() => setMobileExpanded(mobileExpanded === item.to ? null : item.to)}
                    >
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${mobileExpanded === item.to ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && mobileExpanded === item.to && (
                  <div className="pl-4 pb-2 space-y-1">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block py-1.5 text-sm text-sand/80"
                        onClick={() => setOpen(false)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/#contact"
              className="block mt-2 px-4 py-2 text-sm text-center rounded-md bg-papaya text-sand font-medium"
              onClick={() => setOpen(false)}
            >
              Connect
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
