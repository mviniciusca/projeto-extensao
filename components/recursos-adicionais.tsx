import { SectionTitle } from "@/components/section-title"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Link2 } from "lucide-react"

export function RecursosAdicionais() {
  return (
    <section className="mb-12">
      <SectionTitle id="recursos" title="Recursos Adicionais" icon={<Link2 className="h-6 w-6" />} />

      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-2 text-zinc-700 dark:text-zinc-300">
            <li>
              <strong>Documentação React:</strong>{" "}
              <Link
                href="https://reactjs.org/docs/getting-started.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                https://reactjs.org/docs/getting-started.html
              </Link>
            </li>
            <li>
              <strong>Vercel Docs:</strong>{" "}
              <Link
                href="https://vercel.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                https://vercel.com/docs
              </Link>
            </li>
            <li>
              <strong>ODS da ONU:</strong>{" "}
              <Link
                href="https://brasil.un.org/pt-br/sdgs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                https://brasil.un.org/pt-br/sdgs
              </Link>
            </li>
            <li>
              <strong>GitHub Student Pack:</strong>{" "}
              <Link
                href="https://education.github.com/pack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                https://education.github.com/pack
              </Link>
            </li>
            <li>
              <strong>Figma (design):</strong>{" "}
              <Link
                href="https://www.figma.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-900 dark:text-white hover:underline"
              >
                https://www.figma.com
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}
