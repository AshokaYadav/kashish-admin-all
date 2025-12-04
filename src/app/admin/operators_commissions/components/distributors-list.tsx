import React from 'react'
import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import { Distributor } from '@/types/user'

export interface Props {
    distributors: Distributor[],
    selectedDistributor: string | null,
    setSelectedDistributor: (id: string) => void;
}

export default function DistributorsList({
    distributors,
    selectedDistributor,
    setSelectedDistributor
}: Props) {
    return (
        <div className="container mx-auto w-full p-4">
            <h1 className="text-2xl font-bold mb-4">Distributors</h1>

            <div className="w-full">
                {distributors.length === 0 ? (
                    <p>Loading distributors...</p>
                ) : (
                    <div className="space-y-2">
                        <div className='mx-auto'>
                            <div className="flex flex-row justify-evenly w-full">
                                <span className="font-bold">Name</span>
                                <span className="font-bold">Email</span>
                                <span className="font-bold">Mobile</span>
                                <span className="font-bold">City</span>
                                <span className="font-bold">Status</span>
                            </div>
                        </div>
                        {distributors.map((distributor) => (
                            <Button
                                key={distributor.id}
                                variant={selectedDistributor === distributor.id ? 'default' : 'outline'}
                                className="w-full flex justify-between items-center py-4 border-b last:border-b-0"
                                onClick={() => setSelectedDistributor(distributor.id)}
                            >
                                <div className="flex flex-row justify-evenly w-full">
                                    <span className="font-bold">{distributor.name}</span>
                                    <span className="text-xs text-muted-foreground">{distributor.email}</span>
                                    <span className="text-xs text-muted-foreground">{distributor.mobile}</span>
                                    <span className="text-xs text-muted-foreground">{distributor.city}</span>
                                    <span className={`
                                            ${distributor.status === 'active'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                        }
                                        `}>
                                        {distributor.status}
                                    </span>
                                </div>
                                <ChevronRight className="ml-2 h-4 w-4" />
                            </Button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}