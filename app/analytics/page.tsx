import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MobileNav } from "@/components/mobile-nav"
import { SpendingByCategory } from "@/components/charts/spending-by-category"
import { MonthlySpending } from "@/components/charts/monthly-spending"
import { IncomeVsExpense } from "@/components/charts/income-vs-expense"

export default function AnalyticsPage() {
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
          <h1 className="text-xl font-bold">Analytics</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-4 pb-20">
        <Tabs defaultValue="spending" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="spending">Spending</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="savings">Savings</TabsTrigger>
          </TabsList>

          <TabsContent value="spending" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Spending by Category</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <SpendingByCategory />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Monthly Spending</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <MonthlySpending />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Top Spending Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Food & Dining</span>
                      <span>₹12,450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Shopping</span>
                      <span>₹8,320</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Transportation</span>
                      <span>₹5,670</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Entertainment</span>
                      <span>₹4,230</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Utilities</span>
                      <span>₹3,890</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="income" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Income vs Expenses</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <IncomeVsExpense />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Income Sources</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Salary</span>
                      <span>₹45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Freelance</span>
                      <span>₹12,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Investments</span>
                      <span>₹3,200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Other</span>
                      <span>₹1,800</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="savings" className="mt-4">
            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Savings Growth</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="h-[200px] flex items-center justify-center text-muted-foreground">
                    Savings chart will appear here
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Savings Goals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Emergency Fund</span>
                        <span>₹80,000 / ₹100,000</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">New Laptop</span>
                        <span>₹45,000 / ₹70,000</span>
                      </div>
                      <Progress value={64} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">Vacation</span>
                        <span>₹25,000 / ₹120,000</span>
                      </div>
                      <Progress value={21} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <MobileNav />
    </div>
  )
}
