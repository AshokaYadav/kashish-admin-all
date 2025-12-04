'use client'
import { useRouter } from "next/navigation";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
            <div className="text-center space-y-6 px-4">
                {/* 404 Text */}
                <h1 className="text-9xl font-bold text-gray-900">404</h1>

                {/* Not Found Icon/Image */}
                <div className="relative">
                    <div className="h-32 flex items-center justify-center">
                        <span className="text-8xl">🤔</span>
                    </div>
                </div>

                {/* Error Message */}
                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
                    <p className="text-gray-600 max-w-sm mx-auto">
                        Oops! The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                    <Button
                        onClick={() => router.back()}
                        variant="outline"
                        className="flex items-center gap-2"
                    >
                        Go Back
                    </Button>
                    <Button
                        onClick={() => router.push("/")}
                        className="flex items-center gap-2"
                    >
                        <HomeIcon className="w-4 h-4" />
                        Return Home
                    </Button>
                </div>
            </div>
        </div>
    );
}