import React, { useState } from 'react';

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
import { toast } from 'sonner';
import { useUpdateOperatorCommission } from '@/hooks/operator-commission/use-update-operator-commission';


export interface IEditOperatorCommission {
    id: string,
    operator_id: string,
    api_margin: number,
    admin_margin: number,
    distributor_margin: number,
    retailer_margin: number,
    status: 'ACTIVE' | 'INACTIVE',
}

const emptyHolder: IEditOperatorCommission = {
    id: '',
    operator_id: '',
    api_margin: 0,
    admin_margin: 0,
    distributor_margin: 0,
    retailer_margin: 0,
    status: 'ACTIVE',
};


export interface EditOperatorCommissionDialogProps {
    showMarginsDialog: boolean;
    setShowMarginsDialog: (val: boolean) => void;
    editingOperatorMargins: IEditOperatorCommission | null;
    setEditingOperatorMargins: (val: IEditOperatorCommission | null) => void;
    refetch: ()=>void;
}
// onChange={(e) => setEditingOperatorMargins({
//     ...editingOperatorMargins,
//     admin_margin: parseFloat(e.target.value)
// })}

export default function EditOperatorCommissionDialog({ showMarginsDialog, editingOperatorMargins, setEditingOperatorMargins, setShowMarginsDialog , refetch}: EditOperatorCommissionDialogProps) {

    const onSuccess = () => {
        setEditingOperatorMargins({ ...emptyHolder });
        setShowMarginsDialog(false);
        toast('Request Successfull!');
        refetch()
    };
    const onError = () => {
        setEditingOperatorMargins({ ...emptyHolder });
        setShowMarginsDialog(false);
        toast('Request Failed!');
    };

    const { update, isUpdating } = useUpdateOperatorCommission(onSuccess, onError);


    const handleMarginsUpdate = (key: string, value: any) => {
        if (!editingOperatorMargins) return setShowMarginsDialog(false);
        setEditingOperatorMargins({ ...editingOperatorMargins, [key]: value });
    }

    const handleSaveMargins = () => {
        if (!editingOperatorMargins) return;
        const { id,
            operator_id: operatorId,
            api_margin: apiMargin,
            admin_margin: adminMargin,
            distributor_margin: distributorMargin,
            retailer_margin: retailerMargin,
            status } = editingOperatorMargins;
        update({ id, apiMargin, adminMargin, distributorMargin, retailerMargin, operatorId, status });
    };

    return (
        <Dialog open={showMarginsDialog} onOpenChange={setShowMarginsDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Edit Margins</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label>Admin Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={editingOperatorMargins?.admin_margin || 0}
                            onChange={(e) => handleMarginsUpdate('admin_margin', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Retailer Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={editingOperatorMargins?.retailer_margin || 0}
                            onChange={(e) => handleMarginsUpdate('retailer_margin', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Distributor Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={editingOperatorMargins?.distributor_margin || 0}
                            onChange={(e) => handleMarginsUpdate('distributor_margin', parseFloat(e.target.value))}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>API Margin (%)</Label>
                        <Input
                            type="number"
                            step="0.1"
                            min="0"
                            max="100"
                            value={editingOperatorMargins?.api_margin || 0}
                            onChange={(e) => handleMarginsUpdate('api_margin', parseFloat(e.target.value))}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setShowMarginsDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSaveMargins}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Save Margins
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}