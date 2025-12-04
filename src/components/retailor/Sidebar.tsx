'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { MouseEvent } from 'react';
import {
    LayoutDashboard,
    Globe,
    Repeat2,
    History,
    Radio,
    MapPin,
    Tags,
    Settings,
    CreditCardIcon,
    WalletIcon,
    User2,
    BellElectricIcon,
    LogOutIcon,
    BellIcon,
    HistoryIcon,
    FolderClock
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/features/auth/authSlice';

const Sidebar = () => {
    const pathname = usePathname();
    const dispatch = useDispatch();
    const [isHovered, setIsHovered] = useState(false);

    const handleLogout = () => dispatch(logout());

    const navItems = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/retailer'
        },
        {
            name: 'Recharge',
            icon: Repeat2,
            path: '/retailer/recharge'
        },
        {
            name: 'Recharge History',
            icon: History,
            path: '/retailer/recharge_history'
        },
        {
            name: 'Transaction History',
            icon: CreditCardIcon,
            path: '/retailer/transactions'
        },
        {
            name: 'Login History',
            icon: FolderClock,
            path: '/retailer/login_history'
        },
        {
            name: 'Notifications',
            icon: BellIcon,
            path: '/retailer/notifications'
        },
        {
            name: 'Profile',
            icon: User2,
            path: '/retailer/profile',
        },
    ];

    return (
        <div className="relative">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out",
                    "bg-white border-r shadow-sm",
                    isHovered ? "w-64" : "w-20"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b">
                    <h2 className={cn(
                        "font-semibold whitespace-nowrap transition-opacity duration-300",
                        !isHovered && "opacity-0"
                    )}>
                        Recharge Portal
                    </h2>
                </div>

                {/* Navigation Items */}
                <nav className="p-2 space-y-1">
                    {navItems.map((item) => {
                         const handleClick = (e:MouseEvent<HTMLAnchorElement>) => {
                            if (item.path === "/retailer/recharge") {
                                e.preventDefault(); // stop default navigation
                                window.location.href = item.path; // navigate & refresh
                            }
                        };

                        return (
                            <Link
                                key={item.path}
                                href={item.path}
                                onClick={handleClick}
                                className={cn(
                                    "flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                                    "hover:bg-gray-100 group relative",
                                    pathname === item.path ? "bg-blue-50 text-blue-600" : "text-gray-600",
                                    !isHovered && "justify-center"
                                )}
                                
                            >
                                <item.icon className={cn(
                                    "h-5 w-5 shrink-0",
                                    pathname === item.path && "text-blue-600"
                                )} />
                                <span className={cn(
                                    "ml-3 whitespace-nowrap transition-all duration-300",
                                    !isHovered && "opacity-0 w-0"
                                )}>
                                    {item.name}
                                </span>
    
                                {/* Tooltip for collapsed state */}
                                {!isHovered && (
                                    <div className="absolute left-full ml-6 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                                        {item.name}
                                    </div>
                                )}
                            </Link>
                        )
                    }
                    
                    )}
                    <div className={cn(
                        "flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                        "hover:bg-gray-100 group relative",
                        "text-gray-600",
                        "cursor-pointer",
                        !isHovered && "justify-center"
                    )}
                        onClick={handleLogout}
                    >
                        <LogOutIcon className={cn(
                            "h-5 w-5 shrink-0",
                            "text-gray-600"
                        )} />
                        <span className={cn(
                            "ml-3 whitespace-nowrap transition-all duration-300",
                            !isHovered && "opacity-0 w-0"
                        )}>
                            Logout
                        </span>

                        {/* Tooltip for collapsed state */}
                        {!isHovered && (
                            <div className="absolute left-full ml-6 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity">
                                Logout
                            </div>
                        )}
                    </div>
                </nav>
            </aside>

            {/* Content wrapper */}
            <main className={cn(
                "min-h-screen transition-all duration-300",
                isHovered ? "ml-64" : "ml-20"
            )}>
                {/* Your page content goes here */}
            </main>
        </div>
    );
};

export default Sidebar;