// components/gateway/AddGatewayDialog.tsx

import React from 'react';
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { EAPITYPES, EHttpMethod } from '@/types/api';
import { INewApi } from '@/apis/apis';
import { toast } from 'sonner';


interface AddApiDialogProps {
    newApi: INewApi,
    open: boolean;
    isCreating: boolean;
    onOpenChange: (open: boolean) => void;
    handleNewApiUpdate: (key: string, value: string) => void;
    resetNewApiValues: () => void;
    handleSaveClick: (api: INewApi) => void;
}

export default function AddApiDialog({
    newApi,
    open,
    isCreating,
    onOpenChange,
    handleNewApiUpdate,
    resetNewApiValues,
    handleSaveClick,
}: AddApiDialogProps) {

    const handleCancle = () => {
        resetNewApiValues();
        onOpenChange(false);
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[500px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Add New Gateway
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right text-gray-600">
                            Type*
                        </Label>
                        <Select
                            value={newApi?.type}
                            onValueChange={(value: EAPITYPES) => handleNewApiUpdate('type', value)}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={EAPITYPES.RECHARGE.toString()}>RECHARGE</SelectItem>
                                <SelectItem value={EAPITYPES.DISPUTE}>DISPUTE</SelectItem>
                                <SelectItem value={EAPITYPES.SMS}>SMS</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="new-name" className="text-right text-gray-600">
                            Name*
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="new-name"
                                value={newApi?.name}
                                onChange={(e) => handleNewApiUpdate('name', e.target.value)}
                                className="border-gray-200"
                                placeholder="Enter gateway name"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="new-url" className="text-right text-gray-600">
                            URL*
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="new-url"
                                value={newApi?.url}
                                onChange={(e) => handleNewApiUpdate('url', e.target.value)}
                                className="border-gray-200"
                                placeholder="Enter gateway URL"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right text-gray-600">
                            Method*
                        </Label>
                        <Select
                            value={newApi?.method}
                            onValueChange={(value: EHttpMethod) => handleNewApiUpdate('method', value)}
                        >
                            <SelectTrigger className="col-span-3">
                                <SelectValue placeholder="Select method" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value={EHttpMethod.get.toString()}>GET</SelectItem>
                                <SelectItem value={EHttpMethod.post}>POST</SelectItem>
                                <SelectItem value={EHttpMethod.put}>PUT</SelectItem>
                                <SelectItem value={EHttpMethod.delete}>DELETE</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="new-password" className="text-right text-gray-600">
                            Password*
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="new-password"
                                type="password"
                                value={newApi?.password}
                                onChange={(e) => handleNewApiUpdate('password', e.target.value)}
                                className="border-gray-200"
                                placeholder="Enter password"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="new-trans-password" className="text-right text-gray-600">
                            Transaction Password*
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="new-trans-password"
                                type="password"
                                value={newApi?.transaction_password}
                                onChange={(e) => handleNewApiUpdate('transaction_password', e.target.value)}
                                className="border-gray-200"
                                placeholder="Enter transaction password"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dispute-mail" className="text-right text-gray-600">
                            Dispute Email*
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="dispute-email"
                                type="email"
                                value={newApi?.dispute_email}
                                onChange={(e) => handleNewApiUpdate('dispute_email', e.target.value)}
                                className="border-gray-200"
                                placeholder="Enter dispute email"
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="mapping" className="text-right text-gray-600">
                            Mapping
                        </Label>
                        <div className="col-span-3">
                            <Input
                                id="mapping"
                                type="text"
                                value={newApi?.mapping ? JSON.stringify(newApi.mapping, null, 2) : '{}'}
                                onChange={(e) => {
                                    try {
                                        const mappingObj = JSON.parse(e.target.value);
                                        if (typeof mappingObj === 'object' && !Array.isArray(mappingObj)) {
                                            handleNewApiUpdate('mapping', mappingObj);
                                        } else {
                                            toast.error('Mapping must be a JSON object');
                                        }
                                    } catch (error) {
                                        toast.error('Invalid JSON format');
                                    }
                                }}
                                className="border-gray-200 font-mono"
                                placeholder='{"key": "value"}'
                            />
                            <p className="text-xs text-gray-500 mt-1">Example: {`{"mobile": "phone_number", "amount": "recharge_amount"}`}</p>
                        </div>
                    </div>
                </div>
                <DialogFooter className="gap-2">
                    <Button 
                        variant="outline"
                        onClick={handleCancle}
                        className="border-gray-200"
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isCreating}
                        onClick={() => handleSaveClick(newApi)}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Gateway
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};