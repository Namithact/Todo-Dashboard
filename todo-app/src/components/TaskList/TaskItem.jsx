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
}) {
  const [showSubtasks, setShowSubtasks] = useState(false);

  const completedStyle = task.completed
    ? "bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] border border-transparent"
    : "bg-gray-700 hover:bg-gray-600 border border-gray-700";

  return (
    <li
      className={`flex flex-col gap-2 px-4 py-3 rounded-xl ${completedStyle} transition-colors`}
    >
      {/* Top Row: Task Info & Actions */}
      <div className="flex items-center justify-between">
        <TaskInfo task={task} toggleTask={() => toggleTask(index)} />

        <TaskActions
          task={task}
          onEdit={() => onEdit(index)}
          onDelete={() => onDelete(index)}
        />
      </div>

      {/* Show Subtasks Button (ONLY if subtasks exist) */}
      {task.subtasks && task.subtasks.length > 0 && (
        <button
          onClick={() => setShowSubtasks((prev) => !prev)}
          className="text-sm text-blue-300 hover:text-blue-400 transition self-start"
        >
          {showSubtasks ? "Hide Subtasks ▲" : "Show Subtasks ▼"}
        </button>
      )}

      {/* Subtasks List */}
      {showSubtasks && (
        <SubtaskList
  subtasks={task.subtasks}
  toggleSubtask={(subIndex) => toggleSubtask(index, subIndex)}
/>
      )}
    </li>
  );
}
