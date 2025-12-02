import { Flame, Activity, ArrowDown } from "lucide-react";

export default function TaskInfo({ task, toggleTask, lightMode }) {
  // Icon styles based on mode
  const iconColor = lightMode ? "text-black" : "text-gray-200";

  // Pick icon based on priority
  const priorityIcon = {
    High: <Flame size={14} className="text-red-500" />,
    Medium: <Activity size={14} className="text-yellow-500" />,
    Low: <ArrowDown size={14} className="text-green-500" />,
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
        className={`w-5 h-5 rounded border ${
          lightMode ? "border-gray-400" : "border-gray-500"
        } text-blue-500 focus:ring-2 focus:ring-blue-400`}
      />

      <div className="flex flex-col">
        <span className={iconColor}>{task.title}</span>

        {/* Priority icon */}
        <span className="mt-1 flex items-center gap-1 text-xs">
          {priorityIcon[task.priority]}
          <span className="text-gray-500 text-[10px]">{task.priority}</span>
        </span>
      </div>
    </div>
  );
}
