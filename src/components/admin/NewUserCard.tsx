import React, { ReactElement, useCallback, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import SearchableDropdown from '../common/SearchableDropdown';
import { UserPlus } from 'lucide-react';
import { INewUserRequest } from '@/apis/user';

export interface IBaseUserInfo {
    name: string;
    id: string;
    email: string;
    is_active: boolean;
}

export interface IPropsCreateUserDialog {
    distributors: IBaseUserInfo[];
    createUser: (data: INewUserRequest) => void;
    isCreating: boolean;
    open: boolean;
    setOpen: (val: boolean) => void;
}

const emptyUserRequest: INewUserRequest = {
    name: '',
    email: '',
    city: '',
    mobile: '',
    password: '',
    role: '',
    distributor_id: undefined,
    mpin: '',
}

const CreateUserDialog = ({ distributors, createUser, isCreating, open, setOpen }: IPropsCreateUserDialog) => {

    const [selectedValue, setSelectedValue] = useState<string | null>(null);


    const [formData, setFormData] = useState<INewUserRequest>({ ...emptyUserRequest });
    const [errors, setErrors] = useState<INewUserRequest>({ ...emptyUserRequest });

    const validateForm = () => {
        const newErrors: any = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email address';
        }

        const mobileRegex = /^\d{10}$/;
        if (!mobileRegex.test(formData.mobile)) {
            newErrors.mobile = 'Mobile number must be 10 digits';
        }

        if (!formData.city.trim()) {
            newErrors.city = 'City is required';
        }

        if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        if (!['RETAILER', 'DISTRIBUTOR'].includes(formData.role)) {
            newErrors.role = 'Invalid role selected';
        }

        if ((formData.role === 'RETAILER') && (!formData.distributor_id || !formData.distributor_id.trim())) {
            newErrors.distributor_id = 'Distributor ID is required for retailers';
        }

        if ((formData.role === 'RETAILER') && (!formData.mpin || !formData.mpin.trim() || `${parseFloat(formData.mpin)}`.length !== 4)) {
            newErrors.distributor_id = 'Set Valid 4 digit mpin';
        }

        for (const key in newErrors) {
            const value = newErrors[key];
            if (!!value || value !== '') return false;
        }
        return true;
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (validateForm()) {
            createUser(formData);
            setOpen(false);
            setFormData({ ...emptyUserRequest });
        }
        else console.log('failed', formData);
    };

    const handleChange = (field: string, value: any) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
        if (errors[field as keyof INewUserRequest]) {
            setErrors(prev => ({
                ...prev,
                [field]: undefined
            }));
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                    <DialogTitle>Create New User</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left Column */}
                        <div className="space-y-4">

                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    placeholder="Enter name"
                                    value={formData.name}
                                    onChange={(e) => handleChange('name', e.target.value)}
                                    className={errors.name ? 'border-red-500' : ''}
                                />
                                {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    value={formData.email}
                                    onChange={(e) => handleChange('email', e.target.value)}
                                    className={errors.email ? 'border-red-500' : ''}
                                />
                                {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    placeholder="Enter city"
                                    value={formData.city}
                                    onChange={(e) => handleChange('city', e.target.value)}
                                    className={errors.city ? 'border-red-500' : ''}
                                />
                                {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                            </div>

                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile</Label>
                                <Input
                                    id="mobile"
                                    type="tel"
                                    placeholder="10-digit mobile number"
                                    value={formData.mobile}
                                    onChange={(e) => handleChange('mobile', e.target.value)}
                                    className={errors.mobile ? 'border-red-500' : ''}
                                />
                                {errors.mobile && <p className="text-sm text-red-500">{errors.mobile}</p>}
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    value={formData.password}
                                    onChange={(e) => handleChange('password', e.target.value)}
                                    className={errors.password ? 'border-red-500' : ''}
                                />
                                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
                            </div>


                            <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <Select
                                    value={formData.role}
                                    onValueChange={(value) => handleChange('role', value)}
                                >
                                    <SelectTrigger id="role" className={errors.role ? 'border-red-500' : ''}>
                                        <SelectValue placeholder="Select role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="RETAILER">RETAILER</SelectItem>
                                        <SelectItem value="DISTRIBUTOR">DISTRIBUTOR</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.role && <p className="text-sm text-red-500">{errors.role}</p>}
                            </div>

                        </div>
                        {formData.role === 'RETAILER' && (
                            <>
                                <div className="space-y-2" >
                                    <Label htmlFor="distributor_id">Distributor ID</Label>
                                    <SearchableDropdown
                                        options={distributors.map(({ id, name, email, is_active, }) => ({ value: id, label: email }))}
                                        value={selectedValue}
                                        onChange={(dist_id: string) => { setSelectedValue(dist_id); handleChange('distributor_id', dist_id) }}
                                    />
                                    {errors.distributor_id && (
                                        <p className="text-sm text-red-500">{errors.distributor_id}</p>
                                    )}
                                </div>

                                <div className="space-y-2" >
                                    <Label htmlFor="mpin">MPIN</Label>
                                    <Input
                                        id="mpin"
                                        type="password"
                                        maxLength={4}
                                        placeholder="Enter MPIN"
                                        value={formData.mpin}
                                        onChange={(e) => handleChange('mpin', e.target.value)}
                                        className={errors.mpin ? 'border-red-500' : ''}
                                    />
                                </div>
                            </>
                        )}

                    </div>

                    <DialogFooter className="mt-6">
                        <Button type="submit" className="w-full">
                            <UserPlus className="w-4 h-4" />
                            Create User
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default CreateUserDialog;