"use client";
import { useState } from 'react';
import Head from 'next/head';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useGetNotifications } from '@/hooks/users/use-fetch-notifications';


export default function Notifications(): JSX.Element {

    const [expandedIds, setExpandedIds] = useState<string[]>([]);
    const { isLoading, notifications, refetch } = useGetNotifications();

    // Toggle expanded state for a notification
    const toggleExpand = (id: string): void => {
        setExpandedIds(prev =>
            prev.includes(id)
                ? prev.filter(itemId => itemId !== id)
                : [...prev, id]
        );
    };

    // Format date
    const formatDate = (dateString: string): string => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <Head>
                <title>Notifications</title>
                <meta name="description" content="Your notifications" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto py-8 px-4">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h1 className="text-2xl font-bold text-gray-800">Notifications</h1>
                        {/* <p className="text-gray-600 mt-1">
                            You have {notifications?.filter(n => !n.read).length} unread notifications
                        </p> */}
                    </div>

                    {notifications?.length === 0 ? (
                        <div className="p-6 text-center text-gray-500">
                            No notifications to display
                        </div>
                    ) : (
                        <ul className="divide-y divide-gray-200">
                            {notifications?.map((notification) => (
                                <li
                                    key={notification.id}
                                    className={`hover:bg-gray-50 transition-colors duration-150 bg-blue-50`}
                                // className={`hover:bg-gray-50 transition-colors duration-150 ${notification.read ? 'bg-white' : 'bg-blue-50'}`}
                                >
                                    <div className="p-4">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-center">
                                                {/* {!notification.read && (
                                                    <span className="h-2 w-2 bg-blue-500 rounded-full mr-2"
                                                        aria-hidden="true"></span>
                                                )} */}
                                                <h3 className="font-medium text-gray-900">
                                                    {notification.title}
                                                </h3>
                                            </div>
                                            <button
                                                className="flex items-center text-blue-500 hover:text-blue-700 p-1 rounded transition-colors duration-150"
                                                onClick={(e: React.MouseEvent) => {
                                                    e.stopPropagation();
                                                    // if (!notification.read) markAsRead(notification.id);
                                                    toggleExpand(notification.id);
                                                }}
                                                aria-label={expandedIds.includes(notification.id) ? "Collapse notification" : "Expand notification"}
                                            >
                                                {expandedIds.includes(notification.id) ? (
                                                    <ChevronUp size={16} />
                                                ) : (
                                                    <ChevronDown size={16} />
                                                )}
                                            </button>
                                            {/* <div className="text-sm text-gray-500">
                                                {formatDate(notification.date)}
                                            </div> */}
                                        </div>

                                        {expandedIds.includes(notification.id) && (
                                            <div className="mt-2 text-sm text-gray-600 border-t pt-2">
                                                {notification.content}
                                            </div>
                                        )}

                                        <div className="mt-1 flex items-center">
                                            <div className="text-sm text-gray-500">
                                                {formatDate(notification.createdAt)}
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}