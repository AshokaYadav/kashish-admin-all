// // components/FormField.tsx
// import React from 'react';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { FormFieldProps } from '@/types/apis';

// const FormField: React.FC<FormFieldProps> = ({
//     id,
//     name,
//     label,
//     value,
//     onChange,
//     required = false,
//     type = 'text'
// }) => {
//     return (
//         <div className="space-y-2">
//             <Label htmlFor={id} className="font-medium text-sm">
//                 {label} {required && <span className="text-red-500">*</span>}
//             </Label>
//             <Input
//                 id={id}
//                 name={name}
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//                 className="w-full"
//                 required={required}
//             />
//         </div>
//     );
// };

// export default FormField;


'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FormFieldProps } from '@/types/apis';

const FormField: React.FC<FormFieldProps> = ({
    id,
    name,
    label,
    value,
    onChange,
    required = false,
    type = 'text'
}) => {
    return (
        <div className="space-y-2">
            <Label htmlFor={id} className="font-medium text-sm">
                {label} {required && <span className="text-red-500">*</span>}
            </Label>
            <Input
                id={id}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                className="w-full"
                required={required}
            />
        </div>
    );
};

export default FormField;