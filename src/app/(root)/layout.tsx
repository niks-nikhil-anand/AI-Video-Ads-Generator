import AppSidebar from "@/components/shared/app-sidebar";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";

const HomeLayout = ({ children }: { children: ReactNode }) => {
 

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <AppSidebar  />
        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b bg-background px-4 lg:px-6">
            <SidebarTrigger className="-ml-1" />
            <div className="w-full flex-1">
              <h1 className="text-lg font-semibold">CreativeX AI Dashboard</h1>
            </div>
          </header>
          <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default HomeLayout;
