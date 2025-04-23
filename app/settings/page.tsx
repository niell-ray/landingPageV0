import Link from "next/link"
import { ArrowLeft, ChevronRight, CreditCard, LogOut, Shield, User, Wallet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MobileNav } from "@/components/mobile-nav"

export default function SettingsPage() {
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
          <h1 className="text-xl font-bold">Settings</h1>
        </div>
      </header>

      <main className="flex-1 container px-4 py-4 pb-20">
        <div className="grid gap-4">
          <h2 className="text-lg font-semibold">Account</h2>

          <Card className="overflow-hidden">
            <Link href="/settings/profile" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Profile</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>

            <div className="border-t" />

            <Link href="/settings/security" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-3 text-muted-foreground" />
                <span>Security</span>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </Card>

          <h2 className="text-lg font-semibold mt-4">Connected Accounts</h2>

          <Card className="overflow-hidden">
            <Link href="/settings/upi" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center">
                <Wallet className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <div>UPI Apps</div>
                  <div className="text-xs text-muted-foreground">Google Pay, PhonePe, Paytm, BHIM</div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>

            <div className="border-t" />

            <Link href="/settings/cards" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <div className="flex items-center">
                <CreditCard className="h-5 w-5 mr-3 text-muted-foreground" />
                <div>
                  <div>Cards & Bank Accounts</div>
                  <div className="text-xs text-muted-foreground">Credit/Debit Cards, Net Banking</div>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>
          </Card>

          <h2 className="text-lg font-semibold mt-4">App Settings</h2>

          <Card className="overflow-hidden">
            <Link href="/settings/notifications" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <span>Notifications</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>

            <div className="border-t" />

            <Link href="/settings/appearance" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <span>Appearance</span>
              <ChevronRight className="h-5 w-5 text-muted-foreground" />
            </Link>

            <div className="border-t" />

            <Link href="/settings/currency" className="flex items-center justify-between p-4 hover:bg-muted/50">
              <span>Currency</span>
              <div className="flex items-center text-muted-foreground">
                <span>INR (₹)</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </div>
            </Link>
          </Card>

          <Button variant="destructive" className="mt-4">
            <LogOut className="h-4 w-4 mr-2" />
            Sign Out
          </Button>
        </div>
      </main>

      <MobileNav />
    </div>
  )
}
