export default function TaskInfo({ task, toggleTask, lightMode }) {
  // Colors based on priority and mode
  const priorityStyles = {
    High: lightMode ? "bg-red-200 text-red-800" : "bg-red-500 text-gray-100",
    Medium: lightMode ? "bg-yellow-200 text-yellow-800" : "bg-yellow-500 text-gray-800",
    Low: lightMode ? "bg-green-200 text-green-800" : "bg-green-500 text-gray-800",
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
        <span className={lightMode ? "text-black" : "text-gray-200"}>{task.title}</span>
        <span
          className={`mt-1 text-xs font-medium px-2 py-0.5 rounded-full ${priorityStyles[task.priority]}`}
        >
          {task.priority}
        </span>
      </div>
    </div>
  );
}
