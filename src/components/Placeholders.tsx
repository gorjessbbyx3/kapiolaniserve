import { ImageIcon, FileText } from 'lucide-react'

export function ImagePlaceholder({
  label,
  aspect = 'aspect-[4/3]',
  accent = '#2f4a3c',
}: {
  label: string
  aspect?: string
  accent?: string
}) {
  return (
    <div
      className={`${aspect} w-full rounded-xl border-2 border-dashed flex flex-col items-center justify-center gap-2 text-center px-4`}
      style={{ borderColor: `${accent}55`, backgroundColor: `${accent}0a` }}
    >
      <ImageIcon size={22} strokeWidth={1.5} style={{ color: accent }} />
      <p className="text-xs leading-snug" style={{ color: accent }}>
        <span className="font-medium">Photo needed:</span> {label}
      </p>
    </div>
  )
}

export function FilePlaceholder({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border-2 border-dashed border-kalo/25 bg-kalo/5 text-sm text-kalo/70">
      <FileText size={16} strokeWidth={1.5} />
      <span>
        <span className="font-medium">File needed:</span> {label}
      </span>
    </div>
  )
}
