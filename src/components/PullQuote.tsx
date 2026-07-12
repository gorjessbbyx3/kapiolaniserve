export default function PullQuote({ quote, attribution }: { quote: string; attribution?: string }) {
  return (
    <blockquote className="relative pl-8 border-l-2 border-gold my-4">
      <span className="absolute -left-3 -top-2 text-5xl font-display text-gold/40 select-none">&ldquo;</span>
      <p className="font-display text-xl sm:text-2xl italic text-kalo leading-snug">{quote}</p>
      {attribution && <p className="mt-3 text-sm text-ink/60 not-italic">&mdash; {attribution}</p>}
    </blockquote>
  )
}
