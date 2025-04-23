import { Introducao } from "@/components/introducao"
import { AlertaPlagio } from "@/components/alerta-plagio"
import { VisaoGeral } from "@/components/visao-geral"
import { ObjetivosDesenvolvimento } from "@/components/objetivos-desenvolvimento"
import { MapaMental } from "@/components/mapa-mental"
import { TrilhaDesenvolvimento } from "@/components/trilha-desenvolvimento"
import { IntegrandoIA } from "@/components/integrando-ia"
import { ExemplosApps } from "@/components/exemplos-apps"
import { RelatorioFinal } from "@/components/relatorio-final"
import { OndeApresentar } from "@/components/onde-apresentar"
import { RecursosAdicionais } from "@/components/recursos-adicionais"
import { Videos } from "@/components/videos"
import { FAQ } from "@/components/faq"
import { Conclusao } from "@/components/conclusao"
import { SidebarNav } from "@/components/ui/sidebar-nav"
import { MobileNav } from "@/components/ui/mobile-nav"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { BookOpen, Github, Notebook, Heart, Twitter } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"

export default function GuiaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Header */}
      <header className="border-b border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto flex items-center justify-between h-16 px-4 max-w-7xl">
          <Link href="/" className="flex items-center space-x-2">
            <Notebook className="h-6 w-6 text-zinc-900 dark:text-white" />
            <span className="text-lg font-semibold text-zinc-900 dark:text-white">Projeto de Extensão</span>
          </Link>
          <div className="flex items-center gap-2">
            <Button variant="outline" asChild className="flex items-center gap-2">
              <Link href="/guia">
                <BookOpen className="h-4 w-4" />
                <span>Guia Completo</span>
              </Link>
            </Button>
            <Button 
              variant="outline" 
              asChild 
              className="flex items-center gap-2 bg-zinc-900 text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100"
            >
              <Link href="https://github.com/mviniciusca/projeto-extensao" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      <MobileNav />
      <ScrollToTop />

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex relative gap-8">
          <SidebarNav />
          <main className="flex-1 py-8 md:pl-0 w-full">
            <div className="max-w-4xl mx-auto">
              <Introducao />
              <AlertaPlagio />
              <VisaoGeral />
              <ObjetivosDesenvolvimento />
              <MapaMental />
              <TrilhaDesenvolvimento />
              <IntegrandoIA />
              <ExemplosApps />
              <RelatorioFinal />
              <OndeApresentar />
              <RecursosAdicionais />
              <Videos />
              <FAQ />
              <Conclusao />
            </div>
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-zinc-600 dark:text-zinc-400 flex items-center gap-1.5">
                Feito com <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500" /> por Marcos Coelho
              </span>
            </div>
            <div className="flex items-center space-x-4">             
              <Link
                href="https://github.com/mviniciusca"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com/marcosvca_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}