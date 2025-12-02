import { Search, MoreVertical } from "lucide-react";

export default function TaskListHeader({ searchItem, lightMode }) {
  const bgInput = lightMode ? "bg-gray-200" : "bg-gray-700";
  const textInput = lightMode ? "text-black" : "text-gray-200";
  const placeholder = lightMode ? "placeholder-gray-500" : "placeholder-gray-400";
  const buttonBg = lightMode ? "bg-gray-200" : "bg-gray-700";
  const buttonHover = lightMode ? "hover:bg-gray-300" : "hover:bg-gray-600";
  const iconColor = lightMode ? "text-black" : "text-gray-400";
  const titleColor = lightMode ? "text-black" : "text-gray-200";

  return (
    <header className="mb-6 flex items-center justify-between">
      <div className={`flex items-center gap-2 text-xl font-semibold cursor-pointer ${titleColor}`}>
        <span>Tasks</span>
        {/* <svg
          className={`w-4 h-4 ${iconColor}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg> */}
      </div>

      <div className="flex items-center gap-2">
        <div className={`flex items-center gap-2 ${bgInput} rounded-xl px-3 py-1`}>
          <Search size={16} className={iconColor} />
          <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => searchItem(e)}
            className={`bg-transparent ${textInput} ${placeholder} focus:outline-none`}
          />
        </div>
        <button className={`p-2 rounded-xl ${buttonBg} ${buttonHover}`}>
          <MoreVertical size={16} className={iconColor} />
        </button>
      </div>
    </header>
  );
}
