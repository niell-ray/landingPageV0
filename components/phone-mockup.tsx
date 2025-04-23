import type React from "react"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  children: React.ReactNode
  className?: string
}

export function PhoneMockup({ children, className }: PhoneMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto h-[600px] w-[300px] rounded-[3rem] border-[14px] border-black bg-white shadow-xl",
        className,
      )}
    >
      <div className="absolute left-1/2 top-0 z-10 h-6 w-24 -translate-x-1/2 rounded-b-lg bg-black"></div>
      <div className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden rounded-[2.3rem]">
        <div className="h-full w-full overflow-auto">{children}</div>
      </div>
    </div>
  )
}
