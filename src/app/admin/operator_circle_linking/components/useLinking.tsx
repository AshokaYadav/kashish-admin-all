import { IResponseOpCirLinkApi, IUpdateOpCirLinkRequest } from "@/apis/op-circle-link";
import { useGetLinkApis } from "@/hooks/apis/use-get-link-apis";
import { useGetAllCircles } from "@/hooks/circles/use-get-all-circles";
import { useCreateOperatorCircleLink, useDeleteOpCircleLink, useGetAllCircleOperatorLinkings, useUpdateCircleOperatorLinking } from "@/hooks/linking/use-create-op-circle-link";
import { useGetAllOperators } from "@/hooks/operators/use-get-all-operators";
import { useState } from "react";
import { toast } from "sonner";

export default function useLinking() {

    const [editSelected, setEditSelected] = useState<IUpdateOpCirLinkRequest | null>(null);
    const [showAddDialog, setShowAddDialog] = useState<boolean>(false);
    const [showEdit, setShowEdit] = useState<boolean>(false);
    const { data: opCircleLinks, isLoading: isLoadingOpCircleLinks, refetch: refetchOpCircleLinks } = useGetAllCircleOperatorLinkings();
    
    const { create, isCreating } = useCreateOperatorCircleLink(() => { refetchOpCircleLinks(); setShowAddDialog(false) }, err => toast('Error', { description: err }));
    const { update, isUpdating } = useUpdateCircleOperatorLinking(() => { refetchOpCircleLinks(); setShowEdit(false); setEditSelected(null); }, err => toast('Error', { description: err }));
    const { delete: deleteLink, isDeleting } = useDeleteOpCircleLink(() => { refetchOpCircleLinks(); setShowEdit(false); setEditSelected(null); }, err => toast('Error', { description: err }));

    const { isLoadingLinkApis, linkApis, refetchLinkApis } = useGetLinkApis();
    const { data: operators, isLoading: isLoadingOperators, refetch: refetchOperators } = useGetAllOperators();
    const { data: circles, isLoading: isLoadingCircles, refetch: refetchCircles } = useGetAllCircles();

    return {
        opCircleLinks, isLoadingOpCircleLinks, refetchOpCircleLinks,
        operators, isLoadingOperators, refetchOperators,
        circles, isLoadingCircles, refetchCircles,
        create, isCreating,
        update, isUpdating,
        isLoadingLinkApis, linkApis, refetchLinkApis,
        showAddDialog, setShowAddDialog,
        editSelected, setEditSelected,
        showEdit, setShowEdit,
        deleteLink, isDeleting,
    };
}