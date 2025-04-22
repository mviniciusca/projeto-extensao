import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Salad,
  GraduationCap,
  Users2,
  Baby,
  Droplets,
  Zap,
  BadgeDollarSign,
  Factory,
  MinusCircle,
  Building2,
  ShoppingCart,
  Thermometer,
  Fish,
  Trees,
  Scale,
  Globe,
} from "lucide-react"

const objectives = [
  {
    id: 1,
    title: "Erradicação da Pobreza",
    description: "Acabar com a pobreza em todas as suas formas, em todos os lugares",
    icon: MinusCircle,
    color: "bg-red-500",
  },
  {
    id: 2,
    title: "Fome Zero",
    description: "Alcançar a segurança alimentar e melhorar a nutrição",
    icon: Salad,
    color: "bg-yellow-500",
  },
  {
    id: 3,
    title: "Boa Saúde e Bem-Estar",
    description: "Assegurar uma vida saudável e promover o bem-estar para todos",
    icon: Heart,
    color: "bg-green-500",
  },
  {
    id: 4,
    title: "Educação de Qualidade",
    description: "Garantir educação inclusiva, equitativa e de qualidade",
    icon: GraduationCap,
    color: "bg-red-600",
  },
  {
    id: 5,
    title: "Igualdade de Gênero",
    description: "Alcançar a igualdade de gênero e empoderar mulheres e meninas",
    icon: Users2,
    color: "bg-orange-500",
  },
  {
    id: 6,
    title: "Água Limpa e Saneamento",
    description: "Garantir disponibilidade e gestão sustentável da água",
    icon: Droplets,
    color: "bg-blue-500",
  },
  {
    id: 7,
    title: "Energia Acessível e Limpa",
    description: "Assegurar o acesso confiável à energia sustentável",
    icon: Zap,
    color: "bg-yellow-600",
  },
  {
    id: 8,
    title: "Trabalho Decente",
    description: "Promover o crescimento econômico sustentado e inclusivo",
    icon: BadgeDollarSign,
    color: "bg-purple-500",
  },
  {
    id: 9,
    title: "Indústria e Inovação",
    description: "Construir infraestruturas resilientes e promover a industrialização",
    icon: Factory,
    color: "bg-orange-600",
  },
  {
    id: 10,
    title: "Redução das Desigualdades",
    description: "Reduzir a desigualdade dentro dos países e entre eles",
    icon: MinusCircle,
    color: "bg-pink-500",
  },
  {
    id: 11,
    title: "Cidades Sustentáveis",
    description: "Tornar as cidades inclusivas, seguras e sustentáveis",
    icon: Building2,
    color: "bg-amber-600",
  },
  {
    id: 12,
    title: "Consumo Responsável",
    description: "Assegurar padrões de produção e de consumo sustentáveis",
    icon: ShoppingCart,
    color: "bg-amber-700",
  },
  {
    id: 13,
    title: "Ação Climática",
    description: "Tomar medidas urgentes para combater a mudança do clima",
    icon: Thermometer,
    color: "bg-green-600",
  },
  {
    id: 14,
    title: "Vida na Água",
    description: "Conservar e usar sustentavelmente os oceanos e recursos marinhos",
    icon: Fish,
    color: "bg-blue-600",
  },
  {
    id: 15,
    title: "Vida Terrestre",
    description: "Proteger e restaurar os ecossistemas terrestres",
    icon: Trees,
    color: "bg-green-700",
  },
  {
    id: 16,
    title: "Paz e Justiça",
    description: "Promover sociedades pacíficas e inclusivas",
    icon: Scale,
    color: "bg-blue-700",
  },
  {
    id: 17,
    title: "Parcerias para os Objetivos",
    description: "Fortalecer os meios de implementação das metas",
    icon: Globe,
    color: "bg-blue-800",
  },
]

export function ObjetivosDesenvolvimento() {
  return (
    <section className="mb-12">
      <SectionTitle
        id="ods"
        title="Objetivos de Desenvolvimento Sustentável"
        icon={<Globe className="h-6 w-6" />}
      />

      <Card>
        <CardContent className="pt-6">
          <div className="mb-6 text-zinc-700 dark:text-zinc-300 text-sm md:text-base">
            <p>
              Os Objetivos de Desenvolvimento Sustentável (ODS) são um apelo universal à ação para acabar com a pobreza,
              proteger o planeta e melhorar a vida de todos. Escolha um ODS como base para desenvolver seu projeto e
              contribuir com soluções tecnológicas para estes desafios globais.
            </p>
          </div>

          <div className="-mx-3 md:mx-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 px-3 md:px-0">
              {objectives.map((objective) => {
                const Icon = objective.icon
                return (
                  <Card key={objective.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-3 md:p-4">
                      <div className="flex items-start gap-3 md:flex-col md:gap-3">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${objective.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="h-4 w-4 md:h-5 md:w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-sm md:text-base font-semibold mb-0.5 md:mb-1 text-zinc-900 dark:text-white">
                            {objective.id}. {objective.title}
                          </h3>
                          <p className="text-xs md:text-sm text-zinc-700 dark:text-zinc-300 line-clamp-2 md:line-clamp-none">
                            {objective.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}