import {
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { MapPin, Calendar, AtSign, Globe } from "lucide-react";

export default function LoginHistoryTableHeader() {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-[180px]">
                    <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" /> Date & Time
                    </div>
                </TableHead>
                <TableHead>
                    <div className="flex items-center gap-1">
                        <AtSign className="h-4 w-4" /> Email
                    </div>
                </TableHead>
                <TableHead>
                    <div className="flex items-center gap-1">
                        <Globe className="h-4 w-4" /> IP Address
                    </div>
                </TableHead>
                <TableHead>
                    <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" /> Location
                    </div>
                </TableHead>
                <TableHead className="w-[60px]"></TableHead>
            </TableRow>
        </TableHeader>
    );
};