"use client"

import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", amount: 24500 },
  { month: "Feb", amount: 28900 },
  { month: "Mar", amount: 27300 },
  { month: "Apr", amount: 29800 },
  { month: "May", amount: 32100 },
  { month: "Jun", amount: 34560 },
]

export function MonthlySpending() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value / 1000}k`} tickMargin={8} />
          <Tooltip formatter={(value: number) => [`₹${value}`, "Amount"]} labelFormatter={(name) => `${name}`} />
          <Bar dataKey="amount" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
