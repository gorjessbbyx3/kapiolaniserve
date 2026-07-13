import { Link } from 'react-router-dom'

function Facebook(props: { size?: number }) {
  return (
    <svg width={props.size ?? 20} height={props.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-8.2h2.75l.41-3.2h-3.16V7.55c0-.93.26-1.56 1.6-1.56h1.7V3.14C15.98 3.1 15.02 3 13.9 3 11.5 3 9.9 4.46 9.9 7.24v2.36H7.14v3.2H9.9V21h3.6Z" />
    </svg>
  )
}
function Instagram(props: { size?: number }) {
  return (
    <svg width={props.size ?? 20} height={props.size ?? 20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
function Twitter(props: { size?: number }) {
  return (
    <svg width={props.size ?? 20} height={props.size ?? 20} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.9 3H21l-6.6 7.55L22 21h-6.3l-4.9-6.4L4.9 21H2.8l7.05-8.06L2 3h6.45l4.43 5.86L18.9 3Zm-1.1 16.2h1.16L7.3 4.72H6.06L17.8 19.2Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-kalo-dark text-sand/90">
      <img
        src="/images/footer-banner.jpg"
        alt="Kapiʻolani Service & Sustainability Learning — student volunteers at Diamond Head and planting in the garden"
        className="w-full h-auto"
      />
      <div className="border-t border-gold/25 mx-auto max-w-7xl px-5 lg:px-8 py-14 grid gap-10 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-sand mb-3">Kapiʻolani Service &amp; Sustainability Learning</p>
          <p className="text-sm leading-relaxed text-sand/70">
            Kapiʻolani Community College<br />
            ʻIliahi 231<br />
            4303 Diamond Head Road<br />
            Honolulu, HI 96816
          </p>
        </div>
        <div className="text-sm leading-relaxed text-sand/70">
          <p className="eyebrow text-gold mb-2">Office Hours</p>
          <p>Mon, Tue &amp; Fri &mdash; 9am to 4pm</p>
          <p>Wed &amp; Thu &mdash; 9am to 5pm</p>
          <p className="mt-1 italic">Hours subject to change &mdash; please call first.</p>
          <p className="mt-4">Phone: (808) 734-9353</p>
          <p>Fax: (808) 734-9316</p>
        </div>
        <div className="text-sm leading-relaxed text-sand/70">
          <p className="eyebrow text-gold mb-2">Connect</p>
          <div className="flex items-center gap-3 mb-4">
            <a href="https://www.facebook.com/kapiolani.servelearn" aria-label="Facebook" className="hover:text-gold">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/kapiolaniserve/" aria-label="Instagram" className="hover:text-gold">
              <Instagram size={20} />
            </a>
            <a href="https://www.x.com/kapiolaniserve" aria-label="X (Twitter)" className="hover:text-gold">
              <Twitter size={20} />
            </a>
          </div>
          <Link to="/#contact" className="underline decoration-gold underline-offset-4 hover:text-gold">
            Send us a message
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 text-xs text-sand/50 flex flex-col sm:flex-row justify-between gap-2">
          <span>&copy; {new Date().getFullYear()} Kapiʻolani Service &amp; Sustainability Learning Program</span>
          <span>Kapiʻolani Community College is proud to hold the Carnegie Foundation&rsquo;s Community Engagement Classification, 2015&ndash;2025.</span>
        </div>
        <div className="mx-auto max-w-7xl px-5 lg:px-8 pb-5 text-xs text-sand/40">
          <a
            href="https://techsavvyhawaii.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors"
          >
            Powered by TechSavvy Hawaii
          </a>
        </div>
      </div>
    </footer>
  )
}
