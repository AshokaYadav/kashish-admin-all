import { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { OperatorCircleLink } from '../types';

interface ModifyDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    link: OperatorCircleLink;
    onSave: () => Promise<void>;
}

export function ModifyDialog({ isOpen, onOpenChange, link, onSave }: ModifyDialogProps) {
    const [formData, setFormData] = useState({
        operator_code: link.operator_code,
        circle_code: link.circle_code,
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        // TODO: Implement API call to update the link
        console.log('Update link:', {
            id: link.id,
            ...formData
        });
        await onSave();
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>
                        Modify Operator-Circle Link
                    </DialogTitle>
                </DialogHeader>

                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="text-right font-medium">Operator:</span>
                        <span className="col-span-3">{link.operator.name}</span>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <span className="text-right font-medium">Circle:</span>
                        <span className="col-span-3">{link.circle.name}</span>
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="operator_code" className="text-right font-medium">
                            Operator Code:
                        </label>
                        <Input
                            id="operator_code"
                            name="operator_code"
                            className="col-span-3"
                            value={formData.operator_code}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="grid grid-cols-4 items-center gap-4">
                        <label htmlFor="circle_code" className="text-right font-medium">
                            Circle Code:
                        </label>
                        <Input
                            id="circle_code"
                            name="circle_code"
                            className="col-span-3"
                            value={formData.circle_code}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <DialogFooter>
                    <Button onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}