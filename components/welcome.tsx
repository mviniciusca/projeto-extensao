"use client"

import { Github, Search, Twitter, Notebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

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

export function Welcome() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof sections>([])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const results = sections.filter(section => 
      section.title.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container max-w-5xl mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/" className="flex items-center space-x-2">
            <Notebook className="h-6 w-6 text-zinc-900 dark:text-white" />
            <span className="text-lg font-semibold text-zinc-900 dark:text-white">Projeto de Extensão</span>
          </Link>
          <Button variant="outline" asChild>
            <Link href="/">
              Acessar Guia Completo
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl w-full">
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 text-zinc-900 dark:text-white">
              Desenvolvimento de Projetos Extensionistas
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              Guia prático para projetos alinhados aos ODS da ONU
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8">
            <Input
              type="text"
              placeholder="Buscar conteúdo..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg z-50">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/#${result.id}`}
                    className="block px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-left text-sm"
                    onClick={() => setSearchQuery("")}
                  >
                    {result.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4">
            <Button variant="outline" size="icon" asChild>
              <Link href="https://github.com/marvindev2022" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <Link href="https://twitter.com/marvindev2022" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container max-w-5xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Notebook className="h-5 w-5 text-zinc-700 dark:text-zinc-300" />
              <span className="text-sm text-zinc-600 dark:text-zinc-400">
                © 2024 Projeto de Extensão
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                Início
              </Link>
              <Link
                href="/#faq"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                FAQ
              </Link>
              <Link
                href="https://github.com/marvindev2022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}