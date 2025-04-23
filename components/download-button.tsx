import { Button } from "@/components/ui/button"
import { GitBranch } from "lucide-react"
import Link from "next/link"

export function DownloadButton() {
  return (
    <Button asChild className="gap-1.5 text-xs">
      <Link href="https://github.com/mviniciusca/projeto-extensao" download>
        <GitBranch className="h-3.5 w-3.5" />
        Github
      </Link>
    </Button>
  )
}
