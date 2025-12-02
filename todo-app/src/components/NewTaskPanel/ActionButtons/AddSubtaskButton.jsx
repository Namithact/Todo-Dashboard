import { ListPlus } from "lucide-react";

export default function AddSubtaskButton({ lightMode, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 min-w-0 flex items-center justify-center gap-2 px-2 py-2 
        rounded-xl transition text-sm truncate
        ${
          lightMode
            ? "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200"
            : "bg-[#1d2127] border border-gray-700 text-gray-300 hover:bg-gray-700"
        }`}
    >
      <ListPlus size={16} />
      <span className="truncate">Subtask</span>
    </button>
  );
}
