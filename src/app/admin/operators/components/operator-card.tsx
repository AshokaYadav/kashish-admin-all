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
import { Operator } from '@/types/operator';
import { IUpdateOperator } from '@/apis/operator';

export interface OperatorCardProps {
    operator: Operator;
    onStatusChange: (operator: IUpdateOperator, status: 'ACTIVE' | 'INACTIVE') => void;
    handleDelete: (id: string) => void;
    isUpdating: boolean;
    handleEdit: (operator: IUpdateOperator) => void;
}

export default function OperatorCard({ operator, isUpdating, onStatusChange, handleEdit, handleDelete }: OperatorCardProps) {
    return (
        <Card key={operator.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="space-y-2">
                        <div className="flex items-center">
                            {operator.image_url ? (
                                <div className="h-10 w-10 border-r-4 overflow-hidden mr-3 bg-gray-100 flex-shrink-0">
                                    <img
                                        src={`https://api.recharge.kashishindiapvtltd.com/`+operator.image_url}
                                        alt={`${operator.name} logo`}
                                        className="h-full w-full object-fit"
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            const target = e.target as HTMLImageElement;
                                            target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23d1d5db' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94'%3E%3C/path%3E%3Cpath d='M14.12 14.12A3 3 0 1 1 9.88 9.88'%3E%3C/path%3E%3Cpath d='M1 1l22 22'%3E%3C/path%3E%3C/svg%3E";
                                        }}
                                    />
                                </div>
                            ) : (
                                <MapPin className="h-5 w-5 text-gray-500 mr-2" />
                            )}
                            <h3 className="text-lg font-semibold text-gray-800">
                                {operator.name}
                            </h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant={'outline'}
                                className={`${operator.status?.toString().toLowerCase() === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}
                            >
                                {operator.status || 'NIL'}
                            </Badge>
                        </div>
                    </div>
                    <Switch
                        disabled={isUpdating}
                        checked={operator.status === 'ACTIVE'}
                        onCheckedChange={(val: boolean) => onStatusChange(operator, val ? 'ACTIVE' : 'INACTIVE')}
                        className="ml-4"
                    />
                </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2 pt-2">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit({
                        category_id: operator.category_id,
                        id: operator.id,
                        name: operator.name,
                        status: operator.status,
                        image: operator.image_url
                    })}
                >
                    <Edit2 className="h-4 w-4 mr-1" />
                    Edit
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-200 hover:bg-red-50"
                    onClick={() => handleDelete(operator.id)}
                >
                    <Trash2 className="h-4 w-4 mr-1" />
                    Delete
                </Button>
            </CardFooter>
        </Card>
    );
}