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
    Zap,
    Package,
    UserPlus,
    Users,
    FileText
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useDispatch } from 'react-redux';
import { logout } from '@/store/features/auth/authSlice';
import { Separator } from '../ui/separator';
import { ChevronDown } from 'lucide-react';

interface NavItemChild {
    name: string;
    path: string;
    icon: React.ComponentType<any>;
}

interface NavItem {
    name: string;
    icon: React.ComponentType<any>;
    path?: string;
    children?: NavItemChild[];
}

const Sidebar = () => {
    const pathname = usePathname();
    const [isHovered, setIsHovered] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<Set<string>>(new Set());
    const dispatch = useDispatch();
    
    const handleLogout = () => dispatch(logout());
    
    const toggleSubmenu = (name: string) => {
        const newOpenSubmenus = new Set(openSubmenus);
        if (newOpenSubmenus.has(name)) {
            newOpenSubmenus.delete(name);
        } else {
            newOpenSubmenus.add(name);
        }
        setOpenSubmenus(newOpenSubmenus);
    };

    const navItems: NavItem[] = [
        {
            name: 'Dashboard',
            icon: LayoutDashboard,
            path: '/admin'
        },
        {
            name: 'Members',
            icon: Users2,
            children: [
                {
                    name: 'Add New Package',
                    path: '/admin/members/add-package',
                    icon: Package
                },
                {
                    name: 'Manage Packages',
                    path: '/admin/members/packages',
                    icon: Package
                },
                {
                    name: 'Add New Member',
                    path: '/admin/members/add-member',
                    icon: UserPlus
                },
                {
                    name: 'Manage Members',
                    path: '/admin/members',
                    icon: Users
                }
            ]
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
            icon: HistoryIcon,
            path: '/admin/recharge_filter'
        },
        {
            name: 'Recharge Complaints',
            icon: FileText,
            path: '/admin/complaints/recharge'
        },
        {
            name: 'Transaction Complaints',
            icon: FileText,
            path: '/admin/complaints/transaction'
        },
        {
            name: 'Recharge Logs',
            icon: HistoryIcon,
            path: '/admin/logs/recharge'
        },
        {
            name: 'Transaction Logs',
            icon: HistoryIcon,
            path: '/admin/logs/transaction'
        },
        {
            name: 'Transaction History',
            icon: HistoryIcon,
            path: '/admin/add_money_report'
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
        {
            name: 'Fund Requests',
            icon: CircleDollarSign,
            path: '/admin/fund_requests'
        },
        {
            name: 'Users Management',
            icon: User2,
            path: '/admin/user'
        },
    ];

    const isActive = (path: string) => {
        if (path === '/admin') {
            return pathname === '/admin';
        }
        return pathname?.startsWith(path);
    };

    const isItemActive = (item: NavItem): boolean => {
        if (item.path) {
            return isActive(item.path);
        }
        if (item.children) {
            return item.children.some(child => isActive(child.path));
        }
        return false;
    };

    const getItemKey = (item: NavItem, index: number): string => {
        return item.path || item.name || `nav-item-${index}`;
    };

    return (
        <div className="relative">
            {/* Sidebar */}
            <aside
                className={cn(
                    "fixed top-0 left-0 z-40 h-screen transition-all duration-300 ease-in-out",
                    "bg-white border-r shadow-sm flex flex-col",
                    isHovered ? "w-64" : "w-20"
                )}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Header */}
                <div className="h-16 flex items-center justify-between px-4 border-b shrink-0">
                    <h2 className={cn(
                        "font-semibold whitespace-nowrap transition-opacity duration-300",
                        !isHovered && "opacity-0"
                    )}>
                        Admin Portal
                    </h2>
                </div>
























                {/* Navigation Items */}
                <nav className="p-2 space-y-1 overflow-y-auto flex-1">
                    {navItems.map((item, index) => {
                        const hasChildren = item.children && item.children.length > 0;
                        const active = isItemActive(item);
                        const isSubmenuOpen = openSubmenus.has(item.name);

                        return (
                            <Fragment key={getItemKey(item, index)}>
                                {hasChildren ? (
                                    <div>
                                        <div
                                            className={cn(
                                                "flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                                                "hover:bg-gray-100 group relative cursor-pointer",
                                                active ? "bg-blue-50 text-blue-600" : "text-gray-600",
                                                !isHovered && "justify-center"
                                            )}
                                            onClick={() => toggleSubmenu(item.name)}
                                        >
                                            <item.icon className={cn(
                                                "h-5 w-5 shrink-0",
                                                active && "text-blue-600"
                                            )} />
                                            <span className={cn(
                                                "ml-3 whitespace-nowrap transition-all duration-300 flex-1",
                                                !isHovered && "opacity-0 w-0"
                                            )}>
                                                {item.name}
                                            </span>
                                            {isHovered && (
                                                <ChevronDown className={cn(
                                                    "h-4 w-4 transition-transform duration-200",
                                                    isSubmenuOpen ? "rotate-180" : ""
                                                )} />
                                            )}

                                            {/* Tooltip for collapsed state */}
                                            {!isHovered && (
                                                <div className="absolute left-full ml-6 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                                                    {item.name}
                                                </div>
                                            )}
                                        </div>
                                        
                                        {isHovered && isSubmenuOpen && item.children && (
                                            <div className="ml-6 pl-4 border-l space-y-1 mt-1">
                                                {item.children.map((child) => (
                                                    <Link
                                                        key={child.path}
                                                        href={child.path}
                                                        className={cn(
                                                            "flex items-center px-3 py-2 rounded-lg transition-all duration-200",
                                                            "hover:bg-gray-100 text-sm",
                                                            isActive(child.path) ? "text-blue-600 bg-blue-50" : "text-gray-600"
                                                        )}
                                                    >
                                                        <child.icon className="h-4 w-4 mr-2" />
                                                        <span>{child.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : item.path ? (
                                    <Link
                                        href={item.path}
                                        className={cn(
                                            "flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                                            "hover:bg-gray-100 group relative",
                                            active ? "bg-blue-50 text-blue-600" : "text-gray-600",
                                            !isHovered && "justify-center"
                                        )}
                                    >
                                        <item.icon className={cn(
                                            "h-5 w-5 shrink-0",
                                            active && "text-blue-600"
                                        )} />
                                        <span className={cn(
                                            "ml-3 whitespace-nowrap transition-all duration-300",
                                            !isHovered && "opacity-0 w-0"
                                        )}>
                                            {item.name}
                                        </span>

                                        {/* Tooltip for collapsed state */}
                                        {!isHovered && (
                                            <div className="absolute left-full ml-6 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                                                {item.name}
                                            </div>
                                        )}
                                    </Link>
                                ) : (
                                    // Fallback for items without path (should not happen with current data)
                                    <div className="flex items-center px-4 py-3 rounded-lg text-gray-400">
                                        <item.icon className="h-5 w-5 shrink-0" />
                                        <span className={cn(
                                            "ml-3 whitespace-nowrap transition-all duration-300",
                                            !isHovered && "opacity-0 w-0"
                                        )}>
                                            {item.name}
                                        </span>
                                    </div>
                                )}
                                <Separator className="my-2" />
                            </Fragment>
                        );
                    })}




























                    
                    {/* Logout Button */}
                    <div className="pt-4 mt-auto">
                        <Separator className="mb-4" />
                        <div
                            className={cn(
                                "flex items-center px-4 py-3 rounded-lg transition-all duration-200",
                                "hover:bg-gray-100 group relative cursor-pointer",
                                "text-gray-600",
                                !isHovered && "justify-center"
                            )}
                            onClick={handleLogout}
                        >
                            <LogOutIcon className="h-5 w-5 shrink-0" />
                            <span className={cn(
                                "ml-3 whitespace-nowrap transition-all duration-300",
                                !isHovered && "opacity-0 w-0"
                            )}>
                                Logout
                            </span>

                            {/* Tooltip for collapsed state */}
                            {!isHovered && (
                                <div className="absolute left-full ml-6 px-2 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-50">
                                    Logout
                                </div>
                            )}
                        </div>
                    </div>
                </nav>







                
            </aside>

            {/* Content wrapper - Make sure to include your actual content here */}
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