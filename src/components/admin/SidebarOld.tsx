'use client';

import { Fragment, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    Globe,
    Repeat2,
    Radio,
    MapPin,
    Tags,
    WalletIcon,
    User2,
    Server,
    CircleDollarSign,
    LogOutIcon,
    RadioTower,
    BellIcon,
    HistoryIcon,
    Users2,
    ServerCog,
    FolderClock,
    Zap
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/features/auth/authSlice';
import { Separator } from '../ui/separator';


const Sidebar = () => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(logout());



    const navItems = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/admin'
        },
        {
            name: 'Day Books',
            icon: Zap,
            path: '/admin/day-books'
        },
        {
            name: 'APIs',
            icon: Globe,
            path: '/admin/api'
        },
        {
            name: 'Operators',
            icon: Server,
            path: '/admin/operators'
        },
        {
            name: 'Operator Circle Linking',
            icon: ServerCog,
            path: '/admin/operator_circle_linking'
        },
        {
            name: 'Operators Commissions',
            icon: Radio,
            path: '/admin/operators_commissions'
        },
        {
            name: 'Operator Apis',
            icon: RadioTower,
            path: '/admin/operator_apis'
        },
        {
            name: 'Circles',
            icon: MapPin,
            path: '/admin/circles'
        },
        {
            name: 'Categories',
            icon: Tags,
            path: '/admin/categories'
        },
        {
            name: 'Wallets',
            icon: WalletIcon,
            path: '/admin/wallets'
        },
        {
            name: 'Debit Requests',
            icon: CircleDollarSign,
            path: '/admin/debits'
        },
        {
            name: 'Recharges',
            icon: Repeat2,
            path: '/admin/recharge_history'
        },
        {
            name: 'Recharges filter',
            icon: Repeat2,
            path: '/admin/recharge_filter'
        }
        ,
        {
            name: 'Recharge Complaints',
            icon: Repeat2,
            path: '/admin/complaints/recharge'
        },
        {
            name: 'Transaction Complaints',
            icon: Repeat2,
            path: '/admin/complaints/transaction'
        },
        {
            name: 'Recharge Logs',
            icon: Repeat2,
            path: '/admin/logs/recharge'
        },
        {
            name: 'Transaction Logs',
            icon: Repeat2,
            path: '/admin/logs/transaction'
        },
        {
            name: 'Retailers',
            icon: Users2,
            path: '/admin/retailers'
        },
        {
            name: 'Notifications',
            icon: BellIcon,
            path: '/admin/notifications'
        },
        {
            name: 'Login History',
            icon: FolderClock,
            path: '/admin/login_history'
        },
        {
            name: 'Users',
            icon: User2,
            path: '/admin/users'
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
                        Admin Portal
                    </h2>
                </div>

                {/* Navigation Items */}
                <nav className="p-2 space-y-1 overflow-scroll max-h-[90%]">
                    {navItems.map((item) => (
                        <Fragment key={item.path}>
                            <Link
                                href={item.path}
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
                            <Separator className="my-4" />

                        </Fragment>
                    ))}
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