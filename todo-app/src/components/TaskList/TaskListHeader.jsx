import { Search, MoreVertical } from "lucide-react";

export default function TaskListHeader() {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div className="flex items-center gap-2 text-xl font-semibold cursor-pointer">
        <span>Today</span>
        <svg
          className="w-4 h-4 text-gray-200"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 bg-gray-700 rounded-xl px-3 py-1">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            className="bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <button className="p-2 rounded-xl bg-gray-700 hover:bg-gray-600">
          <MoreVertical size={16} className="text-gray-400" />
        </button>
      </div>
    </header>
  );
}
