'use client';

import { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import toast, { Toaster } from 'react-hot-toast';
import { useRetailerInitiateLogin, useVerifyOtp } from '@/hooks/use-auth';
import OtpInput from './components/otp-component';
import { useDispatch } from 'react-redux';
import { setCredentials } from '@/store/features/auth/authSlice';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { getLocation } from '@/lib/utils';

export const dynamic = 'force-dynamic'

export default function RetailerLogin({ params }: { params: { id: string } }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();
  const [coordinates, setCoordinates] = useState<{ latitude: number; longitude: number } | null>(null);
  const [showOtp, setShowOtp] = useState(false);
  const [isLoadingLocation, setIsLoadingLocation] = useState(true);

  const {
    login,
    isLoginLoading,
    loginData,
    loginError,
  } = useRetailerInitiateLogin(params.id);

  const {
    mutate: verifyOtp,
    isPending: isVerifying
  } = useVerifyOtp();

  useEffect(() => {
    const getLocationDataAndLogin = async () => {
      try {
        setIsLoadingLocation(true);
        const location = await getLocation();
        setCoordinates(location);
        await login({ token: params.id,  ...location });
        setShowOtp(true);
      } catch (error) {
        toast.error('Please enable location access to login');
      } finally {
        setIsLoadingLocation(false);
      }
    };
    getLocationDataAndLogin();
  }, [params.id]);

  // Handle initialization success/error toasts
  useEffect(() => {
    if (loginData?.success && !loginError) {
      toast.success(loginData.message || 'OTP Sent Successfully');
    }
    if (loginError) {
      toast.error('Failed to initiate login');
    }
  }, [loginData, loginError]);

  const handleVerifyOtp = async (otp: string) => {
    verifyOtp(
      { token: params.id, otp },
      {
        onSuccess: ({ token, user }) => {
          toast.success('OTP Verified Successfully')
          if (!token || !user) {
            return toast.error('Failed to Login... Please try again');
          }

          dispatch(setCredentials({ token, user }));
          setOpen(false); // Close dialog before navigation
          router.replace(`/${user.role.toString().toLowerCase()}`);
        },
        onError: () => {
          toast.error('Invalid OTP');
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      <Toaster position="top-right" />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md bg-white/90 backdrop-blur-lg border-none shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Login
            </DialogTitle>
            <p className="text-center text-sm text-gray-600">
              ID: {params.id}
            </p>
          </DialogHeader>

          <div className="p-6">
            {isLoadingLocation ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                <span className="text-gray-500">Getting location...</span>
              </div>
            ) : isLoginLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <Loader2 className="h-5 w-5 animate-spin text-gray-500" />
                <span className="text-gray-500">Initializing login...</span>
              </div>
            ) : loginError ? (
              <div className="text-center space-y-4">
                <p className="text-red-500">Failed to initialize login.</p>
                <Button
                  onClick={() => window.location.reload()}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                >
                  Refresh Page
                </Button>
              </div>
            ) : showOtp ? (
              <div className="space-y-4">
                <Card className="p-4 bg-white/50 backdrop-blur-sm">
                  <OtpInput onSubmit={handleVerifyOtp} />
                </Card>
                {isVerifying && (
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying OTP...</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center justify-center">
                <p className="text-gray-500">Please wait...</p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}