"use client"

import { SidebarGroup, SidebarMenu, SidebarMenuItem, SidebarMenuButton, useSidebar } from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import type { LucideIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

export function NavProjects({
  projects,
}: {
  projects: {
    name: string
    url: string
    icon: LucideIcon
  }[]
}) {
  const { state } = useSidebar()
  const pathname = usePathname()

  return (
    <SidebarGroup className="dark:hover:bg-none">
      <SidebarMenu className="dark:hover:none">
        {projects.map((item) => {
          const isActive = pathname === item.url || pathname.startsWith(`${item.url}/`)

          return (
            <SidebarMenuItem className="dark:hover:bg-none" key={item.name}>
              <SidebarMenuButton asChild>
                <Link
                  href={item.url}
                  className={cn(
                    "relative overflow-hidden flex items-center gap-3 mt-2 md:gap-5 rounded-md transition-colors px-3 py-2",
                    isActive
                      ? "bg-sidebar-accent text-sidebar-accent-foreground shadow-[inset_0_2px_10px_rgba(168,85,247,0.35)]"
                      : "hover:bg-neutral-200 dark:hover:bg-neutral-800",
                  )}
                >
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 pointer-events-none transition-opacity duration-300",
                      isActive ? "opacity-[0.025]" : "opacity-0",
                    )}
                  />

                  <div
                    className="flex-shrink-0 flex dark:hover:bg-none items-center justify-center relative z-10"
                    style={{ minWidth: "24px", minHeight: "24px" }}
                  >
                    {state === "collapsed" ? (
                      <TooltipProvider delayDuration={0}>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <item.icon
                              className="w-full dark:hover:bg-none h-full pr-4"
                              size={24}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </TooltipTrigger>
                          <TooltipContent
                            side="right"
                            align="center"
                            showArrow
                            className="dark:border-neutral-500 border-neutral-400 text-base"
                          >
                            <p>{item.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ) : (
                      <item.icon className="w-full h-full" size={24} strokeWidth={1.5} aria-hidden="true" />
                    )}
                  </div>
                  <span className="md:text-lg md:mt-2 md:mb-2 relative z-10">{item.name}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}

