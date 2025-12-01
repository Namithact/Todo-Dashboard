import { useState } from "react";
import { Tag } from "lucide-react";

const LABELS = [
  { name: "Work", color: "bg-teal-400" },
  { name: "Personal", color: "bg-blue-400" },
  { name: "Shopping", color: "bg-orange-400" },
  { name: "Grant", color: "bg-red-400" },
  { name: "Tags", icon: "🏷" },
];

export default function LabelDropdown({ onSelect }) {
  const [open, setOpen] = useState(false);

  return (
   <div className="relative w-full">
  <button
    onClick={() => setOpen(!open)}
    className="w-full flex items-center justify-center gap-2 px-3 py-2 
               rounded-xl bg-[#1d2127] border border-gray-700 
               text-gray-300 hover:bg-gray-700 transition truncate"
  >
    <Tag size={16} />
    <span className="truncate">Label</span>
  </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute mt-2 w-40 bg-[#23272f] border border-gray-700 
                     rounded-xl p-2 shadow-xl z-20"
        >
          {LABELS.map((label) => (
            <button
              key={label.name}
              onClick={() => {
                onSelect(label);
                setOpen(false);
              }}
              className="w-full flex items-center gap-2 px-2 py-2 
                         text-gray-300 rounded-lg hover:bg-gray-700 transition text-left"
            >
              {/* Dot or icon */}
              {label.icon ? (
                <span>{label.icon}</span>
              ) : (
                <span
                  className={`w-3 h-3 rounded-full ${label.color}`}
                ></span>
              )}

              <span>{label.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
