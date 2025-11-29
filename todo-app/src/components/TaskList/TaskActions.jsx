import { useState, useRef, useEffect } from "react";
import { MoreVertical, Calendar } from "lucide-react";

export default function TaskActions({ task, onEdit, onDelete }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-1 text-gray-200 text-sm">
        <Calendar size={14} />
        <span>{task.due}</span>
      </div>
      <span className={`w-4 h-4 rounded-full ${task.labelColor}`}></span>

      {/* More Options Button */}
      <div className="relative" ref={menuRef}>
        <button
          className="p-1 rounded hover:bg-gray-600"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MoreVertical size={16} className="text-gray-200" />
        </button>

        {menuOpen && (
          <ul className="absolute right-0 top-8 w-32 bg-gray-800 border border-gray-600 rounded-md shadow-lg text-gray-200 py-1 z-50">
            <li
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                onEdit();
                setMenuOpen(false);
              }}
            >
              Edit Item
            </li>
            <li
              className="px-3 py-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => {
                onDelete();
                setMenuOpen(false);
              }}
            >
              Delete Item
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}
