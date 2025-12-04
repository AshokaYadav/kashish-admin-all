import { memo } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export const Pagination = memo(function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: PaginationProps) {
    return (
        <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-500">
                Page {currentPage} of {totalPages}
            </div>
            <div className="flex items-center gap-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>

                {Array.from({ length: Math.min(3, totalPages) }, (_, i) => {
                    const pageNum = i + 1;
                    return (
                        <Button
                            key={pageNum}
                            variant={currentPage === pageNum ? "default" : "outline"}
                            size="sm"
                            onClick={() => onPageChange(pageNum)}
                        >
                            {pageNum}
                        </Button>
                    );
                })}

                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
        </div>
    );
});
