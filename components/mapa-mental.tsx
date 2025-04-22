import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Map, Brain, Users, Lightbulb, Target, Search, CheckCircle, ArrowRight } from "lucide-react"

export function MapaMental() {
  return (
    <section className="mb-12">
      <SectionTitle 
        id="mapa-mental" 
        title="Mapa Mental: Do ODS ao Aplicativo" 
        icon={<Map className="h-6 w-6" />} 
      />

      <Card>
        <CardContent className="pt-6">
          <div className="mb-8 text-zinc-700 dark:text-zinc-300">
            <p className="text-lg">
              Este mapa mental interativo guiará você no processo de escolha de um tema baseado nos ODS e no desenvolvimento de um
              aplicativo que resolva problemas reais.
            </p>
          </div>

          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Etapa 1 */}
            <div className="group relative">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-blue-500">
                <CardContent className="p-6">
                  <Brain className="h-8 w-8 text-blue-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-blue-500">Análise Pessoal</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                      Quais ODS me interessam?
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                      Onde tenho conhecimento?
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-blue-400" />
                      Qual causa me motiva?
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Etapa 2 */}
            <div className="group relative">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-green-500">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-green-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-green-500">Análise de Contexto</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      Problemas locais
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      Recursos disponíveis
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-400" />
                      Stakeholders envolvidos
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Etapa 3 */}
            <div className="group relative">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-purple-500">
                <CardContent className="p-6">
                  <Lightbulb className="h-8 w-8 text-purple-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-purple-500">Definição do Problema</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400" />
                      Problema específico
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400" />
                      Usuários afetados
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-purple-400" />
                      Impacto esperado
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Etapa 4 */}
            <div className="group relative">
              <Card className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg border-l-4 border-l-orange-500">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-orange-500 mb-4" />
                  <h3 className="text-lg font-semibold mb-3 text-orange-500">Validação da Ideia</h3>
                  <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-400" />
                      Viabilidade técnica
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-400" />
                      Solução efetiva
                    </li>
                    <li className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-orange-400" />
                      Alinhamento ODS
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-12 px-3 md:px-6 space-y-6 text-zinc-700 dark:text-zinc-300">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300 mb-4">
                Como usar este mapa mental
              </h3>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Brain className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-700 dark:text-blue-300">Comece pela Análise</h4>
                      <p>Explore os 17 ODS da ONU e reflita sobre suas conexões pessoais com cada objetivo.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Users className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-green-700 dark:text-green-300">Estude o Contexto</h4>
                      <p>Identifique problemas reais em sua comunidade que se relacionem com o ODS escolhido.</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Lightbulb className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-700 dark:text-purple-300">Defina o Problema</h4>
                      <p>Especifique claramente qual problema seu aplicativo vai resolver e quem será beneficiado.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1">
                      <Target className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-medium text-orange-700 dark:text-orange-300">Valide sua Ideia</h4>
                      <p>Confirme se sua solução é viável e realmente atende às necessidades identificadas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
