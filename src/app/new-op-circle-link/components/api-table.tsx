import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Pencil, Trash2 } from 'lucide-react';
import { ApiData } from '../types';

interface ApiTableProps {
    apiData: ApiData[];
    onModify: (api: ApiData) => void;
    onToggleActivate: (apiId: string) => void;
    onDelete: (apiId: string) => void;
}

export function ApiTable({ apiData, onModify, onToggleActivate, onDelete }: ApiTableProps): JSX.Element {
    return (
        <Card>
            <CardHeader>
                <CardTitle>API Management</CardTitle>
            </CardHeader>
            <CardContent>
                <ScrollArea className="h-96 rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>API Name</TableHead>
                                <TableHead>Modify</TableHead>
                                <TableHead>Activate</TableHead>
                                <TableHead>Delete</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {apiData.map((api) => (
                                <TableRow key={api.id}>
                                    <TableCell className="font-medium">{api.name}</TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-blue-600 border-blue-200 hover:bg-blue-50 hover:text-blue-700"
                                            onClick={() => onModify(api)}
                                        >
                                            <Pencil className="h-4 w-4 mr-2" />
                                            Modify
                                        </Button>
                                    </TableCell>
                                    <TableCell>
                                        <Switch
                                            checked={api.isActive}
                                            className="data-[state=checked]:bg-blue-600"
                                            onCheckedChange={() => onToggleActivate(api.id)}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
                                            onClick={() => onDelete(api.id)}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </ScrollArea>
            </CardContent>
        </Card>
    );
}