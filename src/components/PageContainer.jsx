import React from 'react'
import { cn } from '../../lib/turtle-ui/utils'

export const PageContainer = ({ className = "", children }) => {
  return (
     <div
      className={cn(
        "h-[calc(100dvh-60px)] p-4 flex flex-col gap-4",
        className
      )}
    >
      {children}
    </div>
  )
}
