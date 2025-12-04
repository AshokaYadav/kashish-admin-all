'use client';

import React, { useCallback, useState } from 'react';
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
import { toast } from 'sonner';
import { INewOperatorApiRequest, useCreateOperatorApi } from '@/hooks/operator-apis/use-create-operator-api';

const defaultNewOperatorApi: INewOperatorApiRequest = {
    code: '',
    operator_id: '',
    api_id: '',
};

export interface IAddNewOpApiDialogProps {
    showAddDialog: any,
    setShowAddDialog: (data: any) => void,
    operators: ISubObject[],
    apis: ISubObject[],

}

export default function AddNewOperatorApiDialog({ showAddDialog, operators, apis, setShowAddDialog }: IAddNewOpApiDialogProps) {
    const [newOperatorApi, setNewOperatorApi] = useState<INewOperatorApiRequest>({ ...defaultNewOperatorApi });

    const onSuccess = () => {
        setNewOperatorApi({ ...defaultNewOperatorApi });
        toast('Request Successfull!');
        setShowAddDialog(false);
    };
    const onError = () => {
        setNewOperatorApi({ ...defaultNewOperatorApi });
        toast('Request Failed!');
        setShowAddDialog(false);
    };

    const { create, isCreating } = useCreateOperatorApi(onSuccess, onError);


    const handleSave = useCallback(() => {
        const { code, operator_id, api_id } = newOperatorApi;
        if (!code || !operator_id || !api_id || code.length <= 0) return toast('invalid parameters');
        create({ operator_apis: [newOperatorApi] });

    }, [newOperatorApi])

    const handleUpdateNewOperatorApi = (key: string, value: string) => {
        setNewOperatorApi({ ...newOperatorApi, [key]: value })
    };
    return (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Operator Api</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="code">Operator Api Code</Label>
                        <Input
                            id="code"
                            value={newOperatorApi.code}
                            onChange={(e) => setNewOperatorApi(prev => ({ ...prev, code: e.target.value }))}
                            placeholder="Enter Operator Api Code"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Operator</Label>
                        <Select
                            value={newOperatorApi.operator_id}
                            onValueChange={(value) => handleUpdateNewOperatorApi('operator_id', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Operator" />
                            </SelectTrigger>
                            <SelectContent>
                                {operators.map(({ id, name }) => (
                                    <SelectItem key={id} value={id}>{name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Api</Label>
                        <Select
                            value={newOperatorApi.api_id}
                            onValueChange={(value) => handleUpdateNewOperatorApi('api_id', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Api" />
                            </SelectTrigger>
                            <SelectContent>
                                {apis.map(({ id, name }) => (
                                    <SelectItem key={id} value={id}>{name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline" onClick={() => setShowAddDialog(false)}>
                        Cancel
                    </Button>
                    <Button
                        disabled={isCreating}
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