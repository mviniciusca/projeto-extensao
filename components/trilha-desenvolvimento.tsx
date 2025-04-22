import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function TrilhaDesenvolvimento() {
  return (
    <section className="mb-12">
      <SectionTitle id="trilha" title="Trilha de Desenvolvimento Passo a Passo" />

      <Tabs defaultValue="fase1">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="fase1">Fase 1: Preparação</TabsTrigger>
          <TabsTrigger value="fase2">Fase 2: Desenvolvimento</TabsTrigger>
          <TabsTrigger value="fase3">Fase 3: Finalização</TabsTrigger>
        </TabsList>

        <TabsContent value="fase1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">
                FASE 1: PREPARAÇÃO E ANÁLISE (2-3 semanas)
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Escolha do ODS e Problema</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Analise os 17 ODS apresentados e escolha um que você se identifique</li>
                    <li>Pesquise problemas reais relacionados ao ODS em sua comunidade</li>
                    <li>Documente estatísticas e informações relevantes sobre o problema</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Análise de Stakeholders</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Identifique os usuários potenciais da sua solução</li>
                    <li>Liste organizações que poderiam se beneficiar ou apoiar (ONGs, prefeituras, etc.)</li>
                    <li>Entenda as necessidades específicas dos usuários finais</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Benchmarking</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Pesquise soluções existentes relacionadas ao problema</li>
                    <li>Identifique pontos fortes e fracos das soluções atuais</li>
                    <li>Defina o diferencial da sua proposta</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Definição do Escopo</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Estabeleça objetivos claros e mensuráveis para o aplicativo</li>
                    <li>Delimite as funcionalidades principais e secundárias</li>
                    <li>Crie um cronograma de desenvolvimento</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fase2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">
                FASE 2: DESENVOLVIMENTO (4-6 semanas)
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Prototipagem e Design</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Crie wireframes das principais telas</li>
                    <li>Desenvolva o design visual alinhado com a temática do ODS</li>
                    <li>Teste a usabilidade do protótipo com potenciais usuários</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Arquitetura Técnica</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Defina a estrutura do projeto React</li>
                    <li>Escolha bibliotecas e frameworks complementares</li>
                    <li>Planeje a estrutura de dados e integrações</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Desenvolvimento Frontend</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Configure o ambiente React</li>
                    <li>Implemente as telas de acordo com o protótipo</li>
                    <li>Desenvolva os componentes reutilizáveis</li>
                    <li>Garanta responsividade para diferentes dispositivos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Integração e Funcionalidades</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Implemente APIs necessárias (quando aplicável)</li>
                    <li>Desenvolva lógica de negócio</li>
                    <li>Integre serviços de terceiros relevantes para o projeto</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">5. Uso de IA como Auxiliar</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Utilize o Claude para gerar ideias de funcionalidades</li>
                    <li>Empregue o DeepSeek para auxiliar na codificação</li>
                    <li>Documente como as IAs foram usadas no processo</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fase3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">
                FASE 3: FINALIZAÇÃO E IMPLANTAÇÃO (2-3 semanas)
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Testes</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Realize testes de usabilidade</li>
                    <li>Corrija bugs e problemas de interface</li>
                    <li>Verifique o desempenho em diferentes navegadores</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Documentação</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Prepare a documentação técnica do projeto</li>
                    <li>Crie um manual do usuário</li>
                    <li>Documente a conexão do projeto com o ODS escolhido</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Implantação</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Configure o projeto para deploy na Vercel</li>
                    <li>Realize a implantação e teste o ambiente de produção</li>
                    <li>Crie um plano para manutenção futura</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Apresentação e Relatório Final</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Prepare uma apresentação sobre o projeto</li>
                    <li>Documente o impacto potencial na comunidade</li>
                    <li>Identifique possíveis evoluções futuras</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
