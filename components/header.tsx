"use client"

import { useState } from "react"
import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Notebook } from "lucide-react"
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
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Introdução
            </Link>
            <Link
              href="#visao-geral"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Visão Geral
            </Link>
            <Link
              href="#mapa-mental"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Mapa Mental
            </Link>
            <Link
              href="#trilha"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              Trilha
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
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Introdução
            </Link>
            <Link
              href="#visao-geral"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Visão Geral
            </Link>
            <Link
              href="#mapa-mental"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Mapa Mental
            </Link>
            <Link
              href="#trilha"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Trilha
            </Link>
            <Link
              href="#ia"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              IA no Desenvolvimento
            </Link>
            <Link
              href="#exemplos"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Exemplos
            </Link>
            <Link
              href="#relatorio"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              Relatório Final
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
