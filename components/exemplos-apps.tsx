import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Smartphone } from "lucide-react"

export function ExemplosApps() {
  return (
    <section className="mb-12">
      <SectionTitle id="exemplos" title="Exemplos de Apps" icon={<Smartphone className="h-5 w-5" />} />

      <Card>
        <CardContent className="pt-6">
          <div className="-mx-6 -mt-6 md:mx-0 md:mt-0">
            <div className="overflow-x-auto min-w-full">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[30%]">ODS</TableHead>
                    <TableHead className="w-[20%]">Nome do App</TableHead>
                    <TableHead>Descrição</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1: Erradicação da Pobreza</TableCell>
                    <TableCell>BenefitFinder</TableCell>
                    <TableCell>Identifica programas sociais e benefícios para famílias de baixa renda</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2: Fome Zero</TableCell>
                    <TableCell>FoodShare</TableCell>
                    <TableCell>Conecta produtores rurais a consumidores e bancos de alimentos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3: Saúde e Bem-Estar</TableCell>
                    <TableCell>MedAlert</TableCell>
                    <TableCell>Sistema de monitoramento e lembretes de medicamentos</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>4: Educação de Qualidade</TableCell>
                    <TableCell>SkillsForAll</TableCell>
                    <TableCell>Plataforma adaptativa de aprendizagem personalizada</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>5: Igualdade de Gênero</TableCell>
                    <TableCell>SafeSpace</TableCell>
                    <TableCell>Mapeamento de áreas seguras para mulheres</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>6: Água Potável</TableCell>
                    <TableCell>WaterGuard</TableCell>
                    <TableCell>Monitoramento da qualidade da água em tempo real</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
