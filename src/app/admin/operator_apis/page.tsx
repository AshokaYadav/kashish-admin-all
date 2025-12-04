"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EditOperatorApiDialog from './components/dialog-edit-operator';
import AddNewOperatorApiDialog from './components/dialog-new-operator';
import OperatorApiCard from './components/operator-api-card';
import { useOperatorApi } from './components/use-operator-api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const OperatorsPage = () => {
    const {
        apis, categories, operators, operatorApis,
        isLoadingCategories,
        showAddDialog, showEditDialog, editingOperatorApi, selectedCategory,
        setSelectedCategory, refetchOperatorApis,
        setShowEditDialog, setShowAddDialog,
        setEditingOperatorApi, handleEdit,
        isDeleting, deleteOpApi
    } = useOperatorApi();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* <Tabs defaultValue="API" className="space-y-6" onValueChange={setSelectedCategory}>
                <TabsList>
                    {categories?.map(({ id, name }, _idx) => (
                        <TabsTrigger key={_idx} value={id} defaultChecked={selectedCategory === id}>
                            {name}
                        </TabsTrigger>
                    ))}
                </TabsList>
            </Tabs> */}

            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Operators Apis</h2>
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
                            Add New Operator Api
                        </Button>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    <OperatorApiCard
                        isDeleting={isDeleting}
                        deleteOpApi={deleteOpApi}
                        operatorApis={operatorApis || []}
                        handleEdit={handleEdit}
                        refetchOperatorApis={refetchOperatorApis} />
                </div>
            </div>

            <AddNewOperatorApiDialog
                showAddDialog={showAddDialog}
                setShowAddDialog={setShowAddDialog}
                apis={apis?.map(({ id, name }) => ({ id, name })) || []}
                operators={operators?.map(({ id, name }) => ({ id, name })) || []}
            />

            <EditOperatorApiDialog
                apis={apis || []}
                operators={operators || []}
                editingOperatorApi={editingOperatorApi}
                refetchOperatorApis={refetchOperatorApis}
                setEditingOperatorApi={setEditingOperatorApi}
                setShowEditDialog={setShowEditDialog}
                showEditDialog={showEditDialog}
            />


        </div>
    );
};

export default OperatorsPage;