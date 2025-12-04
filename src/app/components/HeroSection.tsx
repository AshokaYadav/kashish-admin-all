import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight, Play } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const HeroSection = () => {
    return (
        <div className="bg-gradient-to-r from-violet-500 via-purple-500 to-pink-500 text-white">
            <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-left space-y-8">
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                            Pay Bills & Recharge
                            <span className="block">In Seconds</span>
                        </h2>
                        <p className="text-xl md:text-2xl opacity-90">
                            Experience the fastest, most secure way to manage all your payments in one place
                        </p>
                        {/* <div className="flex gap-4">
                            <Button size="lg" className="border-white bg-white text-purple-600 hover:bg-purple-600 hover:text-black">
                                Get Started <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-purple-600 hover:bg-purple-600">
                                <Play className="w-4 h-4 mr-2" /> Watch Demo
                            </Button>
                        </div> */}
                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-8 pt-8">
                            <div>
                                <div className="text-3xl font-bold">10M+</div>
                                <div className="text-sm opacity-80">Active Users</div>
                            </div>
                            <div className="h-8 w-px bg-purple-300"></div>
                            <div>
                                <div className="text-3xl font-bold">₹100Cr+</div>
                                <div className="text-sm opacity-80">Daily Transactions</div>
                            </div>
                            <div className="h-8 w-px bg-purple-300"></div>
                            <div>
                                <div className="text-3xl font-bold">4.9/5</div>
                                <div className="text-sm opacity-80">User Rating</div>
                            </div>
                        </div>
                    </div>
                    {/* Right Image */}
                    <div className="hidden md:block">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-white/10 rounded-lg blur-lg"></div>
                            <DotLottieReact
                                src="https://lottie.host/f13690f5-46ab-4ee2-ba41-65b64cd1d076/pjXHmpy7mT.lottie"
                                loop
                                autoplay
                            />
                            {/* <img
                                src="/api/placeholder/600/800"
                                alt="Kashish India App"
                                className="relative rounded-lg shadow-2xl"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;