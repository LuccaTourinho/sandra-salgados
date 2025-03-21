import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[40px] rounded-md border border-background-50 focus:border-text-950 font-light bg-secondary-600 focus:bg-secondary-300 px-4 py-5 text-base text-text-50 focus:text-text-950 placeholder:text-text-50/60 focus:placeholder:text-text-950/60 outline-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
