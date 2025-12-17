"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import LoginHistoryHeader from "../components/Header";
import LoginHistoryTableHeader from "../components/TableHead";
import LoginHistoryRow from "../components/Row";
import LoginHistoryPagination from "../components/Pagination";
import { useParams } from "next/navigation";
import { useGetLoginHistory } from "@/hooks/users/use-get-login-history";
const parseDDMMYYYY = (value: string) => {
  if (!value) return null;
  const [dd, mm, yyyy] = value.split("/");
  return new Date(Number(yyyy), Number(mm) - 1, Number(dd));
};


export default function LoginHistory() {
  const { id }: { id: string } = useParams();
  const { history, isLoading, refetch } = useGetLoginHistory(id);

  useEffect(() => {
    refetch();
  }, []);

  // const {histories, isLoading, refetch} =
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const itemsPerPage = 25;

  // Filter login history based on search query
  //   const filteredHistory =
  //     history?.filter(
  //       (entry) =>
  //         entry.user?.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //         entry.ip.includes(searchQuery)
  //     ) || [];

//   const filteredHistory =
//     history?.filter((entry) => {
//       const entryDate = new Date(entry.createdAt);

//       const matchSearch =
//         entry.user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         entry.ip.includes(searchQuery);

//       const matchStartDate = startDate
//         ? entryDate >= new Date(startDate)
//         : true;

//       const matchEndDate = endDate
//         ? entryDate <= new Date(endDate + "T23:59:59")
//         : true;

//       return matchSearch && matchStartDate && matchEndDate;
//     }) || [];

const filteredHistory =
  history?.filter((entry) => {
    const entryDate = new Date(entry.createdAt);

    const matchSearch =
      entry.user?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      entry.ip.includes(searchQuery);

    const start = parseDDMMYYYY(startDate);
    const end = parseDDMMYYYY(endDate);

    const matchStartDate = start ? entryDate >= start : true;
    const matchEndDate = end
      ? entryDate <= new Date(end.setHours(23, 59, 59, 999))
      : true;

    return matchSearch && matchStartDate && matchEndDate;
  }) || [];


  // Calculate pagination
  const totalPages = Math.ceil(filteredHistory.length / itemsPerPage);
  const currentItems = filteredHistory.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  console.log(currentItems[0]);

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
            {/* <LoginHistoryHeader
                            refetch={refetch}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        /> */}

            {/* <LoginHistoryHeader
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showSearch
              showRefresh
              onRefresh={refetch}
            /> */}

            {/* <LoginHistoryHeader
              showSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}


              showDateRange
              startDate={startDate}
              endDate={endDate}
              onStartDateChange={setStartDate}
              onEndDateChange={setEndDate}


              showRefresh
              onRefresh={refetch}
            /> */}

            <LoginHistoryHeader
              showSearch
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              showDateRange
              startDate={startDate}
              endDate={endDate}
              onDateChange={(key, value) => {
                if (key === "startDate") setStartDate(value);
                if (key === "endDate") setEndDate(value);
              }}
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
                      device_info={login.device_info}
                      phone={login?.user?.mobile}
                      name={login?.user?.name}
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
