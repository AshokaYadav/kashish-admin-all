// 'use client';

// import React from 'react';
// import { Button } from "@/components/ui/button";
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogFooter,
// } from "@/components/ui/dialog";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { ISubObject } from '@/types/operator-apis';
// import { INewOperatorRequest } from '@/apis/operator';



// export interface AddCategoryDialogProps {
//     newOperator: INewOperatorRequest,
//     setNewOperator: (operator: INewOperatorRequest) => void
//     categories: ISubObject[];
//     showAddDialog: boolean;
//     setShowAddDialog: (val: boolean) => void;
//     isCreating: boolean;
//     handleCreateOperator: () => void;
// }

// export default function AddOperatorDialog({ categories, newOperator, setNewOperator, showAddDialog, setShowAddDialog, isCreating, handleCreateOperator }: AddCategoryDialogProps) {
//     return (
//         <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
//             <DialogContent className="sm:max-w-[400px]">
//                 <DialogHeader>
//                     <DialogTitle>Add New Operator</DialogTitle>
//                 </DialogHeader>
//                 <div className="grid gap-4 py-4">
//                     <div className="space-y-2">
//                         <Label htmlFor="name">Operator Name</Label>
//                         <Input
//                             id="name"
//                             value={newOperator.name}
//                             onChange={(e) => setNewOperator({ ...newOperator, name: e.target.value.trim().toUpperCase() })}
//                             placeholder="Enter Operator name"
//                         />
//                     </div>
//                     <div className="space-y-2">
//                         <Label>Category</Label>
//                         <Select
//                             value={newOperator.category_id}
//                             onValueChange={(value) => setNewOperator({ ...newOperator, category_id: value })}
//                         >
//                             <SelectTrigger>
//                                 <SelectValue placeholder="Select Category" />
//                             </SelectTrigger>
//                             <SelectContent>

//                                 {categories.map(({ id, name }) => (
//                                     <SelectItem key={id} value={id}>{name}</SelectItem>
//                                 ))}
//                             </SelectContent>
//                         </Select>
//                     </div>
//                 </div>
//                 <DialogFooter>
//                     <Button
//                         variant="outline"
//                         onClick={() => setShowAddDialog(false)}
//                     >
//                         Cancel
//                     </Button>
//                     <Button
//                         disabled={isCreating}
//                         onClick={handleCreateOperator}
//                         className="bg-blue-500 hover:bg-blue-600 text-white"
//                     >
//                         Add Category
//                     </Button>
//                 </DialogFooter>
//             </DialogContent>
//         </Dialog>
//     );
// }




'use client';
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ISubObject } from '@/types/operator-apis';
import { INewOperatorRequest } from '@/apis/operator';

export interface AddCategoryDialogProps {
    newOperator: INewOperatorRequest,
    setNewOperator: (operator: INewOperatorRequest) => void
    categories: ISubObject[];
    showAddDialog: boolean;
    setShowAddDialog: (val: boolean) => void;
    isCreating: boolean;
    handleCreateOperator: () => void;
}

export default function AddOperatorDialog({ categories, newOperator, setNewOperator, showAddDialog, setShowAddDialog, isCreating, handleCreateOperator }: AddCategoryDialogProps) {
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Create a preview for the UI
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);

            // Update the newOperator state with the file
            setNewOperator({ ...newOperator, image: file });
        }
    };

    return (
        <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle>Add New Operator</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Operator Name</Label>
                        <Input
                            id="name"
                            value={newOperator.name}
                            onChange={(e) => setNewOperator({ ...newOperator, name: e.target.value.trim().toUpperCase() })}
                            placeholder="Enter Operator name"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Category</Label>
                        <Select
                            value={newOperator.category_id}
                            onValueChange={(value) => setNewOperator({ ...newOperator, category_id: value })}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select Category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(({ id, name }) => (
                                    <SelectItem key={id} value={id}>{name}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="image">Operator Image</Label>
                        <Input
                            id="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                        {imagePreview && (
                            <div className="mt-2">
                                <p className="text-sm text-gray-500 mb-1">Preview:</p>
                                <img
                                    src={imagePreview}
                                    alt="Image preview"
                                    className="w-full max-h-32 object-contain rounded border border-gray-200"
                                />
                            </div>
                        )}
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setShowAddDialog(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        disabled={isCreating}
                        onClick={handleCreateOperator}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        Add Operator
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}