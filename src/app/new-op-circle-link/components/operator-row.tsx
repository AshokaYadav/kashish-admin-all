// components/operator-row.tsx
import { TableCell, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { OperatorMapping, CircleOption } from '../types';

interface OperatorRowProps {
    operator: OperatorMapping;
    circleOptions: CircleOption[];
    onCircleChange: (operatorId: string, circleId: string) => void;
    onInputChange: (operatorId: string, field: 'circleCode' | 'operatorCode', value: string) => void;
    onRemove: (operatorId: string) => void;
}

export function OperatorRow({
    operator,
    circleOptions,
    onCircleChange,
    onInputChange,
    onRemove
}: OperatorRowProps): JSX.Element {
    return (
        <TableRow key={operator.id}>
            <TableCell>{operator.operatorName}</TableCell>
            <TableCell>
                <Select
                    value={operator.circleId}
                    onValueChange={(value) => onCircleChange(operator.id, value)}
                >
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select circle" />
                    </SelectTrigger>
                    <SelectContent>
                        {circleOptions.map((circle) => (
                            <SelectItem key={circle.id} value={circle.id}>
                                {circle.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </TableCell>
            <TableCell>
                <Input
                    value={operator.circleCode}
                    onChange={(e) => onInputChange(operator.id, 'circleCode', e.target.value)}
                    placeholder="Circle code"
                />
            </TableCell>
            <TableCell>
                <Input
                    value={operator.operatorCode}
                    onChange={(e) => onInputChange(operator.id, 'operatorCode', e.target.value)}
                    placeholder="Operator code"
                />
            </TableCell>
            <TableCell>
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => onRemove(operator.id)}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
            </TableCell>
        </TableRow>
    );
}