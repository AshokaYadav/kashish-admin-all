// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
// import FormField from './FormField';
// import { VendorCredentials } from '@/types/apis';

// interface VendorCredentialsProps {
//   credentials: VendorCredentials;
//   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
// }

// const VendorCredentialsSection: React.FC<VendorCredentialsProps> = ({
//   credentials,
//   onChange
// }) => {
//   return (
//     <Card className="mb-6 shadow-sm">
//       <CardHeader className="pb-3">
//         <CardTitle className="text-lg font-medium">Vendor Credentials</CardTitle>
//         <CardDescription>Basic vendor authentication details</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           <FormField
//             id="vendorName"
//             name="vendorName"
//             label="Vendor Name"
//             value={credentials.vendorName}
//             onChange={onChange}
//             required
//           />

//           <FormField
//             id="userId"
//             name="userId"
//             label="User Id"
//             value={credentials.userId}
//             onChange={onChange}
//             required
//           />

//           <FormField
//             id="password"
//             name="password"
//             label="Password"
//             value={credentials.password}
//             onChange={onChange}
//             type="password"
//             required
//           />

//           <FormField
//             id="token"
//             name="token"
//             label="Token"
//             value={credentials.token}
//             onChange={onChange}
//             required
//           />
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default VendorCredentialsSection;




'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import FormField from './FormField';
import { VendorCredentials } from '@/types/apis';

interface VendorCredentialsProps {
  credentials: VendorCredentials;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const VendorCredentialsSection: React.FC<VendorCredentialsProps> = ({ 
  credentials, 
  onChange 
}) => {
  return (
    <Card className="mb-6 shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-medium">Vendor Credentials</CardTitle>
        <CardDescription>Basic vendor authentication details</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FormField
            id="vendorName"
            name="vendorName"
            label="Vendor Name"
            value={credentials.vendorName}
            onChange={onChange}
            required
          />
          
          <FormField
            id="userId"
            name="userId"
            label="User Id"
            value={credentials.userId}
            onChange={onChange}
            required
          />
          
          <FormField
            id="password"
            name="password"
            label="Password"
            value={credentials.password}
            onChange={onChange}
            type="password"
            required
          />
          
          <FormField
            id="token"
            name="token"
            label="Token"
            value={credentials.token}
            onChange={onChange}
            required
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default VendorCredentialsSection;