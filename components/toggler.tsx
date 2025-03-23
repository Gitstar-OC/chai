"use client"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function Toggler() {
  const { state } = useSidebar();
  return (
    <div className="fixed top-4 md:left-24 sm:left-4 left-2 flex shrink-0 items-center gap-2 z-50 bg-transparent">
      {state === "collapsed" && <SidebarTrigger className="w-10 h-10" />}
      {state === "expanded" && (
        <SidebarTrigger className="w-10 h-10 md:hidden" />
      )}
    </div>
  );
}