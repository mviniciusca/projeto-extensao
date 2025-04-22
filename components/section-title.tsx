interface SectionTitleProps {
  id: string
  title: string
  subtitle?: string
}

export function SectionTitle({ id, title, subtitle }: SectionTitleProps) {
  return (
    <div className="mb-8" id={id}>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white mb-2">{title}</h2>
      {subtitle && <p className="text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  )
}
