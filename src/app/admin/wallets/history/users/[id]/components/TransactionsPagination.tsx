// components/TransactionPagination.tsx
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface TransactionPaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function TransactionPagination({ currentPage, totalPages, onPageChange }: TransactionPaginationProps) {
    return (
        <div className="flex justify-center mt-6">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            href="#"
                            onClick={() => onPageChange(currentPage - 1)}
                            className={`${currentPage === 1 ? 'pointer-events-none opacity-50' : ''} bg-white`}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <PaginationItem key={page}>
                            <PaginationLink
                                href="#"
                                onClick={() => onPageChange(page)}
                                isActive={currentPage === page}
                                className="bg-white"
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            href="#"
                            onClick={() => onPageChange(currentPage + 1)}
                            className={`${currentPage === totalPages ? 'pointer-events-none opacity-50' : ''} bg-white`}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}