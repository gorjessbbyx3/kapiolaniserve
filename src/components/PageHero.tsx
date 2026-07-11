import BotanicalScatter, { WatercolorWash } from './BotanicalScatter'

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
    <section className="relative bg-kalo text-sand contour-field overflow-hidden">
      <WatercolorWash color="#1c6b72" size={300} top="-20%" right="-6%" opacity={0.2} />
      <BotanicalScatter
        taroColor="#c9a24b"
        hibiscusColor="#d43d51"
        lineColor="#f6f1e4"
        items={[
          { type: 'taro', top: '-10%', right: '-4%', size: 170, rotate: 16, opacity: 0.14 },
          { type: 'hibiscus', bottom: '-12%', left: '4%', size: 90, rotate: -8, opacity: 0.12, delay: 1 },
          { type: 'arcs', bottom: '-6%', right: '8%', size: 90, rotate: 180, opacity: 0.18, delay: 0.5 },
        ]}
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8 py-16 lg:py-20">
        <p className="eyebrow mb-4" style={{ color: accent ?? '#d9a441' }}>
          {eyebrow}
        </p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl max-w-2xl">{title}</h1>
        {description && <p className="mt-5 max-w-xl text-sand/80 leading-relaxed">{description}</p>}
      </div>
    </section>
  )
}
