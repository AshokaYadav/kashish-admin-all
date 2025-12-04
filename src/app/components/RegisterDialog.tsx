import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog1';
import { Card, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2 } from 'lucide-react';
import { INewAdmin } from '@/apis/user';
import { useCreateAdmin } from '@/hooks/users/use-create-admin';
import { toast } from 'sonner';



export interface IRegisterDialogProps {
    open: boolean;
    setOpen: (val: boolean) => void;
}

export const defaultINewAdmin: INewAdmin = {
    name: '',
    email: '',
    mobile: '',
    city: '',
    password: '',
    admin_key: '',
}

export default function RegisterDialog({ open, setOpen }: IRegisterDialogProps) {
    const [form, setForm] = useState<INewAdmin>({ ...defaultINewAdmin });
    const { create, isCreating } = useCreateAdmin(() => {
        toast("Successfull");
        setOpen(false);
        setForm({ ...defaultINewAdmin });
    }, (err) => {
        toast('Error Registering', { description: err })
    })

    const updateForm = (key: keyof INewAdmin, value: string) => {
        setForm({ ...form, [key]: value });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        create(form);
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
                            Welcome
                        </DialogTitle>
                        <CardDescription className="text-center">
                            Enter your credentials to register
                        </CardDescription>
                    </DialogHeader>



                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4 py-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="Your Name Here"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={form.name}
                                        onChange={(e) => updateForm('name', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                           


                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="mobile"
                                        type="phone"
                                        placeholder="10 digit valid phone number"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={form.mobile}
                                        onChange={(e) => updateForm('mobile', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={form.email}
                                        onChange={(e) => updateForm('email', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>


{/* 
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="city"
                                        type="text"
                                        placeholder="Your City Name Here"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        value={form.city}
                                        onChange={(e) => updateForm('city', e.target.value)}
                                        required
                                    />
                                </div>
                            </div> */}

{/* 
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="password"
                                        type="password"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        placeholder="Your Strong Password Here"
                                        value={form.password}
                                        onChange={(e) => updateForm('password', e.target.value)}
                                        required
                                    />
                                </div>
                            </div> */}




                            <div className="space-y-2">
                                <Label htmlFor="password">permit code</Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                                    <Input
                                        id="secert"
                                        type="password"
                                        className=" bg-white/50 backdrop-blur-sm focus:bg-white transition-colors"
                                        placeholder="Required"
                                        value={form.admin_key}
                                        onChange={(e) => updateForm('admin_key', e.target.value)}
                                        required
                                    />
                                </div>
                            </div>


                        </div>

                        <div className="flex flex-col space-y-4">
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white transition-all duration-200 transform hover:scale-[1.02]"
                                disabled={isCreating}
                            >
                                {isCreating ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Registering.....
                                    </>
                                ) : (
                                    'Sign up'
                                )}
                            </Button>
                        </div>
                    </form>

                </DialogContent>
            </Dialog>
        </div>

    );
}






{/* <div className="space-y-4">
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
</div> */}