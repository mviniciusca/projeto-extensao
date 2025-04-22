import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export function DownloadButton() {
  return (
    <Button asChild className="gap-2">
      <Link href="/guia-projeto-extensao.pdf" download>
        <Download className="h-4 w-4" />
        Baixar PDF
      </Link>
    </Button>
  )
}
