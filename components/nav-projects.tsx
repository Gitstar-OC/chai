'use client'

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
                {state === "collapsed" ? (
                  <Link
                    href={item.url}
                    className={cn(
                      "relative overflow-hidden flex items-center justify-center h-12 w-12 mx-auto rounded-md transition-colors mt-2",
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
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="flex items-center justify-center relative z-10">
                            <item.icon
                              size={24}
                              strokeWidth={1.5}
                              aria-hidden="true"
                            />
                          </div>
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
                  </Link>
                ) : (
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
                      className="flex-shrink-0 flex items-center justify-center relative z-10"
                      style={{ minWidth: "24px", minHeight: "24px" }}
                    >
                      <item.icon size={24} strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="md:text-lg md:mt-2 md:mb-2 relative z-10">{item.name}</span>
                  </Link>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        })}
      </SidebarMenu>
    </SidebarGroup>
  )
}