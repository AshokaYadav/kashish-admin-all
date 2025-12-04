import { Button } from "@/components/ui/button";
import { logout } from "@/store/features/auth/authSlice";
import { useDispatch } from "react-redux";

export interface INavProps {
    isLoggedIn: boolean;

    showLoginDialog: () => void;
}

function Navigation({ isLoggedIn, showLoginDialog }: INavProps) {
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(logout());

    const handleOnClick = () => {
        (isLoggedIn ? handleLogout : showLoginDialog)();
    }
    return (
        <nav className="bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0 flex items-center cursor-default">
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          <h1>  Kashish India</h1>
                        </span>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-600 hover:text-gray-900 px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Features</a>
                        <a href="#services" className="text-gray-600 hover:text-gray-900 px-2 py-1 relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500 after:transform after:scale-x-0 hover:after:scale-x-100 after:transition-transform">Services</a>
                        <Button className="bg-purple-600 text-white hover:bg-purple-700" onClick={handleOnClick}>
                            {isLoggedIn ? 'Logout' : 'Login'}
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;