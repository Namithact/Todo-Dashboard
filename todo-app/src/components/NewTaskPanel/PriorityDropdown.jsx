import { useState } from "react";
import { Flag, Flame, Activity, ArrowDown } from "lucide-react";

const PRIORITIES = ["High", "Medium", "Low"];

export default function PriorityDropdown({ onSelect, lightMode }) {
  const [open, setOpen] = useState(false);
  const [selectedPriority, setSelectedPriority] = useState(null);

  // Map priority to icon + color
  const priorityIcons = {
    High: <Flame size={14} className="text-red-500" />,
    Medium: <Activity size={14} className="text-yellow-500" />,
    Low: <ArrowDown size={14} className="text-green-500" />,
  };

  const handleSelect = (priority) => {
    setSelectedPriority(priority);
    onSelect(priority);
    setOpen(false);
  };

  return (
    <div className="relative w-full">
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-center px-3 py-2 rounded-xl transition
          ${lightMode
            ? "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200"
            : "bg-[#1d2127] border border-gray-700 text-gray-300 hover:bg-gray-700"
          }`}
      >
        {/* Show selected icon, otherwise show default flag */}
        {selectedPriority ? priorityIcons[selectedPriority] : <Flag size={16} />}
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
              onClick={() => handleSelect(priority)}
              className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition
                ${lightMode ? "text-gray-800 hover:bg-gray-200" : "text-gray-300 hover:bg-gray-700"}`}
            >
              {priorityIcons[priority]}
              <span className="text-xs">{priority}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
