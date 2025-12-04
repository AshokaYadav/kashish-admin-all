"use client"
// pages/mobile-recharge.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

// Mock data for operators, circles and plans
const operators = [
    { id: 1, name: 'Airtel' },
    { id: 2, name: 'Jio' },
    { id: 3, name: 'Vi' },
    { id: 4, name: 'BSNL' }
];

const circles = [
    { id: 1, name: 'Delhi NCR' },
    { id: 2, name: 'Mumbai' },
    { id: 3, name: 'Karnataka' },
    { id: 4, name: 'Tamil Nadu' },
    { id: 5, name: 'Andhra Pradesh' }
];

const planCategories = [
    { id: 1, name: 'Popular' },
    { id: 2, name: 'Data' },
    { id: 3, name: 'Unlimited' },
    { id: 4, name: 'Entertainment' },
    { id: 5, name: 'Talktime' },
    { id: 6, name: 'Roaming' }
];

const allPlans = [
    // Popular plans
    { id: 101, category: 1, operator: 1, price: 249, validity: '28 days', data: '1.5 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },
    { id: 102, category: 1, operator: 1, price: 399, validity: '56 days', data: '2 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },
    { id: 103, category: 1, operator: 2, price: 239, validity: '28 days', data: '1.5 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },
    { id: 104, category: 1, operator: 2, price: 299, validity: '28 days', data: '2 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },

    // Data plans
    { id: 201, category: 2, operator: 1, price: 58, validity: '3 days', data: '6 GB', calls: 'None', sms: 'None' },
    { id: 202, category: 2, operator: 2, price: 51, validity: '3 days', data: '6 GB', calls: 'None', sms: 'None' },

    // Unlimited plans
    { id: 301, category: 3, operator: 1, price: 499, validity: '28 days', data: '3 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },
    { id: 302, category: 3, operator: 2, price: 479, validity: '28 days', data: '3 GB/day', calls: 'Unlimited', sms: '100 SMS/day' },

    // Entertainment plans
    { id: 401, category: 4, operator: 1, price: 599, validity: '84 days', data: '2 GB/day', calls: 'Unlimited', sms: '100 SMS/day', extras: 'Disney+ Hotstar' },
    { id: 402, category: 4, operator: 2, price: 589, validity: '84 days', data: '2 GB/day', calls: 'Unlimited', sms: '100 SMS/day', extras: 'Netflix' },

    // Talktime plans
    { id: 501, category: 5, operator: 1, price: 100, validity: '28 days', data: 'None', calls: 'Rs. 80 Talktime', sms: 'None' },
    { id: 502, category: 5, operator: 2, price: 100, validity: '28 days', data: 'None', calls: 'Rs. 80 Talktime', sms: 'None' },

    // Roaming plans
    { id: 601, category: 6, operator: 1, price: 649, validity: '28 days', data: '1.5 GB/day', calls: 'Unlimited (Incl. Roaming)', sms: '100 SMS/day' },
    { id: 602, category: 6, operator: 2, price: 599, validity: '28 days', data: '1.5 GB/day', calls: 'Unlimited (Incl. Roaming)', sms: '100 SMS/day' }
];

export default function MobileRecharge() {
    // Add viewport height adjustment for mobile browsers
    useEffect(() => {
        function adjustHeight() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }

        window.addEventListener('resize', adjustHeight);
        window.addEventListener('orientationchange', adjustHeight);
        adjustHeight();

        return () => {
            window.removeEventListener('resize', adjustHeight);
            window.removeEventListener('orientationchange', adjustHeight);
        };
    }, []);
    const [mobile, setMobile] = useState('');
    const [selectedOperator, setSelectedOperator] = useState('');
    const [selectedCircle, setSelectedCircle] = useState('');
    const [amount, setAmount] = useState<number>(0);
    const [selectedCategory, setSelectedCategory] = useState(1);
    const [filteredPlans, setFilteredPlans] = useState<any[]>([]);
    const [showPlans, setShowPlans] = useState(false);

    useEffect(() => {
        // Update whether to show plans based on operator and circle selection
        if (selectedOperator && selectedCircle) {
            setShowPlans(true);
            // Filter plans based on selected operator and category
            const plans = allPlans.filter(
                plan => plan.operator === parseInt(selectedOperator) && plan.category === selectedCategory
            );
            setFilteredPlans(plans);
        } else {
            setShowPlans(false);
        }
    }, [selectedOperator, selectedCircle, selectedCategory]);

    const handleRecharge = () => {
        // Validate inputs
        if (!mobile || mobile.length !== 10) {
            alert('Please enter a valid 10-digit mobile number');
            return;
        }
        if (!selectedOperator) {
            alert('Please select an operator');
            return;
        }
        if (!selectedCircle) {
            alert('Please select a circle');
            return;
        }
        if (!amount || amount <= 0) {
            alert('Please enter a valid amount');
            return;
        }

        // Process recharge (this would connect to a payment gateway in a real app)
        alert(`Initiating recharge of Rs. ${amount} for ${mobile}`);
    };

    const handlePlanSelect = (price: number) => {
        setAmount(price);
        // Scroll to the top to see the updated amount
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-gray-100 w-full" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)' }}>
            <Head>
                <title>Mobile Recharge</title>
                <meta name="description" content="Mobile recharge page" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="w-full max-w-6xl mx-auto px-4 py-4 flex flex-col">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6">Mobile Recharge</h1>

                {/* Input Section - Single Component */}
                <div className="w-full bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-4 sm:mb-6">
                    <div className="flex flex-col space-y-4">
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700 mb-1">
                                Mobile Number
                            </label>
                            <input
                                type="tel"
                                id="mobile"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                                placeholder="Enter 10 digit mobile number"
                                maxLength={10}
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
                            />
                        </div>

                        <div>
                            <label htmlFor="operator" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Operator
                            </label>
                            <select
                                id="operator"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base appearance-none"
                                value={selectedOperator}
                                onChange={(e) => setSelectedOperator(e.target.value)}
                            >
                                <option value="">Select Operator</option>
                                {operators.map((op) => (
                                    <option key={op.id} value={op.id}>
                                        {op.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="circle" className="block text-sm font-medium text-gray-700 mb-1">
                                Select Circle
                            </label>
                            <select
                                id="circle"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base appearance-none"
                                value={selectedCircle}
                                onChange={(e) => setSelectedCircle(e.target.value)}
                            >
                                <option value="">Select Circle</option>
                                {circles.map((circle) => (
                                    <option key={circle.id} value={circle.id}>
                                        {circle.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-1">
                                Amount (₹)
                            </label>
                            <input
                                type="number"
                                id="amount"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-base"
                                placeholder="Enter amount"
                                value={amount}
                                onChange={(e) => setAmount(parseFloat(e.target.value))}
                            />
                        </div>
                    </div>

                    <div className="mt-4 sm:mt-6">
                        <button
                            onClick={handleRecharge}
                            className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all text-base sm:text-lg"
                        >
                            Recharge Now
                        </button>
                    </div>
                </div>

                {/* Plans Section - Only visible when both operator and circle are selected */}
                {showPlans && (
                    <div className="w-full">
                        {/* Plan Categories */}
                        <div className="mb-4 bg-white rounded-xl shadow-lg p-3 sm:p-4">
                            <h2 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3">Select Plan Category</h2>
                            <div className="overflow-x-auto pb-1 -mx-1 px-1">
                                <div className="flex space-x-2 whitespace-nowrap">
                                    {planCategories.map((category) => (
                                        <button
                                            key={category.id}
                                            className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 flex-shrink-0 ${selectedCategory === category.id
                                                ? 'bg-blue-600 text-white shadow-md'
                                                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                                                }`}
                                            onClick={() => setSelectedCategory(category.id)}
                                        >
                                            {category.name}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Plans Display */}
                        <div className="bg-white rounded-xl shadow-lg p-3 sm:p-5">
                            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                                {planCategories.find((c) => c.id === selectedCategory)?.name} Plans
                            </h2>

                            {filteredPlans.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                    {filteredPlans.map((plan) => (
                                        <div
                                            key={plan.id}
                                            className="border border-gray-200 rounded-lg p-3 sm:p-4 hover:border-blue-500 hover:shadow-md cursor-pointer transition-all active:bg-blue-50"
                                            onClick={() => handlePlanSelect(plan.price)}
                                        >
                                            <div className="flex justify-between items-center mb-2 sm:mb-3">
                                                <span className="font-bold text-lg sm:text-xl text-blue-600">₹{plan.price}</span>
                                                <span className="text-xs sm:text-sm bg-blue-100 text-blue-800 py-1 px-2 sm:px-3 rounded-full">
                                                    {plan.validity}
                                                </span>
                                            </div>
                                            <div className="text-xs sm:text-sm text-gray-700 space-y-1 sm:space-y-2">
                                                <div className="grid grid-cols-3 gap-1 sm:gap-2">
                                                    <div>
                                                        <p className="text-gray-500 text-xs">Data</p>
                                                        <p className="font-medium text-xs sm:text-sm">{plan.data}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500 text-xs">Calls</p>
                                                        <p className="font-medium text-xs sm:text-sm">{plan.calls}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-gray-500 text-xs">SMS</p>
                                                        <p className="font-medium text-xs sm:text-sm">{plan.sms}</p>
                                                    </div>
                                                </div>
                                                {plan.extras && (
                                                    <div className="mt-1 sm:mt-2 pt-1 sm:pt-2 border-t border-gray-100">
                                                        <p className="text-xs text-gray-500">Extras</p>
                                                        <p className="font-medium text-green-600 text-xs sm:text-sm">{plan.extras}</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-gray-50 rounded-lg p-4 sm:p-6 text-center">
                                    <p className="text-gray-600 text-sm sm:text-base">
                                        No plans available for the selected operator and category.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}