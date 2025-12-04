import React, { useEffect } from 'react';
import { Search } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { UserCard } from './userCard';
import { IUsersWalletsTransactions } from '@/apis/wallets';
import { IUpdateUserReq } from '@/hooks/users/use-update-user';

export interface UsersSectionProps {
    newFilteredUsers: IUsersWalletsTransactions[];
    currentTab: any; setCurrentTab: any; statusFilter: any; setStatusFilter: any;
    searchQuery: any; setSearchQuery: any; users: any; handleEdit: any;
    handleDelete: any;
    updateStatus: (payload: IUpdateUserReq) => void;
}
function UsersSection({ newFilteredUsers, currentTab, setCurrentTab, statusFilter, setStatusFilter, searchQuery, setSearchQuery, users, handleEdit, handleDelete, updateStatus }: any) {

    return (
        <Card className="mb-8 border-0 shadow-none bg-transparent">
            <CardHeader>
                <div className="flex items-center justify-between mb-4">
                    <div className="space-y-1">
                        <CardTitle>Users</CardTitle>
                        <CardDescription>
                            View and manage user accounts
                        </CardDescription>
                    </div>
                </div>

                <Tabs value={currentTab} onValueChange={setCurrentTab as (value: string) => void}>
                    <TabsList className="grid w-full grid-cols-2">
                        {/* <TabsTrigger value="admin">Admins</TabsTrigger> */}
                        <TabsTrigger value="distributor">Distributors</TabsTrigger>
                        <TabsTrigger value="retailer">Retailers</TabsTrigger>
                    </TabsList>
                </Tabs>

                <div className="mt-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Label htmlFor="status-filter" className="text-sm">Status:</Label>
                        <Select
                            value={statusFilter}
                            onValueChange={(value: 'all' | 'active' | 'inactive') => setStatusFilter(value)}
                        >
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Filter by status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Status</SelectItem>
                                <SelectItem value="active">Active</SelectItem>
                                <SelectItem value="inactive">Inactive</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                        <Input
                            placeholder="Search users..."
                            className="pl-8 w-[300px]"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
            </CardHeader>

            <CardContent>
                <ScrollArea className="h-[calc(100vh-400px)] pr-4">
                    {newFilteredUsers.map((user: any, _idx: number) => (
                        <UserCard
                            onSave={() => { }}
                            key={_idx}
                            user={user}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            updateStatus={updateStatus}
                        // onSave={handleSaveUser}
                        />
                    ))}
                </ScrollArea>
            </CardContent>
        </Card>
    )
}

export default UsersSection