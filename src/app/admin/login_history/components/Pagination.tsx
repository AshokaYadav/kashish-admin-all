import { useState } from 'react';
import Head from 'next/head';
import { format } from 'date-fns';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, AtSign, Globe, MoreVertical, Search, RefreshCw } from "lucide-react";

export default function LoginHistoryPagination({ currentPage, totalPages, setCurrentPage }: { currentPage: number, totalPages: number, setCurrentPage: (val: number) => void }) {
    if (totalPages <= 1) return null;

    return (
        <div className="mt-4">
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                        />
                    </PaginationItem>

                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <PaginationLink
                                onClick={() => setCurrentPage(index + 1)}
                                isActive={currentPage === index + 1}
                            >
                                {index + 1}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    <PaginationItem>
                        <PaginationNext
                            onClick={() => setCurrentPage(Math.min(currentPage + 1, totalPages))}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
};