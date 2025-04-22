import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"

export function MapaMental() {
  return (
    <section className="mb-12">
      <SectionTitle id="mapa-mental" title="Mapa Mental: Do ODS ao Aplicativo" />

      <Card>
        <CardContent className="pt-6">
          <div className="mb-4 text-zinc-700 dark:text-zinc-300">
            <p>
              Este mapa mental guiará você no processo de escolha de um tema baseado nos ODS e no desenvolvimento de um
              aplicativo que resolva problemas reais:
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="my-4">
              {/* Utilizando uma imagem estática em vez do diagrama Mermaid para evitar problemas de renderização */}
              <pre className="text-xs md:text-sm bg-zinc-100 dark:bg-zinc-900 p-4 rounded-md overflow-x-auto whitespace-pre">
                {`INÍCIO: Escolha do ODS
│
├─► Análise Pessoal
│   ├─► Quais ODS me interessam?
│   ├─► Onde tenho conhecimento prévio?
│   └─► Qual causa me motiva?
│
├─► Análise de Contexto
│   ├─► Quais problemas locais existem?
│   ├─► Que recursos estão disponíveis?
│   └─► Quem são os stakeholders?
│
▼
TEMA ESCOLHIDO
│
├─► Definição do Problema
│   ├─► Qual problema específico resolver?
│   ├─► Quem são os usuários afetados?
│   └─► Qual o impacto esperado?
│
├─► Análise de Soluções
│   ├─► O que já existe no mercado?
│   ├─► Quais as limitações atuais?
│   └─► Como posso inovar?
│
▼
CONCEITO DO APLICATIVO
│
└─► Validação da Ideia
    ├─► É tecnicamente viável?
    ├─► Resolve o problema identificado?
    └─► Está alinhado com o ODS?
    
    ▼
    APLICATIVO DEFINIDO`}
              </pre>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-zinc-700 dark:text-zinc-300">
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Como usar este mapa mental:</h3>

            <div>
              <h4 className="font-medium text-zinc-900 dark:text-white">1. Escolha do ODS</h4>
              <p>
                Comece explorando os 17 ODS da ONU e reflita sobre quais deles mais se alinham com seus interesses,
                conhecimentos e motivações pessoais.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-zinc-900 dark:text-white">2. Definição do Problema</h4>
              <p>
                Uma vez escolhido o tema, identifique problemas específicos relacionados a ele em sua comunidade ou
                região, considerando quem são os afetados e qual impacto você deseja gerar.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-zinc-900 dark:text-white">3. Concepção do Aplicativo</h4>
              <p>
                Analise soluções existentes, identifique lacunas e oportunidades de inovação para então definir o
                conceito do seu aplicativo.
              </p>
            </div>

            <div>
              <h4 className="font-medium text-zinc-900 dark:text-white">4. Validação</h4>
              <p>
                Por fim, valide se sua ideia é tecnicamente viável, se realmente resolve o problema identificado e se
                está alinhada com o ODS escolhido.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
