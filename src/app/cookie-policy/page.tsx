import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterSection from '../components/Footer';
import {
    Cookie,
    ShieldCheck,
    CheckCircle,
    XCircle,
    Eye,
    Lock,
    Settings,
    FileText,
    PhoneCall
} from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const CookiePolicy = () => {
    return (
        <>
            <CommonNavigation />
            <Head>
                <title>Cookie Policy - Kashish India Recharge</title>
                <meta name="description" content="Learn about Kashish India's cookie policy and how we protect your data." />
            </Head>

            <main className="bg-white">
                {/* Header/Navigation would go here */}

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* Header with gradient text like in features */}
                    <div className="text-center mb-8 sm:mb-12 px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Cookie Policy
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            We respect your privacy. Learn how we use cookies and protect your data while providing fast and reliable recharge services.
                        </p>
                        <p className="text-gray-500 mt-4"><strong>Last Updated:</strong> March 7, 2025</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-blue-50 border-2 border-blue-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Cookie className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">What Are Cookies?</h2>
                            </div>
                            <p className="text-gray-600">
                                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners. Cookies enhance your browsing experience by:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Remembering your preferences and settings</li>
                                <li>Ensuring secure login sessions</li>
                                <li>Enabling essential website functions</li>
                                <li>Helping us understand how you use our services</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-green-50 border-2 border-green-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Essential Cookies Only</h2>
                            </div>
                            <p className="text-gray-600">
                                <strong>We only use essential cookies that are necessary for our website to function properly.</strong> Unlike many other websites, we do not use any marketing, advertising, or analytics cookies that track your behavior across the web.
                            </p>
                            <p className="text-gray-600 mt-4">
                                Our essential cookies are used exclusively for:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Maintaining your session while logged in</li>
                                <li>Remembering your basic preferences</li>
                                <li>Ensuring secure transactions</li>
                                <li>Preventing fraudulent activities</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                These cookies are strictly necessary for providing our recharge services and cannot be disabled without affecting the functionality of our website.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-red-50 border-2 border-red-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <XCircle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">No Unwanted Cookies</h2>
                            </div>
                            <p className="text-gray-600">
                                <strong>We do not use any unnecessary or unwanted cookies.</strong> This means we avoid:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li><strong>Advertising cookies</strong> that track your browsing habits to display targeted advertisements</li>
                                <li><strong>Third-party analytics cookies</strong> that collect detailed information about your browsing behavior</li>
                                <li><strong>Social media cookies</strong> that connect to social networks and potentially share information about your visit</li>
                                <li><strong>Marketing cookies</strong> that are used to build profiles of your interests</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                We believe in minimizing data collection and only gathering what's absolutely necessary to provide our recharge services.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">No Third-Party Sharing</h2>
                            </div>
                            <p className="text-gray-600">
                                <strong>We never share your data with third parties for marketing or advertising purposes.</strong> Your information is strictly used to provide and improve our recharge services.
                            </p>
                            <p className="text-gray-600 mt-4">
                                The only instances where your data might be shared include:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>With telecom operators and service providers to process your recharges (limited to transaction data only)</li>
                                <li>With payment processors to complete financial transactions</li>
                                <li>When required by law or to comply with legal processes</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                In all cases, we share only the minimum required information and ensure appropriate safeguards are in place to protect your data.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-yellow-50 border-2 border-yellow-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Eye className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Transparency</h2>
                            </div>
                            <p className="text-gray-600">
                                We are committed to transparency regarding our data practices. Here's what you should know about our use of cookies:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>We only store cookies for as long as necessary to fulfill their purpose</li>
                                <li>Our session cookies expire when you close your browser</li>
                                <li>Persistent cookies used for security purposes are typically valid for 30 days</li>
                                <li>We regularly audit our cookies to ensure we're only using what's necessary</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                You can view and manage cookies stored by your browser by accessing your browser settings. Most modern browsers allow you to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>View stored cookies</li>
                                <li>Delete specific cookies</li>
                                <li>Block cookies from specific websites</li>
                                <li>Block third-party cookies</li>
                                <li>Clear all cookies when you close your browser</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-indigo-50 border-2 border-indigo-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Data Security</h2>
                            </div>
                            <p className="text-gray-600">
                                We implement robust security measures to protect the data stored in cookies and your overall account information:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>All cookie data is encrypted</li>
                                <li>We use secure HTTPS connections across our entire website</li>
                                <li>Regular security audits are conducted on our systems</li>
                                <li>We implement industry-standard security practices</li>
                                <li>Access to user data is strictly limited to authorized personnel</li>
                            </ul>
                            <p className="text-gray-600 mt-4">
                                We are committed to protecting your information and maintaining your trust while providing fast and reliable recharge services.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-teal-50 border-2 border-teal-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Settings className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Managing Cookies</h2>
                            </div>
                            <p className="text-gray-600">
                                While we only use essential cookies, you still have control over your browser's cookie settings. Here's how you can manage cookies in popular browsers:
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Google Chrome</h3>
                            <p className="text-gray-600">
                                {`Menu > Settings > Privacy and security > Cookies and other site data`}
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Mozilla Firefox</h3>
                            <p className="text-gray-600">
                                {`Menu > Options > Privacy & Security > Cookies and Site Data`}
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Safari</h3>
                            <p className="text-gray-600">
                                {`Preferences > Privacy > Cookies and website data`}
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Microsoft Edge</h3>
                            <p className="text-gray-600">
                                {`Settings > Cookies and site permissions > Manage and delete cookies and site data`}
                            </p>

                            <p className="text-gray-600 mt-6">
                                <strong>Please note:</strong> Blocking essential cookies may affect your ability to use our service. Since we only use essential cookies, we recommend allowing cookies from our website for the best experience.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-pink-50 border-2 border-pink-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Changes to This Policy</h2>
                            </div>
                            <p className="text-gray-600">
                                We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last Updated" date.
                            </p>
                            <p className="text-gray-600 mt-4">
                                We encourage you to review this Cookie Policy periodically for any changes. Changes to this Cookie Policy are effective when they are posted on this page.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <PhoneCall className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Contact Us</h2>
                            </div>
                            <p className="text-gray-600">
                                If you have any questions about our Cookie Policy, please contact us at:
                            </p>
                            <div className="mt-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                                <p className="font-medium text-gray-800">Kashish India</p>
                                <p className="text-gray-600">S.F. 40-41 Jtm Mall<br />
                                    Mahal Road Jagatpura<br />
                                    Jaipur 302017</p>
                                <p className="mt-4">
                                    <strong>Support Number:</strong> <a href="tel:+919694426666" className="text-purple-600 hover:text-purple-800 block sm:inline">+91 9694426666</a><br />
                                    <strong>Email:</strong> <a href="mailto:privacy@Kashish India.com" className="text-purple-600 hover:text-purple-800 block sm:inline break-words">support@kashishindiapvtltd.com</a>
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

export default CookiePolicy;