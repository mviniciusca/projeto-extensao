"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import {
    Github,
    BookOpen,
    Notebook,
    ClipboardList,
    FileText,
    Lightbulb,
    Navigation,
    PanelTop,
    ChevronDown,
    Sparkles,
    Menu,
    X
} from "lucide-react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { items } from "@/components/ui/sidebar-nav"

export function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800">
            <div className="container mx-auto flex items-center justify-between h-16 px-4 max-w-7xl">
                <Link href="/" className="flex items-center space-x-2 transition-opacity hover:opacity-80">
                    <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-orange-400 to-amber-600 text-white">
                        <Notebook className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-semibold text-zinc-900 dark:text-white">Projeto de Extensão</span>
                </Link>

                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex md:items-center md:space-x-6">
                        <NavigationMenu>
                            <NavigationMenuList className="space-x-2">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent px-4">
                                        <BookOpen className="h-4 w-4 mr-2" />
                                        Recursos
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                            <li className="row-span-3">
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-orange-500 to-amber-600 p-6 no-underline outline-none focus:shadow-md"
                                                        href="/exemplo-relatorio"
                                                    >
                                                        <div className="mt-4 mb-2 text-lg font-medium text-white">
                                                            Exemplo Completo
                                                        </div>
                                                        <p className="text-sm leading-tight text-white/90">
                                                            Veja um exemplo pronto de relatório, checklist de planejamento e documento final para inspirar seu projeto.
                                                        </p>
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <ListItem href="/guia" title="Guia Completo" icon={<FileText className="h-4 w-4 mr-2 text-orange-500" />}>
                                                Acesse o guia passo a passo para desenvolver seu projeto de extensão.
                                            </ListItem>
                                            <ListItem href="/guia#mapa-mental" title="Mapa Mental" icon={<Lightbulb className="h-4 w-4 mr-2 text-orange-500" />}>
                                                Conheça o processo de ideação para transformar ideias em soluções tecnológicas.
                                            </ListItem>
                                            <ListItem href="/guia#trilha" title="Trilha de Desenvolvimento" icon={<Navigation className="h-4 w-4 mr-2 text-orange-500" />}>
                                                Passo a passo detalhado para desenvolvimento do seu projeto.
                                            </ListItem>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/exemplo-relatorio" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent px-4",
                                            isActive("/exemplo-relatorio") && "bg-accent text-accent-foreground"
                                        )}>
                                            <ClipboardList className="h-4 w-4 mr-2" />
                                            Exemplo Completo
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="/guia" legacyBehavior passHref>
                                        <NavigationMenuLink className={cn(
                                            navigationMenuTriggerStyle(),
                                            "bg-transparent px-4",
                                            isActive("/guia") && "bg-accent text-accent-foreground"
                                        )}>
                                            <Sparkles className="h-4 w-4 mr-2" />
                                            Começar Agora
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>

                        <div className="flex items-center gap-4 pl-2">
                            <Button
                                variant="outline"
                                size="sm"
                                asChild
                                className="hidden md:flex items-center gap-2"
                            >
                                <Link href="https://github.com/mviniciusca/projeto-extensao" target="_blank" rel="noopener noreferrer">
                                    <Github className="h-4 w-4" />
                                    <span>GitHub</span>
                                </Link>
                            </Button>
                            <ModeToggle />
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center gap-4">
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="md:hidden">
                                    <Menu className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                                <div className="flex flex-col gap-6 py-2">
                                    <div className="flex items-center justify-between">
                                        <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                                            <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-br from-orange-400 to-amber-600 text-white">
                                                <Notebook className="h-4 w-4" />
                                            </div>
                                            <span className="text-sm font-semibold">Projeto de Extensão</span>
                                        </Link>
                                    </div>

                                    <div className="space-y-1">
                                        <Link
                                            href="/exemplo-relatorio"
                                            className={cn(
                                                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                                isActive("/exemplo-relatorio")
                                                    ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                                                    : "text-zinc-600 dark:text-zinc-400"
                                            )}
                                        >
                                            <ClipboardList className="h-4 w-4" />
                                            Exemplo Completo
                                        </Link>
                                        <Link
                                            href="/guia"
                                            className={cn(
                                                "flex items-center gap-2 px-3 py-2 text-sm font-medium rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                                isActive("/guia")
                                                    ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                                                    : "text-zinc-600 dark:text-zinc-400"
                                            )}
                                        >
                                            <Sparkles className="h-4 w-4" />
                                            Começar Agora
                                        </Link>
                                    </div>

                                    <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                                        <div className="text-sm font-medium mb-2 text-zinc-900 dark:text-zinc-100">Recursos</div>
                                        <div className="grid gap-1">
                                            {items.map((item) => {
                                                const Icon = item.icon
                                                return (
                                                    <Link
                                                        key={item.href}
                                                        href={item.href}
                                                        className={cn(
                                                            "flex items-center gap-2 px-3 py-2 text-sm rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800",
                                                            pathname === item.href
                                                                ? "text-zinc-900 bg-zinc-100 dark:text-white dark:bg-zinc-800"
                                                                : "text-zinc-600 dark:text-zinc-400"
                                                        )}
                                                    >
                                                        <Icon className="h-4 w-4" />
                                                        {item.title}
                                                    </Link>
                                                )
                                            })}
                                        </div>
                                    </div>

                                    <div className="border-t pt-4 border-zinc-200 dark:border-zinc-800">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="w-full justify-center"
                                        >
                                            <Link href="https://github.com/mviniciusca/projeto-extensao" target="_blank" rel="noopener noreferrer">
                                                <Github className="h-3.5 w-3.5 mr-2" />
                                                <span>GitHub</span>
                                            </Link>
                                        </Button>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </header>
    )
}

interface ListItemProps {
    title: string
    href: string
    children: React.ReactNode
    icon?: React.ReactNode
}

const ListItem = ({ title, href, children, icon }: ListItemProps) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link
                    href={href}
                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                >
                    <div className="flex items-center text-sm font-medium">
                        {icon}
                        {title}
                    </div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}
