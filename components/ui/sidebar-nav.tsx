import Link from "next/link"

export function SidebarNav() {
  const sections = [
    { id: "introducao", title: "Introdução" },
    { id: "visao-geral", title: "Visão Geral" },
    { id: "mapa-mental", title: "Mapa Mental" },
    { id: "trilha", title: "Trilha de Desenvolvimento" },
    { id: "ia", title: "IA no Desenvolvimento" },
    { id: "exemplos", title: "Exemplos de Apps" },
    { id: "relatorio", title: "Relatório Final" },
    { id: "apresentar", title: "Onde Apresentar" },
    { id: "recursos", title: "Recursos Adicionais" },
    { id: "videos", title: "Vídeos" },
    { id: "faq", title: "FAQ" }
  ]

  return (
    <div className="hidden md:block w-64 shrink-0">
      <div className="h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto py-6">
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <Link
                href={`#${section.id}`}
                className="block px-4 py-2 text-sm text-zinc-700 hover:text-zinc-900 hover:bg-zinc-100 rounded-md transition-colors dark:text-zinc-300 dark:hover:text-white dark:hover:bg-zinc-800"
              >
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}