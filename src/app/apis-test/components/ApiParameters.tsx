// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import { Separator } from '@/components/ui/separator';
// import FormField from './FormField';
// import { ApiParameters } from '@/types/apis';

// interface ApiParametersProps {
//     parameters: ApiParameters;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const ApiParametersSection: React.FC<ApiParametersProps> = ({
//     parameters,
//     onChange
// }) => {
//     return (
//         <Card className="mb-8 shadow-sm">
//             <CardHeader className="pb-3">
//                 <CardTitle className="text-lg font-medium">API Configuration</CardTitle>
//                 <CardDescription>API request parameter mapping</CardDescription>
//                 <Separator className="mt-4" />
//             </CardHeader>
//             <CardContent>
//                 <div className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         <FormField
//                             id="reqType"
//                             name="reqType"
//                             label="For API Column"
//                             value={parameters.reqType}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="rechargeValue"
//                             name="rechargeValue"
//                             label="For Recharge Value"
//                             value={parameters.rechargeValue}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="balanceValue"
//                             name="balanceValue"
//                             label="For Balance Value"
//                             value={parameters.balanceValue}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="statusValue"
//                             name="statusValue"
//                             label="For Status Value"
//                             value={parameters.statusValue}
//                             onChange={onChange}
//                         />
//                     </div>

//                     <Separator className="my-4" />

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//                         <FormField
//                             id="disputeValue"
//                             name="disputeValue"
//                             label="For Dispute Value"
//                             value={parameters.disputeValue}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="billInfoValue"
//                             name="billInfoValue"
//                             label="For Bill Info Value"
//                             value={parameters.billInfoValue}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="billPayValue"
//                             name="billPayValue"
//                             label="For Bill Pay Value"
//                             value={parameters.billPayValue}
//                             onChange={onChange}
//                         />

//                         <FormField
//                             id="opPrefix"
//                             name="opPrefix"
//                             label="Op Prefix"
//                             value={parameters.opPrefix}
//                             onChange={onChange}
//                         />
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     );
// };

// export default ApiParametersSection;





'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import FormField from './FormField';
import { ApiParameters } from '@/types/apis';

interface ApiParametersProps {
    parameters: ApiParameters;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ApiParametersSection: React.FC<ApiParametersProps> = ({
    parameters,
    onChange
}) => {
    return (
        <Card className="mb-8 shadow-sm">
            <CardHeader className="pb-3">
                <CardTitle className="text-lg font-medium">API Configuration</CardTitle>
                <CardDescription>API request parameter mapping</CardDescription>
                <Separator className="mt-4" />
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FormField
                            id="reqType"
                            name="reqType"
                            label="For API Column"
                            value={parameters.reqType}
                            onChange={onChange}
                        />

                        <FormField
                            id="rechargeValue"
                            name="rechargeValue"
                            label="For Recharge Value"
                            value={parameters.rechargeValue}
                            onChange={onChange}
                        />

                        <FormField
                            id="balanceValue"
                            name="balanceValue"
                            label="For Balance Value"
                            value={parameters.balanceValue}
                            onChange={onChange}
                        />

                        <FormField
                            id="statusValue"
                            name="statusValue"
                            label="For Status Value"
                            value={parameters.statusValue}
                            onChange={onChange}
                        />
                    </div>

                    <Separator className="my-4" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <FormField
                            id="disputeValue"
                            name="disputeValue"
                            label="For Dispute Value"
                            value={parameters.disputeValue}
                            onChange={onChange}
                        />

                        <FormField
                            id="billInfoValue"
                            name="billInfoValue"
                            label="For Bill Info Value"
                            value={parameters.billInfoValue}
                            onChange={onChange}
                        />

                        <FormField
                            id="billPayValue"
                            name="billPayValue"
                            label="For Bill Pay Value"
                            value={parameters.billPayValue}
                            onChange={onChange}
                        />

                        <FormField
                            id="opPrefix"
                            name="opPrefix"
                            label="Op Prefix"
                            value={parameters.opPrefix}
                            onChange={onChange}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ApiParametersSection;