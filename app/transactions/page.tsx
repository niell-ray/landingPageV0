import Link from "next/link"
import { ArrowLeft, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { TransactionList } from "@/components/transaction-list"
import { MobileNav } from "@/components/mobile-nav"

export default function TransactionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center h-14 px-4">
          <Link href="/">
            <Button variant="ghost" size="icon" className="mr-2">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back</span>
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Transactions</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-4 pb-20">
        <div className="grid gap-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search transactions..." className="pl-8" />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filter</span>
            </Button>
          </div>

          <div className="grid gap-2">
            <div className="text-sm font-medium text-muted-foreground">Today</div>
            <TransactionList date="today" />

            <div className="text-sm font-medium text-muted-foreground mt-4">Yesterday</div>
            <TransactionList date="yesterday" />

            <div className="text-sm font-medium text-muted-foreground mt-4">This Week</div>
            <TransactionList date="this-week" />
          </div>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
