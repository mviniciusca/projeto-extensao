import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export function AlertaPlagio() {
  return (
    <section className="mb-12">
      <Alert variant="destructive" className="border-red-500 bg-red-50 dark:bg-red-950/30">
        <AlertTriangle className="h-5 w-5 text-red-600 dark:text-red-400" />
        <AlertTitle className="text-red-600 dark:text-red-400 font-medium text-base">Cuidado com Plágio</AlertTitle>
        <AlertDescription className="text-red-600/90 dark:text-red-400/90">
          <p className="mt-2">
            Nunca use a Inteligência Artificial para escrever tudo pra você. Comece seu próprio texto e peça para
            incrementar no máximo 15% do conteúdo. Não mais que isso.
          </p>
          <p className="mt-2">
            Ao receber uma resposta de texto de IA, peça para que ela refine. Retire parte do texto e crie por você
            mesmo, mantendo o objetivo. Lembre-se, você precisa aprender e não depender da IA.
          </p>
        </AlertDescription>
      </Alert>
    </section>
  )
}
