import { MoreVertical, Calendar } from "lucide-react";

export default function TaskItem({ task, index, toggleTask }) {
  const completedStyle = task.completed
    ? "bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] border border-transparent"
    : "bg-gray-700 hover:bg-gray-600 border border-gray-700";

  return (
    <li className={`flex items-center justify-between px-4 py-3 rounded-xl ${completedStyle} transition-colors`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(index)}
          className="w-5 h-5 rounded border border-gray-500 text-blue-500 focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex flex-col">
          <span className="text-gray-200">{task.title}</span>
          <span
            className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${
              task.priority === "High"
                ? "bg-red-500 text-gray-100"
                : task.priority === "Medium"
                ? "bg-yellow-500 text-gray-800"
                : "bg-green-500 text-gray-800"
            }`}
          >
            {task.priority}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 text-gray-200 text-sm">
          <Calendar size={14} />
          <span>{task.due}</span>
        </div>
        <span className={`w-4 h-4 rounded-full ${task.labelColor}`}></span>
        <button className="p-1 rounded hover:bg-gray-600">
          <MoreVertical size={16} className="text-gray-200" />
        </button>
      </div>
    </li>
  );
}
