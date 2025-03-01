"use client"
import { SidebarTrigger, useSidebar } from "@/components/ui/sidebar";

export function Toggler() {
  const { state } = useSidebar();
  return (
    <div className="flex shrink-0 items-center gap-2 px-4 mt-2 bg-transparent z-10 absolute">
      {state === "collapsed" && <SidebarTrigger className="w-10 h-10" />}
      {state === "expanded" && (
        <SidebarTrigger className=" w-10 h-10 md:hidden" />
      )}
    </div>
  );
}
