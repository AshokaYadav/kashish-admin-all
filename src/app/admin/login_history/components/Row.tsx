import { format } from 'date-fns';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";


export default function LoginHistoryRow({ date, email,phone='', name='',device_info='', ip, long, lat }: { date: Date, email: string,name?:string,phone?:string,device_info?:string, ip: string, long: string, lat: string }) {
    return (
        <TableRow>
            <TableCell className="font-medium">
                {format(date, 'PPP')}
                <div className="text-sm text-muted-foreground">
                    {format(date, 'p')}
                </div>
            </TableCell>
               {phone && name && <> <TableCell>{phone}</TableCell>
                <TableCell>{name}</TableCell></>}
                <TableCell>{email}</TableCell>
                 <TableCell>{device_info ? device_info : '...'}</TableCell>
                <TableCell>{ip}</TableCell>
                <TableCell>
                    {lat} , {long}
                </TableCell>
        </TableRow>
    );
};
