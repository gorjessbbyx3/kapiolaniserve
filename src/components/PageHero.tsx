import { useEffect } from 'react'
import BotanicalScatter, { WatercolorWash, GoldDust } from './BotanicalScatter'
import JsonLd from './JsonLd'

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
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | KSSLP`
    return () => {
      document.title = previousTitle
    }
  }, [title])

  useEffect(() => {
    if (!description) return
    const metaTag = document.querySelector('meta[name="description"]')
    const previousContent = metaTag?.getAttribute('content') ?? ''
    metaTag?.setAttribute('content', description)
    return () => {
      metaTag?.setAttribute('content', previousContent)
    }
  }, [description])

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kapiolaniserve.techsavvyhawaii.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: typeof window !== 'undefined' ? window.location.href : undefined,
      },
    ],
  }

  return (
    <section className="relative bg-kalo text-sand contour-field foil-texture overflow-hidden">
      <JsonLd data={breadcrumbSchema} />
      <WatercolorWash color="#1c6b72" size={300} top="-20%" right="-6%" opacity={0.16} />
      <GoldDust count={8} seedOffset={120} />
      <BotanicalScatter
        lineColor="#c9a24b"
        items={[
          { type: 'taro-outline', top: '-14%', right: '-5%', size: 190, rotate: 16, opacity: 0.26 },
          { type: 'fern', bottom: '-8%', left: '2%', size: 150, rotate: -100, opacity: 0.24, delay: 0.5 },
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
