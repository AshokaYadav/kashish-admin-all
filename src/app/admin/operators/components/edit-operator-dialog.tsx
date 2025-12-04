'use client';
import React, { useState, useEffect } from 'react';
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
import { IUpdateOperator } from '@/apis/operator';

export interface IEditOperatorProps {
  categories: ISubObject[];
  editingOperator: IUpdateOperator;
  showEditDialog: boolean;
  setShowEditDialog: (val: boolean) => void;
  handleSaveEdit: () => void;
  handleEditChange: (key: string, value: string | File) => void;
}

export default function EditOperatorDialog({ editingOperator, categories, showEditDialog, setShowEditDialog, handleEditChange, handleSaveEdit }: IEditOperatorProps) {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  // Initialize image preview if editingOperator has an image URL
  useEffect(() => {
    if (editingOperator?.image && typeof editingOperator.image === 'string') {
      setImagePreview(editingOperator.image);
    } else {
      setImagePreview(null);
    }
  }, [editingOperator]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Create a preview for the UI
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);

      // Update the editingOperator state with the file
      handleEditChange('image', file);
    }
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
    handleEditChange('image', ''); // Clear the image value
  };

  return (
    <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
      <DialogContent className="sm:max-w-[400px]">
        <DialogHeader>
          <DialogTitle>Edit Operator</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="edit-name">Operator Name</Label>
            <Input
              id="edit-name"
              value={editingOperator?.name || ''}
              onChange={(e) => handleEditChange('name', e.target.value)}
              placeholder="Enter operator name"
            />
          </div>
          <div className="space-y-2">
            <Label>Category</Label>
            <Select
              value={editingOperator.category_id}
              onValueChange={(value) => handleEditChange('category_id', value.toString().trim())}
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
            <Label htmlFor="edit-image">Operator Image</Label>
            <Input
              id="edit-image"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {imagePreview && (
              <div className="mt-2">
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 mb-1">Current Image:</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-6 px-2 text-xs text-red-500 hover:text-red-700"
                    onClick={handleRemoveImage}
                  >
                    Remove
                  </Button>
                </div>
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
            onClick={() => setShowEditDialog(false)}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveEdit}
            className="bg-blue-500 hover:bg-blue-600 text-white"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}