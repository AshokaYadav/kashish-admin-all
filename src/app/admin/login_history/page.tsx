"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

import LoginHistoryTableHeader from "./components/TableHead";
import LoginHistoryRow from "./components/Row";
import LoginHistoryPagination from "./components/Pagination";
import { useGetLoginHistory } from "@/hooks/users/use-get-login-history";
import LoginHistoryHeader from "./components/Header";

export default function LoginHistory() {
  const { history, isLoading, refetch } = useGetLoginHistory();

  useEffect(() => {
    refetch();
  }, []);

  // const {histories, isLoading, refetch} =
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  // Filter login history based on search query
  const filteredHistory =
    history?.filter(
      (entry) =>
        entry.user?.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.ip.includes(searchQuery)
    ) || [];

  // Calculate pagination
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);

  const currentItems = filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Let's create a separate component for the empty state too
  const EmptyLoginHistory = () => {
    return (
      <TableRow>
        <TableCell
          colSpan={5}
          className="text-center h-32 text-muted-foreground"
        >
          No login history found
        </TableCell>
      </TableRow>
    );
  };

  return (
    <>
      <Head>
        <title>Login History</title>
        <meta name="description" content="View your account login history" />
      </Head>

      <div className="container mx-auto py-8 px-4">
        <Card className="w-full">
          <CardHeader className="pb-4">
            <LoginHistoryHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showSearch
              showRefresh
              onRefresh={refetch}
            />
          </CardHeader>

          <CardContent>
            <Table>
              <LoginHistoryTableHeader />
              <TableBody>
                {currentItems.length === 0 ? (
                  <EmptyLoginHistory />
                ) : (
                  currentItems.map((login) => (
                    <LoginHistoryRow
                      key={login.id}
                      date={new Date(login.createdAt)}
                      email={login?.user?.email}
                      ip={login.ip}
                      lat={login.latitude}
                      long={login.longitude}
                    />
                  ))
                )}
              </TableBody>
            </Table>

            <LoginHistoryPagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
