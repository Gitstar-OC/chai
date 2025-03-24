"use client";

import type * as React from "react";
import {
  Home,
  Search,
  Plus,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";
import { NavProjects } from "./nav-projects";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  useSidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { FeedbackPopover } from "./feedback-popover";
import { SubscribeButton } from "./subscribe-button";
import Link from "next/link";

const data = {
  user: {
    name: "OC",
    email: "oc@iamoc.me",
    avatar: "https://github.com/gitstar-oc.png",
  },
  projects: [
    { name: "Home", url: "/", icon: Home },
    {
      name: "Search",
      url: "/search",
      icon: Search,
    },
    {
      name: "Create ",
      url: "/create",
      icon: Plus,
    },
    {
      name: "Chats",
      url: "/chat",
      icon: MessageCircle,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();

  return (
    <Sidebar variant="inset" collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex items-center w-full relative">

            <div className="w-[40px] h-[40px] flex-shrink-0">
              <Link href="/">
                <Image
                  src="https://www.chai-research.com/images/chai-logo.png"
                  className="invert dark:invert-0"
                  alt="Chai Logo"
                  width={40}
                  height={40}
                  priority
                />
              </Link>
            </div>
            <div className="flex-grow"></div>
            <div className="flex-shrink-0">
              {state === "expanded" && (
                <SidebarTrigger className="w-10 h-10 z-10" />
              )}
              {state === "collapsed" && (
                <SidebarTrigger className="w-10 h-10 z-10 md:hidden" />
              )}
            </div>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <div className="border-t-[1px] mt-4 border-neutral-200 dark:border-neutral-800" />
        <NavProjects projects={data.projects} />
      </SidebarContent>
      <SidebarFooter>
        <SubscribeButton />
        <FeedbackPopover />
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}


