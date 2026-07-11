type Props = { color?: string; className?: string }

/** Refined peltate kalo (taro) leaf — gold line-art only, no fill */
export function TaroLeafOutline({ color = '#c9a24b', className = '' }: Props) {
  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 18
           C 52 12 42 12 35 17
           C 18 28 8 48 9 68
           C 10 94 26 114 60 132
           C 94 114 110 94 111 68
           C 112 48 102 28 85 17
           C 78 12 68 12 60 18 Z"
        stroke={color}
        strokeWidth="1.1"
      />
      <path d="M60 22 C 57 46 58 90 60 126" stroke={color} strokeWidth="0.65" opacity="0.6" />
      <path d="M59 34C48 44 34 50 22 53" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M61 34C72 44 86 50 98 53" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M59 62C50 74 40 81 27 86" stroke={color} strokeWidth="0.5" opacity="0.5" />
      <path d="M61 62C70 74 80 81 93 86" stroke={color} strokeWidth="0.5" opacity="0.5" />
    </svg>
  )
}

/** Hibiscus bloom — gold line-art only, no fill */
export function HibiscusOutline({ color = '#c9a24b', className = '' }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((angle) => (
        <path
          key={angle}
          d="M60 60 C 48 48 44 28 58 12 C 72 28 68 48 60 60 Z"
          stroke={color}
          strokeWidth="0.9"
          opacity="0.75"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="4" stroke={color} strokeWidth="0.8" opacity="0.75" />
      <path d="M60 60 C 58 68 58 76 60 86" stroke={color} strokeWidth="0.8" opacity="0.6" />
    </svg>
  )
}

/** A single elegant fern frond — engraving-style gold line art */
export function FernFrond({ color = '#c9a24b', className = '' }: Props) {
  const leaflets = [
    { t: 0.18, side: 1, s: 0.55 },
    { t: 0.18, side: -1, s: 0.55 },
    { t: 0.34, side: 1, s: 0.72 },
    { t: 0.34, side: -1, s: 0.72 },
    { t: 0.5, side: 1, s: 0.85 },
    { t: 0.5, side: -1, s: 0.85 },
    { t: 0.66, side: 1, s: 0.7 },
    { t: 0.66, side: -1, s: 0.7 },
    { t: 0.82, side: 1, s: 0.45 },
    { t: 0.82, side: -1, s: 0.45 },
  ]
  const stem = (t: number) => ({
    x: 12 + t * 96,
    y: 190 - t * 170 - Math.sin(t * Math.PI) * 20,
  })
  return (
    <svg viewBox="0 0 120 190" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 190 Q 60 120 108 10" stroke={color} strokeWidth="1.1" opacity="0.8" />
      {leaflets.map((l, i) => {
        const p = stem(l.t)
        const angle = l.side * 35
        const len = 22 * l.s
        return (
          <path
            key={i}
            d={`M${p.x} ${p.y} Q ${p.x + l.side * len * 0.6} ${p.y - len * 0.3} ${p.x + l.side * len} ${p.y - len * 0.6}`}
            stroke={color}
            strokeWidth="0.75"
            opacity="0.6"
            transform={`rotate(${angle} ${p.x} ${p.y})`}
          />
        )
      })}
    </svg>
  )
}

/** A refined four-point sparkle mark with a soft pulsing glow */
export function Sparkle({ color = '#f3c94f', className = '', delay = 0 }: Props & { delay?: number }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={`sparkle-glow ${className}`}
      style={{ animationDelay: `${delay}s` }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 1C20.8 12 21 19 24 22C27 25 30.5 26.2 39 20C30.5 26.2 27 27.5 24 30.5C21 33.5 20.8 39 20 39C19.2 39 19 33.5 16 30.5C13 27.5 9.5 26.2 1 20C9.5 26.2 13 25 16 22C19 19 19.2 12 20 1Z"
        fill={color}
      />
    </svg>
  )
}

/** A field of small gold-dust sparkles at varied sizes/opacities — reads as scattered glimmer rather than isolated icons */
export function GoldDust({
  count = 10,
  seedOffset = 0,
  areaTop = '0%',
  areaHeight = '100%',
}: {
  count?: number
  seedOffset?: number
  areaTop?: string
  areaHeight?: string
}) {
  const items = Array.from({ length: count }, (_, i) => {
    const n = i + seedOffset
    const pseudoRandom = (seed: number) => {
      const x = Math.sin(seed * 12.9898) * 43758.5453
      return x - Math.floor(x)
    }
    return {
      left: `${(pseudoRandom(n * 3.1) * 100).toFixed(1)}%`,
      top: `${(pseudoRandom(n * 5.7) * 100).toFixed(1)}%`,
      size: 6 + pseudoRandom(n * 7.3) * 14,
      opacity: 0.25 + pseudoRandom(n * 2.2) * 0.5,
      delay: pseudoRandom(n * 4.4) * 3,
    }
  })
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      style={{ top: areaTop, height: areaHeight }}
      aria-hidden="true"
    >
      {items.map((it, i) => (
        <div key={i} className="absolute" style={{ left: it.left, top: it.top, width: it.size, height: it.size, opacity: it.opacity }}>
          <Sparkle delay={it.delay} />
        </div>
      ))}
    </div>
  )
}

/** A thin gold hairline divider with a centered diamond ornament, for elegant section transitions */
export function OrnamentDivider({ tone = '#c9a24b', className = '' }: { tone?: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-full max-w-[120px]" style={{ background: `linear-gradient(to left, ${tone}, transparent)` }} />
      <span
        className="h-2 w-2 rotate-45 shrink-0"
        style={{ background: tone, boxShadow: `0 0 8px ${tone}99` }}
      />
      <span className="h-px w-full max-w-[120px]" style={{ background: `linear-gradient(to right, ${tone}, transparent)` }} />
    </div>
  )
}
export function WatercolorWash({
  color,
  size,
  top,
  bottom,
  left,
  right,
  opacity = 0.25,
}: {
  color: string
  size: number
  top?: string
  bottom?: string
  left?: string
  right?: string
  opacity?: number
}) {
  return (
    <div
      className="absolute rounded-full"
      style={{
        width: size,
        height: size,
        top,
        bottom,
        left,
        right,
        background: color,
        opacity,
        filter: 'blur(60px)',
      }}
    />
  )
}

type ScatterItem = {
  type: 'taro-outline' | 'hibiscus-outline' | 'fern' | 'sparkle'
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  rotate: number
  opacity: number
  delay?: number
}

/** Restrained, gallery-quality gold line-art texture layer — pointer-events-none, sits behind content */
export default function BotanicalScatter({
  items,
  lineColor = '#c9a24b',
}: {
  items: ScatterItem[]
  lineColor?: string
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute float-slow"
          style={{
            top: item.top,
            bottom: item.bottom,
            left: item.left,
            right: item.right,
            width: item.type === 'fern' ? item.size * 0.63 : item.size,
            height: item.size,
            opacity: item.opacity,
            transform: `rotate(${item.rotate}deg)`,
            animationDelay: `${item.delay ?? 0}s`,
            ['--tilt' as string]: `${item.rotate}deg`,
          }}
        >
          {item.type === 'taro-outline' && <TaroLeafOutline color={lineColor} />}
          {item.type === 'hibiscus-outline' && <HibiscusOutline color={lineColor} />}
          {item.type === 'fern' && <FernFrond color={lineColor} />}
          {item.type === 'sparkle' && <Sparkle delay={item.delay ?? 0} />}
        </div>
      ))}
    </div>
  )
}
