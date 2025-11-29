export default function TaskInfo({ task, toggleTask }) {
  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleTask}
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
  );
}
