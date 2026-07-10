export default function PageHero({
  eyebrow,
  title,
  description,
  accent,
}: {
  eyebrow: string
  title: string
  description?: string
  accent?: string
}) {
  return (
    <section className="bg-kalo text-sand contour-field">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <p className="eyebrow mb-4" style={{ color: accent ?? '#d9a441' }}>
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl max-w-2xl">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-sand/80 leading-relaxed">{description}</p>}
      </div>
    </section>
  )
}
