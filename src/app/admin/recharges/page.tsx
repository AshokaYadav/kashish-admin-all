'use client';

import React, { useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronRight, Plus, Save, Trash2, Edit2 } from "lucide-react";
import { Switch } from '@/components/ui/switch';


const RechargePlansPage = () => {
    const [plans, setPlans] = useState<any[]>([
        {
            id: 1,
            name: "Basic Pack",
            amount: 299,
            validity: "28 Days",
            data: "2GB/Day",
            calls: "Unlimited Calls",
            sms: "100 SMS/Day",
            type: "POPULAR",
            category: "Data",
            benefits: ["Amazon Prime", "Wynk Music"],
            isActive: true
        },
        {
            id: 2,
            name: "Value Pack",
            amount: 499,
            validity: "56 Days",
            data: "3GB/Day",
            calls: "Unlimited Calls",
            sms: "100 SMS/Day",
            type: "COMBO",
            category: "Data",
            benefits: ["Disney+ Hotstar", "Wynk Music"],
            isActive: true
        },
        // Add more sample plans
    ]);

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [editingPlan, setEditingPlan] = useState<any>(null);
    const [newPlan, setNewPlan] = useState<any>({
        name: '',
        amount: '',
        validity: '',
        data: '',
        calls: '',
        sms: '',
        type: 'COMBO',
        category: 'Data',
        benefits: [],
        isActive: true
    });

    const handleDelete = (id: string) => {
        if (window.confirm('Are you sure you want to delete this plan?')) {
            setPlans(plans.filter(plan => `${plan.id}` !== id));
        }
    };

    const handleEdit = (plan: any) => {
        setEditingPlan({ ...plan });
        setShowEditDialog(true);
    };

    const handleSaveEdit = () => {
        setPlans(plans.map(plan =>
            (plan.id === editingPlan?.id || '') ? { ...editingPlan, isModified: true } : plan
        ));
        setShowEditDialog(false);
        setEditingPlan(null);
    };
    // const handleEdit = (plan) => {
    //     setEditingPlan({ ...plan });
    //     setShowEditDialog(true);
    // };

    // const handleSaveEdit = () => {
    //     setPlans(plans.map(plan =>
    //         plan.id === editingPlan.id ? editingPlan : plan
    //     ));
    //     setShowEditDialog(false);
    //     setEditingPlan(null);
    // };

    const handleAddPlan = () => {
        const newId = Math.max(...plans.map(plan => plan.id), 0) + 1;
        setPlans([...plans, { ...newPlan, id: newId }]);
        setShowAddDialog(false);
        setNewPlan({
            name: '',
            amount: '',
            validity: '',
            data: '',
            calls: '',
            sms: '',
            type: 'COMBO',
            category: 'Data',
            benefits: [],
            isActive: true
        });
    };

    const [expandedRows, setExpandedRows] = useState(new Set());
    const [editingValues, setEditingValues] = useState({});

    const toggleRow = (id: string) => {
        const newExpandedRows = new Set(expandedRows);
        if (newExpandedRows.has(id)) {
            newExpandedRows.delete(id);
        } else {
            newExpandedRows.add(id);
        }
        setExpandedRows(newExpandedRows);
    };

    const handleStatusChange = (id: string, newStatus: boolean) => {
        setPlans((prev) => plans.map(plan => {
            if (plan.id === id)
                return { ...plan, isActive: newStatus, isModified: true };
            return plan;
        }
        ));
    };

    const handleMarginChange = (id: string, field: any, value: any) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, [field]: value, isModified: true } : plan
        ));
    };

    const handleSaveChanges = (id: string) => {
        setPlans(plans.map(plan =>
            plan.id === id ? { ...plan, isModified: false } : plan
        ));
        // Here you would typically make an API call to save the changes
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'ACTIVE': return 'bg-green-100 text-green-800';
            case 'INACTIVE': return 'bg-red-100 text-red-800';
            case 'DRAFT': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="flex justify-between items-center px-8 py-4">
                    <h2 className="text-2xl font-semibold text-gray-800">Recharge Plans</h2>
                    <Button
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                        onClick={() => setShowAddDialog(true)}
                    >
                        <Plus className="h-4 w-4 mr-2" />
                        Add New Plan
                    </Button>
                </div>
            </div>

            {/* Main Content */}
            <div className="p-8">
                <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50">
                                <TableHead className="w-[50px]"></TableHead>
                                <TableHead className="w-[200px]">Name</TableHead>
                                <TableHead>Amount</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Margins</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {plans.map((plan) => (
                                <React.Fragment key={plan.id}>
                                    <TableRow className="hover:bg-gray-50">
                                        <TableCell className="w-[50px]">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => toggleRow(plan.id)}
                                            >
                                                {expandedRows.has(plan.id) ?
                                                    <ChevronDown className="h-4 w-4" /> :
                                                    <ChevronRight className="h-4 w-4" />
                                                }
                                            </Button>
                                        </TableCell>
                                        <TableCell className="font-medium">{plan.name}</TableCell>
                                        <TableCell>₹{plan.amount}</TableCell>
                                        <TableCell>

                                            <Switch checked={plan.isActive} onCheckedChange={(val) => handleStatusChange(plan.id, val)} />

                                            {/* <Select
                                                value={plan.status}
                                                onValueChange={(value) => handleStatusChange(plan.id, value)}
                                            >
                                                <SelectTrigger className={`w-[130px] ${getStatusColor(plan.status)}`}>
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ACTIVE">ACTIVE</SelectItem>
                                                    <SelectItem value="INACTIVE">INACTIVE</SelectItem>
                                                    <SelectItem value="DRAFT">DRAFT</SelectItem>
                                                </SelectContent>
                                            </Select> */}
                                        </TableCell>

                                        <TableCell>
                                            <div className="flex gap-4">
                                                <div>
                                                    <Label className="text-xs text-gray-500">Retailer</Label>
                                                    <Input
                                                        type="number"
                                                        value={plan.retailerMargin || 0}
                                                        onChange={(e) => handleMarginChange(plan.id, 'retailerMargin', e.target.value)}
                                                        className="w-20 h-8"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-xs text-gray-500">Distributor</Label>
                                                    <Input
                                                        type="number"
                                                        value={plan.distributorMargin || 0}
                                                        onChange={(e) => handleMarginChange(plan.id, 'distributorMargin', e.target.value)}
                                                        className="w-20 h-8"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-xs text-gray-500">Admin</Label>
                                                    <Input
                                                        type="number"
                                                        value={plan.adminMargin || 0}
                                                        onChange={(e) => handleMarginChange(plan.id, 'adminMargin', e.target.value)}
                                                        className="w-20 h-8"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-xs text-gray-500">Api</Label>
                                                    <Input
                                                        type="number"
                                                        value={plan.apiMargin || 0}
                                                        onChange={(e) => handleMarginChange(plan.id, 'apiMargin', e.target.value)}
                                                        className="w-20 h-8"
                                                    />
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex justify-end gap-2">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    onClick={() => handleEdit(plan)}
                                                >
                                                    <Edit2 className="h-4 w-4 mr-1" />
                                                    Edit
                                                </Button>
                                                {plan.isModified && (
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="bg-green-500 text-white hover:bg-green-600"
                                                        onClick={() => handleSaveChanges(plan.id)}
                                                    >
                                                        <Save className="h-4 w-4 mr-1" />
                                                        Save Changes
                                                    </Button>
                                                )}
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    {expandedRows.has(plan.id) && (
                                        <TableRow className="bg-gray-50">
                                            <TableCell colSpan={6}>
                                                <div className="p-4">
                                                    <div className="grid grid-cols-3 gap-6">
                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">Plan Details</h4>
                                                            <div className="grid grid-cols-2 gap-2 text-sm">
                                                                <span className="text-gray-600">Validity:</span>
                                                                <span>{plan.validity}</span>
                                                                <span className="text-gray-600">Data:</span>
                                                                <span>{plan.data}</span>
                                                                <span className="text-gray-600">Calls:</span>
                                                                <span>{plan.calls}</span>
                                                                <span className="text-gray-600">SMS:</span>
                                                                <span>{plan.sms}</span>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">Type & Category</h4>
                                                            <div className="space-y-2">
                                                                <Badge variant="secondary">{plan.type}</Badge>
                                                                <div className="text-sm text-gray-600">
                                                                    Category: {plan.category}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="font-semibold">Benefits</h4>
                                                            <div className="flex flex-wrap gap-1">
                                                                {plan.benefits.map((benefit: any, idx: number) => (
                                                                    <Badge key={idx} variant="outline">
                                                                        {benefit}
                                                                    </Badge>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    )}
                                </React.Fragment>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>

            {/* Update Edit Plan Dialog */}
            <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Edit Recharge Plan</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="edit-name">Plan Name</Label>
                                <Input
                                    id="edit-name"
                                    value={editingPlan?.name || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, name: e.target.value })}
                                    placeholder="Enter plan name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-amount">Amount (₹)</Label>
                                <Input
                                    id="edit-amount"
                                    type="number"
                                    value={editingPlan?.amount || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, amount: e.target.value })}
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-retailer-margin">Retailer Margin</Label>
                                <Input
                                    id="edit-retailer-margin"
                                    type="number"
                                    value={editingPlan?.retailerMargin || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, retailerMargin: e.target.value })}
                                    placeholder="Enter retailer margin"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-distributor-margin">Distributor Margin</Label>
                                <Input
                                    id="edit-distributor-margin"
                                    type="number"
                                    value={editingPlan?.distributorMargin || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, distributorMargin: e.target.value })}
                                    placeholder="Enter distributor margin"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-admin-margin">Admin Margin</Label>
                                <Input
                                    id="edit-admin-margin"
                                    type="number"
                                    value={editingPlan?.adminMargin || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, adminMargin: e.target.value })}
                                    placeholder="Enter admin margin"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-validity">Validity</Label>
                                <Input
                                    id="edit-validity"
                                    value={editingPlan?.validity || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, validity: e.target.value })}
                                    placeholder="e.g., 28 Days"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-data">Data</Label>
                                <Input
                                    id="edit-data"
                                    value={editingPlan?.data || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, data: e.target.value })}
                                    placeholder="e.g., 2GB/Day"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-calls">Calls</Label>
                                <Input
                                    id="edit-calls"
                                    value={editingPlan?.calls || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, calls: e.target.value })}
                                    placeholder="e.g., Unlimited Calls"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="edit-sms">SMS</Label>
                                <Input
                                    id="edit-sms"
                                    value={editingPlan?.sms || ''}
                                    onChange={(e) => setEditingPlan({ ...editingPlan, sms: e.target.value })}
                                    placeholder="e.g., 100 SMS/Day"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Type</Label>
                                <Select
                                    value={editingPlan?.type || ''}
                                    onValueChange={(value) => setEditingPlan({ ...editingPlan, type: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="POPULAR">Popular</SelectItem>
                                        <SelectItem value="COMBO">Combo</SelectItem>
                                        <SelectItem value="DATA">Data</SelectItem>
                                        <SelectItem value="TALKTIME">Talktime</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Select
                                    value={editingPlan?.category || ''}
                                    onValueChange={(value) => setEditingPlan({ ...editingPlan, category: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Data">Data</SelectItem>
                                        <SelectItem value="Voice">Voice</SelectItem>
                                        <SelectItem value="SMS">SMS</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="edit-benefits">Benefits (comma-separated)</Label>
                            <Input
                                id="edit-benefits"
                                value={editingPlan?.benefits?.join(', ') || ''}
                                onChange={(e) => setEditingPlan({
                                    ...editingPlan,
                                    benefits: e.target.value.split(',').map(b => b.trim()).filter(Boolean)
                                })}
                                placeholder="e.g., Amazon Prime, Wynk Music"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setShowEditDialog(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleSaveEdit}
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            Save Changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

            {/* Add New Plan Dialog */}
            <Dialog open={showAddDialog} onOpenChange={setShowAddDialog}>
                <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                        <DialogTitle>Add New Recharge Plan</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Plan Name</Label>
                                <Input
                                    id="name"
                                    value={newPlan.name}
                                    onChange={(e) => setNewPlan({ ...newPlan, name: e.target.value })}
                                    placeholder="Enter plan name"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="amount">Amount (₹)</Label>
                                <Input
                                    id="amount"
                                    type="number"
                                    value={newPlan.amount}
                                    onChange={(e) => setNewPlan({ ...newPlan, amount: e.target.value })}
                                    placeholder="Enter amount"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="validity">Validity</Label>
                                <Input
                                    id="validity"
                                    value={newPlan.validity}
                                    onChange={(e) => setNewPlan({ ...newPlan, validity: e.target.value })}
                                    placeholder="e.g., 28 Days"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="data">Data</Label>
                                <Input
                                    id="data"
                                    value={newPlan.data}
                                    onChange={(e) => setNewPlan({ ...newPlan, data: e.target.value })}
                                    placeholder="e.g., 2GB/Day"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="calls">Calls</Label>
                                <Input
                                    id="calls"
                                    value={newPlan.calls}
                                    onChange={(e) => setNewPlan({ ...newPlan, calls: e.target.value })}
                                    placeholder="e.g., Unlimited Calls"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="sms">SMS</Label>
                                <Input
                                    id="sms"
                                    value={newPlan.sms}
                                    onChange={(e) => setNewPlan({ ...newPlan, sms: e.target.value })}
                                    placeholder="e.g., 100 SMS/Day"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>Type</Label>
                                <Select
                                    value={newPlan.type}
                                    onValueChange={(value) => setNewPlan({ ...newPlan, type: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="POPULAR">Popular</SelectItem>
                                        <SelectItem value="COMBO">Combo</SelectItem>
                                        <SelectItem value="DATA">Data</SelectItem>
                                        <SelectItem value="TALKTIME">Talktime</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Category</Label>
                                <Select
                                    value={newPlan.category}
                                    onValueChange={(value) => setNewPlan({ ...newPlan, category: value })}
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Data">Data</SelectItem>
                                        <SelectItem value="Voice">Voice</SelectItem>
                                        <SelectItem value="SMS">SMS</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="benefits">Benefits (comma-separated)</Label>
                            <Input
                                id="benefits"
                                type='text'
                                value={newPlan.benefits.join(', ')}
                                onChange={(e) => setNewPlan({
                                    ...newPlan,
                                    benefits: e.target.value.split(',').map(b => b.trim()).filter(Boolean)
                                })}
                                placeholder="e.g., Amazon Prime, Wynk Music"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setShowAddDialog(false)}
                        >
                            Cancel
                        </Button>
                        <Button
                            onClick={handleAddPlan}
                            className="bg-blue-500 hover:bg-blue-600 text-white"
                        >
                            Add Plan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </div>
    );
};

export default RechargePlansPage;