'use client'
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import FooterSection from '../components/Footer';
import {
  HelpCircle,
  Search,
  CreditCard,
  Smartphone,
  Gift,
  User,
  Shield,
  RefreshCw,
  Clock,
  Zap,
  MessageSquare
} from 'lucide-react';
import CommonNavigation from '../components/CommonNavbar';

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const categories = [
    { id: 'all', name: 'All FAQs', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'account', name: 'Account', icon: <User className="w-5 h-5" /> },
    { id: 'payments', name: 'Payments', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'recharges', name: 'Recharges', icon: <Smartphone className="w-5 h-5" /> },
    { id: 'rewards', name: 'Rewards', icon: <Gift className="w-5 h-5" /> },
    { id: 'security', name: 'Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'refunds', name: 'Refunds', icon: <RefreshCw className="w-5 h-5" /> }
  ];

  const faqs = [
    {
      question: "How do I create a Kashish India account?",
      answer: "Creating a Kashish India account is simple! Download our app from the App Store or Google Play, or visit our website. Click on 'Sign Up', enter your mobile number, email address, and set a password. Verify your mobile number with the OTP sent to you, and your account is ready to use. You'll need to complete your KYC verification to unlock all features.",
      category: "account"
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, go to the login screen and click on 'Forgot Password'. Enter your registered mobile number or email address. We'll send you a verification code. Once verified, you can set a new password. For security reasons, make sure your new password is strong and unique.",
      category: "account"
    },
    {
      question: "Why do I need to complete KYC?",
      answer: "KYC (Know Your Customer) verification is required to comply with regulatory guidelines and ensure security. Completing KYC allows you to access higher transaction limits, wallet services, and additional features. To complete KYC, go to 'Profile' > 'Complete KYC' and follow the instructions to upload your identification documents.",
      category: "account"
    },
    {
      question: "What payment methods does Kashish India accept?",
      answer: "Kashish India accepts multiple payment methods including credit cards, debit cards, net banking, UPI, digital wallets like Paytm and PhonePe, and Kashish India wallet balance. You can save your preferred payment methods securely for faster transactions in the future.",
      category: "payments"
    },
    {
      question: "Are there any transaction charges?",
      answer: "Most recharge transactions on Kashish India are free of charge. However, certain premium services or payment methods may incur a small convenience fee, which will be clearly displayed before you confirm your transaction. We always ensure transparency in our pricing.",
      category: "payments"
    },
    {
      question: "Is it safe to save my card details on Kashish India?",
      answer: "Yes, it's absolutely safe. We use bank-grade encryption to protect your card information. We only store the tokenized version of your card details that comply with PCI DSS standards. Your CVV is never stored on our servers. You can delete saved cards anytime from the 'Payment Methods' section.",
      category: "security"
    },
    {
      question: "How do I recharge my mobile phone?",
      answer: "To recharge your mobile, log in to your Kashish India account, select 'Mobile Recharge', enter your mobile number, select your operator (or we'll detect it automatically), choose a plan or enter a custom amount, select your payment method, and confirm. Your recharge will be processed instantly, and you'll receive a confirmation message.",
      category: "recharges"
    },
    {
      question: "Can I schedule recurring recharges?",
      answer: "Yes! Kashish India allows you to set up Auto-Recharge for your mobile, DTH, and other services. Go to the respective recharge section, complete your recharge as usual, and before payment, toggle on the 'Set Auto-Recharge' option. You can configure the frequency, date, and payment method for your recurring recharges.",
      category: "recharges"
    },
    {
      question: "How do I view available recharge plans?",
      answer: "To view available plans, go to 'Mobile Recharge', enter your mobile number and select your operator. Tap on 'View Plans' to see all available recharge plans categorized by type (Unlimited, Data, Talktime, etc.). You can also use filters to find the perfect plan for your needs based on validity, data allowance, or price range.",
      category: "recharges"
    },
    {
      question: "What is Kashish India Wallet?",
      answer: "Kashish India Wallet is our digital wallet service that allows you to store money for faster transactions. You can add money to your wallet using any payment method, and use it for instant recharges and bill payments without entering payment details every time. Your wallet balance is secure and can be transferred back to your bank account anytime.",
      category: "payments"
    },
    {
      question: "How do I earn cashback and rewards?",
      answer: "You can earn cashback on various transactions based on ongoing offers. Additionally, every transaction earns you Kashish India Points. Special promotions, referrals, and completing certain activities like adding money to wallet or setting up auto-recharge also earn you rewards. Check the 'Rewards' section for all active offers.",
      category: "rewards"
    },
    {
      question: "How do I redeem my cashback and rewards?",
      answer: "Cashback is automatically added to your Kashish India wallet and can be used for future transactions. To redeem Kashish India Points, go to the 'Rewards' section, view your available points, and choose from redemption options like discount coupons, recharge vouchers, or converting to wallet balance. Some rewards have an expiry date, so check that before redeeming.",
      category: "rewards"
    },
    {
      question: "What happens if my recharge fails?",
      answer: "If your recharge fails, the amount is automatically refunded to your source payment method. For card/net banking payments, refunds typically take 3-5 business days to reflect. For wallet/UPI payments, refunds are usually instant. You can check the status of your refund in the 'Transaction History' section.",
      category: "refunds"
    },
    {
      question: "How do I check my transaction history?",
      answer: "To check your transaction history, go to 'My Account' and select 'Transaction History'. You can view all your past transactions, filter them by date range or transaction type, and download transaction statements. Each transaction entry shows the status, amount, payment method, and other relevant details.",
      category: "account"
    },
    {
      question: "What should I do if I entered the wrong number for recharge?",
      answer: "Unfortunately, once a recharge is processed, it cannot be reversed or transferred to another number. We recommend double-checking the mobile number before confirming the recharge. If you've entered a wrong number, contact our customer support immediately with your transaction details, and we'll try to help, though we cannot guarantee a refund.",
      category: "recharges"
    },
    {
      question: "How do I contact customer support?",
      answer: "You can contact our customer support through multiple channels: Call us at +91 9694426666 (9 AM - 9 PM, all days), email us at support@Kashish India.com, use the in-app chat support, or visit our Help Center page to fill out a contact form. For specific issues, you can also use dedicated email addresses mentioned in our Help Center.",
      category: "account"
    },
    {
      question: "Is there a limit on transaction amount?",
      answer: "Yes, there are transaction limits for security purposes. For basic KYC users, the limit is ₹10,000 per transaction and ₹50,000 per month. For fully verified users, the limit is ₹1,00,000 per transaction and ₹5,00,000 per month. These limits apply to recharges, bill payments, and wallet transfers.",
      category: "security"
    },
    {
      question: "How can I update my personal information?",
      answer: "To update your personal information, go to 'Profile Settings' in your account. You can update your name, email, address, and other details. Note that your registered mobile number cannot be changed as it's linked to your account. For updating KYC documents or changing your mobile number, please contact our customer support.",
      category: "account"
    },
    {
      question: "Why is my transaction pending?",
      answer: "Transactions may be pending due to network issues, bank processing delays, or verification requirements. Most pending transactions are resolved automatically within 30 minutes. If a transaction remains pending for more than 2 hours, you can check its status in 'Transaction History' or contact our customer support with the transaction ID.",
      category: "payments"
    },
    {
      question: "How do I refer friends to Kashish India?",
      answer: "To refer friends, go to 'Refer & Earn' in the app or website. Share your unique referral code or referral link with friends via WhatsApp, SMS, email, or social media. When your friends sign up using your code and complete their first transaction, both you and your friend will receive bonus rewards as per the current referral offer.",
      category: "rewards"
    }
  ];

  const filteredFAQs = faqs.filter(faq =>
    (activeCategory === 'all' || faq.category === activeCategory) &&
    (searchTerm === '' ||
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <>
    <CommonNavigation />
      <Head>
        <title>Frequently Asked Questions - Kashish India Recharge</title>
        <meta name="description" content="Find answers to common questions about Kashish India's recharge services, payments, rewards, and more." />
      </Head>

      <main className="bg-white">
        {/* Header/Navigation would go here */}

        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          {/* Header with gradient text */}
          <div className="text-center mb-8 sm:mb-12 px-4">
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our recharge services, payment methods, rewards, and more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${activeCategory === category.id
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  } transition-colors duration-200`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className={`border-2 rounded-lg overflow-hidden transition-all duration-200 ${openFAQ === index
                      ? 'border-purple-300 shadow-md'
                      : 'border-gray-200 hover:border-purple-200'
                      }`}
                  >
                    <button
                      className="flex justify-between items-center w-full px-6 py-4 text-left"
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="font-medium text-gray-900 pr-8">{faq.question}</span>
                      <span className="flex-shrink-0">
                        {openFAQ === index ? (
                          <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                        ) : (
                          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        )}
                      </span>
                    </button>
                    {openFAQ === index && (
                      <div className="px-6 pb-4 bg-gray-50">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <HelpCircle className="h-12 w-12 mx-auto text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">No FAQs Found</h3>
                <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions Section */}
          <div className="max-w-3xl mx-auto mt-16 p-6 bg-purple-50 rounded-xl border-2 border-purple-200">
            <div className="flex flex-col items-center text-center">
              <div className="p-3 bg-white rounded-full shadow-sm mb-4">
                <MessageSquare className="w-8 h-8 text-purple-500" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
              <p className="text-gray-600 mb-6">
                Can't find what you're looking for? Our support team is here to help you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/help-center" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700">
                  Contact Support
                </Link>
                <a href="mailto:support@Kashish India.com" className="inline-flex items-center justify-center px-5 py-3 border border-purple-300 text-base font-medium rounded-md text-purple-700 bg-white hover:bg-purple-50">
                  Email Us
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-16">
            <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">Quick Assistance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-blue-50 rounded-xl border-2 border-blue-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                  <Clock className="w-6 h-6 text-blue-500" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Transaction History</h3>
                <p className="text-sm text-gray-600">View your past transactions</p>
              </div>

              <div className="p-4 bg-green-50 rounded-xl border-2 border-green-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                  <RefreshCw className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Refund Status</h3>
                <p className="text-sm text-gray-600">Check your refund status</p>
              </div>

              <div className="p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                  <Gift className="w-6 h-6 text-yellow-500" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Rewards Center</h3>
                <p className="text-sm text-gray-600">View and redeem rewards</p>
              </div>

              <div className="p-4 bg-pink-50 rounded-xl border-2 border-pink-200 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="p-3 bg-white rounded-full shadow-sm mb-3">
                  <Zap className="w-6 h-6 text-pink-500" />
                </div>
                <h3 className="font-medium text-gray-900 mb-1">Quick Recharge</h3>
                <p className="text-sm text-gray-600">Recharge in seconds</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </>
  );
};

export default FAQPage;