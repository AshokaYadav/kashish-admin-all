import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterSection from '../components/Footer';
import { Shield, File, Bell, Users, Zap, Lock, Settings, AlertCircle, RefreshCw, User, PhoneCall } from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const PrivacyPolicy = () => {
    return (
        <>
            <CommonNavigation />
            <Head>
                <title>Privacy Policy - Kashish India Recharge</title>
                <meta name="description" content="Learn how Kashish India protects your privacy while providing fast and reliable recharge solutions." />
            </Head>

            <main className="bg-white">
                {/* Header/Navigation would go here */}

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* Header with gradient text like in features */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Your trust is important to us. Learn how we protect your information while providing fast and reliable recharge solutions.
                        </p>
                        <p className="text-gray-500 mt-4"><strong>Last Updated:</strong> March 7, 2025</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12 p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Shield className="w-10 h-10 text-purple-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Introduction</h2>
                            </div>
                            <p className="text-gray-600">
                                Welcome to Kashish India ("we," "our," or "us"). We are committed to protecting your privacy and ensuring
                                you have a positive experience when using our fast and reliable recharge solutions. This Privacy Policy
                                explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-blue-50 border-2 border-blue-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <File className="w-10 h-10 text-blue-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Information We Collect</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Personal Information</h3>
                            <p className="text-gray-600">
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Create an account</li>
                                <li>Complete a transaction</li>
                                <li>Sign up for our newsletter</li>
                                <li>Contact our support team</li>
                                <li>Participate in promotions or surveys</li>
                            </ul>

                            <p className="text-gray-600">This information may include:</p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Name, email address, phone number</li>
                                <li>Billing information and payment details</li>
                                <li>Transaction history</li>
                                <li>Device information and IP address</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Automatically Collected Information</h3>
                            <p className="text-gray-600">
                                When you use our website or services, we may automatically collect certain information about your device, including:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Browser type and version</li>
                                <li>Operating system</li>
                                <li>IP address</li>
                                <li>Device ID</li>
                                <li>Browsing actions and patterns</li>
                                <li>Time spent on pages</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Transaction Information</h3>
                            <p className="text-gray-600">
                                When you perform recharges or view plans and offers, we collect information about:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Service provider selections</li>
                                <li>Plan preferences</li>
                                <li>Recharge amounts</li>
                                <li>Payment methods</li>
                                <li>Transaction timestamps</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-green-50 border-2 border-green-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Bell className="w-10 h-10 text-green-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">How We Use Your Information</h2>
                            </div>
                            <p className="text-gray-600">We use the information we collect to:</p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>Process recharge transactions quickly and reliably</li>
                                <li>Provide personalized plan recommendations and offers</li>
                                <li>Improve our website functionality and user experience</li>
                                <li>Send transaction confirmations and receipts</li>
                                <li>Notify you about special promotions and new features</li>
                                <li>Respond to customer service inquiries</li>
                                <li>Analyze usage patterns to enhance our services</li>
                                <li>Detect and prevent fraudulent transactions</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-yellow-50 border-2 border-yellow-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Users className="w-10 h-10 text-yellow-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Information Sharing and Disclosure</h2>
                            </div>
                            <p className="text-gray-600">We may share your information with:</p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Service Providers</h3>
                            <p className="text-gray-600">
                                We work with trusted third-party service providers who perform services on our behalf, such as payment processing,
                                data analysis, email delivery, and customer service. These providers have access to your personal information only
                                to perform these tasks on our behalf and are obligated to protect your information.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Telecom and Service Partners</h3>
                            <p className="text-gray-600">
                                To process your recharges and provide plan information, we share necessary transaction details with telecom
                                operators and service providers.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Legal Requirements</h3>
                            <p className="text-gray-600">
                                We may disclose your information if required to do so by law or in response to valid requests by public authorities.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Business Transfers</h3>
                            <p className="text-gray-600">
                                If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be
                                transferred as part of that transaction.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-pink-50 border-2 border-pink-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Zap className="w-10 h-10 text-pink-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Recharge Services, Plans and Offers</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Our Services</h3>
                            <p className="text-gray-600">
                                Kashish India provides multiple fast and reliable solutions for mobile recharges, DTH recharges, bill payments,
                                and other digital services. Our platform is designed to offer:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li><strong>Instant Recharges</strong>: Process transactions quickly with minimal wait time</li>
                                <li><strong>Multiple Payment Options</strong>: Credit cards, debit cards, UPI, net banking, and digital wallets</li>
                                <li><strong>24/7 Availability</strong>: Recharge services available round the clock</li>
                                <li><strong>Secure Transactions</strong>: End-to-end encryption for all payment processes</li>
                                <li><strong>Customer Support</strong>: Dedicated support for transaction-related queries</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Plans and Offers Information</h3>
                            <p className="text-gray-600">
                                Our website displays the latest plans and offers from various service providers. Please note:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Plan and offer information is sourced directly from service providers and updated regularly</li>
                                <li>We may analyze your usage patterns and preferences to recommend relevant plans</li>
                                <li>You may receive notifications about new plans and special offers based on your preferences</li>
                                <li>When you view specific plans, we record this information to improve our recommendations</li>
                                <li>Clicking on plan details may redirect you to service provider websites in some cases</li>
                            </ul>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cashback and Rewards</h3>
                            <p className="text-gray-600">
                                Information regarding our cashback programs, reward points, and promotional offers is processed according to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Specific terms and conditions of each offer</li>
                                <li>Eligibility criteria based on transaction history</li>
                                <li>Usage patterns and frequency of recharges</li>
                                <li>Expiration dates and redemption requirements</li>
                            </ul>
                            <p className="text-gray-600">
                                We retain information about rewards earned and redeemed to maintain accurate records of your benefits.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-indigo-50 border-2 border-indigo-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Lock className="w-10 h-10 text-indigo-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Data Security</h2>
                            </div>
                            <p className="text-gray-600">
                                We implement appropriate technical and organizational measures to protect the security of your personal information.
                                However, please be aware that no method of transmission over the Internet or method of electronic storage is 100% secure.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-teal-50 border-2 border-teal-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <Settings className="w-10 h-10 text-teal-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Your Choices</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Information</h3>
                            <p className="text-gray-600">
                                You can review and update your account information by logging into your account settings.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Marketing Communications</h3>
                            <p className="text-gray-600">
                                You can opt out of receiving promotional emails by following the unsubscribe instructions in any email we send.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Cookies</h3>
                            <p className="text-gray-600">
                                Most web browsers are set to accept cookies by default. You can choose to set your browser to refuse cookies
                                or to alert you when cookies are being sent.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-red-50 border-2 border-red-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <AlertCircle className="w-10 h-10 text-red-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Children's Privacy</h2>
                            </div>
                            <p className="text-gray-600">
                                Our services are not intended for individuals under the age of 18. We do not knowingly collect
                                personal information from children.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-amber-50 border-2 border-amber-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <RefreshCw className="w-10 h-10 text-amber-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Updates to This Privacy Policy</h2>
                            </div>
                            <p className="text-gray-600">
                                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated
                                "Last Updated" date. We encourage you to review this Privacy Policy frequently to stay informed about
                                how we are protecting your information.
                            </p>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-cyan-50 border-2 border-cyan-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <User className="w-10 h-10 text-cyan-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Your Rights</h2>
                            </div>
                            <p className="text-gray-600">
                                Depending on your location, you may have certain rights regarding your personal information, including:
                            </p>
                            <ul className="list-disc pl-6 mb-6 text-gray-600">
                                <li>The right to access your personal information</li>
                                <li>The right to correct inaccurate information</li>
                                <li>The right to delete your personal information</li>
                                <li>The right to restrict or object to processing</li>
                                <li>The right to data portability</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mr-4">
                                    <PhoneCall className="w-10 h-10 text-purple-500" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800 m-0">Contact Us</h2>
                            </div>
                            <p className="text-gray-600">
                                If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-4 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                                <p className="font-medium text-gray-800">Kashish India</p>
                                <p className="text-gray-600">S.F. 40-41 Jtm Mall<br />
                                    Mahal Road Jagatpura<br />
                                    Jaipur 302017</p>
                                <p className="mt-4">
                                    <strong>Support Number:</strong> <a href="tel:+919694426666" className="text-purple-600 hover:text-purple-800">+91 9694426666</a><br />
                                    <strong>Email:</strong> <a href="mailto:privacy@Kashish India.com" className="text-purple-600 hover:text-purple-800">support@kashishindiapvtltd.com</a>
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <FooterSection />
        </>
    );
};

export default PrivacyPolicy;