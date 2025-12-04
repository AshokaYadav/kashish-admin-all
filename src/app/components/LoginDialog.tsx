import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog1';
import { Card, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2 } from 'lucide-react';
import OtpInput from './OtpInput';


export interface ILoginDialogProps {
    open: boolean;
    setOpen: (val: boolean) => void;
    verifyOtpOpen: boolean;
    handleSubmit: (val: any) => void;
    email: string;
    setEmail: (val: string) => void;
    password: string;
    setPassword: (val: string) => void;
    isLoading: boolean;
    handleVerifyOtp: (otp: string) => void;

    setOpenRegisterAdmin: (val: boolean) => void;
}

export default function LoginCardDialog({ open, setOpen, handleSubmit, verifyOtpOpen, password, setPassword, email, setEmail, isLoading, handleVerifyOtp, setOpenRegisterAdmin }: ILoginDialogProps) {
    const [isAllowerResentOtp, setIsAllowerResentOtp] = useState<boolean>(false);
    const handleResentOtp = (e: any) => {
        setIsAllowerResentOtp(true)
        setTimeout(() =>
            setIsAllowerResentOtp(false)
            , 60000)
        handleSubmit(e);
    }
    return (
        <div className='max-h-0 opacity-0'>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                    <Button
                        className="relative bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/20 px-8 py-6 text-lg font-semibold transition-all duration-200 transform hover:scale-105"
                    >
                        Sign In
                    </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-80 bg-white/20 backdrop-blur-lg border-none shadow-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Welcome back
                        </DialogTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to access your account
                            <p className="mt-2 text-sm text-gray-500">Location access is required for login</p>
                        </CardDescription>
                    </DialogHeader>

                    {!verifyOtpOpen ? (<form onSubmit={handleSubmit}>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="email">User Id</Label>
                                <div className="relative">
                                    {/* <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" /> */}
                                    <Input
                                        id="email"
                                        type="text"
                                        placeholder="unique login id"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    {/* <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" /> */}
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder='password'
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4">
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-200 transform hover:scale-[1.02]"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Signing in...
                                    </>
                                ) : (
                                    'Sign in'
                                )}
                            </Button>
                            {/* <div className="text-sm text-center text-gray-600">
                                Don't have an account?{' '}
                                <Button variant="link" className="p-0 h-auto font-semibold text-indigo-600 hover:text-indigo-800" onClick={() => { setOpen(false); setOpenRegisterAdmin(true) }}>
                                    Sign up
                                </Button>
                            </div> */}
                        </div>
                    </form>)
                        :
                        (<div className="space-y-4">
                            <Card className="p-4 bg-white/50 backdrop-blur-sm">
                                <OtpInput onSubmit={handleVerifyOtp} />
                            </Card>
                            {
                                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Verifying OTP...</span>
                                    <button className='text-blue-500' onClick={handleResentOtp} disabled={isAllowerResentOtp}>resend otp?</button>
                                </div>
                            }
                        </div>)}

                </DialogContent>
            </Dialog>
        </div>

    );
}