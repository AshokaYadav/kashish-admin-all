import React, { useCallback, useEffect, useState } from 'react';
import { ICreateOpCirLinkRequest, IUpdateOpCirLinkRequest } from '@/apis/op-circle-link';
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

import { toast } from 'sonner';

const emptyPlaceHolder: IUpdateOpCirLinkRequest = {
    id: '',
    circle_code: '',
    circle_id: '',
    operator_code: '',
    operator_id: '',
    provider_api_id: '',
}

export interface IOperatorCircle {
    id: string;
    name: string;
}
export interface Props {
    editSelected: IUpdateOpCirLinkRequest | null;
    setEditSelected: (val: IUpdateOpCirLinkRequest | null) => void;
    provider_apis: IOperatorCircle[];
    operators: IOperatorCircle[];
    circles: IOperatorCircle[];
    open: boolean;
    setOpen: (val: boolean) => void;
    update: (data: IUpdateOpCirLinkRequest) => void;
    isUpdating: boolean;
}

export default function EditLinkCard({ editSelected, setEditSelected, provider_apis, operators, circles, open, setOpen, update, isUpdating }: Props) {
    if (!editSelected) return (<></>);

    const handleSave = () => {
        const { circle_code, circle_id, operator_code, operator_id, provider_api_id } = editSelected;

        if (!circle_code || !circle_id || !operator_code || !operator_id || !provider_api_id) return;
        update(editSelected);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Edit</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">


                    <div className="space-y-2">
                        <Label>Circle</Label>
                        <Select
                            value={editSelected.circle_id}
                            onValueChange={(value) => setEditSelected({ ...editSelected, circle_id: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Circle" />
                            </SelectTrigger>
                            <SelectContent>
                                {circles.map(({ id, name }, _idx) => (
                                    <SelectItem key={_idx} value={id}>
                                        {name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label>Circle Code</Label>
                        <Input
                            type="text"
                            value={editSelected?.circle_code || ''}
                            onChange={(e) => setEditSelected({
                                ...editSelected,
                                circle_code: e.target.value || ''
                            })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Operator</Label>
                        <Select
                            value={editSelected.operator_id}
                            onValueChange={(value) => setEditSelected({ ...editSelected, operator_id: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Circle" />
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
                        <Label>Operator Code</Label>
                        <Input
                            type="text"
                            value={editSelected?.operator_code || ''}
                            onChange={(e) => setEditSelected({
                                ...editSelected,
                                operator_code: e.target.value || ''
                            })}
                        />
                    </div>


                    <div className="space-y-2">
                        <Label>Provider API</Label>
                        <Select
                            value={editSelected.provider_api_id}
                            onValueChange={(value) => setEditSelected({ ...editSelected, provider_api_id: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Api" />
                            </SelectTrigger>
                            <SelectContent>
                                {provider_apis.map(({ id, name }, _idx) => (
                                    <SelectItem key={_idx} value={id}>
                                        {name}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isUpdating}
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Update
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

