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
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function GuiaPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
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

      <Footer />
    </div>
  )
}