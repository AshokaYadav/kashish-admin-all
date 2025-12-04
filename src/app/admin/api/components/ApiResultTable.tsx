import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { IApi } from "@/types/api";
import ApiRow, { IApiRowProps } from "./apiRow";
import { IScalObj } from "@/apis/apis";

export interface IApiResultsTable extends Omit<Omit<IApiRowProps, 'api'>, 'editingParams'> {
    apis: IApi[];
    editingParams: Map<string, IScalObj<string>>;
    resetParamsChanges: (id: string, params: IScalObj<string>) => void;
}

export default function ApiResultsTable({
    activateApi,
    apis, isActivating, isUpdatingParams,
    editingParams, resetParamsChanges, expandedRows,
    handleParamsChange, saveUpdatedParams, toggleRow,
    handleStatusToggle, handleUpdateClick, handleRemoveParam
}: IApiResultsTable) {
    return (
        <Table>
            <TableHeader>
                <TableRow className="bg-gray-50">
                    <TableHead className="w-8"></TableHead>
                    <TableHead className="w-[200px] font-semibold text-gray-700 py-4">Type</TableHead>
                    <TableHead className="w-[200px] font-semibold text-gray-700 py-4">Name</TableHead>
                    <TableHead className="font-semibold text-gray-700 min-w-[200px]">URL</TableHead>
                    <TableHead className="font-semibold text-gray-700 w-[120px]">Method</TableHead>
                    <TableHead className="font-semibold text-gray-700 min-w-[150px]">Dispute Email</TableHead>
                    <TableHead className="text-center font-semibold text-gray-700 w-[120px]">Status</TableHead>
                    <TableHead className="text-right font-semibold text-gray-700 w-[180px] pr-6">Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {apis.map((api, _idx) => (
                    <ApiRow
                        key={_idx}
                        api={api}
                        editingParams={editingParams}
                        isUpdatingParams={isUpdatingParams}
                        resetParamsChanges={resetParamsChanges}
                        activateApi={activateApi}
                        isActivating={isActivating}
                        handleParamsChange={handleParamsChange}
                        saveUpdatedParams={saveUpdatedParams}
                        expandedRows={expandedRows}
                        handleRemoveParam={handleRemoveParam}
                        handleStatusToggle={handleStatusToggle}
                        handleUpdateClick={handleUpdateClick}
                        toggleRow={toggleRow}
                    />

                ))}
            </TableBody>
        </Table>
    );
}