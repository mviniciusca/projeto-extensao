import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Feito com ❤️ por Marcos Coelho
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/mviniciusca"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://twitter.com/marcosvca_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              <span className="sr-only">Twitter</span>
              <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M23.643 4.937a10.004 10.004 0 01-2.828.775 4.993 4.993 0 002.165-2.738 10.003 10.003 0 01-3.127 1.195A4.992 4.992 0 0016.616 4c-2.748 0-4.975 2.227-4.975 4.975 0 .39.045.765.13 1.126-4.134-.207-7.8-2.188-10.26-5.2-.427.733-.671 1.58-.671 2.487 0 1.718.873 3.227 2.197 4.116a4.97 4.97 0 01-2.25-.621v.062c0 2.396 1.703 4.394 3.96 4.843a4.99 4.99 0 01-2.244.085c.634 1.975 2.475 3.414 4.655 3.454A10.003 10.003 0 010 19.54a14.086 14.086 0 007.548 2.211c9.056 0 14.003-7.496 14.003-13.986 0-.213-.005-.426-.014-.637A10.003 10.003 0 0024 4.59a9.935 9.935 0 01-2.357.646 4.993 4.993 0 002.165-2.738z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
