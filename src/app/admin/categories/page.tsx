'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CircleCard from '../circles/components/circle-card';
import useCategory from './components/useCategory';
import AddCategoryDialog from './components/new-category-dialog';
import EditCategoryDialog from './components/edit-category-dialog';


export default function CategoryPage() {
    const {
        categories, isLoadingCategories,
        editingCircle,
        newCircle, setNewCircle, handleCreateCircle,
        showAddDialog, setShowAddDialog,
        showEditDialog, setShowEditDialog,
        isCreating,
        handleEdit, handleEditChange, handleSaveEditClick, isUpdating,
        handleDelete, handleStatusChange
    } = useCategory()



    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Operator Categories</h2>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => setShowAddDialog(true)}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Category
                    </Button>
                </div>
            </div>

            {/* Main Content - Card Grid */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categories?.map((circle, _idx) => (
                        <CircleCard
                            key={_idx}
                            isUpdating={isUpdating}
                            circle={circle}
                            onStatusChange={handleStatusChange}
                            handleEditClick={handleEdit}
                            handleDelete={handleDelete}
                        />
                    ))}
                </div>
            </div>

            {/* Add Circle Dialog */}
            <AddCategoryDialog
                newCategory={newCircle}
                setNewCategory={setNewCircle}
                handleCreateCircle={handleCreateCircle}
                isCreating={isCreating}
                setShowAddDialog={setShowAddDialog}
                showAddDialog={showAddDialog}
            />

            {/* Edit Circle Dialog */}
            <EditCategoryDialog
                handleEditChange={handleEditChange}
                handleSaveEdit={handleSaveEditClick}
                editingCategory={editingCircle}
                setShowEditDialog={setShowEditDialog}
                showEditDialog={showEditDialog}
            />

        </div>
    );
};