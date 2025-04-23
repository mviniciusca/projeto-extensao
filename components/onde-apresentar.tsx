import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { PresentationIcon } from "lucide-react"

export function OndeApresentar() {
  return (
    <section className="mb-12">
      <SectionTitle
        id="apresentar"
        title="Onde Apresentar Seu Projeto"
        icon={<PresentationIcon className="h-5 w-5" />}
      />

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">
            Ao finalizar seu projeto, considere apresentá-lo para:
          </p>

          <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-2">
            <li>
              <strong>Organizações Não-Governamentais</strong> relacionadas ao ODS escolhido
            </li>
            <li>
              <strong>Associações de Moradores</strong> da comunidade beneficiada
            </li>
            <li>
              <strong>Secretarias Municipais</strong> relevantes à área do projeto
            </li>
            <li>
              <strong>Incubadoras de Startups</strong> e programas de aceleração
            </li>
            <li>
              <strong>Eventos Universitários</strong> e feiras de tecnologia
            </li>
            <li>
              <strong>Hackathons</strong> relacionados a desenvolvimento sustentável
            </li>
            <li>
              <strong>Empresas Privadas</strong> com programas de responsabilidade social
            </li>
            <li>
              <strong>Conferências</strong> sobre tecnologia e desenvolvimento sustentável
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
