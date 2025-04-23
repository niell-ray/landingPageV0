"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, PieChart, Plus, CreditCard, Settings } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function MobileNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 bg-background border-t">
      <div className="grid grid-cols-5 h-16">
        <Link href="/" className="flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-10 w-10 rounded-full", pathname === "/" && "bg-primary/10 text-primary")}
          >
            <Home className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Button>
          <span className="text-xs mt-1">Home</span>
        </Link>

        <Link href="/transactions" className="flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-10 w-10 rounded-full", pathname === "/transactions" && "bg-primary/10 text-primary")}
          >
            <CreditCard className="h-5 w-5" />
            <span className="sr-only">Transactions</span>
          </Button>
          <span className="text-xs mt-1">Transactions</span>
        </Link>

        <div className="flex flex-col items-center justify-center">
          <Button size="icon" className="h-12 w-12 rounded-full bg-primary text-primary-foreground">
            <Plus className="h-6 w-6" />
            <span className="sr-only">Add</span>
          </Button>
        </div>

        <Link href="/analytics" className="flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-10 w-10 rounded-full", pathname === "/analytics" && "bg-primary/10 text-primary")}
          >
            <PieChart className="h-5 w-5" />
            <span className="sr-only">Analytics</span>
          </Button>
          <span className="text-xs mt-1">Analytics</span>
        </Link>

        <Link href="/settings" className="flex flex-col items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className={cn("h-10 w-10 rounded-full", pathname === "/settings" && "bg-primary/10 text-primary")}
          >
            <Settings className="h-5 w-5" />
            <span className="sr-only">Settings</span>
          </Button>
          <span className="text-xs mt-1">Settings</span>
        </Link>
      </div>
    </div>
  )
}
