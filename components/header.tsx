"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Notebook, BookOpen, Compass, GitFork, Route, Cpu, Layout, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DownloadButton } from "@/components/download-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <Notebook className="h-6 w-6 text-zinc-900 dark:text-white" />
          <span className="text-xl font-bold text-zinc-900 dark:text-white">Projeto de Extensão</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <nav className="flex items-center space-x-6">
            <Link
              href="#introducao"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <BookOpen className="h-4 w-4" />
              <span>Introdução</span>
            </Link>
            <Link
              href="#visao-geral"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <Compass className="h-4 w-4" />
              <span>Visão Geral</span>
            </Link>
            <Link
              href="#mapa-mental"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <GitFork className="h-4 w-4" />
              <span>Mapa Mental</span>
            </Link>
            <Link
              href="#trilha"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              <Route className="h-4 w-4" />
              <span>Trilha</span>
            </Link>
          </nav>
          <DownloadButton />
          <ModeToggle />
        </div>

        <div className="flex md:hidden items-center space-x-2">
          <DownloadButton />
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-zinc-700 dark:text-zinc-300">
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              href="#introducao"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4" />
              <span>Introdução</span>
            </Link>
            <Link
              href="#visao-geral"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Compass className="h-4 w-4" />
              <span>Visão Geral</span>
            </Link>
            <Link
              href="#mapa-mental"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <GitFork className="h-4 w-4" />
              <span>Mapa Mental</span>
            </Link>
            <Link
              href="#trilha"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Route className="h-4 w-4" />
              <span>Trilha</span>
            </Link>
            <Link
              href="#ia"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Cpu className="h-4 w-4" />
              <span>IA no Desenvolvimento</span>
            </Link>
            <Link
              href="#exemplos"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Layout className="h-4 w-4" />
              <span>Exemplos</span>
            </Link>
            <Link
              href="#relatorio"
              className="flex items-center space-x-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <FileText className="h-4 w-4" />
              <span>Relatório Final</span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
