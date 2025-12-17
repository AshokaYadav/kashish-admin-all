"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface DateRangeFilterProps {
  startDate: string;
  endDate: string;
  onChange: (key: "startDate" | "endDate", value: string) => void;
}

export default function DateRangeFilter({
  startDate,
  endDate,
  onChange,
}: DateRangeFilterProps) {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showPresets, setShowPresets] = useState(true);
  const [selectedPresets, setSelectedPresets] = useState("");

  const [selectedStart, setSelectedStart] = useState<Date | null>(null);
  const [selectedEnd, setSelectedEnd] = useState<Date | null>(null);

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isSelectingStart, setIsSelectingStart] = useState(true);

  const calendarRef = useRef<HTMLDivElement>(null);

  // close popup on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target as Node)) {
        setShowCalendar(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const presets = [
    "Today",
    "Yesterday",
    "Last 7 Days",
    "Last 30 Days",
    "This Month",
    "Last Month",
    "Custom Range",
  ];

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec"
  ];

  const formatDate = (date: Date | string) => {
    const d = new Date(date);
    return `${String(d.getDate()).padStart(2, "0")}/${String(
      d.getMonth() + 1
    ).padStart(2, "0")}/${d.getFullYear()}`;
  };

  // Apply preset buttons
  const handlePresetClick = (preset: string) => {
    const today = new Date();
    let start = new Date();
    let end = new Date();

    setSelectedPresets(preset);

    switch (preset) {
      case "Today":
        start = end = today;
        break;

      case "Yesterday":
        start = end = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        break;

      case "Last 7 Days":
        start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
        end = today;
        break;

      case "Last 30 Days":
        start = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 30);
        end = today;
        break;

      case "This Month":
        start = new Date(today.getFullYear(), today.getMonth(), 1);
        end = today;
        break;

      case "Last Month":
        start = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        end = new Date(today.getFullYear(), today.getMonth(), 0);
        break;

      case "Custom Range":
        setShowPresets(true);
        return;
    }

    setSelectedStart(start);
    setSelectedEnd(end);

    onChange("startDate", formatDate(start));
    onChange("endDate", formatDate(end));

    setShowCalendar(false);
  };

  // Calendar utils
  const getDaysInMonth = (m: number, y: number) => new Date(y, m + 1, 0).getDate();
  const getFirstDayOfMonth = (m: number, y: number) => new Date(y, m, 1).getDay();

  const isDateInRange = (d: number, m: number, y: number) => {
    if (!selectedStart || !selectedEnd) return false;
    const date = new Date(y, m, d);
    return date >= selectedStart && date <= selectedEnd;
  };

  const isDateSelected = (d: number, m: number, y: number) => {
    const date = new Date(y, m, d);
    return (
      (selectedStart && date.getTime() === selectedStart.getTime()) ||
      (selectedEnd && date.getTime() === selectedEnd.getTime())
    );
  };

  const handleDateClick = (d: number, m: number, y: number) => {
    const clicked = new Date(y, m, d);

    if (isSelectingStart) {
      setSelectedStart(clicked);
      onChange("startDate", formatDate(clicked));
      setIsSelectingStart(false);
    } else {
      if (selectedStart && clicked >= selectedStart) {
        setSelectedEnd(clicked);
        onChange("endDate", formatDate(clicked));
      } else {
        setSelectedStart(clicked);
        onChange("startDate", formatDate(clicked));
      }
      setIsSelectingStart(true);
    }
  };

  const renderCalendar = (offset = 0) => {
    const month = currentMonth + offset;
    const year = currentYear + Math.floor(month / 12);
    const m = (month % 12 + 12) % 12;

    const daysInMonth = getDaysInMonth(m, year);
    const firstDay = getFirstDayOfMonth(m, year);
    const days = [];

    // previous month's trailing days
    const prevDays = getDaysInMonth(m - 1, year);
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push(
        <div key={"prev-" + i} className="text-sm text-gray-300 py-2 text-center">
          {prevDays - i}
        </div>
      );
    }

    // main days
    for (let d = 1; d <= daysInMonth; d++) {
      days.push(
        <div
          key={d}
          onClick={() => handleDateClick(d, m, year)}
          className={`text-sm py-2 text-center cursor-pointer rounded
            hover:bg-blue-100
            ${isDateInRange(d, m, year) ? "bg-blue-50" : ""}
            ${isDateSelected(d, m, year) ? "bg-blue-600 text-white" : ""}
          `}
        >
          {d}
        </div>
      );
    }

    return (
      <div className="flex-1 min-w-[260px] bg-white">
        <div className="flex items-center justify-between mb-2">
          {offset === 0 && (
            <button
              onClick={() => setCurrentMonth(currentMonth - 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronLeft />
            </button>
          )}

          <div className="flex gap-2">
            <select
              value={months[m]}
              onChange={(e) => setCurrentMonth(months.indexOf(e.target.value))}
              className="border px-2 py-1 rounded text-sm"
            >
              {months.map((mo) => (
                <option key={mo}>{mo}</option>
              ))}
            </select>

            <select
              value={year}
              onChange={(e) => setCurrentYear(+e.target.value)}
              className="border px-2 py-1 rounded text-sm"
            >
              {[2024, 2025, 2026].map((yr) => (
                <option key={yr}>{yr}</option>
              ))}
            </select>
          </div>

          {offset === 1 && (
            <button
              onClick={() => setCurrentMonth(currentMonth + 1)}
              className="p-1 hover:bg-gray-100 rounded"
            >
              <ChevronRight />
            </button>
          )}
        </div>

        <div className="grid grid-cols-7 text-xs text-gray-500 mb-1 text-center">
          {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((x) => (
            <div key={x}>{x}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">{days}</div>
      </div>
    );
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-3 border rounded-lg px-3 py-2 cursor-pointer bg-white"
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <span className="text-gray-700">
          {startDate || "DD/MM/YYYY"} - {endDate || "DD/MM/YYYY"}
        </span>
      </div>

      {showCalendar && (
        <div
          ref={calendarRef}
          className="absolute top-full left-0 mt-2 bg-white shadow-xl border rounded-lg z-50 flex"
        >
          <div className="w-44 p-4 border-r">
            {presets.map((p) => (
              <button
                key={p}
                onClick={() => handlePresetClick(p)}
                className="w-full text-left px-3 py-2 rounded mb-1 hover:bg-gray-100"
              >
                {p}
              </button>
            ))}
          </div>

          {selectedPresets === "Custom Range" && (
            <div className="flex gap-4 p-4">
              {renderCalendar(0)}
              {renderCalendar(1)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
