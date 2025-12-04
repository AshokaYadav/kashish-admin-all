import { INewApi, IScalObj, IUpdateApi, IUpdateParams } from "@/apis/apis";
import useActivateApi from "@/hooks/apis/use-activate-api";
import useCreateApi from "@/hooks/apis/use-create-api";
import { useGetApis } from "@/hooks/apis/use-get-apis"
import useUpdateApi from "@/hooks/apis/use-update-api";
import useUpdateApiParams from "@/hooks/apis/use-update-params";
import { EAPITYPES, EHttpMethod, IApi } from "@/types/api";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export const emptyApi: IApi = {
    type: '',
    password: '',
    transaction_password: '',
    created_by: '',
    dispute_email: '',
    id: '',
    method: EHttpMethod.get,
    name: '',
    params: {},
    status: '',
    url: ''
};

export const emptyNewApi: INewApi = {
    type: EAPITYPES.RECHARGE,
    name: "",
    url: '',
    method: EHttpMethod.get,
    password: '',
    transaction_password: '',
    dispute_email: '',
    mapping: {},
}

export const emptyEditApi: IUpdateApi = {
    ...emptyNewApi,
    id: '',
}

export default function useApi() {
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEditDialog, setShowEditDialog] = useState<boolean>(false);

    const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
    const [editingParams, setEditingParams] = useState<Map<string, IScalObj<string>>>(new Map());
    const [newApi, setNewApi] = useState<INewApi>({ ...emptyNewApi });
    const [editApi, setEditApi] = useState<IUpdateApi>({ ...emptyEditApi });

    const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false);
    const [errors, setErrors] = useState({});
    const { data: apis, isLoading: isLoadingApis, refetch: refetchApis } = useGetApis();

    const handleSuccess = () => {
        toast('Successfull');
        refetchApis();
        return {
            create: () => {
                setShowAddDialog(false);
                resetNewApiValues();
                // setNewApi({...enmptyApi});
            },
            update: () => {
                resetEditApiValues();
                setShowEditDialog(false);
            },
            activate: () => {
                refetchApis();
            }
        }
    }


    const handleError = () => {
        toast('Error');
        refetchApis();
        return {
            create: () => {
                setShowAddDialog(false);

            },
            update: () => {
                setShowEditDialog(false);
            },
        }
    }

    const { create, isCreating } = useCreateApi(() => handleSuccess().create(), () => handleError().create());
    const { update, isUpdating: isUpdatingApi } = useUpdateApi(() => handleSuccess().update(), () => handleError().update());

    const { update: updateApiParams, isUpdating: isUpdatingApiParams, data } = useUpdateApiParams(
        () => handleSuccess().update(),
        () => handleError().update()
    );
    const { activate, isActivating } = useActivateApi(() => {
        console.log('on api update success')
        refetchApis();
    }, () => {
        console.log('on api update success')
        handleError().update();
    });

    useEffect(() => {
        if (data && data.id) editingParams.set(data.id, data.params);
    }, [data]);

    const toggleRow = (id: string, api: IApi) => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
        } else {
            newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
        if (!editingParams.has(id)) {
            selectEditingParam(id, { ...api.params });
        }
    };

    const getEditingParams = (id: string = ''): IScalObj<string> => {
        if (!editingParams.has(id))
            editingParams.set(id, {});
        return editingParams.get(id) as IScalObj<string>;;
    }
    const selectEditingParam = (id: string = '', obj: IScalObj<string>) => {
        editingParams.set(id, obj);
    }

    const resetParamsChanges = (id: string = '', params: IScalObj<string>) => {
        editingParams.set(id, { ...params });
    }
    const handleParamsChange = (id: string = '', key: string, value: string) => {
        const params = editingParams.get(id);
        editingParams.set(id, params ? { ...params, [key]: value } : { [key]: value });
    }
    const handleRemoveParam = (id: string = '', key: string = '') => {
        const params = editingParams.get(id);
        if (!params) return;
        const { [key]: _, ...rest } = params;
        editingParams.set(id, rest);
    }

    const saveUpdatedParams = (id: string = '') => {
        const params = editingParams.get(id);
        if (!params) return;
        editingParams.delete(id);
        updateApiParams({ id, params })
    }

    const onEditClicked = (api: IApi) => {
        setShowEditDialog(true);
        setEditApi({ ...api });
    }

    const handleNewApiUpdate = (key: string, value: any) => {
        setNewApi({ ...newApi, [key]: value });
    }

    const resetNewApiValues = () => {
        setNewApi({ ...emptyNewApi });
    }

    const handleEditApiUpdate = (key: string, value: any) => {
        setEditApi({ ...editApi, [key]: value });
    }

    const resetEditApiValues = () => {
        setEditApi({ ...emptyEditApi });
    }


    const updateApi = () => {
        update(editApi);
    }
    return {
        showAddDialog, setShowAddDialog,
        showEditDialog, setShowEditDialog,
        showUpdateDialog, setShowUpdateDialog,
        expandedRows, setExpandedRows,
        editApi, setEditApi,
        errors, setErrors,
        apis, isLoadingApis, refetchApis,

        activate, isActivating,
        create, isCreating,
        updateApi, isUpdatingApi,
        updateApiParams, isUpdatingApiParams,

        editingParams, setEditingParams, getEditingParams,
        selectEditingParam, handleParamsChange,
        saveUpdatedParams, handleRemoveParam,
        toggleRow, resetParamsChanges, onEditClicked,
        newApi, setNewApi, emptyApi, emptyNewApi,

        handleNewApiUpdate, resetNewApiValues,
        handleEditApiUpdate, resetEditApiValues,
    }
}