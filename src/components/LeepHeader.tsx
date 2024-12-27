import { cn } from '@/lib/utils';
import React from 'react';
import LeepNav from './LeepNav';

const LeepHeader = ({ className, ...props}: React.HTMLAttributes<HTMLElement>) => {
    return (
        <>
         <header className={cn({className}, {...props}, "sticky top-0 w-full")}>
            <div className="container px-4 py-2 m-auto">
                <LeepNav />
            </div>
        </header>   
        </>
    );
};

export default LeepHeader;