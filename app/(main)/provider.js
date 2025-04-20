// app/(main)/provider.js
"use client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { UserDetailProvider } from "@/context/UserDetailContext";
import { AppSidebar } from "./_components/AppSidebar";

function DashboardProvider({ children }) {
  return (
    <GoogleOAuthProvider clientId="247634043372-h799a74ogcmo1q11gbe8dakdiv0kc7bu.apps.googleusercontent.com">
      <UserDetailProvider>
        <SidebarProvider>
          <AppSidebar />
          <main className=" flex-1 w-full">
            {/* <SidebarTrigger /> */}
            {children}
          </main>
        </SidebarProvider>
      </UserDetailProvider>
    </GoogleOAuthProvider>
  );
}

export default DashboardProvider;