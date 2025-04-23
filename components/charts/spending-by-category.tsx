"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const data = [
  { name: "Food & Dining", value: 12450, color: "#10b981" },
  { name: "Shopping", value: 8320, color: "#f59e0b" },
  { name: "Transportation", value: 5670, color: "#3b82f6" },
  { name: "Entertainment", value: 4230, color: '#8b  value: 5670, color: "#3b82f6' },
  { name: "Entertainment", value: 4230, color: "#8b5cf6" },
  { name: "Utilities", value: 3890, color: "#ec4899" },
]

export function SpendingByCategory() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => [`₹${value}`, "Amount"]} labelFormatter={(name) => `${name}`} />
        </PieChart>
      </ResponsiveContainer>
      <div className="grid grid-cols-2 gap-2 mt-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center text-xs">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
