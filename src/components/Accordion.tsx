import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type QA = { q: string; a: string }

export default function Accordion({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-gold/20 border-t border-b border-gold/20">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q}>
            <button
              className="w-full flex items-center justify-between gap-4 py-5 text-left"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg text-kalo">{item.q}</span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="pb-5 text-ink/70 leading-relaxed max-w-2xl border-l-2 border-gold/40 pl-4">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
