import { Button } from "@/components/ui/button"
import { Download, GitBranch } from "lucide-react"
import Link from "next/link"

export function DownloadButton() {
  return (
    <Button asChild className="gap-2">
      <Link href="https://github.com/mviniciusca/projeto-extensao" download>
        <GitBranch className="h-4 w-4" />
       Github
      </Link>
    </Button>
  )
}
