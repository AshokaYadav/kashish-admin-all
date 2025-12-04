'use client';

import React, { useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';

import { Wallet2Icon } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';


const QRCodeGenerator = ({ url, open, setOpen }: { url: string, open: boolean, setOpen: (val: boolean) => void }) => {
    const router = useRouter();

    const isValidUrl = (urlString: string) => {
        try {
            new URL(urlString);
            router.push(urlString);
            return true;
        } catch (e) {
            return false;
        }
    };

    return (

        <Dialog open={open} onOpenChange={setOpen} >
            <DialogContent>
                {url && (
                    <div className="flex flex-col items-center justify-center ">
                        {isValidUrl(url) ? (
                            <>
                                <div className='flex flex-row my-5'>
                                    <Wallet2Icon className="w-6 h-6 mx-2" />
                                    <p>Scan to get Payment QR</p>
                                </div>
                                <QRCodeSVG
                                    value={url}
                                    size={256}
                                    fgColor="#000000"
                                    bgColor={"#FFFFFF"}
                                    level="H"
                                />
                            </>
                        ) : (
                            <p className="text-red-500">Please enter a valid URL</p>
                        )}
                    </div>
                )}
            </DialogContent>

        </Dialog>
    );
};

export default QRCodeGenerator;