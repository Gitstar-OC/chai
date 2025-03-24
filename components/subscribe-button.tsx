"use client"

import { useRouter } from "next/navigation"
import { HiOutlineGift } from "react-icons/hi"
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"

export function SubscribeButton() {
  const router = useRouter()

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          className="relative overflow-hidden data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground shadow-[inset_0_2px_10px_rgba(168,85,247,0.35)] transition-shadow duration-300"
          onClick={() => router.push("/subscribe")}
        >
          <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pointer-events-none transition-opacity duration-300" />

          <HiOutlineGift className="h-4 w-4 mr-2 relative z-10" />
          <span className="flex-1 text-left text-sm relative z-10">Subscribe</span>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}