import FiltersSection, { FiltersSectionProps } from "./FiltersSection";
import WalletsGrid, { WalletsGridProps } from "./WalletsGrid";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export interface MainContentProps extends WalletsGridProps, FiltersSectionProps {
    setIsApiWalletsTab: (value: boolean) => void;
}

export default function MainContent({
    handleStatusChange,
    handleTransaction, setSearchQuery, setStatusFilter,
    searchQuery, statusFilter, wallets,
    isBlocking, isUnblocking,
    isApiWalletsTab,
    setIsApiWalletsTab,
}: MainContentProps) {
    const handleTabChange = (val: string) => {
        if (val === 'api') return setIsApiWalletsTab(true);
        // if(val==="app") return setIsApiWalletsTab('app')
        setIsApiWalletsTab(false);
    }

    return (
        <div className="p-8">
            <Tabs defaultValue="api" className="space-y-6" onValueChange={handleTabChange}>
                <TabsList>
                    <TabsTrigger value={'api'}>API Wallets</TabsTrigger>
                    <TabsTrigger value={'user'}>User Wallets</TabsTrigger>
                    <TabsTrigger value={'app'}>app Wallets</TabsTrigger>

                </TabsList>

                {/* Filters Section */}
                <FiltersSection
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    setStatusFilter={setStatusFilter}
                    statusFilter={statusFilter}
                />


                {/* Wallet Cards Grid */}
                <WalletsGrid
                    isApiWalletsTab={isApiWalletsTab}
                    isBlocking={isBlocking}
                    isUnblocking={isUnblocking}
                    wallets={wallets}
                    handleStatusChange={handleStatusChange}
                    handleTransaction={handleTransaction} />
            </Tabs>
        </div>
    );
}