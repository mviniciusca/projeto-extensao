import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { FileText } from "lucide-react"

export function RelatorioFinal() {
  return (
    <section className="mb-12">
      <SectionTitle id="relatorio" title="Preparando o Relatório Final" icon={<FileText className="h-5 w-5" />} />

      <Card>
        <CardContent className="pt-6">
          <p className="mb-4 text-zinc-700 dark:text-zinc-300">Seu relatório final deve conter:</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1 text-zinc-900 dark:text-white">1. Introdução ao Projeto</h4>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>ODS escolhido e justificativa</li>
                <li>Problema abordado e sua relevância</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1 text-zinc-900 dark:text-white">2. Especificação Técnica</h4>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Tecnologias utilizadas</li>
                <li>Arquitetura da aplicação</li>
                <li>Desafios técnicos e soluções</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1 text-zinc-900 dark:text-white">3. Impacto Social</h4>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Público-alvo e beneficiários</li>
                <li>Impacto esperado na comunidade</li>
                <li>Métricas para avaliação de sucesso</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1 text-zinc-900 dark:text-white">4. Viabilidade e Implementação</h4>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Organizações que poderiam implementar (ONGs, prefeituras, associações)</li>
                <li>Recursos necessários para implantação real</li>
                <li>Estratégia de divulgação e adoção</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium mb-1 text-zinc-900 dark:text-white">5. Conclusão e Próximos Passos</h4>
              <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                <li>Lições aprendidas</li>
                <li>Possibilidades de expansão</li>
                <li>Contribuições para os ODS</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
