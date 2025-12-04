
import React, { useEffect } from 'react';
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
import { IUpdateApi } from '@/apis/apis';


export interface IEditApiDialogProps {
    editApi: IUpdateApi;
    handleEditApiUpdate: (key: string, value: any) => void,
    resetEditApiValues: () => void,

    isUpdating: boolean;
    update: () => void,

    showUpdateDialog: boolean;
    setShowUpdateDialog: (val: boolean) => void;
}

export default function EditApiDialog({ editApi, showUpdateDialog, isUpdating, setShowUpdateDialog, handleEditApiUpdate, resetEditApiValues, update }: IEditApiDialogProps) {
    const handleCancle = () => {
        resetEditApiValues();
        setShowUpdateDialog(false);
    }


    return (
        <Dialog open={showUpdateDialog} onOpenChange={setShowUpdateDialog}>
            <DialogContent className="sm:max-w-[500px] bg-white">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold text-gray-800">
                        Update Gateway Details
                    </DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right text-gray-600">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={editApi?.name || ''}
                            onChange={(e) => handleEditApiUpdate('name', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="url" className="text-right text-gray-600">
                            URL
                        </Label>
                        <Input
                            id="url"
                            value={editApi?.url || ''}
                            onChange={(e) => handleEditApiUpdate('url', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="method" className="text-right text-gray-600">
                            Method
                        </Label>
                        <Input
                            id="method"
                            value={editApi?.method || ''}
                            onChange={(e) => handleEditApiUpdate('method', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="dispute_email" className="text-right text-gray-600">
                            Dispute Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            value={editApi?.dispute_email || ''}
                            onChange={(e) => handleEditApiUpdate('dispute_email', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="password" className="text-right text-gray-600">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            value={editApi?.password || ''}
                            onChange={(e) => handleEditApiUpdate('password', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="transactionPassword" className="text-right text-gray-600">
                            Transaction Password
                        </Label>
                        <Input
                            id="transactionPassword"
                            type="password"
                            value={editApi?.transaction_password || ''}
                            onChange={(e) => handleEditApiUpdate('transaction_password', e.target.value)}
                            className="col-span-3 border-gray-200"
                        />
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
                        disabled={isUpdating}
                        onClick={update}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Save changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}