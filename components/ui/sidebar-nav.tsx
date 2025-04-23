"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const items = [
  {
    title: "Introdução",
    href: "/guia#introducao",
  },
  {
    title: "Visão Geral",
    href: "/guia#visao-geral",
  },
  {
    title: "Mapa Mental",
    href: "/guia#mapa-mental",
  },
  {
    title: "Trilha de Desenvolvimento",
    href: "/guia#trilha",
  },
  {
    title: "IA no Desenvolvimento",
    href: "/guia#ia",
  },
  {
    title: "Exemplos de Apps",
    href: "/guia#exemplos",
  },
  {
    title: "Relatório Final",
    href: "/guia#relatorio",
  },
  {
    title: "Onde Apresentar",
    href: "/guia#apresentar",
  },
  {
    title: "Recursos Adicionais",
    href: "/guia#recursos",
  },
  {
    title: "Vídeos",
    href: "/guia#videos",
  },
  {
    title: "FAQ",
    href: "/guia#faq",
  },
]

export function SidebarNav() {
  const pathname = usePathname()

  return (
    <div className="w-[240px] lg:w-[280px] hidden md:block">
      <div className="sticky top-24">
        <nav className="grid items-start gap-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                pathname === item.href
                  ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                  : "text-zinc-600 dark:text-zinc-400"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}