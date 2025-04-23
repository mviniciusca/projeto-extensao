import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen } from "lucide-react"

export function Introducao() {
  return (
    <section className="mb-12">
      <SectionTitle
        id="introducao"
        title="Guia de Desenvolvimento de Projeto de Extensão"
        subtitle="Mapa Mental para Resolução de Projeto Integrado com ODS da ONU para realização do projeto de extensão para alunos do curso de Análise e Desenvolvimento de Sistemas."
        icon={<BookOpen className="h-5 w-5" />}
      />

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Este documento serve como guia para alunos do curso de Análise e Desenvolvimento de Sistemas que não puderam
            realizar atividades presenciais relacionadas ao projeto de extensão. Aqui você encontrará orientações para
            desenvolver um aplicativo baseado nos Objetivos de Desenvolvimento Sustentável (ODS) da ONU.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
