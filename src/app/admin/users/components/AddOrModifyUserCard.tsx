import React, { useState } from 'react';
import { Pencil, X, UserPlus } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';


function AddOrModifyUserCard({
    editingUser, handleCloseModal, handleSubmit, formData, handleInputChange, handleSelectChange, handleSwitchChange
}: any) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <Card className="w-full max-w-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>{editingUser ? 'Edit User' : 'Add New User'}</CardTitle>
                        <CardDescription>
                            {editingUser ? 'Update user information' : 'Create a new user account'}
                        </CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleCloseModal}>
                        <X className="w-4 h-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="mobile">Mobile</Label>
                                <Input
                                    id="mobile"
                                    name="mobile"
                                    value={formData.mobile}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required={!editingUser}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="city">City</Label>
                                <Input
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="role">Role</Label>
                                <Select
                                    value={formData.role}
                                    onValueChange={(value) => handleSelectChange('role', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="admin">Admin</SelectItem>
                                        <SelectItem value="distributor">Distributor</SelectItem>
                                        <SelectItem value="retailer">Retailer</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <Label className="text-base">Permissions</Label>
                                <p className="text-sm text-gray-500">Configure user access and roles</p>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="admin">Administrator Access</Label>
                                        <p className="text-sm text-gray-500">Can access and manage all areas</p>
                                    </div>
                                    <Switch
                                        id="admin"
                                        checked={formData.admin}
                                        onCheckedChange={() => handleSwitchChange('admin')}
                                    />
                                </div>
                                <div className="flex items-center justify-between rounded-lg border p-4">
                                    <div className="space-y-0.5">
                                        <Label htmlFor="distributor">Distributor Role</Label>
                                        <p className="text-sm text-gray-500">Can manage distribution and inventory</p>
                                    </div>
                                    <Switch
                                        id="distributor"
                                        checked={formData.distributor}
                                        onCheckedChange={() => handleSwitchChange('distributor')}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button type="submit" className="gap-2">
                                {editingUser ? <Pencil className="w-4 h-4" /> : <UserPlus className="w-4 h-4" />}
                                {editingUser ? 'Update User' : 'Create User'}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}

export default AddOrModifyUserCard