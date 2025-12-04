"use client";
import React from 'react';
import Head from 'next/head';
import RechargeHistoryTable from './components/RechargeHistoryTable';
import { RechargeDataProvider } from './context/RechargeContext';




export default function RechargeHistoryPage() {

    return (
        <div className="container mx-auto px-4 py-8">
            <Head>
                <title>Recharge History</title>
                <meta name="description" content="Recharge history page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <RechargeDataProvider>
                <RechargeHistoryTable />
            </RechargeDataProvider>
        </div>
    );
}