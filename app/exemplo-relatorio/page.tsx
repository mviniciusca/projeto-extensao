import { Header } from "@/components/header"
import { MobileNav } from "@/components/ui/mobile-nav"
import { SidebarNav } from "@/components/ui/sidebar-nav"
import { ScrollToTop } from "@/components/ui/scroll-to-top"
import { Footer } from "@/components/footer"
import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
    FileText,
    FileCheck,
    Calendar,
    User,
    Building,
    Target,
    CheckSquare,
    PenTool,
    Clipboard,
    CheckCircle2,
    FileOutput,
    AlertTriangle,
    CalendarDays
} from "lucide-react"

export default function ExemploRelatorioPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-zinc-950">
            <Header />
            <MobileNav />
            <ScrollToTop />

            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex relative gap-8">
                    <SidebarNav />
                    <main className="flex-1 py-8 md:pl-0 w-full">
                        <div className="max-w-4xl mx-auto">
                            <SectionTitle
                                id="exemplo-relatorio"
                                title="Planejamento e Relatório"
                                subtitle="Ferramenta para definir seu projeto e ver um exemplo de relatório completo"
                                icon={<FileText className="h-5 w-5" />}
                            />

                            <Alert variant="destructive" className="mb-6 border-red-500 bg-red-50 dark:bg-red-900/30">
                                <AlertTriangle className="h-4 w-4 text-red-600 dark:text-red-300" />
                                <AlertDescription className="text-red-600/90 dark:text-red-200">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-2">
                                        <div>
                                            <strong>Atenção:</strong> Este é apenas um exemplo para inspiração. Evite plágio e desenvolva seu próprio projeto com base em suas ideias originais.
                                        </div>
                                        <div className="flex items-center gap-1 text-sm whitespace-nowrap">
                                            <CalendarDays className="h-3.5 w-3.5" />
                                            <span>Abril de 2025</span>
                                        </div>
                                    </div>
                                    <div className="border-t border-red-300 dark:border-red-700 pt-2 mt-1 font-medium">
                                        Atenção: Este documento foi criado em Abril de 2025. As perguntas, formatos e requisitos do relatório podem mudar. Consulte sempre seu tutor ou coordenador para obter a versão mais atualizada do template e das instruções.
                                    </div>
                                </AlertDescription>
                            </Alert>

                            <Tabs defaultValue="checklist" className="mb-8">
                                <TabsList className="w-full grid grid-cols-3 mb-6">
                                    <TabsTrigger value="checklist" className="flex items-center gap-2">
                                        <Clipboard className="h-4 w-4" />
                                        <span>Checklist de Planejamento</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="relatorio" className="flex items-center gap-2">
                                        <FileText className="h-4 w-4" />
                                        <span>Exemplo de Relatório</span>
                                    </TabsTrigger>
                                    <TabsTrigger value="documento-final" className="flex items-center gap-2">
                                        <FileOutput className="h-4 w-4" />
                                        <span>Documento Final</span>
                                    </TabsTrigger>
                                </TabsList>

                                {/* Aba de Checklist */}
                                <TabsContent value="checklist">
                                    <Card>
                                        <CardContent className="pt-6">
                                            <div className="space-y-8">
                                                <div>
                                                    <h2 className="text-xl font-semibold mb-4 text-zinc-900 dark:text-white flex items-center gap-2">
                                                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                                                        Checklist do Projeto de Extensão
                                                    </h2>
                                                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                                                        Este checklist mostra as escolhas feitas para o projeto EcoRotas, servindo como referência para o seu próprio planejamento.
                                                        Todos os campos estão preenchidos e em modo somente leitura para ilustrar como um projeto completo foi definido.
                                                    </p>

                                                    {/* Escolha do ODS */}
                                                    <div className="space-y-6 mt-8">
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                                                            <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">1. Escolha do ODS</h3>

                                                            <div className="space-y-3">
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="ods1" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="ods1" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        ODS 1: Erradicação da Pobreza
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="ods2" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="ods2" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        ODS 2: Fome Zero
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="ods3" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="ods3" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        ODS 3: Boa Saúde e Bem-Estar
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="ods4" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="ods4" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        ODS 4: Educação de Qualidade
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <input type="radio" id="ods11" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" checked disabled />
                                                                    <label htmlFor="ods11" className="ml-2 block text-zinc-700 dark:text-zinc-300 font-medium">
                                                                        ODS 11: Cidades e Comunidades Sustentáveis
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="odsOutro" name="ods" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="odsOutro" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Outro ODS (escolha na seção "Objetivos de Desenvolvimento")
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Tipo de Aplicativo */}
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                                                            <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">2. Tipo de Aplicativo</h3>

                                                            <div className="space-y-3">
                                                                <div className="flex items-center">
                                                                    <input type="radio" id="app1" name="app" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" checked disabled />
                                                                    <label htmlFor="app1" className="ml-2 block text-zinc-700 dark:text-zinc-300 font-medium">
                                                                        Aplicativo de Mobilidade Urbana Sustentável (como o EcoRotas)
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="app2" name="app" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="app2" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Aplicativo para Conexão entre Produtores e Consumidores
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="app3" name="app" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="app3" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Plataforma de Aprendizado Online Personalizado
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="app4" name="app" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="app4" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Sistema de Monitoramento de Saúde e Bem-Estar
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="radio" id="app5" name="app" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="app5" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Ferramenta de Mapeamento de Áreas Seguras
                                                                    </label>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <label htmlFor="appName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                                                        Nome do Aplicativo:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="appName"
                                                                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-not-allowed"
                                                                        value="EcoRotas"
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Local de Apresentação */}
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                                                            <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">3. Local de Apresentação</h3>

                                                            <div className="space-y-3">
                                                                <div className="flex items-center">
                                                                    <input type="checkbox" id="local1" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" checked disabled />
                                                                    <label htmlFor="local1" className="ml-2 block text-zinc-700 dark:text-zinc-300 font-medium">
                                                                        ONGs e organizações da sociedade civil
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="checkbox" id="local2" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="local2" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Secretarias municipais e órgãos públicos
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <input type="checkbox" id="local3" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" checked disabled />
                                                                    <label htmlFor="local3" className="ml-2 block text-zinc-700 dark:text-zinc-300 font-medium">
                                                                        Incubadoras de startups e programas de aceleração
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center">
                                                                    <input type="checkbox" id="local4" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" checked disabled />
                                                                    <label htmlFor="local4" className="ml-2 block text-zinc-700 dark:text-zinc-300 font-medium">
                                                                        Eventos universitários e feiras de tecnologia
                                                                    </label>
                                                                </div>
                                                                <div className="flex items-center opacity-70">
                                                                    <input type="checkbox" id="local5" className="h-4 w-4 text-green-600 focus:ring-green-500 border-zinc-300 dark:border-zinc-600" disabled />
                                                                    <label htmlFor="local5" className="ml-2 block text-zinc-700 dark:text-zinc-300">
                                                                        Hackathons relacionados a desenvolvimento sustentável
                                                                    </label>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <label htmlFor="localDetalhes" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                                                        Detalhes ou nome da organização:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        id="localDetalhes"
                                                                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-not-allowed"
                                                                        value="Incubadora TecSus; Centro de Inovação em Mobilidade Urbana"
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        {/* Relação do Aplicativo com o ODS */}
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-6 border border-zinc-200 dark:border-zinc-800">
                                                            <h3 className="text-lg font-medium mb-4 text-zinc-900 dark:text-white">4. Relação do Aplicativo com o ODS</h3>

                                                            <div className="space-y-4">
                                                                <div>
                                                                    <label htmlFor="problema" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                                                        Problema que o aplicativo resolve:
                                                                    </label>
                                                                    <textarea
                                                                        id="problema"
                                                                        rows={3}
                                                                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-not-allowed"
                                                                        value="Congestionamento e poluição nas cidades brasileiras devido ao uso excessivo de veículos individuais com motores a combustão, resultando em baixa qualidade do ar e mobilidade ineficiente."
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="solucao" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                                                        Como o aplicativo contribui para o ODS:
                                                                    </label>
                                                                    <textarea
                                                                        id="solucao"
                                                                        rows={3}
                                                                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-not-allowed"
                                                                        value="O EcoRotas incentiva o uso de meios de transporte alternativos e sustentáveis, sugerindo rotas para pedestres, ciclistas e transporte público. Isso contribui diretamente para a meta 11.2 do ODS 11, que visa proporcionar acesso a sistemas de transporte seguros, acessíveis e sustentáveis para todos."
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div>
                                                                    <label htmlFor="impacto" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                                                        Impacto esperado:
                                                                    </label>
                                                                    <textarea
                                                                        id="impacto"
                                                                        rows={3}
                                                                        className="w-full rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 cursor-not-allowed"
                                                                        value="Redução da emissão de CO2, melhoria da qualidade do ar em centros urbanos, criação de uma comunidade consciente sobre mobilidade sustentável, e incentivo à atividade física através do uso de transporte ativo (caminhada e ciclismo)."
                                                                        readOnly
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Aba de Exemplo de Relatório */}
                                <TabsContent value="relatorio">
                                    <Card className="mb-8">
                                        <CardContent className="pt-6">
                                            <div className="space-y-8">
                                                {/* Seção de Capa */}
                                                <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
                                                    <h1 className="text-2xl font-bold text-center mb-2 text-zinc-900 dark:text-white">PROJETO DE EXTENSÃO</h1>
                                                    <h2 className="text-xl font-semibold text-center mb-6 text-zinc-700 dark:text-zinc-300">Aplicativo EcoRotas: Mobilidade Sustentável</h2>

                                                    <div className="flex justify-center mb-6">
                                                        <div className="w-24 h-1 bg-green-500"></div>
                                                    </div>

                                                    <div className="space-y-2 text-center text-zinc-600 dark:text-zinc-400">
                                                        <p>Nome do Aluno: Maria Silva</p>
                                                        <p>RA: 123456789</p>
                                                        <p>Curso: Análise e Desenvolvimento de Sistemas</p>
                                                        <p>Unidade: Campus Virtual</p>
                                                        <p>Data: Abril de 2025</p>
                                                    </div>
                                                </div>

                                                {/* Introdução */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <FileCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">1. Introdução</h2>
                                                    </div>
                                                    <p className="text-zinc-700 dark:text-zinc-300 pl-7">
                                                        Este projeto de extensão tem como foco o desenvolvimento de uma solução tecnológica alinhada ao Objetivo de Desenvolvimento Sustentável 11 da ONU: "Cidades e Comunidades Sustentáveis".
                                                        O EcoRotas é um aplicativo web que visa facilitar a mobilidade urbana sustentável, incentivando o uso de transportes alternativos e de menor impacto ambiental.
                                                    </p>
                                                    <p className="text-zinc-700 dark:text-zinc-300 pl-7">
                                                        A crescente urbanização tem intensificado problemas de congestionamento e poluição nas cidades brasileiras.
                                                        As pessoas enfrentam dificuldades para encontrar rotas eficientes que não dependam exclusivamente de veículos motorizados individuais, resultando em maior emissão de gases poluentes e comprometendo a qualidade de vida urbana.
                                                    </p>
                                                </div>

                                                {/* Objetivos */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <Target className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">2. Objetivos do Projeto</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-2">
                                                        <p className="font-medium text-zinc-800 dark:text-zinc-200">Objetivo Geral:</p>
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            Desenvolver um aplicativo web que promova a mobilidade urbana sustentável ao oferecer rotas alternativas com menor impacto ambiental.
                                                        </p>

                                                        <p className="font-medium text-zinc-800 dark:text-zinc-200 mt-4">Objetivos Específicos:</p>
                                                        <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                            <li>Mapear e sugerir rotas para ciclistas, pedestres e transporte público;</li>
                                                            <li>Calcular e exibir a redução na pegada de carbono ao optar por meios de transporte sustentáveis;</li>
                                                            <li>Criar uma comunidade de usuários engajada na mobilidade sustentável;</li>
                                                            <li>Coletar dados sobre padrões de deslocamento para informar políticas públicas de mobilidade.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Metodologia */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <PenTool className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">3. Metodologia</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-3">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            A metodologia adotada neste projeto seguiu uma abordagem centrada no usuário, utilizando métodos ágeis de desenvolvimento de software:
                                                        </p>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Pesquisa e Análise:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Revisão bibliográfica sobre mobilidade urbana sustentável;</li>
                                                                <li>Pesquisa com 50 potenciais usuários sobre suas necessidades e hábitos de deslocamento;</li>
                                                                <li>Análise de aplicativos similares disponíveis no mercado.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Desenvolvimento da Solução:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Prototipagem das interfaces usando Figma;</li>
                                                                <li>Desenvolvimento frontend com React.js e Next.js;</li>
                                                                <li>Integração com APIs de mapas e geolocalização;</li>
                                                                <li>Implementação de algoritmos para cálculo de rotas e emissões de CO2.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Validação:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Testes com grupo de 15 usuários voluntários;</li>
                                                                <li>Coleta de feedback e implementação de melhorias iterativas;</li>
                                                                <li>Validação com especialistas em mobilidade urbana.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Desenvolvimento */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <Building className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">4. Desenvolvimento</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-3">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            O aplicativo EcoRotas foi desenvolvido utilizando tecnologias modernas de desenvolvimento web, com foco na experiência do usuário e na eficiência energética.
                                                        </p>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Principais Funcionalidades:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li><span className="font-medium">Planejador de Rotas Sustentáveis:</span> Sugere trajetos otimizados para pedestres, ciclistas e transporte público;</li>
                                                                <li><span className="font-medium">Calculadora de Carbono:</span> Mostra a redução na emissão de CO2 ao escolher alternativas sustentáveis;</li>
                                                                <li><span className="font-medium">Mapa Colaborativo:</span> Permite que usuários marquem pontos de interesse como bicicletários, estações de recarga para veículos elétricos, etc.;</li>
                                                                <li><span className="font-medium">Comunidade EcoMobilidade:</span> Fórum para troca de experiências e dicas sobre mobilidade sustentável;</li>
                                                                <li><span className="font-medium">Painel de Impacto:</span> Visualização de dados sobre a contribuição dos usuários para a redução da pegada de carbono.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Tecnologias Utilizadas:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Frontend: React.js, Next.js, Tailwind CSS;</li>
                                                                <li>APIs: MapBox para mapas, OpenWeatherMap para dados climáticos;</li>
                                                                <li>Banco de Dados: Firebase Firestore;</li>
                                                                <li>Autenticação: Firebase Authentication;</li>
                                                                <li>Hospedagem: Vercel.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Desafios e Soluções:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li><span className="font-medium">Precisão das rotas:</span> Integração com múltiplas APIs de mapas para melhorar a qualidade dos dados;</li>
                                                                <li><span className="font-medium">Cálculo de emissões:</span> Desenvolvimento de algoritmo baseado em pesquisas científicas;</li>
                                                                <li><span className="font-medium">Performance em dispositivos móveis:</span> Otimização do código e implementação de técnicas de lazy loading.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Resultados */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <CheckSquare className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">5. Resultados Esperados</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-3">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            O aplicativo EcoRotas tem o potencial de gerar impactos significativos tanto a nível individual quanto coletivo:
                                                        </p>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Impacto Ambiental:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Redução estimada de 2,5 toneladas de CO2 por usuário ativo por ano;</li>
                                                                <li>Diminuição no uso de veículos individuais com motores a combustão;</li>
                                                                <li>Contribuição para a melhoria da qualidade do ar em centros urbanos.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Impacto Social:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Criação de uma comunidade consciente sobre mobilidade sustentável;</li>
                                                                <li>Melhoria na qualidade de vida urbana com menos congestionamentos;</li>
                                                                <li>Incentivo à atividade física através de rotas para caminhada e ciclismo.</li>
                                                            </ul>
                                                        </div>

                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Métricas de Sucesso:</p>
                                                            <ul className="list-disc pl-5 text-zinc-700 dark:text-zinc-300 space-y-1">
                                                                <li>Alcançar 5.000 usuários ativos nos primeiros 6 meses;</li>
                                                                <li>Engajamento de 70% dos usuários utilizando a plataforma ao menos 3 vezes por semana;</li>
                                                                <li>Redução coletiva de 12.500 toneladas de CO2 no primeiro ano;</li>
                                                                <li>Feedback positivo de 85% dos usuários.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Conclusão */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <FileText className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">6. Conclusão</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-3">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            O desenvolvimento do aplicativo EcoRotas representou uma jornada de aprendizado significativa, permitindo aplicar conhecimentos teóricos de programação em um contexto de impacto social real.
                                                        </p>

                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            Os desafios enfrentados durante o desenvolvimento, especialmente na integração de APIs de mapas e no cálculo preciso de emissões de carbono, proporcionaram oportunidades valiosas para aprimorar habilidades de resolução de problemas e pensamento crítico.
                                                        </p>

                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            Este projeto reforçou a compreensão do papel da tecnologia como ferramenta para abordar desafios globais, como a emergência climática e a mobilidade urbana sustentável. A experiência adquirida no desenvolvimento de uma solução alinhada aos ODS da ONU ampliou significativamente minha visão sobre como aplicar competências técnicas para gerar impacto positivo na sociedade.
                                                        </p>

                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            Como próximos passos, pretendo implementar funcionalidades adicionais, como integração com sistemas de compartilhamento de bicicletas e carros elétricos, além de expandir o alcance do aplicativo para mais cidades. O EcoRotas demonstra como a tecnologia pode ser uma aliada poderosa na construção de cidades mais inteligentes e sustentáveis.
                                                        </p>

                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            O aplicativo está disponível para acesso em: <a href="https://ecorotas-example.vercel.app" target="_blank" rel="noopener noreferrer" className="text-green-500 hover:underline">https://ecorotas-example.vercel.app</a>
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Referências */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <User className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">7. Depoimentos</h2>
                                                    </div>
                                                    <div className="pl-7 space-y-3">
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                                                            <p className="italic text-zinc-700 dark:text-zinc-300 mb-2">
                                                                "O EcoRotas mudou completamente minha forma de me locomover pela cidade. Descobri caminhos de bicicleta que nunca imaginei existirem e tenho economizado tempo e dinheiro, além de contribuir com o meio ambiente."
                                                            </p>
                                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">— Carlos Mendes, usuário do aplicativo</p>
                                                        </div>

                                                        <div className="bg-zinc-50 dark:bg-zinc-900 p-4 rounded-lg border border-zinc-200 dark:border-zinc-800">
                                                            <p className="italic text-zinc-700 dark:text-zinc-300 mb-2">
                                                                "Como especialista em mobilidade urbana, posso afirmar que o EcoRotas preenche uma lacuna importante nas soluções disponíveis atualmente. A abordagem integrada e o foco na redução de emissões são inovadores e necessários."
                                                            </p>
                                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm">— Dra. Ana Luiza Costa, Professora de Planejamento Urbano</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Referências */}
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-2">
                                                        <Calendar className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                                                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">8. Referências</h2>
                                                    </div>
                                                    <div className="pl-7">
                                                        <ul className="text-zinc-700 dark:text-zinc-300 space-y-2">
                                                            <li>NAÇÕES UNIDAS. Objetivos de Desenvolvimento Sustentável. Disponível em: <a href="https://brasil.un.org/pt-br/sdgs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://brasil.un.org/pt-br/sdgs</a>. Acesso em: 15 mar. 2025.</li>
                                                            <li>GEHL, J. Cidades para pessoas. São Paulo: Perspectiva, 2015.</li>
                                                            <li>CARVALHO, C.H.R. Mobilidade urbana sustentável: conceitos, tendências e reflexões. Brasília: IPEA, 2022.</li>
                                                            <li>REACT DOCUMENTATION. Getting Started with React. Disponível em: <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://reactjs.org/docs/getting-started.html</a>. Acesso em: 10 fev. 2025.</li>
                                                            <li>NEXTJS DOCUMENTATION. Getting Started. Disponível em: <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://nextjs.org/docs</a>. Acesso em: 12 fev. 2025.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>

                                {/* Aba de Documento Final */}
                                <TabsContent value="documento-final">
                                    <Card className="mb-8">
                                        <CardContent className="pt-6">
                                            <div className="space-y-8">
                                                {/* Cabeçalho do Documento */}
                                                <div className="pb-6 border-b border-zinc-200 dark:border-zinc-800">
                                                    <h1 className="text-2xl font-bold text-center mb-2 text-zinc-900 dark:text-white">RELATÓRIO FINAL - PROJETO DE EXTENSÃO</h1>

                                                    <div className="flex justify-center mb-6 mt-4">
                                                        <div className="w-24 h-1 bg-green-500"></div>
                                                    </div>
                                                </div>

                                                {/* Dados do Aluno */}
                                                <div className="space-y-4">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">DADOS DO ALUNO</h2>

                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">Aluno:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">Maria Silva</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">RA:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">123456789</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">POLO / UNIDADE:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">Campus Virtual</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">CURSO:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">CST EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
                                                        </div>
                                                    </div>

                                                    <div className="grid grid-cols-1 gap-4 bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">COMPONENTE CURRICULAR:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">PROJETO DE EXTENSÃO I - ANÁLISE E DESENVOLVIMENTO DE SISTEMAS</p>
                                                        </div>
                                                        <div>
                                                            <p className="font-medium text-zinc-800 dark:text-zinc-200">PROGRAMA DE EXTENSÃO:</p>
                                                            <p className="text-zinc-700 dark:text-zinc-300">PROGRAMA DE CONTEXTO À COMUNIDADE.</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Finalidade e Motivação */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">FINALIDADE E MOTIVAÇÃO</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            A finalidade da extensão no Programa de Contexto à Comunidade do Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas é dedicar-se a área educacional e o transferir do saber, desenvolvendo e capacitando a comunidade local e agregando conhecimentos por meio de projetos e atividades pedagógicas extensionistas. Nesse programa é possível a ministração de palestras, aulas de monitoria, cursos, aulas de educação básica, educação financeira, língua estrangeira, debates da comunidade local, participação em projetos sociais, projetos coletivos multidisciplinar e trabalhos voluntários. Os locais que poderão contemplar esse projeto extensionistas podem ser: parcerias com a prefeitura; associações de bairros, escolas, empresas públicas e privadas, igrejas, ONGs e por meio de redes de internet.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Competências */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">COMPETÊNCIAS</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <ul className="list-roman pl-5 text-zinc-700 dark:text-zinc-300 space-y-2">
                                                            <li>Interpretar e elaborar gráficos, tabelas e diagramas;</li>
                                                            <li>Desenvolver programas de computador empregando linguagens de programação e raciocínio lógico;</li>
                                                            <li>Projetar e implementar o armazenamento e o tratamento de dados em sistemas computacionais.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Perfil do Egresso */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">PERFIL DO EGRESSO</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            O perfil do egresso idealizado pela IES para o Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas possibilita a formação de um profissional crítico, reflexivo, criativo, visão holística, humanista e ético, capaz de aplicar tecnologias inerentes à sua área de atuação, sendo que pelas atividades extensionistas vinculadas ao Programa de Extensão Contexto à Comunidade, esse egresso poderá desenvolver habilidades e capacidade para conduzir atividades pedagógicas e de ensino referentes à compreensão da realidade social, ser capaz de reconhecer as necessidades dos usuários, adotar perspectivas multidisciplinares e transdisciplinares em sua prática, considerar aspectos políticos, econômicos, sociais do meio em que está inserido, direcionando suas ações para a transformação da realidade e para o desenvolvimento social.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Soft Skills */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">SOFT SKILLS (COMPETÊNCIAS SOCIOEMOCIONAIS)</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <ul className="text-zinc-700 dark:text-zinc-300 space-y-2">
                                                            <li>Criatividade e inovação</li>
                                                            <li>Comunicação Interpessoal</li>
                                                            <li>Planejamento e organização</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Objetivos de Aprendizagem */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">OBJETIVOS DE APRENDIZAGEM</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <p className="text-zinc-700 dark:text-zinc-300">
                                                            Os objetivos da extensão no Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas vinculados ao Programa de Contexto à Comunidade estão relacionados com a disseminação do saber da área de ciências para a comunidade local, prestando serviços a questões pedagógicas, aulas de monitoria, educação básica, educação financeira, língua estrangeira, recursos naturais, ética e responsabilidade social. Tais ações visam a transferência de conhecimento acadêmico para a comunidade, preparando o egresso para uma atuação global, focado não apenas no conhecimento técnico, mas com a preocupação pelo próximo e por um sociedade igualitária, buscando oportunizar conhecimento para quem não tem oportunidade de acesso.
                                                        </p>
                                                    </div>
                                                </div>

                                                {/* Conteúdos */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">CONTEÚDOS</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <ul className="list-roman pl-5 text-zinc-700 dark:text-zinc-300 space-y-2">
                                                            <li>Algoritmos e programação;</li>
                                                            <li>Estruturas de dados;</li>
                                                            <li>Orientação a objetos;</li>
                                                            <li>Banco de dados;</li>
                                                            <li>Lógica matemática e teoria dos conjuntos;</li>
                                                            <li>Princípios de estatística e análise de dados.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Indicações Bibliográficas */}
                                                <div className="space-y-3">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">INDICAÇÕES BIBLIOGRÁFICAS</h2>
                                                    <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                        <ul className="text-zinc-700 dark:text-zinc-300 space-y-2">
                                                            <li>MANZANO, José Augusto N. G. Algortimos: lógica para desenvolvimento de programação de computadores. 29.ed. São Paulo: Érica, 2019.</li>
                                                            <li>MENEZES, Paulo Blauth. Matemática discreta para computação e informática. 4.ed. Porto Alegre: Bookman, 2013.</li>
                                                            <li>GERSTING, Judith L. Fundamentos matemáticos para a ciência da computação: matemática discreta e suas aplicações. 7.ed. Rio de Janeiro: LTC, 2017.</li>
                                                        </ul>
                                                    </div>
                                                </div>

                                                {/* Relatório Final */}
                                                <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800">
                                                    <h2 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4">RELATÓRIO FINAL</h2>
                                                    <p className="text-zinc-700 dark:text-zinc-300 mb-6">
                                                        Aluno e Aluna, após realizar suas atividades de extensão, é necessário que você o formalize, enviando esse Relatório Final para ser avaliado junto ao seu Ambiente Virtual (AVA) e também para você poder comprovar sua atuação.
                                                        Para o preenchimento, busque as anotações junto ao TEMPLATE PCDA para auxiliar na apresentação das atividades desenvolvidas.
                                                        Todos os campos são de preenchimento obrigatório!
                                                    </p>

                                                    {/* Descrição da Ação com Resultados Alcançados */}
                                                    <div className="space-y-6 mt-8">
                                                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">DESCRIÇÃO DA AÇÃO COM RESULTADOS ALCANÇADOS</h3>

                                                        <div className="space-y-4">
                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Metas dos Objetivos de Desenvolvimento Sustentável (ODS) aderentes a este projeto:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        ODS 11 - Cidades e Comunidades Sustentáveis
                                                                        <br /><br />
                                                                        Meta 11.2: Até 2030, proporcionar o acesso a sistemas de transporte seguros, acessíveis, sustentáveis e a preço módico para todos, melhorando a segurança rodoviária por meio da expansão dos transportes públicos, com especial atenção para as necessidades das pessoas em situação de vulnerabilidade, mulheres, crianças, pessoas com deficiência e idosos.
                                                                        <br /><br />
                                                                        Meta 11.6: Até 2030, reduzir o impacto ambiental negativo per capita das cidades, inclusive prestando especial atenção à qualidade do ar, gestão de resíduos municipais e outros.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Local de realização da atividade extensionista:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        A atividade foi realizada em parceria com a Incubadora TecSus e o Centro de Inovação em Mobilidade Urbana. Também foram realizadas apresentações do aplicativo em eventos universitários e feiras de tecnologia voltadas para soluções sustentáveis.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Durante a ação:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        Durante o desenvolvimento do aplicativo EcoRotas, foram realizadas as seguintes ações:
                                                                        <br /><br />
                                                                        1. Pesquisa com potenciais usuários sobre necessidades de mobilidade urbana;<br />
                                                                        2. Desenvolvimento do aplicativo utilizando React.js, Next.js e APIs de mapas;<br />
                                                                        3. Testes com usuários voluntários para validação da solução;<br />
                                                                        4. Apresentações do aplicativo em feiras de tecnologia e eventos de sustentabilidade;<br />
                                                                        5. Workshops com a comunidade local para apresentar o aplicativo e receber feedback.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Caso necessário, houve mudança de estratégia para alcançar o resultado:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        Inicialmente, o aplicativo seria focado apenas em rotas para ciclistas. Porém, após as primeiras pesquisas e feedback da comunidade, identificamos a necessidade de expandir para incluir também pedestres e usuários de transporte público, criando uma solução mais abrangente.
                                                                        <br /><br />
                                                                        Além disso, adicionamos a funcionalidade de cálculo de emissões de CO2, que não estava no escopo inicial, para reforçar a conscientização sobre o impacto ambiental dos meios de transporte.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Resultado da ação:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        Os resultados alcançados com o desenvolvimento e implementação do EcoRotas foram:
                                                                        <br /><br />
                                                                        1. Criação de um aplicativo funcional de mobilidade urbana sustentável, disponível online;<br />
                                                                        2. Engajamento de mais de 300 usuários nos primeiros dois meses de lançamento;<br />
                                                                        3. Redução estimada de 1.2 toneladas de CO2 no período de teste, conforme dados coletados pelo aplicativo;<br />
                                                                        4. Reconhecimento do projeto em feiras de tecnologia locais;<br />
                                                                        5. Formação de uma comunidade online de usuários engajados com mobilidade sustentável;<br />
                                                                        6. Interesse da Secretaria Municipal de Mobilidade Urbana em utilizar os dados do aplicativo para planejamento urbano.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Conclusão:</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300">
                                                                        O desenvolvimento do aplicativo EcoRotas representou uma importante contribuição para a promoção da mobilidade urbana sustentável, alinhada com as metas do ODS 11 da ONU. O projeto demonstrou como a tecnologia pode ser uma aliada poderosa na busca por cidades mais inteligentes e sustentáveis.
                                                                        <br /><br />
                                                                        A experiência permitiu aplicar conhecimentos técnicos de programação em um contexto real de impacto social, reforçando a compreensão da importância da tecnologia na abordagem de desafios globais como a emergência climática e a mobilidade urbana sustentável.
                                                                        <br /><br />
                                                                        Os resultados obtidos e o feedback positivo da comunidade indicam que o aplicativo tem potencial para expandir seu impacto, podendo ser integrado a outras iniciativas de mobilidade sustentável e políticas públicas de planejamento urbano.
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <p className="font-medium text-zinc-800 dark:text-zinc-200 mb-2">Depoimentos (se houver):</p>
                                                                <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                                    <p className="text-zinc-700 dark:text-zinc-300 italic">
                                                                        "O EcoRotas mudou completamente minha forma de me locomover pela cidade. Descobri caminhos de bicicleta que nunca imaginei existirem e tenho economizado tempo e dinheiro, além de contribuir com o meio ambiente."
                                                                        <br />— Carlos Mendes, usuário do aplicativo
                                                                        <br /><br />
                                                                        "Como especialista em mobilidade urbana, posso afirmar que o EcoRotas preenche uma lacuna importante nas soluções disponíveis atualmente. A abordagem integrada e o foco na redução de emissões são inovadores e necessários."
                                                                        <br />— Dra. Ana Luiza Costa, Professora de Planejamento Urbano
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Percepção das Ações Extensionistas */}
                                                    <div className="space-y-3 mt-8">
                                                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">RELATE SUA PERCEPÇÃO DAS AÇÕES EXTENSIONISTAS REALIZADAS NO PROGRAMA DESENVOLVIDO</h3>
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                            <p className="text-zinc-700 dark:text-zinc-300">
                                                                O desenvolvimento do aplicativo EcoRotas como parte do projeto de extensão foi uma experiência transformadora que ampliou significativamente minha visão sobre o papel da tecnologia na sociedade. Ao longo do processo, pude perceber um aprimoramento substancial em minhas habilidades profissionais, especialmente no que diz respeito à programação web com React e Next.js, integração de APIs e desenvolvimento de interfaces centradas no usuário. A necessidade de criar uma solução funcional e acessível para um problema real exigiu um nível de comprometimento e atenção aos detalhes que vai muito além dos exercícios acadêmicos tradicionais.
                                                                <br /><br />
                                                                A identificação do problema da mobilidade urbana sustentável e o desenvolvimento de uma solução tecnológica para abordá-lo me permitiram articular os conhecimentos teóricos adquiridos no curso com uma aplicação prática de impacto social. As disciplinas de algoritmos, estruturas de dados e banco de dados ganharam uma nova dimensão quando aplicadas a um contexto real, onde cada decisão técnica tinha implicações diretas na experiência dos usuários e na eficácia da solução.
                                                                <br /><br />
                                                                O feedback recebido durante os testes com usuários e nas apresentações em eventos evidenciou que o aplicativo estava, de fato, contribuindo para a melhoria do problema identificado. Ver pessoas descobrindo novas rotas sustentáveis e reduzindo suas emissões de carbono trouxe uma satisfação que transcende o âmbito puramente acadêmico ou profissional. Essa experiência reforçou minha compreensão de que a tecnologia, quando direcionada a causas relevantes, pode ser um poderoso instrumento de transformação social.
                                                                <br /><br />
                                                                O projeto também me permitiu desenvolver habilidades de comunicação e trabalho em equipe, uma vez que foi necessário interagir com diversos stakeholders, desde usuários finais até especialistas em mobilidade urbana e representantes de organizações parceiras. A capacidade de explicar conceitos técnicos para pessoas sem formação na área e de incorporar feedback de diferentes perspectivas foi essencial para o sucesso do projeto.
                                                                <br /><br />
                                                                Particularmente significativa foi a oportunidade de aplicar os conhecimentos técnicos em um contexto alinhado aos Objetivos de Desenvolvimento Sustentável da ONU, demonstrando como a tecnologia pode contribuir para a construção de um futuro mais sustentável. Esta experiência certamente moldará minha atuação profissional futura, incentivando-me a buscar constantemente o equilíbrio entre inovação tecnológica e responsabilidade social.
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Depoimento da Instituição */}
                                                    <div className="space-y-3 mt-8">
                                                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">DEPOIMENTO DA INSTITUIÇÃO PARTICIPANTE</h3>
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                            <p className="text-zinc-700 dark:text-zinc-300 italic">
                                                                "O projeto EcoRotas desenvolvido pela aluna Maria Silva representa uma contribuição significativa para as iniciativas de mobilidade sustentável promovidas pelo Centro de Inovação em Mobilidade Urbana. A aplicação desenvolvida demonstra excelente qualidade técnica e uma clara compreensão dos desafios de mobilidade enfrentados em centros urbanos.
                                                                <br /><br />
                                                                A abordagem da aluna foi profissional e colaborativa, incorporando feedback e sugestões dos especialistas do nosso centro durante todo o processo de desenvolvimento. O aplicativo já está sendo utilizado como ferramenta complementar em nossos programas de educação para mobilidade sustentável, com resultados muito positivos.
                                                                <br /><br />
                                                                Destacamos também a capacidade da estudante em comunicar conceitos técnicos complexos de forma acessível durante as apresentações e workshops realizados com a comunidade, demonstrando excelentes habilidades de comunicação além do conhecimento técnico.
                                                                <br /><br />
                                                                O Centro de Inovação em Mobilidade Urbana tem interesse em manter a parceria para o desenvolvimento contínuo do aplicativo, explorando novas funcionalidades e possibilidades de integração com sistemas de transporte público."
                                                                <br /><br />
                                                                Ricardo Oliveira<br />
                                                                Diretor do Centro de Inovação em Mobilidade Urbana
                                                            </p>
                                                        </div>
                                                    </div>

                                                    {/* Referências Bibliográficas */}
                                                    <div className="space-y-3 mt-8">
                                                        <h3 className="text-lg font-medium text-zinc-900 dark:text-white">REFERÊNCIAS BIBLIOGRÁFICAS</h3>
                                                        <div className="bg-zinc-50 dark:bg-zinc-900 rounded-lg p-4">
                                                            <ul className="text-zinc-700 dark:text-zinc-300 space-y-2">
                                                                <li>CARVALHO, C.H.R. Mobilidade urbana sustentável: conceitos, tendências e reflexões. Brasília: IPEA, 2022.</li>
                                                                <li>GEHL, J. Cidades para pessoas. São Paulo: Perspectiva, 2015.</li>
                                                                <li>GERSTING, Judith L. Fundamentos matemáticos para a ciência da computação: matemática discreta e suas aplicações. 7.ed. Rio de Janeiro: LTC, 2017.</li>
                                                                <li>MANZANO, José Augusto N. G. Algortimos: lógica para desenvolvimento de programação de computadores. 29.ed. São Paulo: Érica, 2019.</li>
                                                                <li>MENEZES, Paulo Blauth. Matemática discreta para computação e informática. 4.ed. Porto Alegre: Bookman, 2013.</li>
                                                                <li>NAÇÕES UNIDAS. Objetivos de Desenvolvimento Sustentável. Disponível em: <a href="https://brasil.un.org/pt-br/sdgs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://brasil.un.org/pt-br/sdgs</a>. Acesso em: 15 mar. 2025.</li>
                                                                <li>NEXTJS DOCUMENTATION. Getting Started. Disponível em: <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://nextjs.org/docs</a>. Acesso em: 12 fev. 2025.</li>
                                                                <li>REACT DOCUMENTATION. Getting Started with React. Disponível em: <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">https://reactjs.org/docs/getting-started.html</a>. Acesso em: 10 fev. 2025.</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </main>
                </div>
            </div>

            <Footer />
        </div>
    )
}