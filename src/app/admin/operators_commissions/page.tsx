'use client';
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import OperatorCommissionCard from './components/operator-card';
import NewOperatorCommissionDialog from './components/new-commission-dialog';
import EditOperatorCommissionDialog from './components/edit-commission-dialog';
import useOperatorCommissions from './components/use-operator-commissions';
import OperatorCommissionTable from './components/operator-commission-table';
import DistributorsList from './components/distributors-list';

const OperatorsPage = () => {

    const {
        handleDelete, handleEdit,
        operatorCommissions, isLoadingOperatorCommissions, refetchOperatorCommissions,
        showAddDialog, showEditDialog, setShowAddDialog, setShowEditDialog,
        editingOperatorMargins, setEditingOperatorMargins,
        operators, isLoadingOperators, refetchOperators,

        distributors, isLoadingDistributors, refetchDistributors,
        selectedDistributor, setSelectedDistributor,
    } = useOperatorCommissions();

    useEffect(() => {
        console.log('selected dist', selectedDistributor);
    }, [selectedDistributor]);
    return (
        <div className="min-h-screen w-full bg-gray-50">
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                {
                    (selectedDistributor && selectedDistributor != '') && <div className="flex justify-between items-center px-8 py-4">
                        <h2 className="text-2xl font-semibold text-gray-800">Operators Commissions</h2>
                        <Button
                            disabled={((operators || [])?.length <= 0) || !operators}
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                            onClick={() => setShowAddDialog(true)}
                        >
                            <Plus className="h-4 w-4 mr-2" />
                            Add New Commission
                        </Button>
                    </div>
                }
            </div>


            {(!selectedDistributor || selectedDistributor === '') ?
                (<DistributorsList
                    distributors={distributors || []}
                    selectedDistributor={selectedDistributor}
                    setSelectedDistributor={setSelectedDistributor}
                />)
                :
                (
                    <div className="p-8">
                        <OperatorCommissionTable
                            operatorCommissions={operatorCommissions || []}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            refetch={refetchOperatorCommissions}
                        />
                    </div>
                )}


            <NewOperatorCommissionDialog
                selectedDistributor={selectedDistributor || ''}
                showAddDialog={showAddDialog}
                setShowAddDialog={setShowAddDialog}
                operators={operators?.map(({ id, name }) => ({ id, name })) || []}
            />

            <EditOperatorCommissionDialog
                refetch={refetchOperatorCommissions}
                showMarginsDialog={showEditDialog}
                setShowMarginsDialog={setShowEditDialog}
                editingOperatorMargins={editingOperatorMargins}
                setEditingOperatorMargins={setEditingOperatorMargins}
            />
        </div >
    );
};

export default OperatorsPage;
