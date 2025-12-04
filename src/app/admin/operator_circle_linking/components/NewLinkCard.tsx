import React, { useCallback, useState } from 'react';
import { ICreateOpCirLinkRequest } from '@/apis/op-circle-link';
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

const emptyPlaceHolder: ICreateOpCirLinkRequest = {
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
    provider_apis: IOperatorCircle[];
    operators: IOperatorCircle[];
    circles: IOperatorCircle[];
    open: boolean;
    setOpen: (val: boolean) => void;
    create: (data: ICreateOpCirLinkRequest) => void;
    isCreating: boolean;
}
export default function NewLinkCard({ provider_apis, operators, circles, open, setOpen, create, isCreating }: Props) {
    const [newOperatorCommission, setNewOperator] = useState<ICreateOpCirLinkRequest>({ ...emptyPlaceHolder });


    const onSuccess = () => {
        setNewOperator({ ...emptyPlaceHolder });
        setOpen(false);
        toast('Request Successfull!');
    };
    const onError = () => {
        setNewOperator({ ...emptyPlaceHolder });
        setOpen(false);
        toast('Request Failed!');
    };


    // const { create: createNewOperatorCommission, isCreating: isCreatingNewOperatorCommission } = useCreateOperatorCommission(onSuccess, onError);

    const handleSave = useCallback(() => {
        const { circle_code, circle_id, operator_code, operator_id, provider_api_id } = newOperatorCommission;

        if (!circle_code || !circle_id || !operator_code || !operator_id || !provider_api_id) return;
        create(newOperatorCommission);
    }, [newOperatorCommission]);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">


                    <div className="space-y-2">
                        <Label>Circle</Label>
                        <Select
                            value={newOperatorCommission.circle_id}
                            onValueChange={(value) => setNewOperator({ ...newOperatorCommission, circle_id: value })}
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
                            value={newOperatorCommission?.circle_code || ''}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                circle_code: e.target.value || ''
                            })}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Operator</Label>
                        <Select
                            value={newOperatorCommission.operator_id}
                            onValueChange={(value) => setNewOperator({ ...newOperatorCommission, operator_id: value })}
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
                            value={newOperatorCommission?.operator_code || ''}
                            onChange={(e) => setNewOperator({
                                ...newOperatorCommission,
                                operator_code: e.target.value || ''
                            })}
                        />
                    </div>


                    <div className="space-y-2">
                        <Label>Provider API</Label>
                        <Select
                            value={newOperatorCommission.provider_api_id}
                            onValueChange={(value) => setNewOperator({ ...newOperatorCommission, provider_api_id: value })}
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
                        disabled={isCreating}
                        onClick={handleSave}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Operator Link
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}