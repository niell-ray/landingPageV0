import { Coffee, CreditCard, ShoppingBag, Smartphone, Utensils, Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface TransactionListProps {
  date?: "today" | "yesterday" | "this-week"
  limit?: number
  upiOnly?: boolean
}

export function TransactionList({ date, limit, upiOnly = false }: TransactionListProps) {
  // Mock transaction data
  const transactions = [
    {
      id: 1,
      name: "Starbucks",
      category: "Food & Dining",
      amount: -280,
      date: "today",
      icon: Coffee,
      color: "bg-green-100 text-green-600",
      source: "Google Pay",
      isUpi: true,
    },
    {
      id: 2,
      name: "Amazon",
      category: "Shopping",
      amount: -1499,
      date: "today",
      icon: ShoppingBag,
      color: "bg-orange-100 text-orange-600",
      source: "Credit Card",
      isUpi: false,
    },
    {
      id: 3,
      name: "Uber",
      category: "Transportation",
      amount: -350,
      date: "yesterday",
      icon: Smartphone,
      color: "bg-black bg-opacity-10 text-black",
      source: "Paytm",
      isUpi: true,
    },
    {
      id: 4,
      name: "PVR Cinemas",
      category: "Entertainment",
      amount: -500,
      date: "yesterday",
      icon: Wallet,
      color: "bg-purple-100 text-purple-600",
      source: "PhonePe",
      isUpi: true,
    },
    {
      id: 5,
      name: "Domino's Pizza",
      category: "Food & Dining",
      amount: -650,
      date: "this-week",
      icon: Utensils,
      color: "bg-red-100 text-red-600",
      source: "BHIM UPI",
      isUpi: true,
    },
    {
      id: 6,
      name: "Salary",
      category: "Income",
      amount: 45000,
      date: "this-week",
      icon: CreditCard,
      color: "bg-blue-100 text-blue-600",
      source: "Bank Transfer",
      isUpi: false,
    },
    {
      id: 7,
      name: "BigBasket",
      category: "Groceries",
      amount: -1250,
      date: "today",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-600",
      source: "Google Pay",
      isUpi: true,
    },
    {
      id: 8,
      name: "Zomato",
      category: "Food & Dining",
      amount: -450,
      date: "today",
      icon: Utensils,
      color: "bg-red-100 text-red-600",
      source: "PhonePe",
      isUpi: true,
    },
  ]

  // Filter transactions by date if provided
  let filteredTransactions = date ? transactions.filter((t) => t.date === date) : transactions

  // Filter by UPI only if requested
  if (upiOnly) {
    filteredTransactions = filteredTransactions.filter((t) => t.isUpi)
  }

  // Limit the number of transactions if limit is provided
  const displayedTransactions = limit ? filteredTransactions.slice(0, limit) : filteredTransactions

  return (
    <div className="space-y-3">
      {displayedTransactions.map((transaction) => (
        <Card key={transaction.id} className="p-3">
          <div className="flex items-center">
            <div className={cn("p-2 rounded-full mr-3", transaction.color)}>
              <transaction.icon className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <div className="font-medium">{transaction.name}</div>
              <div className="text-xs text-muted-foreground flex items-center">
                <span>{transaction.category}</span>
                <span className="mx-1">•</span>
                <span>{transaction.source}</span>
              </div>
            </div>

            <div className={cn("font-medium", transaction.amount > 0 ? "text-green-600" : "")}>
              {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
