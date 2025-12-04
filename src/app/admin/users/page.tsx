'use client';

import React from 'react';
import { UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UsersSection from './components/UsersSection';
import HeaderCards from './components/HeaderCards';
import useUser from './components/useUser';
import { UserViewCard } from './components/UserViewCard';
import CreateUserDialog from '@/components/admin/NewUserCard';
import ModifyUserCard from '@/components/admin/NewEditUserDialog';


export default function UsersPage() {
    const {
        user, stats, filteredUsers,
        statusFilter, setStatusFilter,
        isModalOpen, setIsModalOpen,
        editingUser, setEditingUser,
        searchQuery, setSearchQuery,
        currentTab, setCurrentTab,
        formData, setFormData,

        showNewUserDialog, setShowNewUserDialog,
        handleInputChange, handleCloseModal,
        handleEdit,
        handleSelectChange, handleSubmitUpdate,
        handleSwitchChange,
        getUserStats, handleToggleStatus,
        getDistributors,
        create, isCreating,
        update, isUpdating,
        updateEdititngParams,
        deleteUser, isDeleting,
        updateStatus, isUpdatingStatus,
        dist,
    } = useUser();


    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white border-b px-6 py-8">
                <div className="flex items-center justify-between">

                    <div>
                        <h1 className="text-3xl font-bold mb-2">User Management</h1>
                        <p className="text-gray-500">Manage your organization's users and their Roles</p>
                    </div>

                    <Button onClick={() => setShowNewUserDialog(true)} className="flex items-center gap-2">
                        <UserPlus className="w-4 h-4" /> Add New User
                    </Button>

                </div>
            </div>

            <div className="px-6 py-6">

                <CreateUserDialog
                    createUser={create}
                    isCreating={isCreating}
                    open={showNewUserDialog}
                    setOpen={setShowNewUserDialog}
                    distributors={dist || []}
                />

                <HeaderCards stats={stats} />

                <UserViewCard user={user} />

                <UsersSection
                    newFilteredUsers={filteredUsers()}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                    statusFilter={statusFilter}
                    setStatusFilter={setStatusFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    users={filteredUsers}
                    handleEdit={handleEdit}
                    handleDelete={deleteUser}
                    updateStatus={updateStatus}
                    handleToggleStatus={handleToggleStatus}
                />
            </div>

            {
                isModalOpen &&
                <ModifyUserCard
                    editingUser={editingUser}
                    updateEdititngParams={updateEdititngParams}
                    formData={formData}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmitUpdate}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    handleSwitchChange={handleSwitchChange}
                />
            }
            {/* {
                isModalOpen &&
                <AddOrModifyUserCard
                    editingUser={editingUser}
                    formData={formData}
                    handleCloseModal={handleCloseModal}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    handleSwitchChange={handleSwitchChange}
                />
            } */}
        </div >
    );
}