"use client";

import Sidebar from '@/components/admin/Sidebar';
import { hydrate } from '@/store/features/auth/authSlice';
import { RootState } from '@/store/store';

import { useRouter } from 'next/navigation';
import { PropsWithChildren, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RootLayout({ children }: PropsWithChildren<{}>) {
    const router = useRouter();
    const dispatch = useDispatch();
    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [checking, setIsChecking] = useState<boolean>(true);


    useEffect(() => {
        dispatch(hydrate());
        setIsChecking(false);
    }, [])

    useEffect(() => {
        if (!checking) {
            if (!isAuthenticated || !(user && user.role.toString().toLowerCase() === 'admin')) {
                router.replace('/');
            }
        }
    }, [isAuthenticated, checking]);

    return (
        <div className='flex flex-row'>
            <div className="flex-64"> {/* Using fixed width instead of flex-9 */}
                <Sidebar />
            </div>
            <div className="flex-1">
                {children}
            </div>
        </div>
    );
}