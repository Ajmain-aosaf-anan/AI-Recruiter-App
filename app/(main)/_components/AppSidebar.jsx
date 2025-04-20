"use client";
import Image from "next/image";
import { usePathname } from "next/navigation"; // Import usePathname
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import { SidebarOptions } from "@/services/Constants";

export function AppSidebar() {
  const pathname = usePathname(); // Get current URL path

  return (
    <Sidebar>
      <SidebarHeader className="flex items-center">
        <Image
          src="/logo/Artificial voice-Photoroom.jpg"
          alt="logo"
          width={600}
          height={100}
          className="w-auto h-auto"
          layout="intrinsic"
        />
        <Button className="w-full mt-3 flex items-center">
          <Plus className="mr-2" /> Create New Interview
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {SidebarOptions.map((option, index) => {
              // Check if the current path matches or starts with the option's path
              const isActive = pathname === option.path || pathname.startsWith(option.path);

              return (
                <SidebarMenuItem
                  key={index}
                  className={`flex items-center p-2 ${
                    isActive
                      ? "bg-cyan-200 text-blue-700 shadow-md rounded-md"
                      : "text-gray-700 hover:bg-cyan-200"
                  }`}
                >
                  <SidebarMenuButton asChild>
                    <Link href={option.path} className="flex items-center w-full">
                      <option.icon
                        className={`mr-3 ${isActive ? "text-green-600" : "text-teal-800"}`}
                      />
                      <span
                        className={`text-base font-semibold ${
                          isActive ? "text-blue-800" : "text-cyan-700"
                        }`}
                      >
                        {option.name}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}