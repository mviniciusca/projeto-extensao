import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Route, AlertTriangle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function TrilhaDesenvolvimento() {
    return (
        <section className="mb-12">
            <SectionTitle id="trilha" title="Trilha de Desenvolvimento Passo a Passo" icon={<Route className="h-5 w-5" />} />

            <Tabs defaultValue="fase1" className="-mx-6 px-6 md:mx-0 md:px-0">
                <TabsList className="w-full overflow-x-auto flex md:grid md:grid-cols-3 justify-start md:justify-stretch gap-2 md:gap-0">
                    <TabsTrigger value="fase1" className="flex-shrink-0">Fase 1: Escolha do Tema</TabsTrigger>
                    <TabsTrigger value="fase2" className="flex-shrink-0">Fase 2: Criação do App</TabsTrigger>
                    <TabsTrigger value="fase3" className="flex-shrink-0">Fase 3: Relatório Final</TabsTrigger>
                </TabsList>

                <TabsContent value="fase1">
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Escolha do Tema</h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Escolha um ODS</h4>
                                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                        <li>Acesse o site da <a className="text-blue-500 hover:underline" href="https://www.unicef.org/brazil/objetivos-de-desenvolvimento-sustentavel" target="_blank" rel="noopener noreferrer">ONU/Unicef</a> e leia sobre os 17 Objetivos de Desenvolvimento Sustentável</li>
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
                            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Criaçãod do App / Protótipo</h3>

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
                                        <li>Utilize IA's como Claude, V0, Bolt para criar seu app com um prompt</li>
                                        <li>Teste cada funcionalidade após implementá-la</li>
                                        <li>Dê preferência à apps beaseado no Javascript e seus frameworks como React, Vue, Nuxt, Next ...</li>
                                        <li>Clone em um Repositório do Github e faça o <a className="text-blue-500 hover:underline" href="https://vercel.com/docs/deployments" target="_blank" rel="noopener noreferrer">Deploy na Vercel</a></li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Publique na Vercel</h4>
                                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                        <li>Crie uma conta na Vercel (gratuita)</li>
                                        <li>Conecte seu repositório GitHub</li>
                                        <li>Configure o deploy automático</li>
                                        <li>Teste o aplicativo no ambiente de produção</li>
                                        <li>Você vai obter um link para o seu projeto. Você pode exibir este link em seu Relatório Final.</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>

                <TabsContent value="fase3">
                    <Card>
                        <CardContent className="pt-6">
                            <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-white">Relatório Final </h3>

                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Estrutura do Relatório</h4>
                                    <p className="mb-2 text-zinc-700 dark:text-zinc-300">

                                        <Alert variant="destructive" className="my-4 bg-orange-100 border-orange-200 text-orange-700">
                                            <AlertTriangle className="h-4 w-4" />
                                            <AlertDescription>
                                                Procure o seu Template, seu Relatório e seus Exemplos de Documentação para serem Entregues no seu PDA
                                            </AlertDescription>
                                        </Alert>

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
                                            <li>Narre todo seu processo de aprendizado e inclua como que isso melhora a sua carreira como Desenvolvedor de Software ou na sua Graduação</li>
                                            <li>Inclua o link para o aplicativo na Vercel na conclusão do seu Relatório Final. Defina se foi usado como Protótipo ou Apresentação Final. (Software finalizado)</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Formatação e Entrega</h4>
                                    <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                        <li>Use a fonte padrão do documento</li>
                                        <li>Espaçamento entre linhas também no padrão do documento (Template)</li>
                                        <li>Entregue em formato .DOC</li>
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
