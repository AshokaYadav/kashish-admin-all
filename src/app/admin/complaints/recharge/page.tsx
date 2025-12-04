// app/admin/complaints/transaction/page.tsx
"use client";

import { useState, useEffect } from 'react';
import { enIN } from "date-fns/locale";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Search, Filter, Download } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from '@/lib/axios';
import { fetchRechargeComplaints } from '@/apis/recharge/history';


// API URL configuration - could be moved to environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';

// Define interfaces for our data structures
interface ComplaintData {
  id: string;
  transactionId: string;
  createdAt: Date;
  userId: string;
  amount: number;
  status: 'resolved' | 'pending' | 'processing' | 'RESOLVED' | 'PENDING' | 'PROCESSING';
  content: string;
}

export interface IComplaint {
  recharge_history: any;
  user: any;
  mobile: any;
  name: any;
  price: any;
  id: string,
  user_id: string,
  ref_id: string,
  type: string,
  textContent: string,
  updates: string,
  status: string,
  createdAt: string,
  updatedAt: string
}


function RechargesComplaintsPage() {

  function toISTDate(dateString: string) {
    const date = new Date(dateString);
    const istOffsetInMinutes = 330; // IST = UTC+5:30
    return new Date(date.getTime() + istOffsetInMinutes * 60 * 1000);
  }
  // State for data and UI
  const [complaints, setComplaints] = useState<IComplaint[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedComplaint, setSelectedComplaint] = useState<IComplaint | null>(null);

  // State for filters and pagination
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const [totalItems, setTotalItems] = useState<number>(0);

  // State for debounced search to minimize API calls
  const [debouncedSearch, setDebouncedSearch] = useState<string>("");

  // Handle search input changes with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 500); // 500ms debounce delay

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch complaints data from API
  const fetchComplaints = async () => {
    setLoading(true);
    setError(null);

    try {
      // Format date for API request if present
      const formattedDate = selectedDate
        ? format(selectedDate, "yyyy-MM-dd")
        : '';

      // Build query parameters
      const params = {
        page: currentPage.toString(),
        limit: itemsPerPage.toString(),
        search: debouncedSearch,
        status: selectedStatus !== "all" ? selectedStatus : '',
        date: formattedDate
      };

      // Fetch data with axios
      const { err, data: response, message } = await fetchRechargeComplaints(params)
      if (err) setError(err);

      // Map the API response to our format
      const formattedData = response?.data?.map((item: any) => ({
        ...item,
        // Ensure date is a Date object
        date: new Date(item.date)
      })) || [];

      // Update state with data
      setComplaints(formattedData);
      setTotalItems(response?.total || 0);
      setTotalPages(response?.totalPages || 1);
    } catch (err) {
      console.error("Error fetching Recharge complaints:", err);
      setError("Failed to load complaints. Please try again later.");
      // Set empty data in case of error
      setComplaints([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data when filters, pagination or search query changes
  useEffect(() => {
    fetchComplaints();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedSearch, selectedStatus, selectedDate, currentPage, itemsPerPage]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Status badge mapping
  const getStatusBadge = (status: 'RESOLVED' | 'PENDING' | 'PROCESSING') => {
    const statusMap = {
      RESOLVED: { label: "RESOLVED", variant: "secondary" as const },
      PENDING: { label: "PENDING", variant: "outline" as const },
      PROCESSING: { label: "PROCESSING", variant: "default" as const }
    };

    const { label, variant } = statusMap[status] || { label: status, variant: "default" as const };

    return (
      <Badge variant={variant} className={`capitalize ${status === 'RESOLVED' ? 'bg-green-100 text-green-800 hover:bg-green-100' :
        status === 'PENDING' ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-100' :
          status === 'PROCESSING' ? 'bg-blue-100 text-blue-800 hover:bg-blue-100' : ''
        }`}>
        {label}
      </Badge>
    );
  };

  // Export to CSV functionality
  const exportToCSV = async () => {
    setLoading(true);
    try {
      // Build query parameters for export - typically we want all filtered results
      const formattedDate = selectedDate
        ? format(selectedDate, "yyyy-MM-dd")
        : '';

      const params = new URLSearchParams({
        search: debouncedSearch,
        status: selectedStatus !== "all" ? selectedStatus : '',
        date: formattedDate,
        export: 'csv' // Signal to API this is an export request
      });

      // Request CSV directly from API
      const response = await axiosInstance.get(`/ticket/recharge-complaints/export?${params}`, {
        responseType: 'blob' // Important for handling file download
      });

      // Create download from response
      const url = URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `transaction_complaints_${format(new Date(), "yyyy-MM-dd")}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (err) {
      console.error("Error exporting to CSV:", err);
      setError("Failed to export data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to update complaint status
  const updateComplaintStatus = async (complaintId: string, newStatus: string, note: string) => {
    setLoading(true);
    try {
      await axiosInstance.patch(`/ticket/${complaintId}`, {
        status: newStatus,
        note: note
      });

      // Refresh data after update
      fetchComplaints();

      // Close dialog by clearing selectedComplaint
      setSelectedComplaint(null);
    } catch (err) {
      console.error("Error updating complaint status:", err);
      setError("Failed to update complaint. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card>
        <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardTitle className="text-2xl font-bold">Recharge Complaint History</CardTitle>
            <CardDescription>
              View and manage customer complaints related to Recharges
            </CardDescription>
          </div>
          <Button
            variant="outline"
            className="mt-4 sm:mt-0"
            onClick={exportToCSV}
            disabled={loading}
          >
            <Download className="mr-2 h-4 w-4" />
            {loading ? 'Exporting...' : 'Export to CSV'}
          </Button>
        </CardHeader>
        <CardContent>
          {/* Search and Filter Section */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by ID, Transaction ID, User ID or content..."
                className="pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="processing">Processing</SelectItem>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full md:w-[180px] justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date: Date | undefined) => setSelectedDate(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            <Button variant="secondary" className="w-full md:w-auto" onClick={() => {
              setSearchQuery("");
              setSelectedStatus("all");
              setSelectedDate(undefined);
            }}>
              <Filter className="mr-2 h-4 w-4" />
              Reset Filters
            </Button>
          </div>

          {/* Error message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          {/* Loading state */}
          {loading && (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-700"></div>
            </div>
          )}

          {/* Complaints Table */}
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Sr. No</TableHead>
                  <TableHead>Transaction ID</TableHead>

                  <TableHead>User ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Recharge Detail</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Complaint Date</TableHead>
                  <TableHead>Recharge Date</TableHead>
                  <TableHead className="w-[300px]">Content</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {!loading && complaints.length > 0 ? (
                  complaints.map((complaint, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{index + 1}</TableCell>
                      <TableCell>{complaint.ref_id}</TableCell>

                      <TableCell>
                        {complaint.user.name}
                        <br />
                        {complaint.user.mobile}
                      </TableCell>
                      <TableCell>{complaint.price}</TableCell>
                      <TableCell>
                        {complaint?.recharge_history?.operator.name}
                        <br />
                        {complaint?.recharge_history?.circle?.name}
                      </TableCell>
                      {/* <TableCell>{getStatusBadge(complaint.status)}</TableCell> */}
                      <TableCell>{complaint.status}</TableCell>
                      <TableCell>
                        {format(toISTDate(complaint?.createdAt), "dd/MM/yyyy  hh:mm a")}
                      </TableCell>
                      <TableCell>
                        {format(toISTDate(complaint?.recharge_history?.createdAt), "dd/MM/yyyy hh:mm a")}
                      </TableCell>
                      <TableCell className="max-w-[300px] truncate" title={complaint.textContent}>
                        {complaint?.textContent}
                      </TableCell>

                      <TableCell className="text-right">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setSelectedComplaint(complaint)}
                            >
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="sm:max-w-[500px]">
                            <DialogHeader>
                              <DialogTitle>Transaction Complaint Details</DialogTitle>
                              <DialogDescription>
                                Full information about this transaction complaint.
                              </DialogDescription>
                            </DialogHeader>
                            {selectedComplaint && (
                              <form onSubmit={(e) => {
                                e.preventDefault();
                                const formData = new FormData(e.target as HTMLFormElement);
                                const newStatus = formData.get('status') as string;
                                const note = formData.get('note') as string;
                                updateComplaintStatus(selectedComplaint.id, newStatus, note);
                              }}>
                                <div className="grid gap-4 py-4">
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Complaint ID:</span>
                                    <span className="col-span-3">{selectedComplaint.id}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Transaction ID:</span>
                                    <span className="col-span-3">{selectedComplaint.ref_id}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Date:</span>
                                    <span className="col-span-3">{format(new Date(selectedComplaint.createdAt), "PPP")}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">User ID:</span>
                                    <span className="col-span-3">{selectedComplaint.user_id}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Amount:</span>
                                    <span className="col-span-3">{selectedComplaint.price}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Status:</span>
                                    <span className="col-span-3">
                                      {/* {getStatusBadge(selectedComplaint.status)} */}
                                      {selectedComplaint.status}
                                    </span>
                                  </div>
                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Content:</span>
                                    <span className="col-span-3">{selectedComplaint.textContent}</span>
                                  </div>
                                  <div className="grid grid-cols-4 items-start gap-4">
                                    <span className="text-sm font-medium">Api Res:</span>
                                    <Textarea
                                      name="updates"
                                      readOnly
                                      className="col-span-3"
                                      value={selectedComplaint.updates}
                                      placeholder="Add additional notes about this complaint"
                                    />
                                  </div>
                                  <div className="grid grid-cols-4 items-start gap-4">
                                    <span className="text-sm font-medium">Add Note:</span>
                                    <Textarea
                                      name="note"
                                      className="col-span-3"
                                      placeholder="Add additional notes about this complaint"
                                    />
                                  </div>

                                  <div className="grid grid-cols-4 items-center gap-4">
                                    <span className="text-sm font-medium">Change Status:</span>
                                    <Select defaultValue={selectedComplaint.status} name="status">
                                      <SelectTrigger className="col-span-3">
                                        <SelectValue />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectItem value="RESOLVED">Resolved</SelectItem>
                                        <SelectItem value="PENDING">Pending</SelectItem>
                                        <SelectItem value="PROCESSING">Processing</SelectItem>
                                      </SelectContent>
                                    </Select>
                                  </div>
                                  <div className="flex justify-end mt-4 space-x-2">
                                    <Button variant="outline" type="button" onClick={() => setSelectedComplaint(null)}>
                                      Cancel
                                    </Button>
                                    <Button type="submit" disabled={loading}>
                                      {loading ? 'Saving...' : 'Save Changes'}
                                    </Button>
                                  </div>
                                </div>
                              </form>
                            )}
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                    </TableRow>
                  ))
                ) : !loading && (
                  <TableRow>
                    <TableCell colSpan={8} className="h-24 text-center">
                      {error ? 'Error loading data.' : 'No complaints found matching your criteria.'}
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          {/* Pagination and Items Per Page */}
          <div className="mt-4 flex flex-col sm:flex-row justify-between items-center">
            <div className="mb-4 sm:mb-0 flex items-center space-x-2">
              <span className="text-sm text-gray-500">
                Showing {complaints.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} - {
                  Math.min(currentPage * itemsPerPage, totalItems)
                } of {totalItems} items
              </span>
              <Select value={itemsPerPage.toString()} onValueChange={(value) => {
                setItemsPerPage(Number(value));
                setCurrentPage(1);
              }}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10">10 / page</SelectItem>
                  <SelectItem value="25">25 / page</SelectItem>
                  <SelectItem value="50">50 / page</SelectItem>
                  <SelectItem value="100">100 / page</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    isActive={!(currentPage === 1 || loading)}
                  />
                </PaginationItem>

                {/* First page */}
                {currentPage > 2 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
                  </PaginationItem>
                )}

                {/* Ellipsis if needed */}
                {currentPage > 3 && (
                  <PaginationItem>
                    <span className="p-2">...</span>
                  </PaginationItem>
                )}

                {/* Previous page if not first */}
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(currentPage - 1)}>
                      {currentPage - 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Current page */}
                <PaginationItem>
                  <PaginationLink isActive>{currentPage}</PaginationLink>
                </PaginationItem>

                {/* Next page if not last */}
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
                      {currentPage + 1}
                    </PaginationLink>
                  </PaginationItem>
                )}

                {/* Ellipsis if needed */}
                {currentPage < totalPages - 2 && (
                  <PaginationItem>
                    <span className="p-2">...</span>
                  </PaginationItem>
                )}

                {/* Last page */}
                {currentPage < totalPages - 1 && (
                  <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(totalPages)}>
                      {totalPages}
                    </PaginationLink>
                  </PaginationItem>
                )}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    isActive={!(currentPage === totalPages || loading)}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


export default RechargesComplaintsPage;