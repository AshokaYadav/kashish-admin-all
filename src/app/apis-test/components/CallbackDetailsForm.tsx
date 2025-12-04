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

// Define the form schema with Zod
const formSchema = z.object({
    statusCode: z.string().min(1, 'Status code is required'),
    successCode: z.string().min(1, 'Success code is required'),
    failedCode: z.string().min(1, 'Failed code is required'),
    refundCode: z.string().min(1, 'Refund code is required'),
    operatorReference: z.string().min(1, 'Operator reference is required'),
    requestedId: z.string().min(1, 'Requested ID is required'),
    apiOrderId: z.string().min(1, 'API order ID is required'),
    balance: z.string().optional(),
    discountInPercentageCol: z.string().optional(),
    discountInRupeesCol: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface CallbackDetailsFormProps {
    onSubmit: (values: FormValues) => void;
    defaultValues?: Partial<FormValues>;
}

export function CallbackDetailsForm({
    onSubmit,
    defaultValues = {
        statusCode: 'STATUS',
        successCode: '1',
        failedCode: '2,3',
        refundCode: '5',
        operatorReference: 'OprID',
        requestedId: 'ClientRefNo',
        apiOrderId: 'TrnID',
        balance: '',
        discountInPercentageCol: 'DP',
        discountInRupeesCol: 'DR',
    },
}: CallbackDetailsFormProps) {
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
                <CardTitle className="text-xl text-slate-700">Update Callback Details</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Row 1 */}
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
                                name="failedCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Failed Code<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Failed code value" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="refundCode"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Refund Code<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Refund code value" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Row 2 */}
                            <FormField
                                control={form.control}
                                name="operatorReference"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Operator Reference<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Operator reference field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="requestedId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Requested Id<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Requested ID field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="apiOrderId"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-1">
                                            Api Order Id<span className="text-red-500">*</span>
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="API order ID field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="balance"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Balance</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Balance field name (optional)" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            {/* Row 3 */}
                            <FormField
                                control={form.control}
                                name="discountInPercentageCol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Discount in Percentage Col</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Discount percentage field name" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="discountInRupeesCol"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Discount in Rupees Col</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Discount amount field name" {...field} />
                                        </FormControl>
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