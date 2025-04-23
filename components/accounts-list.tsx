import { CreditCard, Landmark, Wallet } from "lucide-react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function AccountsList() {
  // Mock accounts data
  const accounts = [
    {
      id: 1,
      name: "HDFC Bank",
      type: "Savings Account",
      balance: 24500,
      icon: Landmark,
      color: "bg-red-100 text-red-600",
      lastFour: "4582",
    },
    {
      id: 2,
      name: "ICICI Credit Card",
      type: "Credit Card",
      balance: 8750,
      icon: CreditCard,
      color: "bg-blue-100 text-blue-600",
      lastFour: "7291",
    },
    {
      id: 3,
      name: "SBI Bank",
      type: "Savings Account",
      balance: 9317.89,
      icon: Landmark,
      color: "bg-blue-100 text-blue-600",
      lastFour: "1234",
    },
    {
      id: 4,
      name: "Google Pay",
      type: "UPI Wallet",
      balance: 0,
      icon: Wallet,
      color: "bg-green-100 text-green-600",
      lastFour: null,
    },
    {
      id: 5,
      name: "Paytm",
      type: "UPI Wallet",
      balance: 0,
      icon: Wallet,
      color: "bg-blue-100 text-blue-600",
      lastFour: null,
    },
  ]

  return (
    <div className="space-y-3">
      {accounts.map((account) => (
        <Card key={account.id} className="p-3">
          <div className="flex items-center">
            <div className={cn("p-2 rounded-full mr-3", account.color)}>
              <account.icon className="h-5 w-5" />
            </div>

            <div className="flex-1">
              <div className="font-medium">{account.name}</div>
              <div className="text-xs text-muted-foreground">
                {account.type}
                {account.lastFour && <span> •••• {account.lastFour}</span>}
              </div>
            </div>

            <div className="font-medium">₹{account.balance.toLocaleString()}</div>
          </div>
        </Card>
      ))}
    </div>
  )
}
