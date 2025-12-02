import { useState, useRef, useEffect } from "react";
import { MoreVertical, Calendar } from "lucide-react";

export default function TaskActions({ task, onEdit, onDelete, lightMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // --- Calculate overdue days ---
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dueDate = new Date(task.due);
  dueDate.setHours(0, 0, 0, 0);

  const isOverdue = dueDate < today && !task.completed;

  const daysOverdue = isOverdue
    ? Math.ceil((today - dueDate) / (1000 * 60 * 60 * 24))
    : 0;
  const daysLeft = !isOverdue
    ? Math.ceil((dueDate - today) / (1000 * 60 * 60 * 24))
    : 0;

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

  // Colors based on light/dark mode
  const textColor = lightMode ? "text-black" : "text-gray-200";
  const overdueColor = "text-red-600";
  const badgeBorder = lightMode ? "border-gray-300" : "border-gray-600";
  const badgeBg = lightMode ? "bg-gray-100" : "bg-gray-800";
  const buttonHoverBg = lightMode ? "hover:bg-gray-200" : "hover:bg-gray-600";

  return (
    <div className="flex items-center gap-3">
      <div className={`flex flex-col text-sm leading-tight ${textColor}`}>
        {/* Due Date */}
        <div className="flex items-center gap-1">
          <Calendar size={14} />
          <span>{task.due}</span>
        </div>

        {/* Overdue text */}
        {isOverdue && (
          <span className={`${overdueColor} text-xs`}>
            {daysOverdue} day{daysOverdue > 1 ? "s" : ""} overdue
          </span>
        )}
        {/* Days Left (only if not overdue and not completed) */}
        {!isOverdue && !task.completed && daysLeft > 0 && (
          <span className="text-xs text-green-600">
            {daysLeft} day{daysLeft > 1 ? "s" : ""} left
          </span>
        )}
      </div>

      <span
        className={`w-4 h-4 rounded-full ${task.labelColor} border ${badgeBorder} ${badgeBg}`}
      ></span>

      {/* More Options */}
      <div className="relative" ref={menuRef}>
        <button
          className={`p-1 rounded ${buttonHoverBg}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <MoreVertical size={16} className={textColor} />
        </button>

        {menuOpen && (
          <ul
            className={`absolute right-0 top-8 w-32 ${badgeBg} border ${badgeBorder} rounded-md shadow-lg py-1 z-50 ${textColor}`}
          >
            <li
              className={`px-3 py-2 cursor-pointer ${buttonHoverBg}`}
              onClick={() => {
                onEdit();
                setMenuOpen(false);
              }}
            >
              Edit Item
            </li>
            <li
              className={`px-3 py-2 cursor-pointer ${buttonHoverBg}`}
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
