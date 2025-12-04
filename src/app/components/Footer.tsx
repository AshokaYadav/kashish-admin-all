function FooterSection() {
    return (
        <footer className="bg-gray-50 border-t">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
                        <div className="mt-4 space-y-4">
                            <a href="/" className="text-base text-gray-500 hover:text-gray-900">Home</a>
                            <a href="/about" className="block text-base text-gray-500 hover:text-gray-900">About</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
                        <div className="mt-4 space-y-4">
                            <a href="/help-center" className="block text-base text-gray-500 hover:text-gray-900">Help Center</a>
                            <a href="/faq" className="block text-base text-gray-500 hover:text-gray-900">FAQs</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
                        <div className="mt-4 space-y-4">
                            <a href="/terms" className="block text-base text-gray-500 hover:text-gray-900">Terms</a>
                            <a href="/privacy" className="block text-base text-gray-500 hover:text-gray-900">Privacy</a>
                            <a href="/cookie-policy" className="block text-base text-gray-500 hover:text-gray-900">Cookies</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
                        <div className="mt-4 space-y-4">
                            {/* <a href="#" className="block text-base text-gray-500 hover:text-gray-900">Twitter</a> */}
                            <a href="https://www.facebook.com/share/1BucBXchji/" className="block text-base text-gray-500 hover:text-gray-900">Facebook</a>
                            <a href="https://www.instagram.com/kredpay?igsh=MTFkcW51dTI3ejVrcg==" className="block text-base text-gray-500 hover:text-gray-900">Instagram</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Contact Us</h3>
                        <div className="mt-4 space-y-4">
                            <p className="text-base text-gray-500">
                                S.F. 40-41 Jtm Mall<br />
                                Mahal Road Jagatpura<br />
                                Jaipur 302017
                            </p>
                            <p className="text-base text-gray-500">
                                <span className="font-medium">Support:</span><br />
                                <a href="tel:+919694426666" className="text-gray-500 hover:text-gray-900">+91 9694426666</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="text-base text-gray-400">
                        © 2025 Kashish India. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterSection;