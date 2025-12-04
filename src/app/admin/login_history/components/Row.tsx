import { format } from 'date-fns';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";


export default function LoginHistoryRow({ date, email, ip, long, lat }: { date: Date, email: string, ip: string, long: string, lat: string }) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                {format(date, 'PPP')}
                <div className="text-sm text-muted-foreground">
                    {format(date, 'p')}
                </div>
            </TableCell>
            <TableCell>{email}</TableCell>
            <TableCell>{ip}</TableCell>
            <TableCell>
                {lat} , {long}
            </TableCell>
        </TableRow>
    );
};
