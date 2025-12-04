'use client';
import React from 'react';
import {
    AddApiDialog,
    useApi,
    EditApiDialog,
    ApisHeader,
    ApisMain,
} from './components';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { OptionIcon, Phone, Settings, Settings2Icon } from 'lucide-react';
import ApiManagementPage from '../op-circle-api-link/page';

const DataTable = () => {
    const {
        toggleRow, apis, editingParams, getEditingParams, handleParamsChange,
        create, isCreating, updateApi, isUpdatingApi,
        saveUpdatedParams, handleRemoveParam, expandedRows, setExpandedRows,
        editApi, setEditApi, handleEditApiUpdate, resetEditApiValues,
        showUpdateDialog, setShowUpdateDialog,
        showAddDialog, setShowAddDialog, resetParamsChanges,
        activate, isActivating, newApi,
        isUpdatingApiParams, showEditDialog, setShowEditDialog,
        onEditClicked, handleNewApiUpdate, resetNewApiValues,
    } = useApi();


    return (
        <div className="min-h-screen bg-gray-50">
            <ApisHeader setShowAddDialog={setShowAddDialog} />

            <Tabs defaultValue="recharge" className="w-full">
                <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="recharge" className="flex items-center gap-2">
                        <Settings2Icon className="h-4 w-4" />
                        <span>Recharge</span>
                    </TabsTrigger>
                    <TabsTrigger value="plans" className="flex items-center gap-2">
                        <OptionIcon className="h-4 w-4" />
                        <span>Plans</span>
                    </TabsTrigger>
                    <TabsTrigger value="sms" className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        <span>SMS</span>
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="recharge">
                    <ApisMain
                        handleStatusToggle={() => { }}
                        isUpdatingParams={isUpdatingApiParams}
                        resetParamsChanges={resetParamsChanges}
                        apis={apis || []}
                        toggleRow={toggleRow}
                        editingParams={editingParams}
                        saveUpdatedParams={saveUpdatedParams}
                        expandedRows={expandedRows}
                        handleParamsChange={handleParamsChange}
                        handleRemoveParam={handleRemoveParam}
                        handleUpdateClick={onEditClicked}

                        activateApi={activate}
                        isActivating={isActivating}
                    />
                </TabsContent>
                <TabsContent value="plans">
                    <ApiManagementPage />
                </TabsContent>
                <TabsContent value="sms"></TabsContent>
            </Tabs>



            <AddApiDialog
                newApi={newApi}
                open={showAddDialog}
                isCreating={isCreating}
                handleSaveClick={create}
                onOpenChange={setShowAddDialog}
                resetNewApiValues={resetNewApiValues}
                handleNewApiUpdate={handleNewApiUpdate}
            />

            {/* Update Dialog */}
            <EditApiDialog
                editApi={editApi}
                handleEditApiUpdate={handleEditApiUpdate}
                resetEditApiValues={resetEditApiValues}

                update={updateApi}
                isUpdating={isUpdatingApi}

                showUpdateDialog={showEditDialog}
                setShowUpdateDialog={setShowEditDialog}
            />
        </div>
    );
}

export default DataTable;
