import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function IntegrandoIA() {
    return (
        <section className="mb-12">
            <SectionTitle
                id="ia"
                title="Integrando Inteligência Artificial no Desenvolvimento"
                subtitle="Como Utilizar IA para Potencializar seu Projeto"
                icon={<Sparkles className="h-5 w-5" />}
            />

            <Card>
                <CardContent className="pt-6">
                    <div className="space-y-6">
                        <div>
                            <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">1. Ideação e Pesquisa</h4>
                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>
                                    <strong>Claude:</strong> Solicite ideias de funcionalidades relacionadas ao ODS escolhido
                                </li>
                                <li>
                                    <strong>DeepSeek:</strong> Peça análises de tendências e soluções existentes
                                </li>
                                <li>
                                    <strong>ChatGPT:</strong> Utilize para brainstorming de recursos e funcionalidades
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">2. Design e UX</h4>
                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>
                                    <strong>Midjourney/DALL-E:</strong> Gere inspirações visuais para o design
                                </li>
                                <li>
                                    <strong>Claude:</strong> Solicite feedbacks sobre protótipos de interface
                                </li>
                                <li>
                                    <strong>ChatGPT:</strong> Peça sugestões de melhorias de usabilidade
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">3. Desenvolvimento</h4>
                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>
                                    <strong>Claude/DeepSeek/V0/Bolt:</strong> Obtenha ajuda com estruturas de código React
                                </li>
                                <li>
                                    <strong>GitHub Copilot:</strong> Use para agilizar a codificação
                                </li>
                                <li>
                                    <strong>Claude:</strong> Peça revisões de código e sugestões de otimização
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-medium mb-2 text-zinc-900 dark:text-white">4. Documentação</h4>
                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                <li>
                                    <strong>Claude / V0 Vercel:</strong> Solicite ajuda para estruturar documentação técnica
                                </li>
                                <li>
                                    <strong>DeepSeek:</strong> Peça sugestões para melhorar explicações técnicas
                                </li>
                                <li>
                                    <strong>ChatGPT:</strong> Use para melhorar a clareza da documentação
                                </li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
