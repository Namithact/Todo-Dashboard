import { useState } from "react";
import dayjs from "dayjs";
export default function CalendarPanel() {
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
  const isCurrentMonth = (date) => date.isSame(currentMonth, "month");

  return (
    <div className="bg-[#1a1d22] rounded-xl ">
      {/* Header Month */}
      <div className="flex justify-between items-center mb-3">
        <button
          onClick={() => setCurrentMonth(currentMonth.subtract(1, "month"))}
          className="text-gray-400 hover:text-gray-200"
        >
          ‹
        </button>

        <h3 className="text-gray-200 font-medium">
          {currentMonth.format("MMMM YYYY")}
        </h3>

        <button
          onClick={() => setCurrentMonth(currentMonth.add(1, "month"))}
          className="text-gray-400 hover:text-gray-200"
        >
          ›
        </button>
      </div>

      {/* Calendar */}
      <table className="w-full text-center text-sm">
        <thead>
          <tr className="text-gray-500">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <th key={day} className="pb-2 font-medium">
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody className="text-gray-400">
          {rows.map((week, i) => (
            <tr key={i}>
              {week.map((date) => (
                <td key={date.format("DD-MM-YYYY")} className="py-1">
                  <div
                    className={`w-8 h-8 mx-auto flex items-center justify-center rounded-full
                    ${
                      isToday(date)
                        ? "bg-teal-500/10 text-teal-400 font-semibold border border-teal-600"
                        : isCurrentMonth(date)
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
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
