import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"

export function Conclusao() {
  return (
    <section className="mb-12">
      <SectionTitle id="conclusao" title="Conclusão" />

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Este projeto oferece uma oportunidade única de aplicar conhecimentos técnicos de Análise e Desenvolvimento
            de Sistemas para resolver problemas reais alinhados aos Objetivos de Desenvolvimento Sustentável da ONU. Ao
            seguir este guia e explorar o uso de Inteligência Artificial como ferramenta auxiliar, espera-se que você
            desenvolva não apenas um aplicativo funcional, mas também uma solução com potencial de impacto social
            positivo.
          </p>
          <p className="text-zinc-700 dark:text-zinc-300">
            Lembre-se de documentar cada etapa do processo e refletir sobre como a tecnologia pode ser utilizada para
            enfrentar desafios globais de sustentabilidade.
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
