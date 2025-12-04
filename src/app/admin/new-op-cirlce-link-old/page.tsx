"use client";
import { useState } from 'react';
import Head from 'next/head';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    CircleIcon,
    UsersIcon,
    TrashIcon,
    PlusCircleIcon,
    SearchIcon
} from 'lucide-react';

export default function ApiManagement() {
    // Sample API data
    const [apis, setApis] = useState([
        { id: '1', name: 'User Authentication API', active: true },
        { id: '2', name: 'Payment Processing API', active: false },
        { id: '3', name: 'Data Analytics API', active: true },
        { id: '4', name: 'Notification Service API', active: true },
        { id: '5', name: 'Content Delivery API', active: false },
    ]);

    // Dialog state
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState(''); // 'circles' or 'operators'
    const [currentApiId, setCurrentApiId] = useState<string>('');

    // Sample circles and operators data
    const [circles, setCircles] = useState([
        { id: '1', name: 'Circle A', value: '10' },
        { id: '2', name: 'Circle B', value: '15' },
        { id: '3', name: 'Circle C', value: '20' },
        { id: '4', name: 'Circle D', value: '25' },
    ]);

    const [operators, setOperators] = useState([
        { id: '1', name: 'Operator X', value: 'x_value' },
        { id: '2', name: 'Operator Y', value: 'y_value' },
        { id: '3', name: 'Operator Z', value: 'z_value' },
    ]);

    // Function to handle opening dialog
    const handleOpenDialog = (apiId: string, type: string) => {
        setCurrentApiId(apiId);
        setDialogType(type);
        setDialogOpen(true);
    };

    // Function to handle saving dialog data
    const handleSaveDialog = () => {
        // Here you would typically save the changes to your backend
        setDialogOpen(false);
    };

    // Function to handle toggle API active status
    const handleToggleActive = (apiId: string) => {
        setApis(apis.map(api =>
            api.id === apiId ? { ...api, active: !api.active } : api
        ));
    };

    // Function to handle API deletion
    const handleDeleteApi = (apiId: string) => {
        setApis(apis.filter(api => api.id !== apiId));
    };

    // Function to handle input change for circles or operators
    const handleInputChange = (id: string, value: string, type: string) => {
        if (type === 'circles') {
            setCircles(circles.map(circle =>
                circle.id === id ? { ...circle, value } : circle
            ));
        } else {
            setOperators(operators.map(operator =>
                operator.id === id ? { ...operator, value } : operator
            ));
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <Head>
                <title>API Management</title>
                <meta name="description" content="Manage your APIs" />
            </Head>

            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">API Management</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                            <Input
                                placeholder="Search APIs..."
                                className="pl-9 w-64"
                            />
                        </div>
                        <Button className="flex items-center gap-2">
                            <PlusCircleIcon className="h-4 w-4" />
                            Add New API
                        </Button>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>APIs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>API Name</TableHead>
                                    <TableHead className="w-40">Circles</TableHead>
                                    <TableHead className="w-40">Operators</TableHead>
                                    <TableHead className="w-24">Status</TableHead>
                                    <TableHead className="w-24">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {apis.map((api) => (
                                    <TableRow key={api.id}>
                                        <TableCell className="font-medium">{api.name}</TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-2"
                                                onClick={() => handleOpenDialog(api.id, 'circles')}
                                            >
                                                <CircleIcon className="h-4 w-4" />
                                                Circles
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="flex items-center gap-2"
                                                onClick={() => handleOpenDialog(api.id, 'operators')}
                                            >
                                                <UsersIcon className="h-4 w-4" />
                                                Operators
                                            </Button>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Switch
                                                    checked={api.active}
                                                    onCheckedChange={() => handleToggleActive(api.id)}
                                                />
                                                <span className={api.active ? "text-green-600" : "text-red-600"}>
                                                    {api.active ? "Active" : "Inactive"}
                                                </span>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Button
                                                variant="ghost"
                                                size="icon"
                                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                                                onClick={() => handleDeleteApi(api.id)}
                                            >
                                                <TrashIcon className="h-5 w-5" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>

            {/* Dialog for Circles/Operators */}
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>
                            {dialogType === 'circles' ? 'Configure Circles' : 'Configure Operators'} for {apis.find(api => api.id === currentApiId)?.name}
                        </DialogTitle>
                    </DialogHeader>

                    <div className="space-y-4 my-4 max-h-96 overflow-y-auto pr-2">
                        {dialogType === 'circles' ? (
                            circles.map(circle => (
                                <div key={circle.id} className="flex items-center gap-4">
                                    <Label className="w-1/3" htmlFor={`circle-${circle.id}`}>
                                        {circle.name}
                                    </Label>
                                    <Input
                                        id={`circle-${circle.id}`}
                                        value={circle.value}
                                        onChange={(e) => handleInputChange(circle.id, e.target.value, 'circles')}
                                        className="flex-1"
                                    />
                                </div>
                            ))
                        ) : (
                            operators.map(operator => (
                                <div key={operator.id} className="flex items-center gap-4">
                                    <Label className="w-1/3" htmlFor={`operator-${operator.id}`}>
                                        {operator.name}
                                    </Label>
                                    <Input
                                        id={`operator-${operator.id}`}
                                        value={operator.value}
                                        onChange={(e) => handleInputChange(operator.id, e.target.value, 'operators')}
                                        className="flex-1"
                                    />
                                </div>
                            ))
                        )}
                    </div>

                    <DialogFooter>
                        <Button
                            variant="outline"
                            onClick={() => setDialogOpen(false)}
                            className="mr-2"
                        >
                            Cancel
                        </Button>
                        <Button onClick={handleSaveDialog}>Save Changes</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
}