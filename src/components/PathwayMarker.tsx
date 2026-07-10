import { Leaf, HeartPulse, BookOpen, Palette, Compass, HandHeart, ShieldCheck } from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; strokeWidth?: number }>> = {
  leaf: Leaf,
  pulse: HeartPulse,
  book: BookOpen,
  palette: Palette,
  compass: Compass,
  hands: HandHeart,
  shield: ShieldCheck,
}

export default function PathwayMarker({
  marker,
  color,
  size = 'md',
}: {
  marker: string
  color: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const Icon = iconMap[marker] ?? Leaf
  const dims = size === 'lg' ? 64 : size === 'sm' ? 36 : 48
  const iconSize = size === 'lg' ? 28 : size === 'sm' ? 16 : 22

  return (
    <span
      className="inline-flex items-center justify-center rounded-full shrink-0 text-sand"
      style={{ width: dims, height: dims, backgroundColor: color }}
      aria-hidden="true"
    >
      <Icon size={iconSize} strokeWidth={1.75} />
    </span>
  )
}
