"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LucideIcon, BookOpen, Eye, GitFork, Route, Sparkles, Layout, FileText, PresentationIcon, Link2, Video, FileQuestion, CheckCircle } from "lucide-react"

export interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

export const items: NavItem[] = [
  {
    title: "Introdução",
    href: "/guia#introducao",
    icon: BookOpen
  },
  {
    title: "Visão Geral",
    href: "/guia#visao-geral",
    icon: Eye
  },
  {
    title: "Mapa Mental",
    href: "/guia#mapa-mental",
    icon: GitFork
  },
  {
    title: "Trilha de Desenvolvimento",
    href: "/guia#trilha",
    icon: Route
  },
  {
    title: "IA no Desenvolvimento",
    href: "/guia#ia",
    icon: Sparkles
  },
  {
    title: "Exemplos de Apps",
    href: "/guia#exemplos",
    icon: Layout
  },
  {
    title: "Relatório Final",
    href: "/guia#relatorio",
    icon: FileText
  },
  {
    title: "Onde Apresentar",
    href: "/guia#apresentar",
    icon: PresentationIcon
  },
  {
    title: "Recursos Adicionais",
    href: "/guia#recursos",
    icon: Link2
  },
  {
    title: "Vídeos",
    href: "/guia#videos",
    icon: Video
  },
  {
    title: "FAQ",
    href: "/guia#faq",
    icon: FileQuestion
  },
  {
    title: "Conclusão",
    href: "/guia#conclusao",
    icon: CheckCircle
  }
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-[240px] lg:w-[280px] hidden md:block h-[calc(100vh-4rem)] overflow-y-auto">
      <nav className="grid items-start gap-2 py-8">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                pathname === item.href
                  ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                  : "text-zinc-600 dark:text-zinc-400"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}