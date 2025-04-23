"use client"

import { Github, Search, Twitter, Notebook, BookOpen, Compass, GitFork, Route, Cpu, Layout, FileText, Presentation, Link2, Video, FileQuestion, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"

// Conteúdo pesquisável expandido
const searchableContent = [
  {
    id: "introducao",
    title: "Introdução",
    content: "Guia para alunos de ADS desenvolverem projetos de extensão. Desenvolvimento de aplicativos baseados nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU."
  },
  {
    id: "visao-geral",
    title: "Visão Geral",
    content: "Desenvolver uma aplicação web com impacto social positivo. Requisitos: React/JS, Vercel, documentação completa, alinhamento com ODS."
  },
  {
    id: "mapa-mental",
    title: "Mapa Mental",
    content: "Processo de ideação: escolha do ODS, análise do problema, concepção do aplicativo, validação da ideia. Transforme uma ideia em solução tecnológica."
  },
  {
    id: "trilha",
    title: "Trilha de Desenvolvimento",
    content: "Passo a passo: escolha do ODS, identificação do problema real, definição do público-alvo, pesquisa de soluções existentes. Desenvolvimento prático do projeto."
  },
  {
    id: "ia",
    title: "IA no Desenvolvimento",
    content: "Uso de IA como ferramenta auxiliar. ChatGPT, Claude, DeepSeek para ideação. Midjourney/DALL-E para design. GitHub Copilot para desenvolvimento."
  },
  {
    id: "exemplos",
    title: "Exemplos de Apps",
    content: "Exemplos por ODS: BenefitFinder (pobreza), FoodShare (fome), MedAlert (saúde), SkillsForAll (educação), SafeSpace (igualdade)."
  },
  {
    id: "relatorio",
    title: "Relatório Final",
    content: "Estrutura: Introdução, Especificação Técnica, Impacto Social, Viabilidade e Implementação, Conclusão. Documentação completa do projeto."
  },
  {
    id: "apresentar",
    title: "Onde Apresentar",
    content: "ONGs, Secretarias Municipais, Incubadoras, Eventos Universitários, Hackathons, Empresas com programas sociais."
  },
  {
    id: "recursos",
    title: "Recursos Adicionais",
    content: "Links úteis: Documentação React, Vercel, ODS da ONU, GitHub Student Pack, Figma."
  },
  {
    id: "faq",
    title: "FAQ",
    content: "Perguntas frequentes sobre relatório, documentação, depoimentos, entregas e processo."
  },
  {
    id: "videos",
    title: "Vídeos para Aprender Mais",
    content: "Tutoriais e guias em vídeo: Como fazer projeto de extensão 2025, Como fazer projeto de extensão - Rápido e fácil, Projeto de Extensão ADS - Como Fazer Unopar e Anhanguera, Projeto de Extensão - Anhanguera 2023. Canais: É Hora de Aprender, ADS Code, Hora do EAD."
  }
]

// Tags para sugestões de busca
const tags = [
  { id: "introducao", title: "Introdução", icon: BookOpen, weight: "md" },
  { id: "visao-geral", title: "Visão Geral", icon: Compass, weight: "md" },
  { id: "mapa-mental", title: "Mapa Mental", icon: GitFork, weight: "md" },
  { id: "trilha", title: "Trilha de Desenvolvimento", icon: Route, weight: "md" },
  { id: "ia", title: "IA no Desenvolvimento", icon: Cpu, weight: "md" },
  { id: "exemplos", title: "Exemplos de Apps", icon: Layout, weight: "md" },
  { id: "relatorio", title: "Relatório Final", icon: FileText, weight: "md" },
  { id: "apresentar", title: "Onde Apresentar", icon: Presentation, weight: "md" },
  { id: "recursos", title: "Recursos Adicionais", icon: Link2, weight: "md" },
  { id: "videos", title: "Vídeos", icon: Video, weight: "md" },
  { id: "faq", title: "FAQ", icon: FileQuestion, weight: "md" }
]

export function Welcome() {
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<typeof searchableContent>([])
  const [showSuggestions, setShowSuggestions] = useState(true)

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.trim() === "") {
      setSearchResults([])
      return
    }

    const results = searchableContent.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.content.toLowerCase().includes(query.toLowerCase())
    )
    setSearchResults(results)
  }

  // Função para limpar a busca
  const clearSearch = () => {
    setSearchQuery("")
    setSearchResults([])
  }

  // Função para obter a classe de estilo baseada no peso da tag
  const getTagStyle = (weight: string) => {
    const baseStyle = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
    switch (weight) {
      case "lg":
        return `${baseStyle} text-sm font-medium`
      case "md":
        return `${baseStyle} text-xs`
      default:
        return `${baseStyle} text-xs text-zinc-600 dark:text-zinc-400`
    }
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
          <Button variant="outline" asChild className="flex items-center gap-2">
            <Link href="/">
              <BookOpen className="h-4 w-4" />
              <span>Guia Completo</span>
            </Link>
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-xl w-full">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <Notebook className="h-12 w-12 text-zinc-900 dark:text-white" />
            </div>
            <h1 className="text-xl md:text-2xl font-semibold mb-3 text-zinc-900 dark:text-white">
              Desenvolvimento de Projetos Extensionistas
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Guia prático para projetos alinhados aos ODS da ONU
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Input
              type="text"
              placeholder="Buscar conteúdo..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              className="pl-10 pr-10 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zinc-400" />
            
            {searchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Limpar busca</span>
              </button>
            )}
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-md shadow-lg z-50">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    href={`/#${result.id}`}
                    className="block px-4 py-3 hover:bg-zinc-100 dark:hover:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
                    onClick={() => setSearchQuery("")}
                  >
                    <div className="text-sm font-medium text-zinc-900 dark:text-white mb-1">{result.title}</div>
                    <div className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{result.content}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Tag Cloud */}
          {showSuggestions && (
            <div className="text-center mb-8">
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Sugestões:
                </p>
                <button
                  onClick={() => setShowSuggestions(false)}
                  className="text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  Ocultar sugestões
                </button>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {tags.map((tag) => {
                  const Icon = tag.icon
                  return (
                    <button
                      key={tag.id}
                      onClick={() => handleSearch(tag.title)}
                      className={getTagStyle(tag.weight)}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      <span>{tag.title}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {!showSuggestions && (
            <button
              onClick={() => setShowSuggestions(true)}
              className="block mx-auto text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 mb-8"
            >
              Mostrar sugestões
            </button>
          )}

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