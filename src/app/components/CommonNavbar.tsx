import Link from "next/link";


function CommonNavigation() {
    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link href='/'>
                            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Kashish India
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default CommonNavigation;