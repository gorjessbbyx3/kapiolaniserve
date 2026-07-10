import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export type QA = { q: string; a: string }

export default function Accordion({ items }: { items: QA[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="divide-y divide-kalo/10 border-t border-b border-kalo/10">
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
                className={`shrink-0 text-papaya transition-transform ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {isOpen && <p className="pb-5 text-ink/70 leading-relaxed max-w-2xl">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
