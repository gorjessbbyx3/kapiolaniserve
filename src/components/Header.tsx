import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { pathways } from '../data/pathways'

type Child = { label: string; to: string; color?: string }
type NavItem = {
  label: string
  to: string
  children?: Child[]
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
    children: pathways.map((p) => ({ label: p.name, to: `/pathways/${p.slug}`, color: p.color })),
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
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileExpanded(null)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`sticky top-0 z-50 bg-kalo text-sand transition-shadow ${
        scrolled ? 'shadow-lg shadow-black/20' : ''
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand shrink-0 ring-2 ring-gold/0 group-hover:ring-gold/60 transition-all">
              <img src="/images/kssl-logo.png" alt="KSSLP logo" className="h-9 w-9 object-contain" />
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
                    `relative flex items-center gap-1 px-3 py-2 text-sm rounded-md transition-colors hover:text-gold ${
                      isActive ? 'text-gold' : 'text-sand'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {item.children && (
                        <ChevronDown size={14} strokeWidth={2} className="transition-transform group-hover:rotate-180" />
                      )}
                      <span
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-gold origin-center transition-transform duration-300 ${
                          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
                {item.children && (
                  <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200 absolute left-0 top-full pt-2 w-72">
                    <ul className="bg-kalo-dark rounded-2xl shadow-2xl shadow-black/40 py-2.5 border border-gold/20">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link
                            to={c.to}
                            className="flex items-center gap-3 px-4 py-2.5 text-sm text-sand/90 hover:bg-white/5 hover:text-gold transition-colors"
                          >
                            <span
                              className="h-2 w-2 rounded-full shrink-0"
                              style={{ backgroundColor: c.color ?? '#c9a24b' }}
                            />
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
              className="press ml-3 px-5 py-2.5 text-sm rounded-full bg-hibiscus text-sand font-medium shadow-md shadow-hibiscus/30 hover:brightness-110 hover:-translate-y-0.5 transition-all"
            >
              Connect
            </Link>
          </nav>

          <button
            className="press lg:hidden p-2 relative z-[60]"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-[86%] max-w-sm bg-kalo-dark text-sand shadow-2xl transition-transform duration-300 overflow-y-auto ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center gap-3 px-6 pt-8 pb-6 border-b border-gold/20">
            <img src="/images/kssl-logo.png" alt="" className="h-10 w-10 rounded-full bg-sand p-1" />
            <div>
              <p className="font-display text-base leading-tight">Kapiʻolani</p>
              <p className="eyebrow text-gold text-[10px]">Service &amp; Sustainability Learning</p>
            </div>
          </div>

          <nav className="px-3 py-4" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.to} className="border-b border-white/5 last:border-none">
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="flex-1 px-3 py-3.5 text-[15px]" onClick={() => setOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      aria-label="Expand section"
                      className="p-3.5"
                      onClick={() => setMobileExpanded(mobileExpanded === item.to ? null : item.to)}
                    >
                      <ChevronDown
                        size={18}
                        className={`text-gold transition-transform ${mobileExpanded === item.to ? 'rotate-180' : ''}`}
                      />
                    </button>
                  )}
                </div>
                {item.children && (
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      mobileExpanded === item.to ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pl-6 pb-3 space-y-0.5">
                        {item.children.map((c) => (
                          <Link
                            key={c.to}
                            to={c.to}
                            className="flex items-center gap-3 py-2 text-sm text-sand/75"
                            onClick={() => setOpen(false)}
                          >
                            <span
                              className="h-1.5 w-1.5 rounded-full shrink-0"
                              style={{ backgroundColor: c.color ?? '#c9a24b' }}
                            />
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="px-6 py-6">
            <Link
              to="/#contact"
              className="press flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-hibiscus text-sand font-medium shadow-lg shadow-hibiscus/30"
              onClick={() => setOpen(false)}
            >
              Connect <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
