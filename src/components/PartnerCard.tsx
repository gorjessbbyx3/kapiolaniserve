import { Phone, Mail, MapPin, Clock, ExternalLink } from 'lucide-react'
import type { Partner } from '../data/partners'

export default function PartnerCard({ partner, accent }: { partner: Partner; accent: string }) {
  return (
    <div
      className="card-lift gold-hairline rounded-xl p-6 bg-white flex flex-col gap-3 border-t-4"
      style={{ borderTopColor: accent }}
    >
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg text-kalo leading-snug">{partner.name}</h3>
        {partner.website && (
          <a
            href={partner.website}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-ink/40 hover:text-papaya"
            aria-label={`${partner.name} website`}
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
      <p className="text-sm text-ink/70 leading-relaxed">{partner.summary}</p>

      <div>
        <p className="eyebrow text-xs mb-1.5" style={{ color: accent }}>
          Opportunities
        </p>
        <ul className="space-y-1">
          {partner.opportunities.map((o) => (
            <li key={o} className="text-sm text-ink/75 flex gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full shrink-0" style={{ backgroundColor: accent }} />
              {o}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-1 pt-3 border-t border-kalo/10 space-y-1.5 text-xs text-ink/60">
        <div className="flex items-start gap-2">
          <MapPin size={13} className="mt-0.5 shrink-0" />
          <span>{partner.location}</span>
        </div>
        {partner.days && (
          <div className="flex items-start gap-2">
            <Clock size={13} className="mt-0.5 shrink-0" />
            <span>{partner.days}</span>
          </div>
        )}
        {partner.contactPhone && (
          <div className="flex items-start gap-2">
            <Phone size={13} className="mt-0.5 shrink-0" />
            <span>
              {partner.contactName ? `${partner.contactName} — ` : ''}
              {partner.contactPhone}
            </span>
          </div>
        )}
        {partner.contactEmail && (
          <div className="flex items-start gap-2">
            <Mail size={13} className="mt-0.5 shrink-0" />
            <span>{partner.contactEmail}</span>
          </div>
        )}
        {partner.requirements && partner.requirements.length > 0 && (
          <p className="pt-1">
            <span className="font-medium text-ink/70">Requirements: </span>
            {partner.requirements.join(' · ')}
          </p>
        )}
      </div>
    </div>
  )
}
