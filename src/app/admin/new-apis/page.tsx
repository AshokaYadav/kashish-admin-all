"use client"
import { useState } from 'react';
import Head from 'next/head';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { PhoneIcon, MessageSquare, Smartphone } from 'lucide-react';

export default function TelecomServices() {
    const [mobileNumber, setMobileNumber] = useState('');
    const [amount, setAmount] = useState('');

    return (
        <div className="min-h-screen bg-slate-50 p-8">
            <Head>
                <title>Telecom Services</title>
                <meta name="description" content="Recharge, SMS, and Plans for your mobile" />
            </Head>

            <div className="max-w-5xl mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-center">Telecom Services</h1>

                <Tabs defaultValue="recharge" className="w-full">
                    <TabsList className="grid grid-cols-3 mb-8">
                        <TabsTrigger value="recharge" className="flex items-center gap-2">
                            <PhoneIcon className="h-4 w-4" />
                            <span>Recharge</span>
                        </TabsTrigger>
                        <TabsTrigger value="sms" className="flex items-center gap-2">
                            <MessageSquare className="h-4 w-4" />
                            <span>SMS</span>
                        </TabsTrigger>
                        <TabsTrigger value="plans" className="flex items-center gap-2">
                            <Smartphone className="h-4 w-4" />
                            <span>Plans</span>
                        </TabsTrigger>
                    </TabsList>

                    {/* Recharge Tab Content */}
                    <TabsContent value="recharge">
                        <Card>
                            <CardHeader>
                                <CardTitle>Mobile Recharge</CardTitle>
                                <CardDescription>Recharge your mobile number instantly</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="mobile-number">Mobile Number</Label>
                                        <Input
                                            id="mobile-number"
                                            placeholder="Enter your 10 digit mobile number"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value)}
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="amount">Amount</Label>
                                        <Input
                                            id="amount"
                                            placeholder="Enter amount"
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                        />
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <Card className="p-4 cursor-pointer hover:bg-slate-100 transition-colors">
                                            <CardTitle className="text-lg">₹99</CardTitle>
                                            <CardDescription>28 days validity</CardDescription>
                                        </Card>
                                        <Card className="p-4 cursor-pointer hover:bg-slate-100 transition-colors">
                                            <CardTitle className="text-lg">₹199</CardTitle>
                                            <CardDescription>56 days validity</CardDescription>
                                        </Card>
                                        <Card className="p-4 cursor-pointer hover:bg-slate-100 transition-colors">
                                            <CardTitle className="text-lg">₹399</CardTitle>
                                            <CardDescription>84 days validity</CardDescription>
                                        </Card>
                                        <Card className="p-4 cursor-pointer hover:bg-slate-100 transition-colors">
                                            <CardTitle className="text-lg">₹699</CardTitle>
                                            <CardDescription>365 days validity</CardDescription>
                                        </Card>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Proceed to Payment</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* SMS Tab Content */}
                    <TabsContent value="sms">
                        <Card>
                            <CardHeader>
                                <CardTitle>SMS Packs</CardTitle>
                                <CardDescription>Choose a suitable SMS pack for your needs</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="grid gap-2">
                                        <Label htmlFor="sms-mobile-number">Mobile Number</Label>
                                        <Input id="sms-mobile-number" placeholder="Enter your 10 digit mobile number" />
                                    </div>

                                    <div className="space-y-4">
                                        <div className="border rounded-lg p-4 hover:bg-slate-100 cursor-pointer transition-colors">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-medium">100 SMS Pack</h3>
                                                    <p className="text-sm text-gray-500">Validity: 28 days</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold">₹49</p>
                                                    <Button variant="outline" size="sm">Add</Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border rounded-lg p-4 hover:bg-slate-100 cursor-pointer transition-colors">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-medium">300 SMS Pack</h3>
                                                    <p className="text-sm text-gray-500">Validity: 28 days</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold">₹99</p>
                                                    <Button variant="outline" size="sm">Add</Button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border rounded-lg p-4 hover:bg-slate-100 cursor-pointer transition-colors">
                                            <div className="flex justify-between items-center">
                                                <div>
                                                    <h3 className="font-medium">Unlimited SMS</h3>
                                                    <p className="text-sm text-gray-500">Validity: 28 days</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-bold">₹149</p>
                                                    <Button variant="outline" size="sm">Add</Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full">Apply Pack</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>

                    {/* Plans Tab Content */}
                    <TabsContent value="plans">
                        <Card>
                            <CardHeader>
                                <CardTitle>Mobile Plans</CardTitle>
                                <CardDescription>Explore our range of prepaid and postpaid plans</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid gap-6">
                                    <div className="flex gap-4 mb-4">
                                        <Button variant="outline" className="rounded-full">All Plans</Button>
                                        <Button variant="outline" className="rounded-full">Data</Button>
                                        <Button variant="outline" className="rounded-full">Unlimited</Button>
                                        <Button variant="outline" className="rounded-full">Special</Button>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold">₹249</h3>
                                                    <p className="text-sm text-gray-500">Validity: 28 days</p>
                                                    <div className="mt-4 space-y-2">
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>1.5GB data per day</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>Unlimited calls</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>100 SMS per day</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button>Select</Button>
                                            </div>
                                        </div>

                                        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <div className="inline-block bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs mb-2">Popular</div>
                                                    <h3 className="text-xl font-bold">₹399</h3>
                                                    <p className="text-sm text-gray-500">Validity: 56 days</p>
                                                    <div className="mt-4 space-y-2">
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>2GB data per day</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>Unlimited calls</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>100 SMS per day</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button>Select</Button>
                                            </div>
                                        </div>

                                        <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold">₹599</h3>
                                                    <p className="text-sm text-gray-500">Validity: 84 days</p>
                                                    <div className="mt-4 space-y-2">
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>2.5GB data per day</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>Unlimited calls</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>100 SMS per day</span>
                                                        </p>
                                                        <p className="flex items-center gap-2">
                                                            <span className="bg-green-100 p-1 rounded-full"></span>
                                                            <span>Free subscription to streaming services</span>
                                                        </p>
                                                    </div>
                                                </div>
                                                <Button>Select</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button variant="outline">View All Plans</Button>
                            </CardFooter>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}