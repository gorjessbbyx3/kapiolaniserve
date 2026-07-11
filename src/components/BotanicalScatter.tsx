type Props = { color?: string; className?: string }

/** Peltate heart-shaped kalo (taro) leaf — echoes the KSSLP logo emblem */
export function TaroLeaf({ color = '#2f4a3c', className = '' }: Props) {
  return (
    <svg viewBox="0 0 120 140" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M60 8C90 8 112 34 112 64C112 96 90 118 60 132C30 118 8 96 8 64C8 34 30 8 60 8Z"
        fill={color}
      />
      <path d="M60 8V132" stroke="#00000022" strokeWidth="2" />
      <path d="M60 40C48 55 34 62 20 66" stroke="#00000022" strokeWidth="1.5" />
      <path d="M60 40C72 55 86 62 100 66" stroke="#00000022" strokeWidth="1.5" />
      <path d="M60 70C50 82 40 88 28 92" stroke="#00000022" strokeWidth="1.5" />
      <path d="M60 70C70 82 80 88 92 92" stroke="#00000022" strokeWidth="1.5" />
    </svg>
  )
}

/** Simple 5-petal hibiscus bloom with center stamen */
export function Hibiscus({ color = '#d43d51', className = '' }: Props) {
  return (
    <svg viewBox="0 0 120 120" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="60"
          cy="32"
          rx="16"
          ry="26"
          fill={color}
          transform={`rotate(${angle} 60 60)`}
          fillOpacity="0.9"
        />
      ))}
      <circle cx="60" cy="60" r="7" fill="#f3c94f" />
      <line x1="60" y1="60" x2="60" y2="84" stroke="#f3c94f" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

type ScatterItem = {
  type: 'taro' | 'hibiscus'
  top?: string
  bottom?: string
  left?: string
  right?: string
  size: number
  rotate: number
  opacity: number
  delay?: number
}

/** Tasteful, low-opacity botanical texture layer — pointer-events-none, sits behind content */
export default function BotanicalScatter({
  items,
  taroColor = '#2f4a3c',
  hibiscusColor = '#d43d51',
}: {
  items: ScatterItem[]
  taroColor?: string
  hibiscusColor?: string
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
            width: item.size,
            height: item.size,
            opacity: item.opacity,
            transform: `rotate(${item.rotate}deg)`,
            animationDelay: `${item.delay ?? 0}s`,
            ['--tilt' as string]: `${item.rotate}deg`,
          }}
        >
          {item.type === 'taro' ? <TaroLeaf color={taroColor} /> : <Hibiscus color={hibiscusColor} />}
        </div>
      ))}
    </div>
  )
}
