import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Route } from "lucide-react"

export function TrilhaDesenvolvimento() {
  return (
    <section className="mb-12">
      <SectionTitle id="trilha" title="Trilha de Desenvolvimento Passo a Passo" icon={<Route className="h-6 w-6" />} />

      <Tabs defaultValue="fase1" className="-mx-6 px-6 md:mx-0 md:px-0">
        <TabsList className="w-full overflow-x-auto flex md:grid md:grid-cols-3 justify-start md:justify-stretch gap-2 md:gap-0">
          <TabsTrigger value="fase1" className="flex-shrink-0">Fase 1: Escolha do Tema</TabsTrigger>
          <TabsTrigger value="fase2" className="flex-shrink-0">Fase 2: Criação do App</TabsTrigger>
          <TabsTrigger value="fase3" className="flex-shrink-0">Fase 3: Relatório Final</TabsTrigger>
        </TabsList>

        <TabsContent value="fase1">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">FASE 1: ESCOLHA DO TEMA</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Escolha um ODS</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Acesse o site da ONU e leia sobre os 17 Objetivos de Desenvolvimento Sustentável</li>
                    <li>Escolha um ODS que você se identifique ou tenha interesse</li>
                    <li>Anote os principais pontos e metas desse ODS</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Identifique um problema real</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Pesquise problemas locais relacionados ao ODS escolhido</li>
                    <li>Converse com pessoas afetadas pelo problema (se possível)</li>
                    <li>Busque dados e estatísticas sobre o problema</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Defina seu público-alvo</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Quem são as pessoas afetadas pelo problema?</li>
                    <li>Quem usaria seu aplicativo?</li>
                    <li>Quais são as necessidades específicas desse público?</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Pesquise soluções existentes</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Procure aplicativos ou serviços que já tentam resolver esse problema</li>
                    <li>Identifique pontos fortes e fracos dessas soluções</li>
                    <li>Pense em como sua solução pode ser diferente ou melhor</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fase2">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">FASE 2: CRIAÇÃO DO APP</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Defina as funcionalidades</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Liste as principais funções que seu app deve ter</li>
                    <li>Priorize as funcionalidades (essenciais x desejáveis)</li>
                    <li>Pense em como cada função ajuda a resolver o problema</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Crie um protótipo simples</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Desenhe as telas principais do seu app (pode ser no papel)</li>
                    <li>Use ferramentas como Figma para criar um protótipo digital</li>
                    <li>Teste o fluxo de navegação com algumas pessoas</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Desenvolva o aplicativo</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Configure o ambiente React/JS</li>
                    <li>Crie os componentes principais</li>
                    <li>Implemente as funcionalidades uma por uma</li>
                    <li>Teste cada funcionalidade após implementá-la</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Publique na Vercel</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Crie uma conta na Vercel (gratuita)</li>
                    <li>Conecte seu repositório GitHub</li>
                    <li>Configure o deploy automático</li>
                    <li>Teste o aplicativo no ambiente de produção</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="fase3">
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">FASE 3: RELATÓRIO FINAL</h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Estrutura do Relatório</h4>
                  <p className="mb-2 text-zinc-700 dark:text-zinc-300">
                    Seu relatório deve conter as seguintes seções:
                  </p>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Introdução (ODS escolhido e problema)</li>
                    <li>Objetivos do projeto</li>
                    <li>Metodologia utilizada</li>
                    <li>Desenvolvimento do aplicativo</li>
                    <li>Resultados esperados</li>
                    <li>Conclusão</li>
                    <li>Referências</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Dicas para cada seção</h4>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Introdução:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Apresente o ODS escolhido</li>
                      <li>Descreva o problema que você identificou</li>
                      <li>Explique por que esse problema é importante</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Objetivos:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Liste os objetivos gerais e específicos do seu projeto</li>
                      <li>Explique como esses objetivos se relacionam com o ODS</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Metodologia:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Descreva como você pesquisou o problema</li>
                      <li>Explique como você definiu as funcionalidades do app</li>
                      <li>Mencione as tecnologias utilizadas (React, Vercel, etc.)</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Desenvolvimento:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Descreva as principais funcionalidades do aplicativo</li>
                      <li>Explique como cada funcionalidade ajuda a resolver o problema</li>
                      <li>Inclua capturas de tela das principais telas</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Resultados esperados:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Descreva o impacto que você espera que seu app tenha</li>
                      <li>Explique como o app contribui para o ODS escolhido</li>
                      <li>Mencione possíveis métricas para medir o sucesso</li>
                    </ul>
                  </div>

                  <div className="mb-2">
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Conclusão:</p>
                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                      <li>Resuma o que foi feito e aprendido</li>
                      <li>Mencione desafios enfrentados e como foram superados</li>
                      <li>Sugira melhorias futuras para o aplicativo</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Formatação e Entrega</h4>
                  <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                    <li>Use fonte Times New Roman ou Arial, tamanho 12</li>
                    <li>Espaçamento entre linhas de 1,5</li>
                    <li>Inclua capa com título, nome, curso e data</li>
                    <li>Numere as páginas (exceto a capa)</li>
                    <li>Entregue em formato .DOC</li>
                    <li>Inclua o link para o aplicativo na Vercel</li>
                    <li>Narre todo seu processo de aprendizado</li>
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
