import { Button } from "@/components/ui/button";

export interface IApisHeaderProps {
    setShowAddDialog: (val: boolean) => void;
}
export default function ApisHeader({ setShowAddDialog }: IApisHeaderProps) {
    return (
        <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
            <div className="flex justify-between items-center px-8 py-4">
                <h2 className="text-2xl font-semibold text-gray-800">Payment Gateways</h2>
                <Button
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6"
                    onClick={() => setShowAddDialog(true)}
                >
                    Add New Api
                </Button>
            </div>
        </div>
    );
}