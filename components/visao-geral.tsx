import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Eye } from "lucide-react"

export function VisaoGeral() {
  return (
    <section className="mb-12">
      <SectionTitle id="visao-geral" title="Visão Geral do Projeto" icon={<Eye className="h-5 w-5" />} />

      <Card>
        <CardContent className="pt-6">
          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Objetivo Principal</h3>
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Desenvolver uma aplicação web que abrace desafios comunitários e proponha um impacto positivo para o futuro,
            alinhado com pelo menos um dos Objetivos de Desenvolvimento Sustentável da ONU.
          </p>

          <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">Requisitos Técnicos</h3>
          <ul className="list-disc pl-5 mb-4 text-zinc-700 dark:text-zinc-300 space-y-1">
            <li>Desenvolvimento em React/JS</li>
            <li>Hospedagem na Vercel</li>
            <li>Documentação completa do processo</li>
            <li>Conexão clara com pelo menos um ODS da ONU</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
