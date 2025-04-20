import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import { AppSidebar } from "./_components/AppSidebar";
import DashboardProvider from "./provider";

function DashboardLayout({ children }) {
    return (
        <div className="bg-secondary w-full">
            <DashboardProvider>
            <div className="p-10 w-full">
                {children}
            </div>
            </DashboardProvider>
        </div>
    )
}

export default DashboardLayout