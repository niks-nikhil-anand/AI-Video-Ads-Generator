import { LucideIcon } from "lucide-react"

export interface NavItem {
  title: string
  url: string
  icon: LucideIcon
  badge?: string
  isPremium?: boolean
  isActive?: boolean
}

export interface SidebarProps {
  className?: string
  children?: React.ReactNode
}

export interface AppSidebarProps extends SidebarProps {
  onNavigate?: (url: string) => void
}

export type NavigationSection = {
  title?: string
  items: NavItem[]
}
