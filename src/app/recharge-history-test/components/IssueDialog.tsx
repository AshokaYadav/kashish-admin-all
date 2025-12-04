import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useGetRechargeComplaint, useRaiseRechargeComplaint, useUpdateRechargeComplaint } from '@/hooks/recharge/history/use-create-complaint';
import { ICompaint, INewComplaint } from '@/apis/recharge/history';

export interface IComplaintExtended {
    id?: string;
    status?: string;
    ref_id: string;
    msg: string;
    mobile?: string;
}

const defaultValue: IComplaintExtended = {
    msg: '',
    ref_id: '',
}

export default function IssueDialog({ open, setOpen, id, mobile }: { open: boolean, setOpen: (val: boolean) => void, id: string, mobile: string }) {
    const [complaint, setComplaint] = useState<IComplaintExtended>({ ...defaultValue, ref_id: id, mobile: mobile || '', status: 'OPEN' });

    // const { fetch, isLoading } = useGetRechargeComplaint(setComplaint, (err) => toast('Error Fetching Compaint', { description: err }));
    const isLoading = false;

    const { isCreating, raiseComplaint } = useRaiseRechargeComplaint(() => {
        toast('Complaint Raised', { description: 'success' })
        setOpen(false);
    }, (err) => {
        toast('Failed', { description: err });
        setOpen(false);
    })

    const { isUpdating, updateComplaint } = useUpdateRechargeComplaint(() => {
        toast('Complaint Updated', { description: 'success' })
        setOpen(false);
    }, (err) => {
        toast('Failed', { description: err });
        setOpen(false);
    })

    const handleSubmit = () => {
        console.log('handle submit', complaint, isLoading, isCreating, isUpdating);
        if (!(complaint || isLoading || isCreating || isUpdating)) return;
        if (complaint.id && complaint.id !== '') raiseComplaint(complaint as INewComplaint)
        else {
            updateComplaint(complaint as ICompaint)
        }
    }

    useEffect(() => { fetch(id) }, [])
    useEffect(() => {
        fetch(id);
        setComplaint({ ...complaint, id, mobile });
    }, [id, mobile]);


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        <div>
                            <h6 className='text-lg'>Complaint</h6>
                            <h6 className='text-sm text-gray-500'>ID: {id}</h6>
                            <h6 className='text-sm text-gray-500'>No.: {mobile}</h6>
                        </div>
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="txnId">Message</Label>
                        <Input
                            placeholder="message"
                            defaultValue={complaint?.msg || ''}
                            onChange={(e) => setComplaint({ ...complaint, msg: e.target.value })}
                            className="pl-10"
                        />
                    </div>

                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="outline" className='bg-blue-100 hover:text-blue-500' onClick={handleSubmit} >
                        Submit
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog >
    )
}