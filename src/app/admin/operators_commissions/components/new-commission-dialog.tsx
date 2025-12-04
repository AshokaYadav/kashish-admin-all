
import React, { useCallback, useState } from 'react';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { ISubObject } from '@/types/operator-apis';
import { useCreateOperatorCommission } from '@/hooks/operator-commission/use-create-operator-commission';
import { toast } from 'sonner';
import SearchableDropdown from '@/components/common/SearchableDropdown';

export interface NewOperatorCommissionDialogProps {
    operators: ISubObject[],
    selectedDistributor: string;
    showAddDialog: boolean;
    setShowAddDialog: (val: boolean) => void;
}

export interface INewOperatorCommissionRequest {
    operatorId: string;
    distributorId: string;
    adminMargin: number;
    distributorMargin: number;
    retailerMargin: number;
    apiMargin: number;
}

export interface IBulkNewOperatorCommissionsRequest {
    commissions: INewOperatorCommissionRequest[];
}

const emptyPlaceHolder: INewOperatorCommissionRequest = {
    operatorId: '',
    distributorId: '',
    apiMargin: 0,
    adminMargin: 0,
    distributorMargin: 0,
    retailerMargin: 0
}

export default function NewOperatorCommissionDialog({ showAddDialog, operators, setShowAddDialog, selectedDistributor }: NewOperatorCommissionDialogProps) {
    const [newOperatorCommission, setNewOperator] = useState<INewOperatorCommissionRequest>({ ...emptyPlaceHolder });


    const onSuccess = () => {
        setNewOperator({ ...emptyPlaceHolder });
        setShowAddDialog(false);
        toast('Request Successfull!');
    };
    const onError = () => {
        setNewOperator({ ...emptyPlaceHolder });
        setShowAddDialog(false);
        toast('Request Failed!');
    };


    const { create: createNewOperatorCommission, isCreating: isCreatingNewOperatorCommission } = useCreateOperatorCommission(onSuccess, onError);

    const handleSave = useCallback(() => {
        const { adminMargin, apiMargin, distributorMargin, retailerMargin, operatorId, } = newOperatorCommission;
        if (adminMargin < 0 || apiMargin < 0 || distributorMargin < 0 || retailerMargin < 0 || !operatorId || operatorId.length <= 0) return;
        createNewOperatorCommission([{ ...newOperatorCommission, distributorId: selectedDistributor }]);
    }, [newOperatorCommission]);

    return (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Operator</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Operator</Label>
                        <Select
                            value={newOperatorCommission.operatorId}
                            onValueChange={(value) => setNewOperator({ ...newOperatorCommission, operatorId: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Operator" />
                            </SelectTrigger>
                            <SelectContent>
                                {operators.map(({ id, name }, _idx) => (
                                    <SelectItem key={_idx} value={id}>
                                        {name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="space-y-2">
                        <Label>Admin Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={newOperatorCommission?.adminMargin || 0}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                adminMargin: parseFloat(e.target.value) || 0
                            })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Retailer Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={newOperatorCommission?.retailerMargin || 0}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                retailerMargin: parseFloat(e.target.value) || 0
                            })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Distributor Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={newOperatorCommission?.distributorMargin || 0}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                distributorMargin: parseFloat(e.target.value) || 0
                            })}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>API Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={newOperatorCommission?.apiMargin || 0}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                apiMargin: parseFloat(e.target.value) || 0
                            })}
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setShowAddDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isCreatingNewOperatorCommission}
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Operator
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}