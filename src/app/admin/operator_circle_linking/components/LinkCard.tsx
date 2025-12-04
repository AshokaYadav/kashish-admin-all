import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Trash2, Edit2, Signal, Delete } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { IResponseOpCirLinkApi } from '@/apis/op-circle-link';

export interface OperatorApiCardProps {
    opCircleLink: IResponseOpCirLinkApi[];
    setEdit: (val: IResponseOpCirLinkApi) => void;
    deleteLink: (id: string) => void;
    isUpdating: boolean;
    isDeleting: boolean;
    setSelecteDelete: (id: string) => void;
}

export default function LinkCard({ setSelecteDelete, deleteLink, isDeleting, opCircleLink, setEdit, isUpdating }: OperatorApiCardProps) {

    const handleEdit = (item: IResponseOpCirLinkApi) => {
        setEdit({
            ...item,
            operator_id: item.operator.id,
            circle_id: item.circle.id,
            provider_api_id: item.provider_api.id
        });
    };

    useEffect(() => {
        console.log('opCircleLink:', opCircleLink);
    }, [opCircleLink]);

    return (
    <div className="w-full overflow-auto rounded-md border">
        <table className=" w-full md:w-7xl mx-auto bg-gray-50">
            <thead className="bg-gray-100 text-left">
                <tr>
                    <th className="px-4 text-center py-2">Provider API</th>
                    <th className="px-4 text-center py-2">Operator</th>
                    <th className="px-4 text-center  py-2">Operator Code</th>
                    <th className="px-4 text-center py-2">Circle</th>
                    <th className="px-4 text-center py-2">Circle Code</th>
                    <th className="px-4 text-center py-2 text-right">Actions</th>
                </tr>
            </thead>
            <tbody>
                {opCircleLink?.map(({ id, operator, circle, operator_code, circle_code, provider_api, createdAt, updatedAt }) => (
                    <tr key={id} className="border-t">
                        <td className="px-4 text-center py-2">
                            <Badge variant="secondary">{provider_api.name}</Badge>
                        </td>
                        <td className="px-4 text-center py-2">
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <Signal className="h-4 w-4 text-gray-500" />
                                {operator.name}
                            </Badge>
                        </td>
                        <td className="px-4 text-center py-2">
                            <Badge variant="outline">{operator_code}</Badge>
                        </td>
                        <td className="px-4 text-center py-2">
                            <Badge variant="secondary">{circle.name}</Badge>
                        </td>
                        <td className="px-4 text-center py-2">
                            <Badge variant="outline">{circle_code}</Badge>
                        </td>
                        <td className="px-4 text-center py-2 text-right space-x-2">
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={isDeleting}
                                onClick={() => setSelecteDelete(id)}
                            >
                                <Delete className="h-4 w-4 mr-1" />
                                Delete
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                disabled={isUpdating}
                                onClick={() => handleEdit({
                                    id,
                                    operator,
                                    circle,
                                    operator_code,
                                    circle_code,
                                    provider_api,
                                    createdAt,
                                    updatedAt,
                                    circle_id: circle.id,
                                    operator_id: operator.id,
                                    provider_api_id: provider_api.id,
                                })}
                            >
                                <Edit2 className="h-4 w-4 mr-1" />
                                Edit
                            </Button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

}
