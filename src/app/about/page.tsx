import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterSection from '../components/Footer';
import {
    CheckCircle,
    Target,
    Users,
    Award,
    BarChart,
    Star,
    ThumbsUp
} from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const AboutUs = () => {
    const milestones = [
        {
            year: "2019",
            title: "Our Journey Begins",
            description: "Kashish India Pvt Ltd was founded with a vision to simplify digital payments and recharges for everyday Indians."
        },
        {
            year: "2020",
            title: "Expanding Services",
            description: "We expanded our offering to include DTH recharges, bill payments, and introduced our first cashback program."
        },
        {
            year: "2021",
            title: "1 Million Users",
            description: "We celebrated our first major milestone of serving 1 million satisfied users across India."
        },
        {
            year: "2022",
            title: "Digital Transformation",
            description: "During the pandemic, we helped millions of Indians stay connected by providing reliable digital recharge solutions."
        },
        {
            year: "2023",
            title: "Advanced Security Measures",
            description: "We implemented bank-grade security protocols and received ISO 27001 certification for our data protection practices."
        },
        {
            year: "2024",
            title: "5 Million Users",
            description: "We reached 5 million users and processed over 50 million transactions annually."
        },
        {
            year: "2025",
            title: "The Future Ahead",
            description: "Today, we continue to innovate and expand our services to bring fast, reliable recharge solutions to every corner of India."
        }
    ];

    const teamMembers = [
        {
            name: "Rajiv Sharma",
            position: "Founder & CEO",
            bio: "With over 15 years of experience in fintech, Rajiv founded Kashish India with a vision to simplify digital payments for all Indians.",
            image: "/team/ceo-placeholder.jpg"
        },
        {
            name: "Priya Patel",
            position: "Chief Technology Officer",
            bio: "Priya leads our technology initiatives, ensuring our platform remains secure, scalable, and user-friendly.",
            image: "/team/cto-placeholder.jpg"
        },
        {
            name: "Amit Verma",
            position: "Head of Customer Experience",
            bio: "Amit ensures that every user interaction with Kashish India is smooth, efficient, and exceeds expectations.",
            image: "/team/cx-placeholder.jpg"
        },
        {
            name: "Neha Gupta",
            position: "Marketing Director",
            bio: "Neha drives our brand strategy and leads initiatives to connect Kashish India with users across India.",
            image: "/team/marketing-placeholder.jpg"
        }
    ];

    return (
        <>
            <CommonNavigation />
            <main className="bg-white">
                {/* Header/Navigation would go here */}

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Hero Section */}
                    <div className="py-12 md:py-20 text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Our Story
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
                            We're on a mission to make digital recharges fast, reliable, and accessible for everyone in India.
                        </p>

                        <div className="relative h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden shadow-xl mx-auto max-w-5xl mb-10">
                            {/* Replace with actual office image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white text-2xl font-bold">
                                Kashish India Office Image
                            </div>
                        </div>
                    </div>

                    {/* Our Mission */}
                    <div className="py-12 md:py-16 bg-purple-50 rounded-3xl mb-16 px-4 sm:px-8 md:px-12">
                        <div className="max-w-4xl mx-auto">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-8">
                                <div className="p-3 bg-white rounded-full shadow-sm mb-4 sm:mb-0 sm:mr-6 self-center sm:self-auto">
                                    <Target className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                                </div>
                                <h2 className="text-xl sm:text-3xl font-bold text-gray-900 m-0 text-center sm:text-left">Our Mission</h2>
                            </div>

                            <p className="text-lg text-gray-700 mb-8">
                                At Kashish India, we believe that access to reliable digital services should be simple and hassle-free. Our mission is to provide the fastest, most reliable recharge solutions that empower every Indian to stay connected, entertained, and financially enabled in the digital age.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-green-100 p-2 rounded-lg mr-4">
                                            <CheckCircle className="w-6 h-6 text-green-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Reliability First</h3>
                                            <p className="text-gray-600">We ensure that every transaction is processed accurately and instantly, so you're never left waiting or wondering.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-blue-100 p-2 rounded-lg mr-4">
                                            <CheckCircle className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility for All</h3>
                                            <p className="text-gray-600">We design our platform to be user-friendly and accessible to everyone, regardless of their tech-savviness.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                                            <CheckCircle className="w-6 h-6 text-yellow-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Driven</h3>
                                            <p className="text-gray-600">We constantly innovate and improve our services to provide cutting-edge solutions that meet evolving customer needs.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white p-6 rounded-xl shadow-sm">
                                    <div className="flex items-start mb-4">
                                        <div className="bg-pink-100 p-2 rounded-lg mr-4">
                                            <CheckCircle className="w-6 h-6 text-pink-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">Customer Happiness</h3>
                                            <p className="text-gray-600">We measure our success by our customers' satisfaction, putting their needs at the center of everything we do.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Journey */}
                    <div className="py-12 md:py-16 mb-16">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    <BarChart className="w-8 h-8 text-blue-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                From a small startup to one of India's most trusted recharge platforms, here's how we've grown over the years.
                            </p>
                        </div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

                            {/* Timeline Items */}
                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <div key={index} className="relative">
                                        {/* Milestone Year (Desktop) */}
                                        <div className="hidden md:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-4 rounded-full">
                                                {milestone.year}
                                            </div>
                                        </div>

                                        {/* Milestone Content */}
                                        <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:ml-auto' : ''} bg-white p-6 rounded-xl shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all duration-300`}>
                                            {/* Milestone Year (Mobile) */}
                                            <div className="md:hidden bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-1 px-3 rounded-full w-max mb-3">
                                                {milestone.year}
                                            </div>

                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                                            <p className="text-gray-600">{milestone.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Our Team */}
                    <div className="py-12 md:py-16 mb-16">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-green-50 rounded-full">
                                    <Users className="w-8 h-8 text-green-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The Team Behind Kashish India</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Meet the dedicated professionals who work tirelessly to make Kashish India the best recharge platform in India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {teamMembers.map((member, index) => (
                                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border-2 border-gray-100 hover:border-purple-200 transition-all duration-300">
                                    <div className="h-48 bg-gray-200 relative">
                                        {/* Replace with actual team member photos */}
                                        <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                                            {member.name}'s Photo
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                                        <p className="text-purple-600 font-medium mb-3">{member.position}</p>
                                        <p className="text-gray-600 text-sm">{member.bio}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="py-12 md:py-16 bg-indigo-50 rounded-3xl mb-16 px-4 sm:px-8 md:px-12">
                        <div className="max-w-4xl mx-auto">
                            <div className="text-center mb-10">
                                <div className="flex justify-center mb-4">
                                    <div className="p-3 bg-white rounded-full shadow-sm">
                                        <Award className="w-8 h-8 text-indigo-600" />
                                    </div>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                    We've made a significant impact in the digital payment space in India.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">5M+</div>
                                    <p className="text-gray-700 font-medium">Active Users</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">₹150Cr</div>
                                    <p className="text-gray-700 font-medium">Monthly Transactions</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">4.8</div>
                                    <p className="text-gray-700 font-medium">App Rating</p>
                                </div>

                                <div className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">500+</div>
                                    <p className="text-gray-700 font-medium">Cities Served</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Testimonials */}
                    <div className="py-12 md:py-16 mb-16">
                        <div className="text-center mb-12">
                            <div className="flex justify-center mb-4">
                                <div className="p-3 bg-yellow-50 rounded-full">
                                    <Star className="w-8 h-8 text-yellow-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">What Our Users Say</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Don't just take our word for it - here's what our customers have to say about Kashish India.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "Kashish India has been my go-to recharge app for over 2 years now. The transactions are lightning fast, and I've never had a failed recharge. The cashback rewards are just the cherry on top!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500 text-xs">RP</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Ravi Patel</h4>
                                        <p className="text-gray-500 text-sm">Delhi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "I love how Kashish India remembers my previous recharges and suggests plans. The auto-recharge feature ensures I never run out of data. Their customer service is exceptional - they resolved my issue within minutes!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500 text-xs">SK</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Sunita Kapoor</h4>
                                        <p className="text-gray-500 text-sm">Mumbai</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <div className="flex text-yellow-400 mb-4">
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <p className="text-gray-600 italic mb-6">
                                    "As a small business owner, I need to manage multiple phone numbers. Kashish India makes it simple with their family account feature. The transaction history and receipt generation save me so much time during tax season!"
                                </p>
                                <div className="flex items-center">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full mr-3 flex items-center justify-center text-gray-500 text-xs">AR</div>
                                    <div>
                                        <h4 className="font-medium text-gray-900">Ahmed Rao</h4>
                                        <p className="text-gray-500 text-sm">Bangalore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div className="py-12 md:py-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl mb-16 px-4 sm:px-8 md:px-12 text-center">
                        <div className="max-w-3xl mx-auto text-white">
                            <div className="flex justify-center mb-6">
                                <div className="p-3 bg-white rounded-full shadow-sm">
                                    <ThumbsUp className="w-8 h-8 text-purple-600" />
                                </div>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Join the Kashish India Family Today</h2>
                            <p className="text-lg opacity-90 mb-8">
                                Experience the fastest, most reliable recharge service in India. Download our app or sign up on our website to get started.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#download" className="bg-white text-purple-600 hover:bg-gray-100 transition-colors duration-300 font-medium px-6 py-3 rounded-lg inline-flex items-center">
                                    Download the App
                                </a>
                                <Link href="/sign-up" className="bg-transparent hover:bg-purple-500 border-2 border-white transition-colors duration-300 font-medium px-6 py-3 rounded-lg inline-flex items-center">
                                    Sign Up Now
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Company Values */}
                    <div className="py-12 md:py-16 mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                These core principles guide everything we do at Kashish India, from developing new features to serving our customers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200 hover:shadow-md transition-all duration-300">
                                <div className="p-3 bg-white rounded-full shadow-sm w-max mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Speed & Efficiency</h3>
                                <p className="text-gray-600">
                                    We value your time. Our platform is designed to provide the fastest possible recharge experience with minimal steps and maximum efficiency.
                                </p>
                            </div>

                            <div className="p-6 bg-green-50 rounded-xl border-2 border-green-200 hover:shadow-md transition-all duration-300">
                                <div className="p-3 bg-white rounded-full shadow-sm w-max mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Trust & Security</h3>
                                <p className="text-gray-600">
                                    Your security is non-negotiable. We implement the highest standards of data protection and transaction security to keep your information safe.
                                </p>
                            </div>

                            <div className="p-6 bg-purple-50 rounded-xl border-2 border-purple-200 hover:shadow-md transition-all duration-300">
                                <div className="p-3 bg-white rounded-full shadow-sm w-max mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Transparency</h3>
                                <p className="text-gray-600">
                                    We believe in complete transparency in our operations. No hidden charges, no surprises - just clear, honest service you can count on.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <FooterSection />
        </>
    );
};

export default AboutUs;