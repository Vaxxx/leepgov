import { NavProps } from '@/lib/types'; 
import { Link, useLocation } from 'react-router-dom';
import LeepLogo from '../assets/leep-logo.svg';
import { useState } from 'react';
import { Button } from './ui/button';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@radix-ui/react-hover-card';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { cn } from '@/lib/utils';

const LeepNav = () => {
    // const [tab, selectedTab] = useState<string | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const toggleNavClick = function () {
        setOpen(!open);
    }

    const navLinks: NavProps[] = [
        {
            id: "1",
            name: "Home",
            path: "/"
        },
        {
            id: "2",
            name: "About",
            path: "/about"
        },
        {
            id: "3",
            name: "Programs",
            path: "#"
        },
        
        // {
        //     id: "4",
        //     name: "Log In",
        //     path: "/login"
        // },

    ]

    const location = useLocation();
    return (
        <nav className="relative ">
        <div className="flex items-center justify-between">
            <ul className="nav-left md:basis-1/3">
                <li><Link to="/"><img src={LeepLogo} alt="Leep Logo " /></Link></li>
            </ul>
            <ul className="nav-right">
                <Button className="cursor-pointer lg:hidden text-white" variant="ghost" size="icon"  onClick={toggleNavClick}>
                    {!open ? <RxHamburgerMenu className="hamburger-menu" /> : <IoClose />}
                </Button>
                <ul className="nav-right hidden md:flex lg:justify-end lg:gap-8 lg:basis-2/3 lg:flex-grow lg:items-center">
                    {navLinks.map((navLink) => navLink.name !== 'Programs' ? (
                        <li key={navLink.id}><Link to={navLink.path}
                            className={location.pathname === navLink.path ? 'active:text-green-500 visited:text-green-500' : ''} aria-current={location.pathname === navLink.path}>{navLink.name}</Link></li>
                    ) : <li key={navLink.name}>
                        <HoverCard>
                            <HoverCardTrigger style={{ color: "#fff" }} className={location.pathname === navLink.path ? 'active:text-green-500 visited:text-green-500' : ''} aria-current={location.pathname === navLink.path}>Programs</HoverCardTrigger>
                            <HoverCardContent className="p-4" style={{ backgroundColor: "hsla(0, 0%, 100%, 1)", border: "0.2px solid hsla(0, 0%, 79%, 1)", boxShadow: "0px 20px 40px 0px hsla(0, 0%, 0%, 0.1)" }}>
                                <ul className="h-48 flex flex-col justify-between">
                                    <li><Link to="/work" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Digital Nomads</Link></li>
                                    <li><Link to="/nelex" style={{ color: "hsla(0, 0%, 12%, 1)" }}>NELEX</Link></li>
                                    <li><Link to="/vep" style={{ color: "hsla(0, 0%, 12%, 1)" }}>VEP</Link></li>
                                    <li><Link to="/fairs" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Job Fairs</Link></li>
                                    <li><Link to="/learning" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Center for Learning Spaces</Link></li>
                                </ul>
                            </HoverCardContent>
                        </HoverCard>
                    </li>)}
                    <li className="p-4 lg:rounded-md" style={{ backgroundColor: "#009444" }}>
                        <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                    </li>
                </ul>
            </ul>
        </div>
        <ul className={`absolute right-0 bg-white flex p-4 w-52 min-h-14 ${open ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
            {open ? <ul className="md:hidden flex flex-col gap-8">
                {navLinks.map((navLink) => navLink.name != 'Programs' ? (
                    <li key={navLink.id}><Link to={navLink.path}
                        className={cn("text-black font-medium text-xl", location.pathname === navLink.path ? 'active:text-green-500 visited:text-green-500' : '')} aria-current={location.pathname === navLink.path}>{navLink.name}</Link></li>
                ): <li key={navLink.name}>
                <DropdownMenu>
                            <DropdownMenuTrigger style={{ color: "#000", fontSize: "20px" }} className={location.pathname === navLink.path ? 'active:text-green-500 visited:text-green-500' : ''} aria-current={location.pathname === navLink.path}>Programs</DropdownMenuTrigger>
                            <DropdownMenuContent className="p-4" style={{ backgroundColor: "hsla(0, 0%, 100%, 1)", border: "0.2px solid hsla(0, 0%, 79%, 1)", boxShadow: "0px 20px 40px 0px hsla(0, 0%, 0%, 0.1)" }}>
                                <ul className="h-48 flex flex-col justify-between">
                                    <DropdownMenuItem><Link to="/work" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Digital Nomads</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link to="/nelex" style={{ color: "hsla(0, 0%, 12%, 1)" }}>NELEX</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link to="/vep" style={{ color: "hsla(0, 0%, 12%, 1)" }}>VEP</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link to="/fairs" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Job Fairs</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link to="/learning" style={{ color: "hsla(0, 0%, 12%, 1)" }}>Center for Learning Spaces</Link></DropdownMenuItem>
                                </ul>
                            </DropdownMenuContent>
                        </DropdownMenu>
            </li>)}
                <li className="p-4 rounded-md" style={{ backgroundColor: "#009444" }}>
                    <Link to="/join" className="font-bold" style={{ letterSpacing: "2%" }}>Take the Leep</Link>
                </li>
            </ul> : ""}
        </ul>
    </nav>
    );
};

export default LeepNav;