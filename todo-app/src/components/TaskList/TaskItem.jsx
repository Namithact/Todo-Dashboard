import { useState, useRef, useEffect } from "react";
import { MoreVertical, Calendar } from "lucide-react";
import TaskInfo from "./TaskInfo";
import TaskActions from "./TaskActions";

export default function TaskItem({ task, index, toggleTask, onEdit, onDelete }) {
  const completedStyle = task.completed
    ? "bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] border border-transparent"
    : "bg-gray-700 hover:bg-gray-600 border border-gray-700";

  return (
    <li className={`flex items-center justify-between px-4 py-3 rounded-xl ${completedStyle} transition-colors relative`}>
      <TaskInfo task={task} toggleTask={() => toggleTask(index)} />
      <TaskActions
        task={task}
        onEdit={() => onEdit(index)}
        onDelete={() => onDelete(index)}
      />
    </li>
  );
}
