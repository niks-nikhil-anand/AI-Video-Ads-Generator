"use client";

import React from "react";
import {
  Home,
  Palette,
  ImageIcon,
  Crown,
  User,
  LogOut,
  LogIn,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { AppSidebarProps, NavItem } from "@/lib/types";

const navigationItems: NavItem[] = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Creative tools",
    url: "/creative-tools",
    icon: Palette,
  },
  {
    title: "My ads",
    url: "/my-ads",
    icon: ImageIcon,
    badge: "3",
  },
  {
    title: "Upgrade",
    url: "/upgrade",
    icon: Crown,
    isPremium: true,
  },
  {
    title: "Profile",
    url: "/profile",
    icon: User,
  },
];

interface SidebarHeaderProps {
  className?: string;
}

const SidebarHeaderComponent: React.FC<SidebarHeaderProps> = ({
  className,
}) => (
  <SidebarHeader className={cn("p-6 border-b", className)}>
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
        <span className="text-white font-bold text-base">CX</span>
      </div>
      <div className="flex flex-col">
        <span className="font-bold text-lg">CreativeX AI</span>
        <span className="text-xs text-muted-foreground">
          Create Amazing Content
        </span>
      </div>
    </div>
  </SidebarHeader>
);

interface NavigationItemProps {
  item: NavItem;
  isActive: boolean;
  onClick: (url: string) => void;
}

const NavigationItem: React.FC<NavigationItemProps> = ({
  item,
  isActive,
  onClick,
}) => (
  <SidebarMenuItem>
    <SidebarMenuButton
      asChild
      isActive={isActive}
      className={cn(
        "h-11 px-3 rounded-lg transition-all duration-200 ease-in-out",
        // Active state styling
        isActive
          ? "bg-primary/10 text-primary border-l-4 border-primary shadow-sm"
          : "text-muted-foreground hover:text-foreground",
        // Hover state styling
        !isActive &&
          "hover:bg-accent hover:text-accent-foreground hover:shadow-sm hover:scale-[1.02]"
      )}
    >
      <button
        onClick={() => onClick(item.url)}
        className="flex items-center gap-3 group w-full text-left"
      >
        <item.icon
          className={cn(
            "h-5 w-5 transition-all duration-200",
            isActive
              ? "text-primary drop-shadow-sm"
              : "text-muted-foreground group-hover:text-accent-foreground group-hover:scale-110"
          )}
        />
        <span
          className={cn(
            "font-medium flex-1 transition-colors duration-200",
            isActive
              ? "text-primary font-semibold"
              : "text-muted-foreground group-hover:text-accent-foreground"
          )}
        >
          {item.title}
        </span>
        {item.badge && (
          <span
            className={cn(
              "ml-auto text-xs font-medium px-2 py-1 rounded-full transition-all duration-200",
              isActive
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground group-hover:bg-accent group-hover:text-accent-foreground"
            )}
          >
            {item.badge}
          </span>
        )}
        {item.isPremium && (
          <Crown
            className={cn(
              "h-4 w-4 ml-auto transition-all duration-200",
              isActive
                ? "text-yellow-600 drop-shadow-sm"
                : "text-yellow-500 group-hover:text-yellow-600 group-hover:scale-110"
            )}
          />
        )}
      </button>
    </SidebarMenuButton>
  </SidebarMenuItem>
);

interface SidebarFooterProps {
  onLogout: () => void;
  onSignIn: () => void;
  isAuthenticated: boolean;
  className?: string;
}

const SidebarFooterComponent: React.FC<SidebarFooterProps> = ({
  onLogout,
  onSignIn,
  isAuthenticated,
  className,
}) => (
  <SidebarFooter className={`p-4 border-t ${className || ''}`}>
    <SidebarMenu>
      {isAuthenticated ? (
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="h-11 px-3">
            <button
              onClick={onLogout}
              className="flex items-center gap-3 group w-full text-left rounded-lg transition-all duration-200 ease-in-out text-red-600 hover:text-red-700 hover:bg-red-50 hover:shadow-sm hover:scale-[1.02] dark:hover:bg-red-950/20 dark:hover:text-red-400"
            >
              <LogOut className="h-5 w-5 transition-all duration-200 group-hover:scale-110" />
              <span className="font-medium transition-colors duration-200">
                Logout
              </span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ) : (
        <SidebarMenuItem>
          <SidebarMenuButton asChild className="h-11 px-3">
            <button
              onClick={onSignIn}
              className="flex items-center gap-3 group w-full text-left rounded-lg transition-all duration-200 ease-in-out bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:scale-[1.02] cursor-pointer dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <LogIn className="h-5 w-5 transition-all duration-200 group-hover:scale-110" />
              <span className="font-medium transition-colors duration-200">
                Sign In
              </span>
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
      )}
    </SidebarMenu>
  </SidebarFooter>
);



export const AppSidebar: React.FC<AppSidebarProps> = ({
  className,
  onNavigate,
}) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = React.useCallback(
    (url: string): void => {
      if (onNavigate) {
        onNavigate(url);
      } else {
        router.push(url);
      }
    },
    [onNavigate, router]
  );

  const handleLogout = React.useCallback((): void => {
    // Add your logout logic here
    console.log("Logging out...");
    // Example: Clear tokens, redirect to login, etc.
    router.push("/login");
  }, [router]);

  function handleSignIn(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <Sidebar
      className={cn(
        "border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
        className
      )}
    >
      <SidebarHeaderComponent />

      <SidebarContent className="px-4 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.url;
                return (
                  <NavigationItem
                    key={item.title}
                    item={item}
                    isActive={isActive}
                    onClick={handleNavigation}
                  />
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooterComponent
        onLogout={handleLogout}
        onSignIn={handleSignIn} // This was missing
        isAuthenticated={false}
      />
    </Sidebar>
  );
};

export default AppSidebar;
