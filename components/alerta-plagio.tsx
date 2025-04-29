import { AlertTriangle, CalendarDays } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertaPlagio() {
    return (
        <section className="mb-12">
            <Alert variant="destructive" className="border-red-500 bg-red-50 dark:bg-red-900/30">
                <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-300" />
                <AlertTitle className="text-red-600 dark:text-red-300 font-medium text-base flex items-center justify-between">
                    <span>Cuidado com Plágio</span>
                    <div className="flex items-center gap-1 text-sm font-normal">
                        <CalendarDays className="h-3.5 w-3.5" />
                        <span>Abril de 2025</span>
                    </div>
                </AlertTitle>
                <AlertDescription className="text-red-600/90 dark:text-red-200 mt-2 space-y-3">
                    <p>
                        Nunca use a Inteligência Artificial para escrever tudo pra você. Comece seu próprio texto e peça para
                        incrementar no máximo 15% do conteúdo. Não mais que isso.
                    </p>
                    <p>
                        Ao receber uma resposta de texto de IA, peça para que ela refine. Retire parte do texto e crie por você
                        mesmo, mantendo o objetivo. Lembre-se, você precisa aprender e não depender da IA.
                    </p>
                    <p className="font-medium border-t border-red-300 dark:border-red-700 pt-3 mt-3">
                        Atenção: Este documento foi criado em Abril de 2025. As perguntas, formatos e requisitos do relatório podem mudar.
                        Consulte sempre seu tutor ou coordenador para obter a versão mais atualizada do template e das instruções.
                    </p>
                </AlertDescription>
            </Alert>
        </section>
    )
}
