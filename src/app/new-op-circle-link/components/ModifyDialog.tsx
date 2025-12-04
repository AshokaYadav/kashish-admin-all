import { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Trash2 } from 'lucide-react';
import { OperatorRow } from '../components/operator-row';
import { OperatorMapping, CircleOption } from '../types';
import { useGetAllCircles } from '@/hooks/circles/use-get-all-circles';

interface ModifyDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    apiName: string;
    apiId: string;
    initialOperators: OperatorMapping[];
    circleOptions: CircleOption[];
    operatorsList: string[];
    onSave: (apiId: string, operators: OperatorMapping[]) => void;
}

export function ModifyDialog({
    isOpen,
    onOpenChange,
    apiName,
    apiId,
    initialOperators,
    circleOptions,
    operatorsList,
    onSave
}: ModifyDialogProps): JSX.Element {
    const [editedOperators, setEditedOperators] = useState<OperatorMapping[]>([...initialOperators]);

    // Update operator circle selection
    const handleCircleChange = (operatorId: string, circleId: string): void => {
        const selectedCircle = circleOptions.find(circle => circle.id === circleId);

        setEditedOperators(editedOperators.map(op =>
            op.id === operatorId
                ? {
                    ...op,
                    circleId,
                    circleName: selectedCircle ? selectedCircle.name : ''
                }
                : op
        ));
    };

    // Update operator input fields
    const handleOperatorInputChange = (operatorId: string, field: 'circleCode' | 'operatorCode', value: string): void => {
        setEditedOperators(editedOperators.map(op =>
            op.id === operatorId ? { ...op, [field]: value } : op
        ));
    };

    // Add a new operator mapping
    const handleAddOperator = (): void => {
        const newOperator: OperatorMapping = {
            id: `new-${Date.now()}`,
            operatorName: operatorsList[0],
            circleId: '',
            circleName: '',
            circleCode: '',
            operatorCode: ''
        };

        setEditedOperators([...editedOperators, newOperator]);
    };

    // Remove an operator mapping
    const handleRemoveOperator = (operatorId: string): void => {
        setEditedOperators(editedOperators.filter(op => op.id !== operatorId));
    };

    // Save changes and close dialog
    const handleSaveChanges = (): void => {
        onSave(apiId, editedOperators);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-4xl">
                <DialogHeader>
                    <DialogTitle>
                        Modify API: {apiName}
                    </DialogTitle>
                </DialogHeader>

                <div className="py-4">
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-medium">Operator Mappings</h3>
                        <Button
                            onClick={handleAddOperator}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Add Operator
                        </Button>
                    </div>

                    <ScrollArea className="h-96 rounded-md border">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Operator</TableHead>
                                    <TableHead>Circle</TableHead>
                                    <TableHead>Circle Code</TableHead>
                                    <TableHead>Operator Code</TableHead>
                                    <TableHead>Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {editedOperators.map((operator) => (
                                    <OperatorRow
                                        key={operator.id}
                                        operator={operator}
                                        circleOptions={circleOptions}
                                        onCircleChange={handleCircleChange}
                                        onInputChange={handleOperatorInputChange}
                                        onRemove={handleRemoveOperator}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </ScrollArea>

                    <div className="flex justify-end mt-4">
                        <Button
                            onClick={handleSaveChanges}
                            className="bg-blue-600 hover:bg-blue-700"
                        >
                            Save Changes
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}