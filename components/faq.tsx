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
            <AccordionItem value="item-1">
              <AccordionTrigger>Devo Recolher Depoimentos?</AccordionTrigger>
              <AccordionContent>
                Sim. Ideal seria recolher depoimentos de pessoas reais em seus projetos. Você pode apresentar o seu software/projeto para algum amigo, conhecido, parente ou instituição no seu bairro para que possa receber um feedback. Entretanto, caso ainda não seja possível, apresente o seu software/projeto para instutuições online. Você pode pedir um depoimento do seu projeto, por isso é importante que seu app já esteja hospedado em alguma plataforma, como a Vercel.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>O que devo entregar?</AccordionTrigger>
              <AccordionContent>
                O seu Relatório Final. Deve ser editado no Word e seguir a instruções de cada campo. Não se esqueça de colocar o seu nome, RA e curso. O Relatório Final deve ser enviado no formato .DOC do Word. Você pode usar o <a href="https://docs.google.com" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 underline">Google Docs</a> ou o <a href="https://www.microsoft.com/pt-br/microsoft-365/free/online-word-processor" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-700 underline">Word Online</a> para editar o seu relatório e depois exportar uma cópia no seu PC. O Relatório Final deve ser enviado na plataforma do curso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>O que é RA?</AccordionTrigger>
              <AccordionContent>
                É o seu registro de matricula. Entre no PDA da Anhanguera, clique na foto do seu perfil e o seu RA estará ao lado da sua foto.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Devo recolher CNPJ?</AccordionTrigger>
              <AccordionContent>
                Não. Não é necessário recolher CNPJ das instituições participantes. Não neste projeto de Extensão.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}