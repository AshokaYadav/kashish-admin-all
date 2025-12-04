"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import FooterSection from '../components/Footer';
import {
    LifeBuoy,
    Mail,
    Phone,
    MessageCircle,
    FileText,
    HelpCircle,
    AlertCircle,
    Check,
    Send
} from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const HelpCenter = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        issueType: 'general',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Here you would typically send the form data to your backend
        console.log('Form submitted:', formData);
        setSubmitted(true);

        // Reset form after submission (you may want to keep this behavior or modify it)
        setTimeout(() => {
            setSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                issueType: 'general',
                message: ''
            });
        }, 3000);
    };

    const faqItems = [
        {
            question: "How do I check my transaction status?",
            answer: "You can check your transaction status by visiting the 'Transaction History' section in your account dashboard. All transactions are updated in real-time with their current status."
        },
        {
            question: "What should I do if my recharge failed but money was deducted?",
            answer: "Don't worry. Failed transactions are automatically refunded within 24-48 hours. If you haven't received your refund after 48 hours, please contact our support team with your transaction ID."
        },
        {
            question: "How do I redeem my cashback rewards?",
            answer: "Cashback rewards are automatically added to your Kashish India wallet and can be used for future transactions. To view your available cashback balance, visit the 'Rewards' section in your account."
        },
        {
            question: "I forgot my password. How can I reset it?",
            answer: "Click on the 'Forgot Password' link on the login page. Enter your registered mobile number or email address, and we'll send you a link to reset your password."
        },
        {
            question: "How do I update my contact information?",
            answer: "You can update your contact information in the 'Profile Settings' section of your account. After making changes, click 'Save' to update your information."
        }
    ];

    return (
        <>
            <CommonNavigation />
            <Head>
                <title>Help Center - Kashish India Recharge</title>
                <meta name="description" content="Get help with Kashish India's recharge services. Contact our support team or find answers to frequently asked questions." />
            </Head>

            <main className="bg-white">
                {/* Header/Navigation would go here */}

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* Header with gradient text */}
                    <div className="text-center mb-8 sm:mb-12 px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Help Center
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We're here to help you with any questions or issues you may have with our recharge services.
                        </p>
                    </div>

                    {/* Contact Options */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                <Phone className="w-8 h-8 text-blue-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                            <p className="text-gray-600 mb-4">Speak directly with our support team</p>
                            <a href="tel:+919694426666" className="text-blue-600 hover:text-blue-800 font-medium">+91 9694426666</a>
                            <p className="text-sm text-gray-500 mt-2">Available 9 AM - 9 PM, 7 days a week</p>
                        </div>

                        <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                <Mail className="w-8 h-8 text-purple-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                            <p className="text-gray-600 mb-4">Send us your queries any time</p>
                            <a href="mailto:support@Kashish India.com" className="text-purple-600 hover:text-purple-800 font-medium">support@kashishindiapvtltd.com</a>
                            <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours</p>
                        </div>

                        <div className="p-6 bg-pink-50 rounded-xl border-2 border-pink-200 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                            <div className="p-4 bg-white rounded-full shadow-sm mb-4">
                                <MessageCircle className="w-8 h-8 text-pink-500" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Live Chat</h3>
                            <p className="text-gray-600 mb-4">Chat with our support executives</p>
                            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-300">
                                Start Chat
                            </button>
                            <p className="text-sm text-gray-500 mt-2">Available 9 AM - 6 PM, Monday to Friday</p>
                        </div>
                    </div>

                    {/* Contact Form and FAQ Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        {/* Contact Form */}
                        <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <FileText className="w-8 h-8 text-yellow-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Contact Form</h2>
                            </div>

                            {submitted ? (
                                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center">
                                    <Check className="w-6 h-6 text-green-500 mr-3" />
                                    <p className="text-green-700">Thank you! Your message has been sent successfully. We'll get back to you shortly.</p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                                placeholder="Your contact number"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="issueType" className="block text-sm font-medium text-gray-700 mb-1">Issue Type</label>
                                        <select
                                            id="issueType"
                                            name="issueType"
                                            value={formData.issueType}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                        >
                                            <option value="general">General Inquiry</option>
                                            <option value="transaction">Transaction Issue</option>
                                            <option value="refund">Refund Request</option>
                                            <option value="account">Account Problem</option>
                                            <option value="suggestion">Suggestion</option>
                                            <option value="complaint">Complaint</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={4}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                            placeholder="Please describe your issue or question in detail..."
                                        ></textarea>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center transition-colors duration-300"
                                        >
                                            <Send className="w-5 h-5 mr-2" />
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            )}
                        </div>

                        {/* FAQ Section */}
                        <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <HelpCircle className="w-8 h-8 text-green-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Frequently Asked Questions</h2>
                            </div>

                            <div className="space-y-4">
                                {faqItems.map((item, index) => (
                                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.question}</h3>
                                        <p className="text-gray-600">{item.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <a href="/faq" className="inline-flex items-center text-green-600 hover:text-green-800 font-medium">
                                    View all FAQs
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Issue Reporting Section */}
                    <div className="mb-16 p-6 bg-red-50 rounded-xl border-2 border-red-200">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                <AlertCircle className="w-8 h-8 text-red-500" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Report an Issue</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-white p-5 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Transaction Issues</h3>
                                <p className="text-gray-600 mb-4">Report failed transactions, incorrect recharges, or delayed processing.</p>
                                <a
                                    href="mailto:transactions@Kashish India.com?subject=Transaction%20Issue%20Report"
                                    className="block w-full text-center bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Report Transaction Issue
                                </a>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Account Security</h3>
                                <p className="text-gray-600 mb-4">Report suspicious activity, unauthorized access, or security concerns.</p>
                                <a
                                    href="mailto:security@Kashish India.com?subject=Security%20Concern%20Report"
                                    className="block w-full text-center bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Report Security Issue
                                </a>
                            </div>

                            <div className="bg-white p-5 rounded-lg shadow-sm">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Problems</h3>
                                <p className="text-gray-600 mb-4">Report app crashes, website errors, or other technical difficulties.</p>
                                <a
                                    href="mailto:technical@Kashish India.com?subject=Technical%20Issue%20Report"
                                    className="block w-full text-center bg-red-100 hover:bg-red-200 text-red-800 font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                                >
                                    Report Technical Issue
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Visit Us Section */}
                    <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                        <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                            <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                <LifeBuoy className="w-8 h-8 text-blue-500" />
                            </div>
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Visit Our Office</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-600 mb-4">
                                    If you prefer to meet us in person, you're welcome to visit our office during business hours:
                                </p>
                                <div className="bg-white p-5 rounded-lg shadow-sm">
                                    <p className="font-medium text-gray-800">Kashish India Headquarters</p>
                                    <p className="text-gray-600">S.F. 40-41 Jtm Mall<br />
                                        Mahal Road Jagatpura<br />
                                        Jaipur 302017</p>
                                    <p className="mt-4 text-gray-600">
                                        <strong>Business Hours:</strong><br />
                                        Monday to Friday: 9:00 AM - 6:00 PM<br />
                                        Saturday: 10:00 AM - 4:00 PM<br />
                                        Sunday: Closed
                                    </p>
                                </div>
                            </div>

                            <div className="h-64 md:h-auto bg-gray-200 rounded-lg">
                                {/* Replace this div with an actual map component or iframe */}
                                <div className="h-full w-full">
                                <iframe
                                    title="Fixed Location Map"
                                    className="w-full h-full border-0 rounded-md"
                                    loading="lazy"
                                    allowFullScreen
                                    src="https://www.google.com/maps?q=26.837429,75.833702&hl=es;z=14&output=embed"
                                ></iframe>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </>
    );
};

export default HelpCenter;