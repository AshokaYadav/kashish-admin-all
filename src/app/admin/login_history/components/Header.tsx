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

export default function LoginHistoryHeader({ searchQuery, setSearchQuery, refetch }: { searchQuery: string, setSearchQuery: (val: string) => void; refetch: ()=>void }) {
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <CardTitle className="text-2xl font-bold">Login History</CardTitle>
                    <CardDescription>
                        Track all login activities on your account
                    </CardDescription>
                </div>
                <Button variant="outline" size="icon" title="Refresh" onClick={refetch}>
                    <RefreshCw className="h-4 w-4" />
                </Button>
            </div>

            <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Search by email or IP address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                />
            </div>
        </>
    );
};