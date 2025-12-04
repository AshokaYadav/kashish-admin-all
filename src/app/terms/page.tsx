import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterSection from '../components/Footer';
import {
    FileText,
    CreditCard,
    Globe,
    AlertTriangle,
    UserCheck,
    ShieldCheck,
    BookOpen,
    Scale,
    Award,
    Lock
} from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const TermsOfService = () => {
    return (
        <>
            <CommonNavigation />
            <Head>
                <title>Terms of Service - Kashish India Recharge</title>
                <meta name="description" content="Terms and conditions for using Kashish India's fast and reliable recharge services." />
            </Head>

            <main className="bg-white">
                {/* Header/Navigation would go here */}

                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    {/* Header with gradient text like in features */}
                    <div className="text-center mb-8 sm:mb-12 px-4">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                            Terms of Service
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                            Please read these terms carefully before using our fast and reliable recharge services.
                        </p>
                        <p className="text-gray-500 mt-4"><strong>Last Updated:</strong> March 7, 2025</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-blue-50 border-2 border-blue-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Introduction</h2>
                            </div>
                            <p className="text-gray-600">
                                Welcome to Kashish India ("we," "our," or "us"). By accessing or using our website, mobile applications,
                                or any services offered through them (collectively referred to as the "Services"), you agree to be bound
                                by these Terms of Service. If you do not agree to these terms, please do not use our Services.
                            </p>
                            <p className="text-gray-600">
                                These Terms of Service constitute a legally binding agreement between you and Kashish India regarding
                                your use of our fast and reliable recharge solutions and related services.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">User Accounts</h2>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Creation</h3>
                            <p className="text-gray-600">
                                To use certain features of our Services, you may need to create an account. You agree to provide
                                accurate, current, and complete information during the registration process and to update such
                                information to keep it accurate, current, and complete.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Security</h3>
                            <p className="text-gray-600">
                                You are responsible for maintaining the confidentiality of your account credentials and for all
                                activities that occur under your account. You agree to notify us immediately of any unauthorized
                                use of your account or any other breach of security.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Account Termination</h3>
                            <p className="text-gray-600">
                                We reserve the right to suspend or terminate your account at our sole discretion, without notice,
                                for conduct that we believe violates these Terms of Service or is harmful to other users, us,
                                or third parties, or for any other reason.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-pink-50 border-2 border-pink-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <CreditCard className="w-8 h-8 sm:w-10 sm:h-10 text-pink-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Payment Terms</h2>
                            </div>
                            <p className="text-gray-600">
                                By using our recharge services, you agree to pay all fees and charges associated with your transactions.
                                You authorize us to charge the payment method you provide for any recharges or bill payments you initiate.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Pricing and Fees</h3>
                            <p className="text-gray-600">
                                All prices and fees are displayed before you complete a transaction. We may update our pricing at any time.
                                We may charge service fees, convenience fees, or processing fees in addition to the recharge amount, which
                                will be clearly displayed before you confirm your transaction.
                            </p>

                            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Refunds and Cancellations</h3>
                            <p className="text-gray-600">
                                Due to the instant nature of digital recharges and bill payments, most transactions cannot be canceled
                                once processed. Refunds are subject to our Refund Policy and the policies of the service providers.
                                Failed transactions will be automatically refunded to your payment method within 5-7 business days.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-green-50 border-2 border-green-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Award className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Rewards and Cashback</h2>
                            </div>
                            <p className="text-gray-600">
                                Kashish India offers various rewards, cashback, and promotional offers to its users. The following terms apply:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Eligibility for rewards and cashback is determined at our sole discretion</li>
                                <li>Rewards and cashback may be subject to minimum transaction amounts</li>
                                <li>Promotional offers have specific validity periods and usage conditions</li>
                                <li>Cashback may be credited to your Kashish India wallet and may have expiration dates</li>
                                <li>We reserve the right to modify or discontinue any rewards program or offer at any time</li>
                                <li>Abuse of promotional offers or rewards systems may result in account termination</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-yellow-50 border-2 border-yellow-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Globe className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Service Availability</h2>
                            </div>
                            <p className="text-gray-600">
                                We strive to provide uninterrupted services 24/7, but we do not guarantee that our Services will always
                                be available, uninterrupted, or error-free. We may experience hardware, software, or other problems,
                                resulting in service interruptions, delays, or errors.
                            </p>
                            <p className="text-gray-600 mt-4">
                                We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify our Services
                                at any time without prior notice. You agree that we shall not be liable to you or to any third party for
                                any modification, suspension, or discontinuance of our Services.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-indigo-50 border-2 border-indigo-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Lock className="w-8 h-8 sm:w-10 sm:h-10 text-indigo-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Data Usage and Privacy</h2>
                            </div>
                            <p className="text-gray-600">
                                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                                personal information. By using our Services, you agree to our collection and use of your data as
                                described in our Privacy Policy.
                            </p>
                            <p className="text-gray-600 mt-4">
                                We may use your contact information to send you transaction confirmations, service updates, promotional
                                offers, and other communications. You can opt out of marketing communications at any time.
                            </p>
                            <p className="text-gray-600 mt-4">
                                For complete details about our data practices, please review our <Link href="/privacy" className="text-indigo-600 hover:text-indigo-800">Privacy Policy</Link>.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-red-50 border-2 border-red-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <AlertTriangle className="w-8 h-8 sm:w-10 sm:h-10 text-red-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Prohibited Activities</h2>
                            </div>
                            <p className="text-gray-600">
                                When using our Services, you agree not to:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Use our Services for any illegal purpose</li>
                                <li>Attempt to gain unauthorized access to our systems or other users' accounts</li>
                                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                                <li>Attempt to reverse engineer, decompile, or disassemble any portion of our Services</li>
                                <li>Use our Services to process transactions for others without our explicit permission</li>
                                <li>Provide false, inaccurate, or misleading information</li>
                                <li>Use automated means to access or use our Services without our permission</li>
                            </ul>
                            <p className="text-gray-600">
                                Violation of these prohibitions may result in termination of your account and potential legal action.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-teal-50 border-2 border-teal-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-teal-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Limitation of Liability</h2>
                            </div>
                            <p className="text-gray-600">
                                To the maximum extent permitted by law, Kashish India and its affiliates, officers, employees, agents,
                                partners, and licensors shall not be liable for any indirect, incidental, special, consequential,
                                or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other
                                intangible losses resulting from:
                            </p>
                            <ul className="list-disc pl-6 mb-4 text-gray-600">
                                <li>Your use or inability to use our Services</li>
                                <li>Any unauthorized access to or use of our servers and/or personal information</li>
                                <li>Any interruption or cessation of transmission to or from our Services</li>
                                <li>Any bugs, viruses, or other harmful code that may be transmitted through our Services</li>
                                <li>Any errors or omissions in content or for any loss or damage incurred as a result of using our Services</li>
                            </ul>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-amber-50 border-2 border-amber-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <Scale className="w-8 h-8 sm:w-10 sm:h-10 text-amber-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Dispute Resolution</h2>
                            </div>
                            <p className="text-gray-600">
                                Any disputes arising from or relating to these Terms of Service or your use of our Services shall
                                be resolved through the following process:
                            </p>
                            <ol className="list-decimal pl-6 mb-4 text-gray-600">
                                <li><strong>Informal Resolution:</strong> Contact our customer support team to attempt to resolve the issue.</li>
                                <li><strong>Formal Complaint:</strong> If informal resolution is unsuccessful, submit a formal written complaint.</li>
                                <li><strong>Arbitration:</strong> If the complaint cannot be resolved, disputes shall be resolved through binding arbitration.</li>
                            </ol>
                            <p className="text-gray-600">
                                All proceedings shall be conducted in Jaipur, Rajasthan, India, and shall be governed by Indian law.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-cyan-50 border-2 border-cyan-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Changes to Terms</h2>
                            </div>
                            <p className="text-gray-600">
                                We reserve the right to modify these Terms of Service at any time. We will provide notice of any
                                material changes by posting the updated terms on our website or through other communication channels.
                                Your continued use of our Services after such modifications constitutes your acceptance of the revised Terms.
                            </p>
                            <p className="text-gray-600 mt-4">
                                It is your responsibility to review these Terms periodically for any updates or changes.
                            </p>
                        </section>

                        <section className="mb-12 p-4 sm:p-8 rounded-xl bg-purple-50 border-2 border-purple-200">
                            <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                                <div className="p-3 bg-white rounded-xl shadow-sm mb-4 sm:mb-0 sm:mr-4 self-center sm:self-auto">
                                    <FileText className="w-8 h-8 sm:w-10 sm:h-10 text-purple-500" />
                                </div>
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 m-0 text-center sm:text-left">Contact Us</h2>
                            </div>
                            <p className="text-gray-600">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="mt-4 bg-white p-4 sm:p-6 rounded-lg shadow-sm border border-gray-200">
                                <p className="font-medium text-gray-800">Kashish India</p>
                                <p className="text-gray-600">S.F. 40-41 Jtm Mall<br />
                                    Mahal Road Jagatpura<br />
                                    Jaipur 302017</p>
                                <p className="mt-4">
                                    <strong>Support Number:</strong> <a href="tel:+919694426666" className="text-purple-600 hover:text-purple-800 block sm:inline">+91 9694426666</a><br />
                                    <strong>Email:</strong> <a href="mailto:terms@Kashish India.com" className="text-purple-600 hover:text-purple-800 block sm:inline break-words">support@kashishindiapvtltd.com</a>
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

export default TermsOfService;