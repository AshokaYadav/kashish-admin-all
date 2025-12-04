import ApiResultsTable, { IApiResultsTable } from "./ApiResultTable";

export interface ApisMainProps extends IApiResultsTable { }

export default function ApisMain({ activateApi, apis, editingParams, expandedRows, handleParamsChange, handleRemoveParam, handleStatusToggle, handleUpdateClick, isActivating, isUpdatingParams, resetParamsChanges, saveUpdatedParams, toggleRow, handleDeleteApi, isDeleting }: ApisMainProps) {
    return (
        < div className="p-8" >
            <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
                <div className="overflow-x-auto">
                    <ApiResultsTable
                        handleStatusToggle={() => { }}
                        isActivating={isActivating}
                        isUpdatingParams={isUpdatingParams}
                        resetParamsChanges={resetParamsChanges}
                        apis={apis || []}
                        toggleRow={toggleRow}
                        editingParams={editingParams}
                        saveUpdatedParams={saveUpdatedParams}
                        expandedRows={expandedRows}
                        handleParamsChange={handleParamsChange}
                        handleRemoveParam={handleRemoveParam}
                        activateApi={activateApi}
                        handleUpdateClick={handleUpdateClick}
                    />
                </div>
            </div>
        </div >
    );
}