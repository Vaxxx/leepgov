import { ModeToggle } from "./mode-toggle";
import { SidebarTrigger } from "./ui/sidebar";

export default function DashboardNav() {
    return (
        <nav className="flex justify-between items-center">
            <ul className="nav-left">
                <SidebarTrigger />
            </ul>
            <ul className="nav-right">
                <li><ModeToggle /></li>
            </ul>
        </nav>
    )
}