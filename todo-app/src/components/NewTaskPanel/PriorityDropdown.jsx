import { useState } from "react";
import { Flag } from "lucide-react";

const PRIORITIES = ["High", "Medium", "Low"];

export default function PriorityDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);

  return (
   <div className="relative w-full">
  <button
    onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-center gap-2 px-3 py-2 
               rounded-xl bg-[#1d2127] border border-gray-700 
               text-gray-300 hover:bg-gray-700 transition truncate"
  >
    <Flag size={16} />
    <span className="truncate">Priority</span>
  </button>


      {/* Dropdown */}
      {open && (
        <div
          className="absolute mt-2 w-40 bg-[#23272f] border border-gray-700 
                     rounded-xl p-2 shadow-xl z-20"
        >
          {PRIORITIES.map((priority) => (
            <button
              key={priority}
              onClick={() => {
                onSelect(priority);
                setOpen(false);
              }}
              className="w-full px-2 py-2 text-gray-300 
                         rounded-lg hover:bg-gray-700 transition text-left"
            >
              {priority}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
