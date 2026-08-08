import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/kapiolani.servelearn',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kapiolaniserve/',
  },
  {
    label: 'X (Twitter)',
    href: 'https://www.x.com/kapiolaniserve',
  },
]

export default function Contact() {
  return (
    <section className="relative overflow-hidden bg-sand min-h-[calc(100vh-5rem)]">
      <div className="relative mx-auto max-w-6xl px-5 lg:px-8 py-16 lg:py-24">

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-kalo/70 hover:text-kalo transition-colors mb-10"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <div className="max-w-3xl mb-12">
          <p className="eyebrow text-hibiscus mb-3">
            Let’s Connect
          </p>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-kalo leading-tight">
            Connect with Kapiʻolani Service &amp; Sustainability Learning
          </h1>

          <p className="mt-5 text-lg leading-relaxed text-kalo/70 max-w-2xl">
            Have a question about service-learning, community partnerships,
            student opportunities, or the KSSLP program? We’d love to hear
            from you.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          <a
            href="mailto:kccserve@hawaii.edu"
            className="group rounded-3xl bg-kalo text-sand p-7 shadow-xl shadow-kalo/15 hover:-translate-y-1 transition-transform"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-gold mb-6">
              <Mail size={23} />
            </span>

            <p className="eyebrow text-gold mb-2">
              Email
            </p>

            <p className="text-lg font-medium break-all group-hover:text-gold transition-colors">
              kccserve@hawaii.edu
            </p>
          </a>

          <a
            href="tel:+18087349353"
            className="group rounded-3xl bg-white/70 border border-kalo/10 p-7 shadow-lg shadow-kalo/5 hover:-translate-y-1 transition-transform"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-hibiscus/10 text-hibiscus mb-6">
              <Phone size={23} />
            </span>

            <p className="eyebrow text-hibiscus mb-2">
              Phone
            </p>

            <p className="text-lg font-medium text-kalo group-hover:text-hibiscus transition-colors">
              (808) 734-9353
            </p>
          </a>

          <div className="rounded-3xl bg-white/70 border border-kalo/10 p-7 shadow-lg shadow-kalo/5">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/15 text-kalo mb-6">
              <MapPin size={23} />
            </span>

            <p className="eyebrow text-kalo/60 mb-2">
              Visit
            </p>

            <p className="text-lg font-medium text-kalo">
              ʻIliahi 231
            </p>

            <p className="mt-2 text-sm leading-relaxed text-kalo/60">
              Kapiʻolani Community College
              <br />
              4303 Diamond Head Road
              <br />
              Honolulu, HI 96816
            </p>
          </div>

        </div>

        <div className="mt-10 rounded-3xl bg-kalo-dark text-sand p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

          <div>
            <p className="eyebrow text-gold mb-2">
              Follow Along
            </p>

            <h2 className="font-display text-2xl sm:text-3xl">
              Find KSSLP on social media
            </h2>
          </div>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 px-5 py-3 text-sm hover:bg-gold/10 hover:text-gold transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
