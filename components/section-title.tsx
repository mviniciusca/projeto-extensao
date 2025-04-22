import type React from "react"
interface SectionTitleProps {
  id: string
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

export function SectionTitle({ id, title, subtitle, icon }: SectionTitleProps) {
  return (
    <div className="mb-8" id={id}>
      <div className="flex items-center gap-2 mb-2">
        {icon && <div className="text-zinc-700 dark:text-zinc-300">{icon}</div>}
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">{title}</h2>
      </div>
      {subtitle && <p className="text-zinc-600 dark:text-zinc-400">{subtitle}</p>}
    </div>
  )
}
