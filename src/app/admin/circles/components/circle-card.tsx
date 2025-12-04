'use client';
import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, MapPin } from "lucide-react";
import { Switch } from '@/components/ui/switch';
import { Badge } from "@/components/ui/badge";
import { Circle } from '@/types/recharge';


export interface CircleCardProps {
    circle: Circle;
    onStatusChange: (circle: Circle, status: 'ACTIVE' | 'INACTIVE') => void;
    handleDelete: (id: string) => void;
    isUpdating: boolean;
    handleEditClick: (circle: Circle) => void;
}

export default function CircleCard({ circle, isUpdating, onStatusChange, handleEditClick, handleDelete }: CircleCardProps) {

    return (
        <Card key={circle.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-800">
                                {circle.name}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant={'outline'}
                                className={`${circle.status?.toString().toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                            >
                                {circle.status || 'NIL'}
                            </Badge>
                        </div>
                    </div>
                    <Switch
                        disabled={isUpdating}
                        checked={circle.status === 'ACTIVE'}
                        onCheckedChange={(val: boolean) => onStatusChange(circle, val ? 'ACTIVE' : 'INACTIVE')}
                        className="ml-4"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditClick(circle)}
                >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleDelete(circle.id)}
                >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}