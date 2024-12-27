 
import AppSidebar from "@/components/AppSidebar";
import DashboardHeader from "@/components/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar"
const UserLayout = ({
    children,
  }: {
    children: React.ReactNode
  }) => {
    return (
        <>
           <div suppressHydrationWarning>
            
          <div>
          
            <SidebarProvider>
                <AppSidebar />
                <div className="w-full">
                    <DashboardHeader />
                        {children}
                 </div>
            </SidebarProvider>
           </div>
        </div>   
        </>
    );
};

export default UserLayout;