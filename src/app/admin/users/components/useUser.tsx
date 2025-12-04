import { updateUser } from "@/apis/user";
import { IBaseUserInfo } from "@/components/admin/NewUserCard";
import { useCreateCategory } from "@/hooks/categories/use-create-category";
import { useCreateUser } from "@/hooks/users/use-create-user";
import { useDeleteUser } from "@/hooks/users/use-delete-user";
import { useUpdateUserStatus } from "@/hooks/users/use-update-status";
import { useUpdateUser } from "@/hooks/users/use-update-user";
import { useGetUsersWalletsTransaction } from "@/hooks/wallet/useGetWalletTransactions";
import { RootState } from "@/store/store";
import { Description } from "@radix-ui/react-dialog";
import { useCallback, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner";

export interface User {
    id: string;
    name: string;
    email: string;
    mobile: string;
    city: string;
    status: 'active' | 'inactive';
    role: 'admin' | 'distributor' | 'retailer';
    admin: boolean;
    distributor: boolean;
    avatar: string;
    mpin: string;
}

export interface WalletInfo {
    balance: number;
    transactions: {
        id: number;
        amount: number;
        type: 'credit' | 'debit';
        date: string;
    }[];
}


export default function useUser() {
    const { user } = useSelector((state: RootState) => state.auth);
    const { data: users, isLoading: isLoadingUsers, refetch: refetchUsers } = useGetUsersWalletsTransaction();
    const [showNewUserDialog, setShowNewUserDialog] = useState<boolean>(false);
    const { updateStatus, isUpdatingStatus } = useUpdateUserStatus(refetchUsers, (err) => toast('Error Creating user', { description: err }));
    const { create, isCreating } = useCreateUser(refetchUsers, (err) => toast('Error Creating user', { description: err }));
    const { update, isUpdating } = useUpdateUser(refetchUsers, (err) => toast('Error Updating user', { description: err }));
    const { delete: deleteUser, isDeleting } = useDeleteUser(refetchUsers, (err) => toast('Error Updating user', { description: err }));

    const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'inactive'>('all');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [currentTab, setCurrentTab] = useState<'distributor' | 'retailer'>('distributor');

    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const filteredUsers = useCallback(() => (users || [])?.filter(({ user }) => {
        const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            user.city.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = user.role.toLowerCase() === currentTab;
        const matchesStatus = statusFilter === 'all' || user.status.toLowerCase() === statusFilter.toLowerCase();
        return matchesSearch && matchesRole && matchesStatus;

    }), [searchQuery, currentTab, statusFilter, users]);

    const getDistributors = useCallback((): IBaseUserInfo[] => (users || []).filter(({ user }) => user.role.toLowerCase() === 'distributor').map(dist => ({
        name: dist.user.name,
        email: dist.user.email,
        id: dist.user_id,
        is_active: dist.user.status.toLowerCase() === 'active'
    })), [users])

    const dist = useMemo((): IBaseUserInfo[] => (users || []).filter(({ user }) => user.role.toLowerCase() === 'distributor').map(dist => ({
        name: dist.user.name,
        email: dist.user.email,
        id: dist.user_id,
        is_active: dist.user.status.toLowerCase() === 'active'
    })), [users]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev: any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSwitchChange = (name: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: !prev[name as keyof typeof prev]
        }));
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData((prev: any) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmitUpdate = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingUser)
            update({ ...formData, id: formData.id, role: editingUser.role || 'distributor' });
        handleCloseModal();
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingUser(null);
        setFormData({});
    };


    const handleEdit = (user: User) => {
        setEditingUser(user);
        const { id, name, email, mobile, city, role, mpin } = user;
        setFormData({ id, name, email, mobile, city, role, mpin });
        setIsModalOpen(true);
    };

    const updateEdititngParams = (key: keyof User, value: any) => {
        if (key === 'id' || !editingUser) return;
        setEditingUser({ ...editingUser, [key]: value });
    }

    const handleToggleStatus = (id: string = '', status: boolean) => {
        const val = status ? 'ACTIVE' : "INACTIVE";
        update({ id, status: val });
    };


    const getUserStats = () => {
        return {
            admins: users?.filter(({ user }) => user.role === 'ADMIN').length || 0,
            distributors: users?.filter(({ user }) => user.role === 'DISTRIBUTOR').length || 0,
            retailers: users?.filter(({ user }) => user.role === 'RETAILER').length || 0,
            active: users?.filter(({ user }) => user.status.toLowerCase() === 'active').length || 0,
        };
    };

    const stats = getUserStats();


    return {
        user, stats, filteredUsers,
        statusFilter, setStatusFilter,
        users, isLoadingUsers, refetchUsers,
        isModalOpen, setIsModalOpen,
        editingUser, setEditingUser,
        searchQuery, setSearchQuery,
        currentTab, setCurrentTab,
        formData, setFormData,

        handleInputChange, handleCloseModal,
        handleEdit,
        handleSelectChange, handleSubmitUpdate,
        handleSwitchChange,
        getUserStats, handleToggleStatus,
        getDistributors,
        create, isCreating,
        update, isUpdating,
        deleteUser, isDeleting,
        updateEdititngParams,
        showNewUserDialog, setShowNewUserDialog,
        updateStatus, isUpdatingStatus, dist
    }
}