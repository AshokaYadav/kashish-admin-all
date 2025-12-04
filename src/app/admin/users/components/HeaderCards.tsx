'use client';

import React from 'react';
import { Users, Shield, Building } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';


function HeaderCards({ stats }: any) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-green-600" />
                        <div>
                            <p className="text-sm text-gray-500">Distributors</p>
                            <p className="text-2xl font-bold">{stats.distributors}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-purple-600" />
                        <div>
                            <p className="text-sm text-gray-500">Retailers</p>
                            <p className="text-2xl font-bold">{stats.retailers}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardContent className="pt-6">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <div>
                            <p className="text-sm text-gray-500">Active Users</p>
                            <p className="text-2xl font-bold">{stats.active}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>

    )
}

export default HeaderCards