"use client"

import { useRouter } from "next/navigation"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { items, type NavItem } from "./sidebar-nav"

export function MobileNav() {
  const router = useRouter()

  return (
    <div className="md:hidden w-full px-4 py-4">
      <Select
        onValueChange={(value) => router.push(value)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Navegue pelo conteúdo" />
        </SelectTrigger>
        <SelectContent>
          {items.map((item: NavItem) => {
            const Icon = item.icon
            return (
              <SelectItem key={item.href} value={item.href}>
                <div className="flex items-center gap-2">
                  <Icon className="h-4 w-4" />
                  <span>{item.title}</span>
                </div>
              </SelectItem>
            )
          })}
        </SelectContent>
      </Select>
    </div>
  )
}