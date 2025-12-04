import React from 'react';
import { Shield, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { UserT } from '@/types/types';

export const UserViewCard: React.FC<{
    user: UserT | null;

}> = ({ user }) => {
    if (!user) return;

    return (
        <Card className="mb-4 hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Avatar>
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                    </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">

                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-sm">{user.name}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-sm">{user.email}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">City</p>
                        <p className="text-sm">{user.city}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Mobile</p>
                        <p className="text-sm">{user.mobile}</p>
                    </div>


                    <div>
                        <p className="text-sm text-gray-500">Role</p>
                        <p className="text-sm capitalize">{user.role}</p>
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Status</p>
                        <Badge variant={user.status.toString().toLowerCase() === 'active' ? 'outline' : 'secondary'}>
                            {user.status}
                        </Badge>
                    </div>
                </div>


                <div className="mt-4 flex gap-4">
                    {(user.role.toString().toLowerCase() === 'admin') && (
                        <Badge variant="outline" className="text-blue-600">
                            <Shield className="w-3 h-3 mr-1" /> Admin
                        </Badge>
                    )}
                    {(user.role.toString().toLowerCase() === 'distributor') && (
                        <Badge variant="outline" className="text-green-600">
                            <Building className="w-3 h-3 mr-1" /> Distributor
                        </Badge>
                    )}
                    {(user.role.toString().toLowerCase() === 'retailer') && (
                        <Badge variant="outline" className="text-yellow-600">
                            <Building className="w-3 h-3 mr-1" /> Retailer
                        </Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};