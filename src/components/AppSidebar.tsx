import { GalleryVerticalEnd, LayoutDashboard, UserRound } from "lucide-react"
import { SidebarHeader, SidebarMenu, SidebarMenuItem, SidebarMenuButton, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarFooter, Sidebar } from "./ui/sidebar";
import { Link } from "react-router-dom";

const AppSidebar = () => {
    const navItems = [
        {
            name: "Dashboard",
            url: "/user-dashboard",
            icon: LayoutDashboard
        },
        {
            name: "User Management",
            url: "/user-dashboard/profile",
            icon: UserRound
        }
    ]
    return (
        <div>
            <Sidebar variant="sidebar" collapsible="icon">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" className="bg-sidebar-accent text-sidebar-accent-foreground">
                            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                <GalleryVerticalEnd className="size-4" />
                            </div>
                            <Link to="/">Leep</Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel><h1  className="text-3xl">User Dashboard</h1></SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu className="bg-slate-600">
                            {navItems.map((navItem) => (
                                <SidebarMenuItem key={navItem.name}>
                                    <SidebarMenuButton asChild>
                                        <Link to={navItem.url}><navItem.icon /> {navItem.name}</Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
                </SidebarContent>
                <SidebarFooter />
            </Sidebar>
        </div>
    );
};

export default AppSidebar;