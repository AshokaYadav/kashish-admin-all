import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export interface WalletsHeaderProps {
    setShowAddDialog: (val: boolean) => void;
}
export default function Header({
    setShowAddDialog
}: WalletsHeaderProps) {
    return (
        < div className="bg-white border-b sticky top-0 z-10 shadow-sm" >
            <div className="flex justify-between items-center px-8 py-4">
                <h2 className="text-2xl font-semibold text-gray-800">Wallets</h2>
                {/* <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white"
                    onClick={() => setShowAddDialog(true)}
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Wallet
                </Button> */}
            </div>
        </div >
    );
}