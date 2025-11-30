import { useState } from "react";
import { MoreVertical, Calendar } from "lucide-react";
import TaskInfo from "./TaskInfo";
import TaskActions from "./TaskActions";
import SubtaskList from "../Subtasks/SubtaskList";

export default function TaskItem({
  task,
  index,
  toggleTask,
  onEdit,
  onDelete,
  toggleSubtask,
  isOverdue,
  lightMode, // ✅ added prop
}) {
  const [showSubtasks, setShowSubtasks] = useState(false);

  // Main task styles
  const completedStyle = task.completed
    ? lightMode
      ? "bg-green-100 border border-green-300"
      : "bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] border border-transparent"
    : lightMode
    ? "bg-gray-100 border border-gray-300 hover:bg-gray-200"
    : "bg-gray-700 hover:bg-gray-600 border border-gray-700";

  const overdueStyle = isOverdue
    ? lightMode
      ? "border-red-500 bg-red-200/40"
      : "border-red-500 bg-red-900/40"
    : "";

  // Text color for light mode
  const textColor = lightMode ? "text-black" : "text-gray-200";

  return (
    <li
      className={`flex flex-col gap-2 px-4 py-3 rounded-xl transition-colors 
                  ${completedStyle} ${overdueStyle} ${textColor}`}
    >
      {/* Top Row: Task Info & Actions */}
      <div className="flex items-center justify-between">
        <TaskInfo task={task} toggleTask={() => toggleTask(index)} lightMode={lightMode} />

        <TaskActions
          task={task}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
          lightMode={lightMode}
        />
      </div>

      {/* Show Subtasks Button (ONLY if subtasks exist) */}
      {task.subtasks && task.subtasks.length > 0 && (
        <button
          onClick={() => setShowSubtasks((prev) => !prev)}
          className={`text-sm transition self-start ${
            lightMode ? "text-blue-600 hover:text-blue-700" : "text-blue-300 hover:text-blue-400"
          }`}
        >
          {showSubtasks ? "Hide Subtasks ▲" : "Show Subtasks ▼"}
        </button>
      )}

      {/* Subtasks List */}
      {showSubtasks && (
        <SubtaskList
          subtasks={task.subtasks}
          toggleSubtask={(subIndex) => toggleSubtask(index, subIndex)}
          lightMode={lightMode}
        />
      )}
    </li>
  );
}
