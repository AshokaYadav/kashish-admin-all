"use client"

// import { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow
// } from '@/components/ui/table';
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
//     DialogFooter,
// } from '@/components/ui/dialog';
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Info, Edit } from 'lucide-react';

// // Define types
// type ApiData = {
//     id: string;
//     name: string;
//     endpoint: string;
//     method: string;
//     status: string;
// };

// type OperatorData = {
//     id: string;
//     name: string;
//     circleCode: string;
//     operatorCode: string;
// };

// type NewOperator = Omit<OperatorData, 'id'>;

// // Sample API data
// const initialApiData: ApiData[] = [
//     { id: '1', name: 'Authentication API', endpoint: '/api/auth', method: 'POST', status: 'Active' },
//     { id: '2', name: 'User Management', endpoint: '/api/users', method: 'GET', status: 'Active' },
//     { id: '3', name: 'Payment Processing', endpoint: '/api/payments', method: 'POST', status: 'Inactive' },
//     { id: '4', name: 'Data Analytics', endpoint: '/api/analytics', method: 'GET', status: 'Active' },
//     { id: '5', name: 'Content Delivery', endpoint: '/api/content', method: 'GET', status: 'Active' },
//     { id: '6', name: 'Notification Service', endpoint: '/api/notify', method: 'POST', status: 'Active' },
//     { id: '7', name: 'Search Engine', endpoint: '/api/search', method: 'GET', status: 'Inactive' },
//     { id: '8', name: 'File Storage', endpoint: '/api/storage', method: 'PUT', status: 'Active' },
//     { id: '9', name: 'Email Service', endpoint: '/api/email', method: 'POST', status: 'Active' },
//     { id: '10', name: 'Logging Service', endpoint: '/api/logs', method: 'POST', status: 'Active' },
// ];

// // Sample operators data
// const initialOperators: OperatorData[] = [
//     { id: '1', name: 'Operator 1', circleCode: 'C001', operatorCode: 'OP001' },
//     { id: '2', name: 'Operator 2', circleCode: 'C002', operatorCode: 'OP002' },
//     { id: '3', name: 'Operator 3', circleCode: 'C003', operatorCode: 'OP003' },
// ];

// export default function ApiManagementPage(): JSX.Element {
//     const [apiData, setApiData] = useState<ApiData[]>(initialApiData);
//     const [operatorsData, setOperatorsData] = useState<OperatorData[]>(initialOperators);
//     const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false);
//     const [selectedApi, setSelectedApi] = useState<ApiData | null>(null);
//     const [newOperator, setNewOperator] = useState<NewOperator>({
//         name: '',
//         circleCode: '',
//         operatorCode: ''
//     });

//     const handleShowDetail = (api: ApiData): void => {
//         setSelectedApi(api);
//         setIsDetailOpen(true);
//     };

//     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//         const { name, value } = e.target;
//         setNewOperator({
//             ...newOperator,
//             [name]: value
//         });
//     };

//     const handleSaveOperator = (): void => {
//         if (!newOperator.name || !newOperator.circleCode || !newOperator.operatorCode) {
//             alert('Please fill all fields');
//             return;
//         }

//         const updatedOperators: OperatorData[] = [
//             ...operatorsData,
//             {
//                 id: (operatorsData.length + 1).toString(),
//                 ...newOperator
//             }
//         ];
//         setOperatorsData(updatedOperators);
//         setNewOperator({ name: '', circleCode: '', operatorCode: '' });
//         setIsDetailOpen(false);
//     };

//     return (
//         <div className="container mx-auto py-10">
//             <Card className="mb-6">
//                 <CardHeader>
//                     <CardTitle>API Management Dashboard</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <div className="flex justify-between mb-4">
//                         <h2 className="text-xl font-semibold">Available APIs</h2>
//                         <Button onClick={() => setIsDetailOpen(true)}>Add Operator</Button>
//                     </div>

//                     <ScrollArea className="h-96 rounded-md border">
//                         <Table>
//                             <TableHeader>
//                                 <TableRow>
//                                     <TableHead>Name</TableHead>
//                                     <TableHead>Endpoint</TableHead>
//                                     <TableHead>Method</TableHead>
//                                     <TableHead>Status</TableHead>
//                                     <TableHead>Actions</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {apiData.map((api) => (
//                                     <TableRow key={api.id}>
//                                         <TableCell className="font-medium">{api.name}</TableCell>
//                                         <TableCell>{api.endpoint}</TableCell>
//                                         <TableCell>{api.method}</TableCell>
//                                         <TableCell>
//                                             <span className={`px-2 py-1 rounded-full text-xs font-semibold ${api.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
//                                                 {api.status}
//                                             </span>
//                                         </TableCell>
//                                         <TableCell>
//                                             <Button
//                                                 variant="ghost"
//                                                 size="icon"
//                                                 onClick={() => handleShowDetail(api)}
//                                             >
//                                                 <Info className="h-4 w-4" />
//                                             </Button>
//                                             <Button
//                                                 variant="ghost"
//                                                 size="icon"
//                                             >
//                                                 <Edit className="h-4 w-4" />
//                                             </Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </ScrollArea>
//                 </CardContent>
//             </Card>

//             <Dialog open={isDetailOpen} onOpenChange={setIsDetailOpen}>
//                 <DialogContent className="sm:max-w-md">
//                     <DialogHeader>
//                         <DialogTitle>
//                             {selectedApi ? `Details for ${selectedApi.name}` : 'Add New Operator'}
//                         </DialogTitle>
//                     </DialogHeader>

//                     <div className="grid gap-4 py-4">
//                         <div className="grid grid-cols-3 items-center gap-4">
//                             <label htmlFor="operator-name" className="text-right font-medium">
//                                 Operator Name
//                             </label>
//                             <Input
//                                 id="operator-name"
//                                 name="name"
//                                 className="col-span-2"
//                                 value={newOperator.name}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="grid grid-cols-3 items-center gap-4">
//                             <label htmlFor="circle-code" className="text-right font-medium">
//                                 Circle Code
//                             </label>
//                             <Input
//                                 id="circle-code"
//                                 name="circleCode"
//                                 className="col-span-2"
//                                 value={newOperator.circleCode}
//                                 onChange={handleInputChange}
//                             />
//                         </div>

//                         <div className="grid grid-cols-3 items-center gap-4">
//                             <label htmlFor="operator-code" className="text-right font-medium">
//                                 Operator Code
//                             </label>
//                             <Input
//                                 id="operator-code"
//                                 name="operatorCode"
//                                 className="col-span-2"
//                                 value={newOperator.operatorCode}
//                                 onChange={handleInputChange}
//                             />
//                         </div>
//                     </div>

//                     <DialogFooter>
//                         <Button
//                             type="submit"
//                             onClick={handleSaveOperator}
//                         >
//                             Save
//                         </Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>

//             {/* Display current operators (optional) */}
//             <Card>
//                 <CardHeader>
//                     <CardTitle>Current Operators</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <ScrollArea className="h-64 rounded-md border">
//                         <Table>
//                             <TableHeader>
//                                 <TableRow>
//                                     <TableHead>Operator Name</TableHead>
//                                     <TableHead>Circle Code</TableHead>
//                                     <TableHead>Operator Code</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {operatorsData.map((operator) => (
//                                     <TableRow key={operator.id}>
//                                         <TableCell>{operator.name}</TableCell>
//                                         <TableCell>{operator.circleCode}</TableCell>
//                                         <TableCell>{operator.operatorCode}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </ScrollArea>
//                 </CardContent>
//             </Card>
//         </div>
//     );
// }



// -------------------------------------------------------------------------------------------------------------------------------
// import { useState } from 'react';
// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow
// } from '@/components/ui/table';
// import {
//     Dialog,
//     DialogContent,
//     DialogHeader,
//     DialogTitle,
// } from '@/components/ui/dialog';
// import {
//     Card,
//     CardContent,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card';
// import { Input } from '@/components/ui/input';
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from '@/components/ui/select';
// import { Button } from '@/components/ui/button';
// import { Switch } from '@/components/ui/switch';
// import { ScrollArea } from '@/components/ui/scroll-area';
// import { Pencil, Trash2 } from 'lucide-react';

// // Define types
// type ApiData = {
//     id: string;
//     name: string;
//     isActive: boolean;
//     operators: OperatorMapping[];
// };

// type OperatorMapping = {
//     id: string;
//     operatorName: string;
//     circleId: string;
//     circleName: string;
//     circleCode: string;
//     operatorCode: string;
// };

// type CircleOption = {
//     id: string;
//     name: string;
// };

// // Sample API data
// const initialApiData: ApiData[] = [
//     {
//         id: '1',
//         name: 'Authentication API',
//         isActive: true,
//         operators: [
//             { id: '1', operatorName: 'Operator A', circleId: '1', circleName: 'Circle 1', circleCode: 'C101', operatorCode: 'OP101' },
//             { id: '2', operatorName: 'Operator B', circleId: '2', circleName: 'Circle 2', circleCode: 'C201', operatorCode: 'OP201' }
//         ]
//     },
//     {
//         id: '2',
//         name: 'User Management API',
//         isActive: true,
//         operators: [
//             { id: '3', operatorName: 'Operator C', circleId: '1', circleName: 'Circle 1', circleCode: 'C102', operatorCode: 'OP301' }
//         ]
//     },
//     {
//         id: '3',
//         name: 'Payment API',
//         isActive: false,
//         operators: [
//             { id: '4', operatorName: 'Operator A', circleId: '3', circleName: 'Circle 3', circleCode: 'C301', operatorCode: 'OP102' }
//         ]
//     },
//     {
//         id: '4',
//         name: 'Notification API',
//         isActive: true,
//         operators: []
//     },
//     {
//         id: '5',
//         name: 'Content API',
//         isActive: true,
//         operators: [
//             { id: '5', operatorName: 'Operator B', circleId: '2', circleName: 'Circle 2', circleCode: 'C202', operatorCode: 'OP202' },
//             { id: '6', operatorName: 'Operator D', circleId: '3', circleName: 'Circle 3', circleCode: 'C302', operatorCode: 'OP401' }
//         ]
//     },
// ];

// // Sample circles data for dropdown
// const circleOptions: CircleOption[] = [
//     { id: '1', name: 'Circle 1' },
//     { id: '2', name: 'Circle 2' },
//     { id: '3', name: 'Circle 3' },
//     { id: '4', name: 'Circle 4' },
// ];

// // Sample operators list
// const operatorsList = [
//     'Operator A',
//     'Operator B',
//     'Operator C',
//     'Operator D',
//     'Operator E',
// ];

// export default function ApiManagementPage(): JSX.Element {
//     const [apiData, setApiData] = useState<ApiData[]>(initialApiData);
//     const [isModifyDialogOpen, setIsModifyDialogOpen] = useState<boolean>(false);
//     const [selectedApi, setSelectedApi] = useState<ApiData | null>(null);
//     const [editedOperators, setEditedOperators] = useState<OperatorMapping[]>([]);

//     // Open the modify dialog for a specific API
//     const handleModify = (api: ApiData): void => {
//         setSelectedApi(api);
//         setEditedOperators([...api.operators]);
//         setIsModifyDialogOpen(true);
//     };

//     // Toggle API activate status
//     const handleToggleActivate = (apiId: string): void => {
//         setApiData(apiData.map(api =>
//             api.id === apiId ? { ...api, isActive: !api.isActive } : api
//         ));
//     };

//     // Delete an API
//     const handleDelete = (apiId: string): void => {
//         if (confirm('Are you sure you want to delete this API?')) {
//             setApiData(apiData.filter(api => api.id !== apiId));
//         }
//     };

//     // Update operator circle selection
//     const handleCircleChange = (operatorId: string, circleId: string): void => {
//         const selectedCircle = circleOptions.find(circle => circle.id === circleId);

//         setEditedOperators(editedOperators.map(op =>
//             op.id === operatorId
//                 ? {
//                     ...op,
//                     circleId,
//                     circleName: selectedCircle ? selectedCircle.name : ''
//                 }
//                 : op
//         ));
//     };

//     // Update operator input fields
//     const handleOperatorInputChange = (operatorId: string, field: 'circleCode' | 'operatorCode', value: string): void => {
//         setEditedOperators(editedOperators.map(op =>
//             op.id === operatorId ? { ...op, [field]: value } : op
//         ));
//     };

//     // Save the modified operators
//     const handleSaveOperators = (): void => {
//         if (selectedApi) {
//             setApiData(apiData.map(api =>
//                 api.id === selectedApi.id ? { ...api, operators: editedOperators } : api
//             ));
//             setIsModifyDialogOpen(false);
//         }
//     };

//     // Add a new operator mapping to the selected API
//     const handleAddOperator = (): void => {
//         const newOperator: OperatorMapping = {
//             id: `new-${Date.now()}`,
//             operatorName: operatorsList[0],
//             circleId: '',
//             circleName: '',
//             circleCode: '',
//             operatorCode: ''
//         };

//         setEditedOperators([...editedOperators, newOperator]);
//     };

//     // Remove an operator mapping
//     const handleRemoveOperator = (operatorId: string): void => {
//         setEditedOperators(editedOperators.filter(op => op.id !== operatorId));
//     };

//     return (
//         <div className="container mx-auto py-10">
//             <Card>
//                 <CardHeader>
//                     <CardTitle>API Management</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                     <ScrollArea className="h-96 rounded-md border">
//                         <Table>
//                             <TableHeader>
//                                 <TableRow>
//                                     <TableHead>API Name</TableHead>
//                                     <TableHead>Modify</TableHead>
//                                     <TableHead>Activate</TableHead>
//                                     <TableHead>Delete</TableHead>
//                                 </TableRow>
//                             </TableHeader>
//                             <TableBody>
//                                 {apiData.map((api) => (
//                                     <TableRow key={api.id}>
//                                         <TableCell className="font-medium">{api.name}</TableCell>
//                                         <TableCell>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => handleModify(api)}
//                                             >
//                                                 <Pencil className="h-4 w-4 mr-2" />
//                                                 Modify
//                                             </Button>
//                                         </TableCell>
//                                         <TableCell>
//                                             <Switch
//                                                 checked={api.isActive}
//                                                 onCheckedChange={() => handleToggleActivate(api.id)}
//                                             />
//                                         </TableCell>
//                                         <TableCell>
//                                             <Button
//                                                 variant="outline"
//                                                 size="sm"
//                                                 onClick={() => handleDelete(api.id)}
//                                             >
//                                                 <Trash2 className="h-4 w-4 mr-2" />
//                                                 Delete
//                                             </Button>
//                                         </TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </ScrollArea>
//                 </CardContent>
//             </Card>

//             {/* Modify Dialog */}
//             <Dialog open={isModifyDialogOpen} onOpenChange={setIsModifyDialogOpen}>
//                 <DialogContent className="max-w-4xl">
//                     <DialogHeader>
//                         <DialogTitle>
//                             {selectedApi ? `Modify API: ${selectedApi.name}` : 'Modify API'}
//                         </DialogTitle>
//                     </DialogHeader>

//                     <div className="py-4">
//                         <div className="flex justify-between mb-4">
//                             <h3 className="text-lg font-medium">Operator Mappings</h3>
//                             <Button onClick={handleAddOperator}>Add Operator</Button>
//                         </div>

//                         <ScrollArea className="h-96 rounded-md border">
//                             <Table>
//                                 <TableHeader>
//                                     <TableRow>
//                                         <TableHead>Operator</TableHead>
//                                         <TableHead>Circle</TableHead>
//                                         <TableHead>Circle Code</TableHead>
//                                         <TableHead>Operator Code</TableHead>
//                                         <TableHead>Actions</TableHead>
//                                     </TableRow>
//                                 </TableHeader>
//                                 <TableBody>
//                                     {editedOperators.map((operator) => (
//                                         <TableRow key={operator.id}>
//                                             <TableCell>{operator.operatorName}</TableCell>
//                                             <TableCell>
//                                                 <Select
//                                                     value={operator.circleId}
//                                                     onValueChange={(value) => handleCircleChange(operator.id, value)}
//                                                 >
//                                                     <SelectTrigger className="w-full">
//                                                         <SelectValue placeholder="Select circle" />
//                                                     </SelectTrigger>
//                                                     <SelectContent>
//                                                         {circleOptions.map((circle) => (
//                                                             <SelectItem key={circle.id} value={circle.id}>
//                                                                 {circle.name}
//                                                             </SelectItem>
//                                                         ))}
//                                                     </SelectContent>
//                                                 </Select>
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Input
//                                                     value={operator.circleCode}
//                                                     onChange={(e) => handleOperatorInputChange(operator.id, 'circleCode', e.target.value)}
//                                                     placeholder="Circle code"
//                                                 />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Input
//                                                     value={operator.operatorCode}
//                                                     onChange={(e) => handleOperatorInputChange(operator.id, 'operatorCode', e.target.value)}
//                                                     placeholder="Operator code"
//                                                 />
//                                             </TableCell>
//                                             <TableCell>
//                                                 <Button
//                                                     variant="outline"
//                                                     size="sm"
//                                                     onClick={() => handleRemoveOperator(operator.id)}
//                                                 >
//                                                     <Trash2 className="h-4 w-4" />
//                                                 </Button>
//                                             </TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>
//                             </Table>
//                         </ScrollArea>

//                         <div className="flex justify-end mt-4">
//                             <Button onClick={handleSaveOperators}>Save Changes</Button>
//                         </div>
//                     </div>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// }



// pages/api-management.tsx
import { useState } from 'react';
import { ApiTable } from './components/api-table';
import { ModifyDialog } from './components/ModifyDialog';
import { ApiData, CircleOption, OperatorMapping } from './types';
import { useGetAllCircles } from '@/hooks/circles/use-get-all-circles';

// Sample API data
const initialApiData: ApiData[] = [
    {
        id: '1',
        name: 'Authentication API',
        isActive: true,
        operators: [
            { id: '1', operatorName: 'Operator A', circleId: '1', circleName: 'Circle 1', circleCode: 'C101', operatorCode: 'OP101' },
            { id: '2', operatorName: 'Operator B', circleId: '2', circleName: 'Circle 2', circleCode: 'C201', operatorCode: 'OP201' }
        ]
    },
    {
        id: '2',
        name: 'User Management API',
        isActive: true,
        operators: [
            { id: '3', operatorName: 'Operator C', circleId: '1', circleName: 'Circle 1', circleCode: 'C102', operatorCode: 'OP301' }
        ]
    },
    {
        id: '3',
        name: 'Payment API',
        isActive: false,
        operators: [
            { id: '4', operatorName: 'Operator A', circleId: '3', circleName: 'Circle 3', circleCode: 'C301', operatorCode: 'OP102' }
        ]
    },
    {
        id: '4',
        name: 'Notification API',
        isActive: true,
        operators: []
    },
    {
        id: '5',
        name: 'Content API',
        isActive: true,
        operators: [
            { id: '5', operatorName: 'Operator B', circleId: '2', circleName: 'Circle 2', circleCode: 'C202', operatorCode: 'OP202' },
            { id: '6', operatorName: 'Operator D', circleId: '3', circleName: 'Circle 3', circleCode: 'C302', operatorCode: 'OP401' }
        ]
    },
];

// Sample circles data for dropdown
const circleOptions: CircleOption[] = [
    { id: '1', name: 'Circle 1' },
    { id: '2', name: 'Circle 2' },
    { id: '3', name: 'Circle 3' },
    { id: '4', name: 'Circle 4' },
];

// Sample operators list
const operatorsList: string[] = [
    'Operator A',
    'Operator B',
    'Operator C',
    'Operator D',
    'Operator E',
];

export default function ApiManagementPage(): JSX.Element {
    const { data: circles, isLoading, refetch } = useGetAllCircles();

    const [apiData, setApiData] = useState<ApiData[]>(initialApiData);
    const [isModifyDialogOpen, setIsModifyDialogOpen] = useState<boolean>(false);
    const [selectedApi, setSelectedApi] = useState<ApiData | null>(null);

    // Open the modify dialog for a specific API
    const handleModify = (api: ApiData): void => {
        setSelectedApi(api);
        setIsModifyDialogOpen(true);
    };

    // Toggle API activate status
    const handleToggleActivate = (apiId: string): void => {
        setApiData(apiData.map(api =>
            api.id === apiId ? { ...api, isActive: !api.isActive } : api
        ));
    };

    // Delete an API
    const handleDelete = (apiId: string): void => {
        if (confirm('Are you sure you want to delete this API?')) {
            setApiData(apiData.filter(api => api.id !== apiId));
        }
    };

    // Save the modified operators
    const handleSaveOperators = (apiId: string, updatedOperators: OperatorMapping[]): void => {
        setApiData(apiData.map(api =>
            api.id === apiId ? { ...api, operators: updatedOperators } : api
        ));
        setIsModifyDialogOpen(false);
    };

    return (
        <div className="container mx-auto py-10">
            <ApiTable
                apiData={apiData}
                onModify={handleModify}
                onToggleActivate={handleToggleActivate}
                onDelete={handleDelete}
            />

            {selectedApi && (
                <ModifyDialog
                    isOpen={isModifyDialogOpen}
                    onOpenChange={setIsModifyDialogOpen}
                    apiName={selectedApi.name}
                    apiId={selectedApi.id}
                    initialOperators={selectedApi.operators}
                    circleOptions={circles || []}
                    operatorsList={operatorsList}
                    onSave={handleSaveOperators}
                />
            )}
        </div>
    );
}