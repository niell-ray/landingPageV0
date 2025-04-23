"use client"

import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { month: "Jan", income: 45000, expense: 24500 },
  { month: "Feb", income: 45000, expense: 28900 },
  { month: "Mar", income: 57500, expense: 27300 },
  { month: "Apr", income: 45000, expense: 29800 },
  { month: "May", income: 45000, expense: 32100 },
  { month: "Jun", income: 62500, expense: 34560 },
]

export function IncomeVsExpense() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="month" axisLine={false} tickLine={false} tickMargin={8} />
          <YAxis axisLine={false} tickLine={false} tickFormatter={(value) => `₹${value / 1000}k`} tickMargin={8} />
          <Tooltip formatter={(value: number) => [`₹${value}`, "Amount"]} labelFormatter={(name) => `${name}`} />
          <Legend />
          <Bar dataKey="income" name="Income" fill="hsl(var(--success))" radius={[4, 4, 0, 0]} />
          <Bar dataKey="expense" name="Expense" fill="hsl(var(--destructive))" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
