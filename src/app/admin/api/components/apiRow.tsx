import React, { useState } from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Edit2, X, ChevronDown, ChevronRight } from "lucide-react";
import ExpandedRow, { IExpandedRowProps } from './expandedRow';
import { IApi } from '@/types/api';
import { Switch } from '@/components/ui/switch';

export interface IApiRowProps extends IExpandedRowProps {
    expandedRows: Set<string>;
    isActivating: boolean;
    activateApi: (id: string) => void;
    toggleRow: (id: string, api: IApi) => void;
    handleStatusToggle: (id: string) => void;
    handleUpdateClick: (api: any) => void;
    isDeleting?: boolean;
    handleDeleteApi?: (id: string) => void;
}



export default function ApiRow({ api, expandedRows, isActivating, handleDeleteApi, activateApi, isUpdatingParams, editingParams, resetParamsChanges, handleParamsChange, saveUpdatedParams, toggleRow, handleStatusToggle, handleUpdateClick, handleRemoveParam }: IApiRowProps) {

    const isActive =
    (typeof api.status === 'boolean' && api.status === true) ||
    (typeof api.status === 'string' && api.status.toLowerCase() === 'active');

    

    return (<React.Fragment key={api?.id}>
        {/* Main Row */}
        <TableRow className="hover:bg-gray-50 transition-colors">
            <TableCell className="w-8">
                <button
                    onClick={() => toggleRow(api?.id, api)}
                    className="p-1 hover:bg-gray-100 rounded"
                >
                    {expandedRows.has(api?.id) ? (
                        <ChevronDown className="h-4 w-4" />
                    ) : (
                        <ChevronRight className="h-4 w-4" />
                    )}
                </button>
            </TableCell>
            <TableCell className="font-medium text-gray-900 py-4">{api?.type}</TableCell>
            <TableCell className="font-medium text-gray-900 py-4">{api?.name}</TableCell>
            <TableCell className="text-gray-600">{api?.url}</TableCell>
            <TableCell className="text-gray-600">
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                    {api?.method?.toUpperCase() || '-'}
                </span>
            </TableCell>
            <TableCell className="text-gray-600">
                <span className="px-2 py-1 bg-gray-100 rounded text-gray-600">
                    {api?.dispute_email || '-'}
                </span>
            </TableCell>
            <TableCell className="text-center">
               <Switch
                        disabled={isActivating || isActive}
                        checked={isActive}
                        onCheckedChange={() => activateApi(api.id)}
                        className="ml-4"
                    />
                {/* <div
                    className={`px-3 py-1 rounded-full text-sm font-medium inline-block cursor-pointer ${api.status.toLocaleLowerCase() === 'active' ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-red-100 text-red-700 hover:bg-red-200'}`}
                    onClick={() => handleStatusToggle(api.id)}
                >
                    {api.status.toUpperCase()}
                </div> */}
            </TableCell>
            <TableCell className="text-right pr-6">
                <div className="flex justify-end gap-2">
                    <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-200 hover:bg-gray-50 text-gray-600"
                        onClick={() => handleUpdateClick(api)}
                    >
                        <Edit2 className="h-4 w-4 mr-1" />
                        Edit
                    </Button>
                    {/* <Button
                        variant="outline"
                        size="sm"
                        className="border-red-200 text-red-600 hover:bg-red-50"
                        onClick={() => { if (handleDeleteApi) handleDeleteApi(api.id) }}
                    >
                        <X className="h-4 w-4" />
                    </Button> */}
                </div>
            </TableCell>
        </TableRow>

        {/* Expandable Parameters Section */}
        {expandedRows.has(api?.id) && (
            <ExpandedRow
                api={api}
                isUpdatingParams={isUpdatingParams}
                resetParamsChanges={resetParamsChanges}
                editingParams={editingParams}
                handleParamsChange={handleParamsChange}
                saveUpdatedParams={saveUpdatedParams}
                handleRemoveParam={handleRemoveParam}
            />

        )}
    </React.Fragment>);
}
