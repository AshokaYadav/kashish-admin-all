import React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

// Define the form schema with Zod
const formSchema = z.object({
    transactionUrl: z.string().url('Please enter a valid URL'),
    usernameColumn: z.string().min(1, 'Username column is required'),
    tokenColumn: z.string().min(1, 'Token column is required'),
    extraColumn: z.string().optional(),
    complainIdColumn: z.string().min(1, 'Complain ID column is required'),
    statusCode: z.string().min(1, 'Status code is required'),
    successCode: z.string().min(1, 'Success code is required'),
    complainForCol: z.string().min(1, 'Complain for column is required'),
    valueForRecharge: z.string().min(1, 'Value for recharge is required'),
    valueForBill: z.string().min(1, 'Value for bill is required'),
    requestedOrderIdColumn: z.string().min(1, 'Requested order ID column is required'),
    messageKey: z.string().min(1, 'Message key is required'),
    responseFormatColumn: z.string().min(1, 'Response format column is required'),
    requestType: z.string().min(1, 'Request type is required'),
    responseType: z.string().min(1, 'Response type is required'),
});

type FormValues = z.infer<typeof formSchema>;

interface DisputeDetailsFormProps {
    onSubmit: (values: FormValues) => void;
    defaultValues?: Partial<FormValues>;
}

export function DisputeDetailsForm({
    onSubmit,
    defaultValues = {
        transactionUrl: 'https://www.kashishapi.com/KAAPI/RechargeAPI.aspx',
        usernameColumn: 'MobileNo',
        tokenColumn: 'APIKey',
        extraColumn: 'CMDESC=NoRecharge',
        complainIdColumn: 'COMPLAINTID',
        statusCode: 'STATUSCODE',
        successCode: '0',
        complainForCol: 'CMTYPE',
        valueForRecharge: '3',
        valueForBill: '4',
        requestedOrderIdColumn: 'REFNO',
        messageKey: 'STATUSMSG',
        responseFormatColumn: 'RESPTYPE',
        requestType: 'GET',
        responseType: 'JSON',
    },
}: DisputeDetailsFormProps) {
    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues,
    });

    const handleSubmit = (values: FormValues) => {
        onSubmit(values);
    };

    return (
        <Card className="w-full max-w-6xl mx-auto bg-slate-50 my-4">
            <CardHeader>
                <CardTitle className="text-xl text-slate-700">Update Dispute Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* Row 1 */}
                            <FormField
                                control={form.control}
                                name="transactionUrl"
                                render={({ field }) => (
                                    <FormItem className="md:col-span-1">
                                        <FormLabel className="flex items-center gap-1">
                                            Transaction Url<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="https://example.com/api" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="usernameColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Username Column<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Username field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="tokenColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Token Column<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Token field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="extraColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Extra Column</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Extra field value (optional)" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Row 2 */}
                            <FormField
                                control={form.control}
                                name="complainIdColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Complain Id Column</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Complain ID field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="statusCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Status Code<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Status code field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="successCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Success Code<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Success code value" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="complainForCol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Complain For Col</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Complain for field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="valueForRecharge"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Value For Recharge</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Value for recharge" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Row 3 */}
                            <FormField
                                control={form.control}
                                name="valueForBill"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Value For Bill</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Value for bill" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="requestedOrderIdColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Requested Order Id Column<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Requested order ID field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="messageKey"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Message Key<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Message key field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="responseFormatColumn"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Response Format Column</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Response format field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="requestType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select Request Type</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select request type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="GET">GET</SelectItem>
                                                <SelectItem value="POST">POST</SelectItem>
                                                <SelectItem value="PUT">PUT</SelectItem>
                                                <SelectItem value="DELETE">DELETE</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="responseType"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select Response Type</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}
                                        >
                                            <FormControl>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="Select response type" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>
                                                <SelectItem value="JSON">JSON</SelectItem>
                                                <SelectItem value="XML">XML</SelectItem>
                                                <SelectItem value="TEXT">TEXT</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="flex justify-center mt-6">
                            <Button type="submit" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                Update
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}