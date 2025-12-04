import React, { useState } from 'react';
import { Pencil, Trash2, MoreVertical, Shield, Building, HistoryIcon } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

import { ChevronDown } from 'lucide-react';
import { User, WalletInfo } from './useUser';
import { IUser, IUsersWalletsTransactions } from '@/apis/wallets';
import { IUpdateUserReq } from '@/hooks/users/use-update-user';
import { useRouter } from 'next/navigation';

export const UserCard: React.FC<{
    user: IUsersWalletsTransactions;
    // user: User;
    onEdit: (user: User) => void;
    onDelete: (id: string) => void;
    updateStatus: (payload: IUpdateUserReq) => void;

    onSave: (user: User) => void;
}> = ({ user, onEdit, onDelete, updateStatus, onSave }) => {
    const router = useRouter();
    
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user.user);
    const [showWallet, setShowWallet] = useState(false);

    const handleSave = () => {
        const role = user.user.role.toLowerCase() === 'admin' ? 'admin' : 'distributor';
        const status = user.user.status.toLowerCase() === 'active' ? 'active' : 'inactive';
        const admin = user.user.role.toLowerCase() === 'admin';
        const distributor = user.user.role.toLowerCase() === 'distributor';
        const mpin = (user.user.role.toLowerCase() === 'retailer') ? user.user.mpin : '0000';

        onSave({
            mpin: mpin,
            admin,
            distributor,
            avatar: '',
            city: user.user.city,
            email: user.user.email,
            id: user.user_id,
            mobile: user.user.mobile,
            name: user.user.name,
            role,
            status,
        })
        setIsEditing(false);
    };

    const handleOnEdit = () => {
        const role = user.user.role.toLowerCase() === 'admin' ? 'admin' : 'distributor';
        const status = user.user.status.toLowerCase() === 'active' ? 'active' : 'inactive';
        const admin = user.user.role.toLowerCase() === 'admin';
        const distributor = user.user.role.toLowerCase() === 'distributor';
        const mpin = (user.user.role.toLowerCase() === 'retailer') ? user.user.mpin : '0000';

        onEdit({
            mpin,
            admin,
            distributor,
            avatar: '',
            city: user.user.city,
            email: user.user.email,
            id: user.user_id,
            mobile: user.user.mobile,
            name: user.user.name,
            role,
            status,
        })
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({
            ...prev,
            [name]: value
        }));
    };


    return (
        <Card className="mb-4 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            {/* <AvatarImage src={user.user.avatar} /> */}

                            <AvatarFallback>{user.user.name.charAt(0)}</AvatarFallback>
                            
                        </Avatar>
                        
                        <div>
                            {isEditing ? (
                                <div className="space-y-2">
                                    <Input
                                        name="name"
                                        value={editedUser.name}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                    <Input
                                        name="email"
                                        value={editedUser.email}
                                        onChange={handleInputChange}
                                        className="w-full"
                                    />
                                </div>
                            ) : (
                                <>
                                    <h3 className="font-medium">{user.user.name}</h3>
                                    <p className="text-sm text-gray-500">{user.user.email}</p>
                                </>
                            )}
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        {isEditing && (
                            <Button onClick={handleSave} variant="outline" size="sm">
                                Save Changes
                            </Button>
                        )}
                        <DropdownMenu>
                      <div className='text-sm'>Join:&nbsp; &nbsp;
  {new Date(user.user.createdAt).toLocaleString("en-IN", { 
    timeZone: "Asia/Kolkata", 
    day: "2-digit",
    month: "numeric",
    year: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // hour12: true
  })}
</div>
                            <DropdownMenuTrigger asChild>
                                
                                <Button variant="ghost" size="icon">
                                    
                                    <MoreVertical className="w-4 h-4" />
                                </Button>
                            </DropdownMenuTrigger>
                            
                            <DropdownMenuContent align="end">
                                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                                {/* <DropdownMenuItem onClick={() => onEdit(user)}> */}
                                <DropdownMenuItem onClick={handleOnEdit}>
                                    <Pencil className="w-4 h-4 mr-2" /> Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem onClick={() => updateStatus({id: user.user_id, status: !(user.user.status.toString().toLowerCase() === 'active')})}>
                                    <Shield className="w-4 h-4 mr-2" /> Toggle Status
                                </DropdownMenuItem>

                                <DropdownMenuSeparator />
                                <DropdownMenuSeparator />
                                
                                <DropdownMenuItem onClick={()=> {router.replace(`/admin/login_history/${user.user_id}`);}}>
                                    <HistoryIcon className="w-4 h-4 mr-2" /> Login History
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                    onClick={() => onDelete(user.id)}
                                    className="text-red-600"
                                >
                                    <Trash2 className="w-4 h-4 mr-2" /> Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                    {isEditing ? (
                        <>
                            <div className="space-y-2">
                                <Label>City</Label>
                                <Input
                                    name="city"
                                    value={editedUser.city}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Mobile</Label>
                                <Input
                                    name="mobile"
                                    value={editedUser.mobile}
                                    onChange={handleInputChange}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div>
                                <p className="text-sm text-gray-500">City</p>
                                <p className="text-sm">{user.user.city}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Mobile</p>
                                <p className="text-sm">{user.user.mobile}</p>
                            </div>
                        </>
                    )}
                    <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="text-sm capitalize">{user.user.role}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <Badge variant={user.user.status.toLowerCase() === 'active' ? 'outline' : 'secondary'}>
                            {user.user.status}
                        </Badge>
                    </div>
                </div>

                <div className="mt-4">
                    <Button
                        variant="ghost"
                        className="w-full flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        onClick={() => setShowWallet(!showWallet)}
                    >
                        <div className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                            <span>Wallet Details</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showWallet ? 'rotate-180' : ''}`} />
                        
                    </Button>

                    <div className={`overflow-hidden transition-all duration-200 ease-in-out ${showWallet ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="mt-4 p-4 border rounded-lg bg-gray-50">
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <h4 className="font-medium">Current Balance</h4>
                                    {/* <span className="text-xl font-bold text-green-600">₹{user?.recent_transactions[0]?.closing_balance || '-'}</span> */}
                                </div>

                                <div className="space-y-2">
                                    <h5 className="text-sm font-medium text-gray-600">Recent Transactions</h5>
                                    <div className="space-y-2">
                                        {user.recent_transactions?.filter((transaction) => {
                                            return transaction.status.toLowerCase() === 'success'
                                        }).map(transaction => (
                                            <div key={transaction.id} className="flex justify-between items-center p-2 bg-white rounded shadow-sm">
                                                <span className="text-sm text-gray-600">{new Date(transaction.createdAt).toLocaleString()}</span>
                                                <span>
                                                    comm:
                                                    (<span className={`text-sm font-medium ${(transaction.type === 'credit' || transaction.type === 'RECHARGE_COMMISSION') ? 'text-green-600' : 'text-red-600'}`}>
                                                        {(transaction.type === 'credit' || transaction.type === 'RECHARGE_COMMISSION') ? '+' : '-'}₹{Math.abs(transaction.commission)}
                                                    </span>)
                                                </span>
                                                <span>
                                                    amount:
                                                    (<span className={`text-sm font-medium ${(transaction.type === 'credit' || transaction.type === 'RECHARGE_COMMISSION') ? 'text-green-600' : 'text-red-600'}`}>
                                                        {(transaction.type === 'credit' || transaction.type === 'RECHARGE_COMMISSION') ? '+' : '-'}₹{Math.abs(transaction.amount)}
                                                    </span>)
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-4 flex gap-4">
                    {(user.user.role.toLowerCase() === 'admin') && (
                        <Badge variant="outline" className="text-blue-600">
                            <Shield className="w-3 h-3 mr-1" /> Admin
                        </Badge>
                    )}
                    {(user.user.role.toLowerCase() === 'distributor') && (
                        <Badge variant="outline" className="text-green-600">
                            <Building className="w-3 h-3 mr-1" /> Distributor
                        </Badge>
                    )}
                    {(user.user.role.toLowerCase() === 'retailer') && (
                        <Badge variant="outline" className="text-yellow-600">
                            <Building className="w-3 h-3 mr-1" /> Retailer
                        </Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};