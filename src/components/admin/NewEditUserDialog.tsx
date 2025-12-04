import React from 'react';
import { Pencil, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';


export default function ModifyUserCard({
    editingUser, handleCloseModal, handleSubmit, formData, handleInputChange,
}: any) {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm">
            <Card className="w-full max-w-lg">
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Edit User</CardTitle>
                        <CardDescription>Update user information</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={handleCloseModal}>
                        <X className="w-4 h-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 gap-4">
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
                                <Label htmlFor="mpin">MPIN</Label>
                                <Input
                                    id="mpin"
                                    type='string'
                                    maxLength={4}
                                    name="mpin"
                                    value={formData.mpin}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            {/* <div className="space-y-2">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    required={!editingUser}
                                />
                            </div> */}
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
                        </div>

                        <div className="flex justify-end gap-2">
                            <Button type="button" variant="outline" onClick={handleCloseModal}>
                                Cancel
                            </Button>
                            <Button type="submit" className="gap-2">
                                <Pencil className="w-4 h-4" /> Update User
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}