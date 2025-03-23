"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function SubscriptionDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const router = useRouter()
  
  React.useEffect(() => {
    if (open) {
      router.push('/subscribe')
      onOpenChange(false)
    }
  }, [open, router, onOpenChange])

  // This component now just redirects to the subscription page
  return null
}

