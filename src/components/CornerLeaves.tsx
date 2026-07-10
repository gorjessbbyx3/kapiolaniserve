type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const positionClasses: Record<Corner, string> = {
  'top-left': 'top-0 left-0 -translate-x-1/4 -translate-y-1/4 rotate-[-15deg]',
  'top-right': 'top-0 right-0 translate-x-1/4 -translate-y-1/4 rotate-[15deg] scale-x-[-1]',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/4 translate-y-1/4 rotate-[15deg] scale-y-[-1]',
  'bottom-right': 'bottom-0 right-0 translate-x-1/4 translate-y-1/4 rotate-[-15deg] scale-[-1]',
}

function MonsteraLeaf({ color = '#2f4a3c' }: { color?: string }) {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M100 10C60 20 20 60 15 110C12 145 35 180 70 185C60 160 65 140 80 125C70 130 55 125 50 110C65 115 80 105 85 90C70 95 60 85 58 70C75 78 90 68 95 52C82 55 75 45 76 32C90 42 105 38 112 22C104 28 98 22 100 10Z"
        fill={color}
        fillOpacity="0.16"
      />
      <path
        d="M100 10C60 20 20 60 15 110C12 145 35 180 70 185"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="2"
      />
    </svg>
  )
}

export default function CornerLeaves({
  corners = ['top-left', 'bottom-right'],
  color = '#f6f1e4',
  size = 180,
  opacity = 1,
}: {
  corners?: Corner[]
  color?: string
  size?: number
  opacity?: number
}) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" style={{ opacity }} aria-hidden="true">
      {corners.map((c) => (
        <div key={c} className={`absolute ${positionClasses[c]}`} style={{ width: size, height: size }}>
          <MonsteraLeaf color={color} />
        </div>
      ))}
    </div>
  )
}
