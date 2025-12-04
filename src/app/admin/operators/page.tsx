'use client';

import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import EditCategoryDialog from './components/edit-operator-dialog';
import useOperator from './components/useOperator';
import AddOperatorDialog from './components/new-operator-dialog';
import OperatorCard from './components/operator-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


export default function CategoryPage() {
    const {
        selectedCategory, setSelectedCategory, showAddDialog, showEditDialog, setShowAddDialog, setShowEditDialog,
        newOperator, setNewOperator, editingOperator, setEditingOperator,
        categories, isLoadingCategories, refetchCategories,
        operators, isLoadingOperators, refetchOperators,
        update, isUpdating, create, isCreating,
        handleStatusChange, handleSaveEditClick, handleEdit, handleEditChange,
        handleCreateOperator, handleDelete
    } = useOperator();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Operators</h2>
                    <div className='flex flex-row'>
                        {!isLoadingCategories &&
                            <div className='mx-2 flex flex-row-reverse'>
                                <Select onValueChange={setSelectedCategory} defaultValue={selectedCategory} >
                                    <SelectTrigger className="w-40">
                                        <SelectValue placeholder="Select a category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {categories?.map(({ id, name }, _idx) =>
                                            <SelectItem key={_idx} value={id} defaultChecked={true} >{name}</SelectItem>
                                        )}
                                    </SelectContent>
                                </Select>
                            </div>
                        }
                        <Button
                            disabled={((categories || [])?.length <= 0) || !categories}
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            onClick={() => setShowAddDialog(true)}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Operator
                        </Button>
                    </div>
                </div>
            </div>

            {/* Main Content - Card Grid */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {operators?.map((operator, _idx) => (
                        <OperatorCard
                            key={_idx}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            isUpdating={isUpdating}
                            onStatusChange={handleStatusChange}
                            operator={operator}
                        />
                    ))}
                </div>
            </div>


            

            {/* Add Circle Dialog */}
            <AddOperatorDialog
                newOperator={newOperator}
                setNewOperator={setNewOperator}
                categories={categories || []}
                showAddDialog={showAddDialog}
                setShowAddDialog={setShowAddDialog}
                handleCreateOperator={handleCreateOperator}
                isCreating={isCreating} />




            {/* Edit Circle Dialog */}
            <EditCategoryDialog
                categories={categories || []}
                handleEditChange={handleEditChange}
                handleSaveEdit={handleSaveEditClick}
                editingOperator={editingOperator}
                setShowEditDialog={setShowEditDialog}
                showEditDialog={showEditDialog}
            />

        </div >
    );
};