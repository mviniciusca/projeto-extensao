import { Button } from "@/components/ui/button"
import { GitBranch } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface DownloadButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function DownloadButton({ className, ...props }: DownloadButtonProps) {
  return (
    <Button asChild className={cn("gap-1.5 text-xs", className)} {...props}>
      <Link href="https://github.com/mviniciusca/projeto-extensao" download>
        <GitBranch className="h-3.5 w-3.5" />
        Github
      </Link>
    </Button>
  )
}
