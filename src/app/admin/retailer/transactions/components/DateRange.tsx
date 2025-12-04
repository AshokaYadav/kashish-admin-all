// import React from 'react';
// import { addDays, format } from "date-fns";
// import { Calendar as CalendarIcon } from "lucide-react";
// import { DateRange } from "react-day-picker";
// import { cn } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";

// export default function DateRangeSelector({ 
//   onDateRangeChange 
// }: { 
//   onDateRangeChange: (range: DateRange | undefined) => void 
// }) {
//   const [date, setDate] = React.useState<DateRange | undefined>({
//     from: new Date(),
//     to: addDays(new Date(), 7)
//   });

//   // Handle date change
//   const handleDateChange = (newDate: DateRange | undefined) => {
//     setDate(newDate);
//     onDateRangeChange(newDate);
//   };

//   return (
//     <div className="flex flex-col space-y-4">
//       <div className="grid gap-2">
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button
//               variant="outline"
//               className={cn(
//                 "w-full justify-start text-left font-normal",
//                 !date && "text-muted-foreground"
//               )}
//             >
//               <CalendarIcon className="mr-2 h-4 w-4" />
//               {date?.from ? (
//                 date.to ? (
//                   <>
//                     {format(date.from, "LLL dd, y")} -{" "}
//                     {format(date.to, "LLL dd, y")}
//                   </>
//                 ) : (
//                   format(date.from, "LLL dd, y")
//                 )
//               ) : (
//                 <span>Pick a date range</span>
//               )}
//             </Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-auto p-0" align="start">
//             <Calendar
//               initialFocus
//               mode="range"
//               defaultMonth={date?.from}
//               selected={date}
//               onSelect={handleDateChange}
//               numberOfMonths={2}
//             />
//           </PopoverContent>
//         </Popover>
//       </div>
//     </div>
//   );
// }

import React from 'react';
import { format, isAfter, isBefore, startOfDay } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const prevDate: Date = new Date();
prevDate.setDate(prevDate.getDate()-1);
const currentDate: Date = new Date();
currentDate.setDate(currentDate.getDate()+1);


interface DateRange {
    from: Date;
    to: Date;
}

export default function DateRangeSelector({
    onDateRangeChange
}: {
    onDateRangeChange: (range: {from: Date; to: Date}) => void
}) {
    const [startDate, setStartDate] = React.useState<Date>();
    const [endDate, setEndDate] = React.useState<Date>();
    const today = startOfDay(new Date());

    const handleStartDateChange = (date: Date | undefined) => {
        setStartDate(date);
        // If end date exists and is before new start date, reset it
        if (date && endDate && isAfter(date, endDate)) {
            setEndDate(undefined);
        }
        onDateRangeChange({ from: date|| prevDate , to: endDate || currentDate});
    };

    const handleEndDateChange = (date: Date | undefined) => {
        setEndDate(date);
        // If start date doesn't exist but end date is selected, set start date to beginning of that day
        if (date && !startDate) {
            const newStartDate = startOfDay(date);
            setStartDate(newStartDate);
            onDateRangeChange({ from: newStartDate, to: date });
        } else {
            onDateRangeChange({ from: startDate || prevDate, to: date||currentDate });
        }
    };

    return (
        <div className="flex flex-row gap-4">
            {/* Start Date Selector */}
            <div className="flex-1">
                <label className="block text-sm font-medium mb-2">Start Date</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !startDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {startDate ? (
                                format(startDate, "LLL dd, y")
                            ) : (
                                <span>Pick start date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={startDate}
                            onSelect={handleStartDateChange}
                            disabled={(date) =>
                                isAfter(date, today) || // Disable future dates
                                (endDate ? isAfter(date, endDate) : false) // Disable dates after end date
                            }
                        />
                    </PopoverContent>
                </Popover>
            </div>

            {/* End Date Selector */}
            <div className="flex-1">
                <label className="block text-sm font-medium mb-2">End Date</label>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant="outline"
                            className={cn(
                                "w-full justify-start text-left font-normal",
                                !endDate && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {endDate ? (
                                format(endDate, "LLL dd, y")
                            ) : (
                                <span>Pick end date</span>
                            )}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            initialFocus
                            mode="single"
                            selected={endDate}
                            onSelect={handleEndDateChange}
                            disabled={(date) =>
                                isAfter(date, today) || // Disable future dates
                                (startDate ? isBefore(date, startDate) : false) // Disable dates before start date
                            }
                        />
                    </PopoverContent>
                </Popover>
            </div>
        </div>
    );
}