import { Button } from '@/components/ui/button'

import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { IUpdateReqForm } from './useDebits';

const STATUS = [
    "PENDING",
    "SUCCESS",
    "FAILED",
    "HOLD",
]

export interface Props {
    open: boolean,
    onOpenChange: (val: boolean) => void,
    txn: IUpdateReqForm | null;
    handleUpdate: (txnId: string, updates: { [key: string]: any }) => void;
}
function UpdateDialog({ handleUpdate, open, onOpenChange, txn }: Props) {
    if (!txn) {
        onOpenChange(false);
        return (<></>);
    }
    const [form, setForm] = useState<IUpdateReqForm>({ id: txn.id, msg: txn.msg, status: txn.status, debit_txn_id: txn.debit_txn_id });

    const handleUpdateClick = () => {
        if (!form.status || !STATUS.includes(form.status)) return toast("INVALID STATUS SELECTED");
        const { id, ...rest }: any = form;
        if (!rest.msg) delete rest.msg;
        if (!rest.status) rest.status = "PENDING";
        handleUpdate(form.id, form);
    }

    const handleFormUpdate = (key: keyof IUpdateReqForm, value: string) => {
        setForm({ ...form, [key]: value });
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Request Status</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="status">Status</Label>
                        <Select
                            value={form.status}
                            onValueChange={(value) => handleFormUpdate('status', value)}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    STATUS.map((val) => (<SelectItem value={val}>{val}</SelectItem>))
                                }
                                {/* <SelectItem value="success">Success</SelectItem>
                                <SelectItem value="hold">Hold</SelectItem> */}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="txnId">Transaction ID</Label>
                        <Input
                            type='text'
                            id="txnId"
                            value={form.debit_txn_id}
                            onChange={(e) => handleFormUpdate('debit_txn_id', e.target.value)}
                            placeholder="Enter transaction ID"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="reason">Message</Label>
                        <Textarea
                            id="reason"
                            value={form.msg}
                            onChange={(e) => handleFormUpdate('msg', e.target.value)}
                            placeholder="message"
                            className="h-6"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpdateClick}>Update</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateDialog