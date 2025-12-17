import { useState } from "react";
import Head from "next/head";
import { format } from "date-fns";
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
import {
  MapPin,
  Calendar,
  AtSign,
  Globe,
  MoreVertical,
  Search,
  RefreshCw,
} from "lucide-react";
import DateRangeFilter from "@/components/admin/DateRangeFilter";

// export default function LoginHistoryHeader({ searchQuery, setSearchQuery, refetch }: { searchQuery: string, setSearchQuery: (val: string) => void; refetch: ()=>void }) {
//     return (
//         <>
//             <div className="flex justify-between items-center">
//                 <div>
//                     <CardTitle className="text-2xl font-bold">Login History</CardTitle>
//                     <CardDescription>
//                         Track all login activities on your account
//                     </CardDescription>
//                 </div>
//                 <Button variant="outline" size="icon" title="Refresh" onClick={refetch}>
//                     <RefreshCw className="h-4 w-4" />
//                 </Button>
//             </div>

//             <div className="relative mt-4">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//                 <Input
//                     placeholder="Search by email or IP address"
//                     value={searchQuery}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                     className="pl-10"
//                 />
//             </div>
//         </>
//     );
// };

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { CardTitle, CardDescription } from "@/components/ui/card";
// import { Search, RefreshCw, Calendar } from "lucide-react";
// import { CardTitle, CardDescription } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Search, RefreshCw } from "lucide-react";
// import DateRangeFilter from "@/components/DateRangeFilter";

type Props = {
  // Search
  showSearch?: boolean;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;

  // Date range
  showDateRange?: boolean;
  startDate?: string;
  endDate?: string;
  onDateChange?: (key: "startDate" | "endDate", value: string) => void;

  // Refresh
  showRefresh?: boolean;
  onRefresh?: () => void;
};

export default function LoginHistoryHeader({
  showSearch,
  searchQuery,
  onSearchChange,

  showDateRange,
  startDate,
  endDate,
  onDateChange,

  showRefresh,
  onRefresh,
}: Props) {
  return (
    <div className="space-y-4">
      {/* 🔹 Title + Refresh */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-2xl font-semibold">
            Login History
          </CardTitle>
          <CardDescription className="text-sm">
            Track all login activities on your account
          </CardDescription>
        </div>

        {showRefresh && (
          <Button variant="outline" size="icon" onClick={onRefresh}>
            <RefreshCw className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* 🔹 Filters */}
      <div className="flex flex-wrap items-center gap-3">
          {/* 📅 Custom Date Range Filter */}
        {showDateRange && (
          <DateRangeFilter
            startDate={startDate || ""}
            endDate={endDate || ""}
            onChange={(key, value) => {
              console.log(value);
              //                 14/12/2025  eshi value aa raha hai yaha per
              // VM11367 Header.tsx:105 14/12/2025
              onDateChange?.(key, value);
            }}
          />
        )}
        {/* 🔍 Search */}
        {showSearch && (
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search by email or IP"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="pl-10"
            />
          </div>
        )}

      
      </div>
    </div>
  );
}
