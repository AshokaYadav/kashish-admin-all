'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServiceSection';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import FooterSection from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useInitiateLogin, useVerifyOtp } from '@/hooks/use-auth';
import { setCredentials } from '@/store/features/auth/authSlice';
import { toast } from 'sonner';
import LoginCardDialog from './components/LoginDialog';
import { useRouter } from 'next/navigation';
import RegisterDialog from './components/RegisterDialog';
import { getLocation } from '@/lib/utils';
import Head from 'next/head';


const HomePage = () => {

    const { user, isAuthenticated } = useSelector((state: RootState) => state.auth);
    const [open, setOpen] = useState<boolean>(false);
    const [openNewAdmin, setOpenNewAdmin] = useState<boolean>(false);

    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [verifyOtpOpen, setVerifyOtpOpen] = useState<boolean>(false);
    const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);

    

    const { mutate: initiateLogin, isPending: isLoading } = useInitiateLogin(email, password);

    useEffect(() => {
        if (isAuthenticated && user && !!user.role) {
            router.replace('/' + `${(user.role || '')}`.toLowerCase() || '')
        }
    }, [isAuthenticated || user]);

    const {
        mutate: verifyOtp, isPending: isVerifyingOtp
    } = useVerifyOtp();


    const handleVerifyOtp = async (otp: string) => {
        verifyOtp(
            { token: email, otp },
            {
                onSuccess: ({ token, user }) => {
                    toast.success('OTP Verified Successfully');
                    if (!token || !user) {
                        return toast.error('Failed to Login... Please try again');
                    }
                    dispatch(setCredentials({ token, user }));
                    // dispatch(updateToken(token));
                    // dispatch(updateUser(user));
                    setOpen(false);
                    setVerifyOtpOpen(false);
                    router.replace(`/${user.role.toString().toLowerCase()}`);
                },
                onError: () => {
                    toast.error('Invalid OTP');
                },
            }
        );
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            const location = await getLocation();
            setCoordinates(location);
            initiateLogin({ email, password, ...location }, {
                onSuccess: () => {
                    toast.success('Login Successful');
                    setVerifyOtpOpen(true);
                },
                onError: () => {
                    setVerifyOtpOpen(false);
                    toast.error('Failed to login');
                },
            });
        } catch (error) {
            toast.error('Please enable location access to login');
        }
    };

    return (
        <>
         <Head>
        <meta
          name="keywords"
          content="kashish India Pvt Ltd |  Kashish India Pvt Ltd, online mobile recharge, DTH recharge, bill payment services, utility bill payments, fast mobile recharge, secure recharge platform, 24/7 recharge India, kashish india pvt ltd, kashish india jaipur, kashis india"
        />
      </Head>
        <div className="min-h-screen bg-white">
              <AnimatePresence mode="wait">
              <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
            <Navigation
                isLoggedIn={(!!user && isAuthenticated) || false}
                showLoginDialog={() => setOpen(true)}
            />

            <LoginCardDialog
                email={email}
                handleSubmit={handleSubmit}
                handleVerifyOtp={handleVerifyOtp}
                isLoading={isLoading}
                open={open}
                password={password}
                setEmail={setEmail}
                setOpen={setOpen}
                setPassword={setPassword}
                verifyOtpOpen={verifyOtpOpen}
                setOpenRegisterAdmin={setOpenNewAdmin}
            />
            <FeaturesSection />
            <ServicesSection />
            <HeroSection />

            <FooterSection />

            <RegisterDialog
                open={openNewAdmin}
                setOpen={setOpenNewAdmin}
            />
 </motion.div>
</AnimatePresence>
        </div>
        </>

    );
};

export default HomePage;