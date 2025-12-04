import React, { useState } from 'react';
import {
    TableCell,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Plus, Redo } from "lucide-react";
import { IApi } from '@/types/api';

import { IScalObj } from '@/apis/apis';
import isEqual from 'lodash/isEqual';


export interface IExpandedRowProps {
    api: IApi;
    editingParams: Map<string, IScalObj<string>>;
    handleParamsChange: (id: string, key: string, value: string) => void;
    saveUpdatedParams: (id: string) => void;
    handleRemoveParam: (id: string, key: string) => void;
    resetParamsChanges: (id: string, params: IScalObj<string>) => void;
    isUpdatingParams: boolean;
}

interface INewParam {
    key: string;
    value: string;
}

const defaultNewParam: INewParam = {
    key: '', value: ''
}

export default function ExpandedRow({ api, editingParams, isUpdatingParams, resetParamsChanges, handleParamsChange, saveUpdatedParams, handleRemoveParam }: IExpandedRowProps) {
    const [newParam, setNewParam] = useState<INewParam>({ ...defaultNewParam });

    const cancleParamsChange = () => {
        resetParamsChanges(api.id, api.params);
        setNewParam({ ...newParam });
    }

    const handleOnRemove = (key: string = '') => {
        handleRemoveParam(api.id, key)
        setNewParam({ ...newParam });
    }

    const updateNewParam = (key: string, value: string) => {
        setNewParam({ ...newParam, [key]: value })
    }

    const handleOnPlusClick = () => {
        console.log('new param', newParam);
        if (isEqual(newParam, defaultNewParam)) return;
        handleParamsChange(api.id, newParam.key, newParam.value);
        setNewParam({ ...defaultNewParam });
    }

    return (
        <TableRow>
            <TableCell colSpan={8} className="bg-gray-50 p-4">
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <h4 className="font-medium text-gray-900">Parameters</h4>
                        <div className='flex flex-row'>
                            {!isEqual(api.params, editingParams.get(api.id) || {}) && (
                                <Button
                                    disabled={isUpdatingParams}
                                    onClick={cancleParamsChange}
                                    variant='outline'
                                    className="border-red-200 bg-transparent text-red-600 hover:bg-red-50 mx-1"
                                    size="sm"
                                >
                                    <Redo className="w-4 h-4" />
                                </Button>
                            )}
                            {!isEqual(api.params, editingParams.get(api.id) || {}) && (
                                <Button
                                    disabled={isUpdatingParams}
                                    onClick={() => saveUpdatedParams(api.id)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white text-sm mx-1"
                                    size="sm"
                                >
                                    Save Changes
                                </Button>
                            )}
                        </div>
                    </div>
                    {/* Rest of your parameters section remains the same */}
                    <div className="space-y-2">
                        {Object.entries(editingParams.get(api.id) || {}).map(([key, value]) => (
                            <div key={key} className="flex items-center gap-2 bg-white p-2 rounded border">
                                <div className="flex-1 grid grid-cols-2 gap-2">
                                    <div className="font-mono text-sm text-blue-600">{key}</div>
                                    <div className="text-sm text-gray-600">{`${value}`}</div>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleOnRemove(key)}
                                    className="p-1 hover:bg-red-100 rounded"
                                >
                                    <X className="h-4 w-4 text-red-500" />
                                </Button>
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Parameter key"
                            value={newParam.key}
                            onChange={(e) => updateNewParam('key', e.target.value)}
                            className="flex-1"
                        />
                        <Input
                            placeholder="Parameter value"
                            value={newParam.value}
                            onChange={(e) => updateNewParam('value', e.target.value)}
                            className="flex-1"
                        />
                        <Button
                            disabled={isUpdatingParams}
                            variant="outline"
                            onClick={handleOnPlusClick}
                            className="px-4"
                        >
                            <Plus className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </TableCell>
        </TableRow >
    );
}