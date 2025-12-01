import { useState } from "react";
import { Flag } from "lucide-react";

const PRIORITIES = ["High", "Medium", "Low"];

export default function PriorityDropdown({ onSelect, lightMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition truncate
          ${lightMode
            ? "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200"
            : "bg-[#1d2127] border border-gray-700 text-gray-300 hover:bg-gray-700"
          }`}
      >
        <Flag size={16} />
        <span className="truncate">Priority</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className={`absolute mt-2 w-40 rounded-xl p-2 shadow-xl z-20 transition
            ${lightMode
              ? "bg-white border border-gray-300"
              : "bg-[#23272f] border border-gray-700"
            }`}
        >
          {PRIORITIES.map((priority) => (
            <button
              key={priority}
              onClick={() => {
                onSelect(priority);
                setOpen(false);
              }}
              className={`w-full px-2 py-2 rounded-lg text-left transition
                ${lightMode
                  ? "text-gray-800 hover:bg-gray-200"
                  : "text-gray-300 hover:bg-gray-700"
                }`}
            >
              {priority}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
