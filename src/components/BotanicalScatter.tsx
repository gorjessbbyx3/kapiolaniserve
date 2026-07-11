type Props = { color?: string; className?: string }

/** Refined peltate kalo (taro) leaf silhouette with fine gold-hairline venation */
export function TaroLeaf({ color = '#2f4a3c', className = '' }: Props) {
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
        fill={color}
      />
      <path
        d="M60 22 C 57 46 58 90 60 126"
        stroke="#f6f1e4"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path d="M59 34C48 44 34 50 22 53" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
      <path d="M61 34C72 44 86 50 98 53" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
      <path d="M59 62C50 74 40 81 27 86" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
      <path d="M61 62C70 74 80 81 93 86" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
      <path d="M60 92C54 100 48 105 40 110" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
      <path d="M60 92C66 100 72 105 80 110" stroke="#f6f1e4" strokeWidth="0.75" opacity="0.3" strokeLinecap="round" />
    </svg>
  )
}

/** Stroke-only kalo leaf — the engraved / botanical-plate counterpart to the filled TaroLeaf */
export function TaroLeafOutline({ color = '#f6f1e4', className = '' }: Props) {
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
        strokeWidth="1.25"
      />
      <path d="M60 22 C 57 46 58 90 60 126" stroke={color} strokeWidth="0.75" opacity="0.6" />
      <path d="M59 34C48 44 34 50 22 53" stroke={color} strokeWidth="0.6" opacity="0.55" />
      <path d="M61 34C72 44 86 50 98 53" stroke={color} strokeWidth="0.6" opacity="0.55" />
      <path d="M59 62C50 74 40 81 27 86" stroke={color} strokeWidth="0.6" opacity="0.55" />
      <path d="M61 62C70 74 80 81 93 86" stroke={color} strokeWidth="0.6" opacity="0.55" />
    </svg>
  )
}

/** Hibiscus bloom with soft overlapping teardrop petals and a fine stamen */
export function Hibiscus({ color = '#d43d51', className = '' }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((angle) => (
        <path
          key={angle}
          d="M60 60 C 48 48 44 28 58 12 C 72 28 68 48 60 60 Z"
          fill={color}
          fillOpacity="0.92"
          transform={`rotate(${angle} 60 60)`}
        />
      ))}
      <circle cx="60" cy="60" r="5" fill="#f3c94f" />
      <path d="M60 60 C 58 68 58 76 60 86" stroke="#f3c94f" strokeWidth="2" strokeLinecap="round" />
      <circle cx="60" cy="87" r="2" fill="#f3c94f" />
    </svg>
  )
}

/** A single elegant fern frond — engraving-style line art, standing in for a decorative flourish */
export function FernFrond({ color = '#f6f1e4', className = '' }: Props) {
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
  // stem follows a gentle curve from bottom-left to top-right
  const stem = (t: number) => ({
    x: 12 + t * 96,
    y: 190 - t * 170 - Math.sin(t * Math.PI) * 20,
  })
  return (
    <svg viewBox="0 0 120 190" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 190 Q 60 120 108 10" stroke={color} strokeWidth="1.25" opacity="0.75" />
      {leaflets.map((l, i) => {
        const p = stem(l.t)
        const angle = l.side * 35
        const len = 22 * l.s
        return (
          <path
            key={i}
            d={`M${p.x} ${p.y} Q ${p.x + l.side * len * 0.6} ${p.y - len * 0.3} ${p.x + l.side * len} ${p.y - len * 0.6}`}
            stroke={color}
            strokeWidth="0.85"
            opacity="0.55"
            transform={`rotate(${angle} ${p.x} ${p.y})`}
          />
        )
      })}
    </svg>
  )
}

/** Soft blurred color wash — a CSS stand-in for a watercolor bloom, no raster image needed */
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
  type: 'taro' | 'hibiscus' | 'taro-outline' | 'fern'
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  rotate: number
  opacity: number
  delay?: number
}

/** Restrained, gallery-quality botanical texture layer — pointer-events-none, sits behind content */
export default function BotanicalScatter({
  items,
  taroColor = '#2f4a3c',
  hibiscusColor = '#d43d51',
  lineColor = '#f6f1e4',
}: {
  items: ScatterItem[]
  taroColor?: string
  hibiscusColor?: string
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
          {item.type === 'taro' && <TaroLeaf color={taroColor} />}
          {item.type === 'hibiscus' && <Hibiscus color={hibiscusColor} />}
          {item.type === 'taro-outline' && <TaroLeafOutline color={lineColor} />}
          {item.type === 'fern' && <FernFrond color={lineColor} />}
        </div>
      ))}
    </div>
  )
}
