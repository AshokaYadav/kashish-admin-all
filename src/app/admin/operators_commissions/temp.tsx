'use client';
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import OperatorCommissionCard from './components/operator-card';
import NewOperatorCommissionDialog from './components/new-commission-dialog';
import EditOperatorCommissionDialog from './components/edit-commission-dialog';
import useOperatorCommissions from './components/use-operator-commissions';

const OperatorsPage = () => {

    const {
        handleDelete, handleEdit,
        operatorCommissions, isLoadingOperatorCommissions, refetchOperatorCommissions,
        showAddDialog, showEditDialog, setShowAddDialog, setShowEditDialog,
        editingOperatorMargins, setEditingOperatorMargins,
        operators, isLoadingOperators, refetchOperators,
        selectedDistributor
    } = useOperatorCommissions();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Operators</h2>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => setShowAddDialog(true)}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Operator
                    </Button>
                </div>
            </div>

            {/* Main Content - Card Grid */}
            <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {operatorCommissions?.map((operatorCommission, _idx) => (
                        <OperatorCommissionCard
                            key={_idx}
                            refetch={refetchOperatorCommissions}
                            operatorCommission={operatorCommission}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                </div>
            </div>

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
