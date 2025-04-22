import Link from "next/link"
import { BookOpen, Compass, GitFork, Route, Cpu, Layout, FileText, Presentation, FileQuestion, Folder, Video } from "lucide-react"

export function SidebarNav() {
  const sections = [
    { id: "introducao", title: "Introdução", icon: BookOpen },
    { id: "visao-geral", title: "Visão Geral", icon: Compass },
    { id: "mapa-mental", title: "Mapa Mental", icon: GitFork },
    { id: "trilha", title: "Trilha de Desenvolvimento", icon: Route },
    { id: "ia", title: "IA no Desenvolvimento", icon: Cpu },
    { id: "exemplos", title: "Exemplos de Apps", icon: Layout },
    { id: "relatorio", title: "Relatório Final", icon: FileText },
    { id: "apresentar", title: "Onde Apresentar", icon: Presentation },
    { id: "recursos", title: "Recursos Adicionais", icon: Folder },
    { id: "videos", title: "Vídeos", icon: Video },
    { id: "faq", title: "FAQ", icon: FileQuestion }
  ]

  return (
    <div className="hidden md:block w-64 shrink-0">
      <div className="h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-6">
        <ul className="space-y-2">
          {sections.map((section) => {
            const Icon = section.icon
            return (
              <li key={section.id}>
                <Link
                  href={`#${section.id}`}
                  className="flex items-center px-4 py-2 space-x-3 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800"
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{section.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}