import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

export function FAQ() {
  return (
    <section className="mb-12">
      <SectionTitle id="faq" title="Perguntas Frequentes" icon={<HelpCircle className="h-6 w-6" />} />

      <Card>
        <CardContent className="pt-6">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-11">
              <AccordionTrigger>Devo Recolher Depoimentos?</AccordionTrigger>
              <AccordionContent>
                Sim. Ideal seria recolher depoimentos de pessoas reais em seus projetos. Você pode apresentar o seu software/projeto para algum amigo, conhecido, parente ou instituição no seu bairro para que possa receber um feedback. Entretanto, caso ainda não seja possível, apresente o seu software/projeto para instutuições online. Você pode pedir um depoimento do seu projeto, por isso é importante que seu app já esteja hospedado em alguma plataforma, como a Vercel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>O que devo entregar?</AccordionTrigger>
              <AccordionContent>
                O seu Relatório Final. Deve ser editado no Word e seguir a instruções de cada campo. Não se esqueça de colocar o seu nome, RA e curso. O Relatório Final deve ser enviado no formato .DOC do Word. Você pode usar o <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 underline">Google Docs</a> ou o <a href="https://www.microsoft.com/pt-br/microsoft-365/free/online-word-processor" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 underline">Word Online</a> para editar o seu relatório e depois exportar uma cópia no seu PC. O Relatório Final deve ser enviado na plataforma do curso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger>O que é RA?</AccordionTrigger>
              <AccordionContent>
                É o seu registro de matricula. Entre no PDA da Anhanguera, clique na foto do seu perfil e o seu RA estará ao lado da sua foto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger>Devo recolher CNPJ?</AccordionTrigger>
              <AccordionContent>
                Não. Não é necessário recolher CNPJ das instituições participantes. Não neste projeto de Extensão.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1">
              <AccordionTrigger>Quais Objetivos de Desenvolvimento Sustentável (ODS) devo incluir no relatório?</AccordionTrigger>
              <AccordionContent>
                Você deve incluir os ODS e suas respectivas metas que estão diretamente relacionados ao seu projeto extensionista. Identifique quais objetivos globais sua ação impacta positivamente. No exemplo, foram incluídos os ODS 11 (Cidades e Comunidades Sustentáveis), ODS 12 (Consumo e Produção Responsáveis) e ODS 17 (Parcerias e Meios de Implementação). Mencione sempre as metas específicas de cada ODS que seu projeto atende.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Como devo descrever o local de realização da atividade extensionista?</AccordionTrigger>
              <AccordionContent>
                Seja específico quanto ao local físico onde o projeto foi implementado (bairro, instituição, etc.) e mencione todas as parcerias institucionais envolvidas. Não se limite apenas ao espaço geográfico, mas inclua também os parceiros que colaboraram para a realização do projeto, como associações comunitárias, secretarias municipais, ONGs, empresas, etc.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>O que deve constar na seção &quot;Durante a ação&quot;?</AccordionTrigger>
              <AccordionContent>
                Esta seção deve detalhar todas as etapas do desenvolvimento do projeto em ordem cronológica. Inclua:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Reuniões realizadas com parceiros e comunidade</li>
                  <li>Atividades de diagnóstico e levantamento de dados</li>
                  <li>Etapas de desenvolvimento da solução proposta</li>
                  <li>Testes e implementação</li>
                  <li>Atividades de capacitação, quando aplicável</li>
                  <li>Monitoramento e avaliação das ações</li>
                </ul>
                Organize as informações em tópicos para facilitar a leitura.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Como devo abordar as mudanças de estratégia no relatório?</AccordionTrigger>
              <AccordionContent>
                É importante ser transparente sobre quaisquer alterações feitas no planejamento original. Descreva:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>O plano inicial e por que foi necessário modificá-lo</li>
                  <li>As novas necessidades identificadas durante o processo</li>
                  <li>As soluções adicionais implementadas</li>
                  <li>O impacto dessas mudanças no cronograma ou no escopo do projeto</li>
                  <li>Como essas alterações contribuíram para melhorar o resultado final</li>
                </ul>
                Mostre que as mudanças foram respostas adaptativas às necessidades reais identificadas durante o processo.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Quais tipos de resultados devo apresentar na seção &quot;Resultado da ação&quot;?</AccordionTrigger>
              <AccordionContent>
                Apresente resultados quantitativos e qualitativos:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Dados numéricos (quantidade de pessoas impactadas, percentuais de melhoria, economia gerada)</li>
                  <li>Indicadores de adesão da comunidade (downloads, participação, avaliações)</li>
                  <li>Impactos ambientais ou sociais mensuráveis</li>
                  <li>Satisfação dos usuários/beneficiários</li>
                  <li>Desdobramentos do projeto (expansão para outras áreas, continuidade)</li>
                </ul>
                Use dados comparativos (antes e depois) sempre que possível e organize em tópicos para facilitar a visualização.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>Como estruturar a conclusão do relatório?</AccordionTrigger>
              <AccordionContent>
                A conclusão deve sintetizar os principais pontos do projeto, destacando:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Um resumo do problema abordado e da solução implementada</li>
                  <li>A eficácia da parceria entre os diferentes atores envolvidos</li>
                  <li>Os principais resultados e impactos alcançados</li>
                  <li>O potencial de continuidade ou replicação do projeto</li>
                  <li>As lições aprendidas</li>
                  <li>A relevância do projeto para a comunidade e sua contribuição para os ODS</li>
                </ul>
                Evite introduzir informações novas na conclusão, concentre-se em consolidar o que já foi apresentado nas seções anteriores.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Quais informações devo incluir na seção de depoimentos?</AccordionTrigger>
              <AccordionContent>
                Inclua depoimentos diversificados que demonstrem o impacto do projeto:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Depoimentos de beneficiários diretos da comunidade</li>
                  <li>Declarações de representantes das instituições parceiras</li>
                  <li>Falas de autoridades ou especialistas envolvidos no projeto</li>
                  <li>Testemunhos que evidenciem melhorias concretas</li>
                </ul>
                Os depoimentos devem ser identificados com o nome completo da pessoa e sua relação com o projeto. Procure selecionar declarações que destaquem diferentes aspectos do impacto da ação extensionista.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Como devo elaborar o relato da minha percepção das ações extensionistas?</AccordionTrigger>
              <AccordionContent>
                Esta seção deve ser escrita em primeira pessoa e conter:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Reflexões sobre seu crescimento pessoal e profissional durante o projeto</li>
                  <li>Conexões entre a teoria aprendida no curso e a prática extensionista</li>
                  <li>Desafios enfrentados e como foram superados</li>
                  <li>Habilidades desenvolvidas ou aprimoradas</li>
                  <li>Impacto da experiência em sua formação acadêmica</li>
                  <li>Percepções sobre a relevância social da sua área de formação</li>
                  <li>Aprendizados sobre trabalho colaborativo e interdisciplinar</li>
                </ul>
                Seja honesto em sua autoavaliação e demonstre como a experiência contribuiu para sua formação integral.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Como obter e formatar o depoimento da instituição participante?</AccordionTrigger>
              <AccordionContent>
                Para obter um depoimento institucional adequado:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Solicite com antecedência à principal instituição parceira</li>
                  <li>Oriente que o texto aborde a relevância da parceria e os impactos observados</li>
                  <li>Sugira que mencionem a importância da academia na resolução de problemas comunitários</li>
                  <li>Peça que incluam perspectivas futuras para a continuidade da parceria</li>
                </ul>
                O depoimento deve ser apresentado em formato de citação direta, com identificação do autor (nome completo e cargo na instituição) ao final do texto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Como elaborar as referências bibliográficas do relatório?</AccordionTrigger>
              <AccordionContent>
                As referências devem seguir as normas ABNT e incluir:
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>Legislação e políticas públicas relacionadas ao tema</li>
                  <li>Publicações acadêmicas recentes (últimos 5 anos)</li>
                  <li>Dados estatísticos de fontes oficiais</li>
                  <li>Literatura técnica da sua área de formação</li>
                  <li>Publicações sobre desenvolvimento sustentável e ODS</li>
                  <li>Material sobre metodologias aplicadas no projeto</li>
                </ul>
                Diversifique as fontes entre livros, artigos científicos, documentos oficiais e relatórios técnicos. Organize as referências em ordem alfabética pelo sobrenome do autor e garanta que todas as obras citadas no texto estejam listadas nas referências.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}