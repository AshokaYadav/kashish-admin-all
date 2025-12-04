"use client";
import React from 'react';
import { useTransactions } from './hooks/useTransactions';
import { TransactionFiltersSection } from './components/TransactionsFilterSection';
import { TransactionTable } from './components/TransactionsTable';
import { TransactionPagination } from './components/TransactionsPagination';
import DateRangeSelector from './components/DateRange';
import dynamic from 'next/dynamic';
import { format } from 'date-fns';
import { ITxnHistory } from '@/apis/wallets/transactions';



const PDFDownloadSection = dynamic(() =>
    import('@react-pdf/renderer').then(lib => {
        // Within this dynamic import, we have access to all PDF components
        const { PDFDownloadLink, Document, Page, Text, View, StyleSheet } = lib;

        return function PDFDownloadComponent({ rechargeData, user, email, mobile }: { rechargeData: ITxnHistory[]; user: string; email: string; mobile: string }) {
            // Define styles inside the component
            const styles = StyleSheet.create({
                page: {
                    padding: 20, // Slightly reduced padding to give more space for table
                    backgroundColor: '#ffffff',
                },
                title: {
                    fontSize: 18, // Reduced font size
                    marginBottom: 15,
                    textAlign: 'center',
                    fontWeight: 'bold',
                },
                subtitle: {
                    fontSize: 14,
                    marginBottom: 8,
                    fontWeight: 'bold',
                },
                table: {
                    display: 'flex',
                    width: 'auto',
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderRightWidth: 0,
                    borderBottomWidth: 0,
                },
                tableRow: {
                    margin: 'auto',
                    flexDirection: 'row',
                },
                tableHeader: {
                    backgroundColor: '#f0f0f0',
                    fontWeight: 'bold',
                },
                tableCol: {
                    width: '14.28%', // Adjust to fit 7 columns (100% ÷ 7 = ~14.28%)
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderTopWidth: 0,
                },
                tableCell: {
                    margin: 3, // Reduced margin
                    fontSize: 8, // Smaller font size
                    textAlign: 'center', // Center align for better space usage
                },
                summary: {
                    marginTop: 15,
                    padding: 8,
                    backgroundColor: '#f9f9f9',
                },
                row: {
                    flexDirection: 'row',
                    marginBottom: 4,
                },
                label: {
                    width: '50%',
                    fontWeight: 'bold',
                    fontSize: 9,
                },
                value: {
                    width: '50%',
                    fontSize: 9,
                },
                footer: {
                    position: 'absolute',
                    bottom: 20,
                    left: 0,
                    right: 0,
                    textAlign: 'center',
                    fontSize: 8,
                    color: 'grey',
                },
            });

            // Define PDF document components inside this component
            const RechargeHistoryPDF = ({ data }: { data: ITxnHistory[] }) => (
                <Document>
                    <Page size="A4" style={styles.page}>
                        <Text style={styles.title}>Transaction History Report</Text>

                        <Text style={styles.subtitle}>Transaction Details</Text>
                        <Text style={{ fontSize: 10, marginBottom: 4, fontWeight: 'bold' }}>Name: {user}</Text>
                        <Text style={{ fontSize: 10, marginBottom: 4, fontWeight: 'bold' }}>Email: {email}</Text>
                        <Text style={{ fontSize: 10, marginBottom: 4, fontWeight: 'bold' }}>Mobile: {mobile}</Text>

                        <View style={styles.table}>
                            {/* Table Header */}
                            <View style={[styles.tableRow, styles.tableHeader]}>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Type</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Amount</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Open. Bal.</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Close. Bal.</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Comm.</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Status</Text>
                                </View>
                                <View style={styles.tableCol}>
                                    <Text style={styles.tableCell}>Date</Text>
                                </View>
                            </View>

                            {/* Table Data */}
                            {data.map((item: ITxnHistory, index: number) => (
                                <View key={index} style={styles.tableRow}>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{item.type}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>₹{item.amount.toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>₹{(item.opening_balance || 0).toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>₹{(item.closing_balance || 0).toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>₹{(item.commission || 0).toFixed(2)}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{item.status}</Text>
                                    </View>
                                    <View style={styles.tableCol}>
                                        <Text style={styles.tableCell}>{format(new Date(item.updatedAt), 'MM/dd/yy')}</Text>
                                    </View>
                                </View>
                            ))}
                        </View>

                        <View style={styles.summary}>
                            <Text style={styles.subtitle}>Transaction Summary</Text>

                            <View style={styles.row}>
                                <Text style={styles.label}>Total Entries:</Text>
                                <Text style={styles.value}>{data.length}</Text>
                            </View>


                            <View style={styles.row}>
                                <Text style={styles.label}>Total Success Credit Amount:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => (item.status === 'SUCCESS' && item.type === 'CASH')).reduce((sum: number, item: any) => sum + (item.amount || 0), 0).toFixed(2)}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Total Success Withdraw Amount:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => (item.status === 'SUCCESS' && item.type === 'WITHDRAWAL')).reduce((sum: number, item: any) => sum + (item.amount || 0), 0).toFixed(2)}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Total Success Recharge Amount:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => (item.status === 'SUCCESS' && item.type === 'RECHARGE_DEBIT') ).reduce((sum: number, item: any) => Math.abs(sum) + (Math.abs(item.amount) || 0), 0).toFixed(2)}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Total Success Commission:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => item.status === 'SUCCESS').reduce((sum: number, item: any) => sum + (item.commission || 0), 0).toFixed(2)}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Successful Transactions:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => item.status === 'SUCCESS').length}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Failed Transactions:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => item.status === 'FAILED').length}</Text>
                            </View>

                            <View style={styles.row}>
                                <Text style={styles.label}>Pending Transactions:</Text>
                                <Text style={styles.value}>{data.filter((item: any) => item.status === 'PENDING').length}</Text>
                            </View>
                        </View>


                        <Text style={styles.footer}>Generated on {format(new Date(), 'PPP p')}</Text>
                    </Page>
                </Document>
            );

            return (
                <div className="flex gap-4 mb-6">
                    <PDFDownloadLink
                        document={<RechargeHistoryPDF data={rechargeData} />}
                        fileName="recharge-history-summary.pdf"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        {({ blob, url, loading, error }) =>
                            loading ? 'Generating PDF...' : 'Download Summary PDF'
                        }
                    </PDFDownloadLink>
                </div>
            );
        };
    }),
    { ssr: false }
);
export default function TransactionsPage() {
    const {
        user,
        error,
        filters,
        updateFilters,
        handlePageChange,
        filteredTxnHistory,
        data, isLoadingTxns, refetch,
        paginatedParams,
        dateRange,
        updateDateRange,
        setDateRange,
    } = useTransactions(false);

    if (!user || !user.userId) return <>User Not Found!</>;

    if (error) {
        return <div className="text-center py-4 text-rose-600">{error}</div>;
    }


    return (
        <div className="p-6 space-y-6 bg-white h-full flex flex-col">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-semibold text-gray-800">Transaction History</h1>
            </div>

            <DateRangeSelector onDateRangeChange={setDateRange} />

            <TransactionFiltersSection
                filters={filters}
                onFilterChange={updateFilters}
            />

            <TransactionTable
                transactions={filteredTxnHistory}
                isLoading={isLoadingTxns}
            />

            <TransactionPagination
                currentPage={paginatedParams.page}
                totalPages={data?.pagination.totalPages || 1}
                onPageChange={handlePageChange}
            />

            {
                (data) ? <PDFDownloadSection rechargeData={data?.data || []} user={user.name} mobile={user.mobile} email={user.email}/> : (<></>)
            }

        </div>
    );
}