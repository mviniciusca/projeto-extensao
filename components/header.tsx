"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Github, BookOpen, Notebook } from "lucide-react"

export function Header() {
  return (
    <header className="border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <Notebook className="h-5 w-5 text-zinc-900 dark:text-white" />
          <span className="text-sm font-semibold text-zinc-900 dark:text-white">Projeto de Extensão</span>
        </Link>
        <div className="flex items-center gap-2">
          <Button variant="outline" asChild className="flex items-center gap-1.5 text-xs">
            <Link href="/guia">
              <BookOpen className="h-3.5 w-3.5" />
              <span>Guia Completo</span>
            </Link>
          </Button>
          <Button 
            variant="outline" 
            asChild 
            className="flex items-center gap-1.5 text-xs"
          >
            <Link href="https://github.com/mviniciusca/projeto-extensao" target="_blank" rel="noopener noreferrer">
              <Github className="h-3.5 w-3.5" />
              <span>GitHub</span>
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
