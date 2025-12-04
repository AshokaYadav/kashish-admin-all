'use client';

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import CircleCard from '../circles/components/circle-card';
import AddCircleDialog from '../circles/components/new-circle-dialog';
import EditCircleDialog from '../circles/components/edit-circle-dialog';
import useLinking from './components/useLinking';
import NewLinkCard from './components/NewLinkCard';
import EditLinkCard from './components/EditLinkCard';
import LinkCard from './components/LinkCard';
import { Dialog, DialogContent } from '@/components/ui/dialog';



const Page = () => {
    const {
        opCircleLinks, showAddDialog, setShowAddDialog,
        circles, create, isCreating,
        operators,
        update, isUpdating,
        editSelected, setEditSelected, linkApis,
        showEdit, setShowEdit,
        deleteLink, isDeleting,
    } = useLinking();

    const [selectDelete, setSelecteDelete] = useState<string>('')


    return (
        <div className="min-h-screen w-full max-w-7xl mx-auto bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Operator Circles</h2>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => setShowAddDialog(true)}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Linking
                    </Button>
                </div>
            </div>

            <NewLinkCard
                open={showAddDialog}
                setOpen={setShowAddDialog}
                create={create}
                isCreating={isCreating}
                circles={circles || []}
                operators={operators || []}
                provider_apis={linkApis || []}
            />

            <EditLinkCard
                editSelected={editSelected}
                setEditSelected={setEditSelected}
                open={showEdit}
                setOpen={setShowEdit}
                update={update}
                isUpdating={isUpdating}
                circles={circles || []}
                operators={operators || []}
                provider_apis={linkApis || []}
            />

           {/* Main Content - Full Width */}
<div className="p-8 w-full max-w-7xl mx-auto flex justify-between items-center mb-4">
    <div className="w-full m-auto col-span-1 w-full">
        <LinkCard
            setSelecteDelete={setSelecteDelete}
            deleteLink={deleteLink}
            isDeleting={isDeleting}
            isUpdating={isUpdating}
            opCircleLink={opCircleLinks || []}
            setEdit={(val) => {
                setEditSelected(val);
                setShowEdit(true);
            }}
        />
    </div>
</div>


            {/* Add Circle Dialog */}
            {/* <AddCircleDialog
                newCircle={newCircle}
                setNewCircle={setNewCircle}
                handleCreateCircle={handleCreateCircle}
                isCreating={isCreating}
                setShowAddDialog={setShowAddDialog}
                showAddDialog={showAddDialog}
            /> */}

            {/* Edit Circle Dialog */}
            {/* <EditCircleDialog
                handleEditChange={handleEditChange}
                handleSaveEdit={handleSaveEditClick}
                editingCircle={editingCircle}
                setShowEditDialog={setShowEditDialog}
                showEditDialog={showEditDialog}
            /> */}

            <DeleteConfirmation selectDelete={selectDelete} setSelectDelete={(v) => setSelecteDelete(v)} confirmDelete={() => { deleteLink(selectDelete); setSelecteDelete('') }} />

        </div>
    );
};

export default Page;




// <Dialog open={!!selectDelete && selectDelete !== ''} onOpenChange={val => setSelectDelete('')}>
{/* <DialogContent className='w-fit h-fit'> */ }

function DeleteConfirmation({ selectDelete, setSelectDelete, confirmDelete }: {
    selectDelete: string; setSelectDelete: (v: string) => void; confirmDelete: () => void;
}) {

    return (
        (!!selectDelete && selectDelete !== '') ?
        (<div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h3 className="text-lg font-medium mb-4">Confirm Deletion</h3>
                <p className="mb-6">Are you sure you want to delete this item? This action cannot be undone.</p>
                <div className="flex justify-end gap-4">
                    <button
                        onClick={() => setSelectDelete('')}
                        className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmDelete}
                        className="bg-red-500 hover:bg-red-700 text-white px-4 py-2 rounded"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>) : <></>


    );
}