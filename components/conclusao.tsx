import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function Conclusao() {
    return (
        <section className="mb-12">
            <SectionTitle id="conclusao" title="Conclusão" icon={<CheckCircle className="h-5 w-5" />} />

            <Card>
                <CardContent className="pt-6">
                    <div className="space-y-4 text-zinc-700 dark:text-zinc-300">
                        <div className="space-y-6 text-zinc-700 dark:text-zinc-300">
                            <p className="font-medium">
                                Espero que este Guia tenha sido um recurso valioso em sua jornada.
                            </p>

                            <p>
                                O desenvolvimento de projetos, especialmente aqueles alinhados aos ODS, é uma aventura repleta de desafios e recompensas. Cada obstáculo superado é uma lição aprendida, e cada sucesso, um passo em direção a um futuro melhor.
                            </p>

                            <p>
                                Como graduando em Análise e Desenvolvimento de Sistemas, compreendo a importância de um guia claro e conciso. Este material foi criado com o objetivo de ser um ponto de partida sólido, auxiliando na estruturação de ideias e no desenvolvimento de soluções inovadoras para os ODS.  Lembre-se: cada projeto é único e representa uma oportunidade de causar um impacto positivo.
                            </p>

                            <p>
                                Encorajo você a adaptar e expandir este guia com suas próprias experiências e conhecimentos. Acredito que a colaboração é fundamental para o sucesso de qualquer iniciativa. Ao compartilhar suas ideias e descobertas, você estará contribuindo para um ecossistema de aprendizado mútuo e impulsionando a inovação. 🚀
                            </p>

                            <p>
                                Esta é a minha contribuição para a comunidade, e espero que inspire você a retribuir. Se este guia foi útil, compartilhe-o com seus colegas e amigos. A troca de conhecimento é essencial para o crescimento coletivo e para a construção de um futuro mais sustentável. Juntos, podemos criar um mundo mais justo e equitativo para todos.
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}
