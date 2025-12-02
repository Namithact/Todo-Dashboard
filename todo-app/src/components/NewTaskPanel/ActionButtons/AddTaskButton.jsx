export default function AddTaskButton({ lightMode, taskTitle, onAddTask }) {
  const disabled = !taskTitle.trim();

  return (
    <button
      onClick={onAddTask}
      disabled={disabled}
      className={`w-full py-3 rounded-xl font-semibold text-sm transition
        ${
          !disabled
            ? lightMode
              ? "bg-teal-600 text-white hover:bg-teal-500"
              : "bg-teal-600 text-gray-900 hover:bg-teal-500"
            : lightMode
            ? "bg-gray-300 text-gray-400 cursor-not-allowed"
            : "bg-gray-600 text-gray-400 cursor-not-allowed"
        }`}
    >
      + Add Task
    </button>
  );
}
