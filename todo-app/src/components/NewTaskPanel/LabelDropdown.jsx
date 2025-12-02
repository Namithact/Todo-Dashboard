import { useState, useRef, useEffect } from "react";
import { Tag } from "lucide-react";

const LABELS = [
  { name: "Work", color: "bg-teal-400" },
  { name: "Personal", color: "bg-blue-400" },
  { name: "Shopping", color: "bg-orange-400" },
  { name: "Grant", color: "bg-red-400" },
  { name: "Tags", icon: "🏷" },
];

export default function LabelDropdown({ onSelect, lightMode }) {
  const [open, setOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(null);
  const dropdownRef = useRef(null);

  const handleSelect = (label) => {
    setSelectedLabel(label); // store selected label
    onSelect(label);         // send back to parent
    setOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl transition
          ${lightMode
            ? "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200"
            : "bg-[#1d2127] border border-gray-700 text-gray-300 hover:bg-gray-700"
          }`}
      >
        {/* Show selected label dot only */}
        {selectedLabel ? (
          selectedLabel.icon ? (
            <span>{selectedLabel.icon}</span>
          ) : (
            <span className={`w-4 h-4 rounded-full ${selectedLabel.color}`} />
          )
        ) : (
          <Tag size={16} />
        )}
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
          {LABELS.map((label) => (
            <button
              key={label.name}
              onClick={() => handleSelect(label)}
              className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-left transition
                ${lightMode ? "text-gray-800 hover:bg-gray-200" : "text-gray-300 hover:bg-gray-700"}`}
            >
              {label.icon ? (
                <span>{label.icon}</span>
              ) : (
                <span className={`w-3 h-3 rounded-full ${label.color}`} />
              )}
              <span className="truncate">{label.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
