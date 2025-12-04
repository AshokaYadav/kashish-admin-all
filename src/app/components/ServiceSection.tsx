import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Tv, Wifi, CreditCard, Power, Droplets, Check, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
    const services = [
        {
            icon: <Smartphone className="w-8 h-8 text-rose-500" />,
            title: "Mobile Recharge",
            description: "Quick recharges for all operators with exclusive cashback offers",
            categories: ["Prepaid", "Postpaid", "Data Cards"],
            bgColor: "bg-rose-50",
            borderColor: "border-rose-200",
            offers: ["10% instant cashback", "Extra 2GB data", "Free caller tunes"],
            providers: ["Airtel", "Jio", "Vi", "BSNL"]
        },
        {
            icon: <Tv className="w-8 h-8 text-purple-500" />,
            title: "DTH & Cable TV",
            description: "Seamless TV recharges with premium channel offers",
            categories: ["Tata Play", "Airtel DTH", "Dish TV"],
            bgColor: "bg-purple-50",
            borderColor: "border-purple-200",
            offers: ["1 month free HD access", "Multi-TV discount", "Free installation"],
            providers: ["Tata Play", "Airtel", "Dish TV", "Sun Direct"]
        },
        {
            icon: <Wifi className="w-8 h-8 text-blue-500" />,
            title: "Internet Services",
            description: "High-speed broadband & fiber plans with best offers",
            categories: ["Broadband", "Fiber", "Wi-Fi"],
            bgColor: "bg-blue-50",
            borderColor: "border-blue-200",
            offers: ["2 months free on annual plans", "Free router", "Installation waiver"],
            providers: ["Airtel", "Jio Fiber", "ACT", "BSNL"]
        },
        {
            icon: <CreditCard className="w-8 h-8 text-indigo-500" />,
            title: "Credit Card Bills",
            description: "Hassle-free credit card payments with reward points",
            categories: ["Credit Cards", "EMI", "Loans"],
            bgColor: "bg-indigo-50",
            borderColor: "border-indigo-200",
            offers: ["2X reward points", "EMI conversion", "Late fee waiver"],
            providers: ["All Major Banks", "VISA", "Mastercard", "Amex"]
        },
        {
            icon: <Power className="w-8 h-8 text-amber-500" />,
            title: "Electricity Bills",
            description: "Pay electricity bills for all providers across India",
            categories: ["State Boards", "Private", "Smart Meters"],
            bgColor: "bg-amber-50",
            borderColor: "border-amber-200",
            offers: ["Early payment bonus", "Paperless billing rewards", "Auto-pay discount"],
            providers: ["All State Boards", "Tata Power", "Adani", "BSES"]
        },
        {
            icon: <Droplets className="w-8 h-8 text-cyan-500" />,
            title: "Water Bills",
            description: "Easy water bill payments with usage tracking",
            categories: ["Municipal", "Corporation", "Private"],
            bgColor: "bg-cyan-50",
            borderColor: "border-cyan-200",
            offers: ["Timely payment rewards", "Usage insights", "Bill split feature"],
            providers: ["Municipal Corps", "Water Boards", "Private Suppliers"]
        }
    ];

    return (
        <section className="py-20" id="services">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        One-stop solution for all your payment needs with exclusive offers and cashback rewards
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className={`hover:shadow-xl transition-all duration-300 border-2 ${service.borderColor} group`}
                        >
                            <CardHeader className={`${service.bgColor}`}>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 bg-white rounded-xl shadow-sm">
                                        {service.icon}
                                    </div>
                                    <CardTitle>{service.title}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="pt-6 space-y-6">
                                <p className="text-gray-600">{service.description}</p>

                                {/* Categories */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Available Services</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {service.categories.map((category, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1 ${service.bgColor} rounded-full text-sm text-gray-700`}
                                            >
                                                {category}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Providers */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Supported Providers</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {service.providers.slice(0, 3).map((provider, idx) => (
                                            <span key={idx} className="text-sm text-gray-600 flex items-center">
                                                <Check className="w-4 h-4 mr-1 text-green-500" />
                                                {provider}
                                            </span>
                                        ))}
                                        {service.providers.length > 3 && (
                                            <span className="text-sm text-gray-600 flex items-center">
                                                <MoreHorizontal className="w-4 h-4 mr-1" />
                                                More
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Current Offers */}
                                <div>
                                    <h4 className="text-sm font-semibold mb-2">Current Offers</h4>
                                    <div className="space-y-2">
                                        {service.offers.map((offer, idx) => (
                                            <div key={idx} className="flex items-center text-sm text-gray-600">
                                                <Check className="w-4 h-4 mr-2 text-green-500" />
                                                {offer}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* <Button
                                    className="w-full mt-4 group-hover:bg-gradient-to-r from-purple-600 to-pink-600 group-hover:text-white transition-all duration-300"
                                    variant="outline"
                                >
                                    Pay Now
                                </Button> */}
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;