import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
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
import { FAQ } from "@/components/faq"
import { Conclusao } from "@/components/conclusao"

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Header />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
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
        <FAQ />
        <Conclusao />
      </main>
      <Footer />
    </div>
  )
}
