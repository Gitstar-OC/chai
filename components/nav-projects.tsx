import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function NavProjects({
  projects,
}: {
  projects: {
    name: string;
    url: string;
    icon: LucideIcon;
  }[];
}) {
  const { state } = useSidebar();

  return (
    <SidebarGroup className="dark:hover:bg-none">
      <SidebarMenu className="dark:hover:none">
        {projects.map((item) => (
          <SidebarMenuItem className="dark:hover:bg-none" key={item.name}>
            <SidebarMenuButton asChild>
              <Link
                href={item.url}
                className="flex items-center gap-3 mt-2 md:gap-5 rounded-md transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-800 px-3 py-2"
              >

                <div
                  className="flex-shrink-0 flex dark:hover:bg-none items-center justify-center"
                  style={{ minWidth: "24px", minHeight: "24px" }}
                >
                  {state === "collapsed" ? (
                    <TooltipProvider delayDuration={0}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <item.icon
                            className="w-full dark:hover:bg-none  h-full pr-4 "
                            size={24}
                            strokeWidth={1.5}
                            aria-hidden="true"
                          />
                        </TooltipTrigger>
                        <TooltipContent side="right" align="center" showArrow className="dark:border-neutral-500 border-neutral-400 text-base" >
                          <p>{item.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ) : (
                    <item.icon
                      className="w-full h-full"
                      size={24}
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <span className="md:text-lg md:mt-2 md:mb-2">{item.name}</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
