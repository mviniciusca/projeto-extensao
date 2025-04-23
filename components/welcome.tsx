"use client"

import { Search, Twitter, Github, Notebook, Heart, X, BookOpen, Compass, GitFork, Route, Cpu, Layout, FileText, Link2, Video, FileQuestion, Presentation } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { Videos } from "@/components/videos"
import { ObjetivosDesenvolvimento } from "@/components/objetivos-desenvolvimento"
import { Input } from "@/components/ui/input"
import { Header } from "@/components/header"
import { BackgroundGradient } from "@/components/ui/background-gradient"
import Link from "next/link"
import { useState, useEffect } from "react"

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
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

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

    if (!mounted) {
        return null // Return null on server-side to prevent hydration mismatch
    }

    return (
        <div className="min-h-screen flex flex-col bg-white/80 dark:bg-zinc-950/80 relative">
            <BackgroundGradient />
            <Header />

            {/* Main Content */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-12 relative">
                <div className="w-full max-w-3xl mx-auto">
                    {/* Hero Section */}
                    <div className="text-center space-y-6 mb-12">
                        <div className="inline-flex p-3 rounded-full bg-zinc-100 dark:bg-zinc-900 mb-4">
                            <Notebook className="h-8 w-8 text-zinc-900 dark:text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
                            Guia de Projeto de Extensão
                        </h1>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
                            Guia e Mapa Mental para conclusão do Projeto de Extensão do curso <br /> de Análise e Desenvolvimento de Sistemas.
                        </p>
                        <div className="flex justify-center">
                            <Button asChild className="gap-2">
                                <Link href="/guia">
                                    <BookOpen className="h-4 w-4" />
                                    Acessar Guia Completo
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Search Section */}
                    <div className="space-y-6 w-full max-w-2xl mx-auto">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Buscar conteúdo..."
                                value={searchQuery}
                                onChange={(e) => handleSearch(e.target.value)}
                                className="w-full pl-10 pr-10 h-12 text-base"
                            />
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-400" />

                            {searchQuery && (
                                <button
                                    onClick={clearSearch}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                                >
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">Limpar busca</span>
                                </button>
                            )}

                            {/* Search Results Dropdown */}
                            {searchResults.length > 0 && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-lg z-50 max-h-[60vh] overflow-y-auto">
                                    {searchResults.map((result) => (
                                        <Link
                                            key={result.id}
                                            href={`/guia#${result.id}`}
                                            className="block px-4 py-3 hover:bg-zinc-50 dark:hover:bg-zinc-800 border-b border-zinc-100 dark:border-zinc-800 last:border-0 transition-colors"
                                            onClick={() => setSearchQuery("")}
                                        >
                                            <div className="text-sm font-medium text-zinc-900 dark:text-white mb-1">{result.title}</div>
                                            <div className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">{result.content}</div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Tags Section */}
                        <div className="space-y-4">
                            {showSuggestions ? (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-sm font-medium text-zinc-900 dark:text-white">
                                            Tópicos Principais
                                        </h2>
                                        <button
                                            onClick={() => setShowSuggestions(false)}
                                            className="text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
                                        >
                                            Ocultar sugestões
                                        </button>
                                    </div>
                                    <div className="flex flex-wrap gap-2 justify-center">
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
                            ) : (
                                <button
                                    onClick={() => setShowSuggestions(true)}
                                    className="text-xs text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300 mx-auto block"
                                >
                                    Mostrar sugestões
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}