import { useState } from "react";
import dayjs from "dayjs";

export default function CalendarPanel({ lightMode, selectedDate, onSelect }) {
  const [currentMonth, setCurrentMonth] = useState(dayjs());

  const monthStart = currentMonth.startOf("month");
  const monthEnd = currentMonth.endOf("month");
  const startDate = monthStart.startOf("week");
  const endDate = monthEnd.endOf("week");

  const rows = [];
  let day = startDate;

  while (day.isBefore(endDate)) {
    const week = Array(7)
      .fill(0)
      .map(() => {
        const d = day;
        day = day.add(1, "day");
        return d;
      });
    rows.push(week);
  }

  const isToday = (date) => date.isSame(dayjs(), "day");
  const isSelected = (date) => selectedDate && date.isSame(selectedDate, "day");
  const isCurrentMonth = (date) => date.isSame(currentMonth, "month");

  return (
    <div >
      {/* Month Header */}
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          className={`${lightMode ? "text-gray-700 hover:text-gray-900" : "text-gray-400 hover:text-gray-200"} font-semibold`}
        >
          ‹
        </button>
        <h3 className={`${lightMode ? "text-gray-800" : "text-gray-200"} font-semibold`}>
          {currentMonth.format("MMMM YYYY")}
        </h3>
        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          className={`${lightMode ? "text-gray-700 hover:text-gray-900" : "text-gray-400 hover:text-gray-200"} font-semibold`}
        >
          ›
        </button>
      </div>

      {/* Calendar Table */}
      <table className="w-full text-center text-sm">
        <thead>
          <tr className={`${lightMode ? "text-gray-600" : "text-gray-500"}`}>
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th key={day} className="pb-2 font-medium">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((week, i) => (
            <tr key={i}>
              {week.map((date) => (
                <td key={date.format("DD-MM-YYYY")} className="py-1">
                  <div
                    onClick={() => onSelect(date.format("YYYY-MM-DD"))}
                    className={`
                      w-8 h-8 mx-auto flex items-center justify-center rounded-full cursor-pointer transition
                      ${isToday(date) && lightMode ? "bg-teal-100 text-teal-600 font-semibold border border-teal-400" : ""}
                      ${isToday(date) && !lightMode ? "bg-teal-500/10 text-teal-400 font-semibold border border-teal-600" : ""}
                      ${isSelected(date) && lightMode ? "bg-teal-500 text-white font-semibold" : ""}
                      ${isSelected(date) && !lightMode ? "bg-teal-600 text-white font-semibold" : ""}
                      ${!isCurrentMonth(date) && lightMode ? "text-gray-400" : ""}
                      ${!isCurrentMonth(date) && !lightMode ? "text-gray-600" : ""}
                      ${isCurrentMonth(date) && !isSelected(date) && !isToday(date) && lightMode ? "text-gray-700 hover:bg-gray-100" : ""}
                      ${isCurrentMonth(date) && !isSelected(date) && !isToday(date) && !lightMode ? "text-gray-300 hover:bg-gray-700/50" : ""}
                    `}
                  >
                    {date.format("D")}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
