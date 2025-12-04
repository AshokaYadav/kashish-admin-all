import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

function RejectDialogs({ rejectDialogOpen, setRejectDialogOpen, reject }: any) {
    const [reason, setReason] = useState<string>('');

    const handleRejectClick = () => {
        if (!reason || reason === '') return;
        setRejectDialogOpen(false);
        reject(reason);
    }

    return (
        <Dialog open={rejectDialogOpen} onOpenChange={setRejectDialogOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Reject Request</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="reason">Reason for Rejection</Label>
                        <Textarea
                            id="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            placeholder="Enter reason for rejection"
                            className="h-32"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={() => setRejectDialogOpen(false)}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleRejectClick}>
                        Reject
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default RejectDialogs