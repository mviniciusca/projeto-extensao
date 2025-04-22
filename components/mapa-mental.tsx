import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"

export function MapaMental() {
  return (
    <section className="mb-12">
      <SectionTitle id="mapa-mental" title="Mapa Mental de Desenvolvimento do Projeto" />

      <Card>
        <CardContent className="pt-6">
          <div className="overflow-x-auto">
            <pre className="text-xs md:text-sm bg-zinc-100 dark:bg-zinc-900 p-4 rounded-md overflow-x-auto whitespace-pre">
              {`                     ┌─────────────────────┐
                     │   PROJETO ODS APP   │
                     └──────────┬──────────┘
                                │
       ┌────────────────────────┼────────────────────────┐
       │                        │                        │
┌──────▼─────┐          ┌───────▼──────┐         ┌───────▼──────┐
│  FASE 1    │          │    FASE 2    │         │    FASE 3    │
│ PREPARAÇÃO │          │DESENVOLVIMENTO│        │  FINALIZAÇÃO │
└──────┬─────┘          └───────┬──────┘         └───────┬──────┘
       │                        │                        │
       │                        │                        │
┌──────▼─────────────┐  ┌───────▼────────────┐  ┌───────▼────────────┐
│• Escolher ODS      │  │• Prototipagem      │  │• Testes            │
│• Analisar problema │  │• Design UI/UX      │  │• Documentação      │
│• Definir usuários  │  │• Codificação React │  │• Deploy na Vercel  │
│• Pesquisar soluções│  │• Integração APIs   │  │• Apresentação      │
└────────────────────┘  └────────────────────┘  └────────────────────┘`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
