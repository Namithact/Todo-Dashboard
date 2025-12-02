export default function SubtaskInput({
  lightMode,
  subtaskText,
  setSubtaskText,
  onAddSubtask,
  subtasks,
}) {
  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          value={subtaskText}
          onChange={(e) => setSubtaskText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onAddSubtask()}
          placeholder="Enter subtask…"
          className={`flex-1 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition
            ${
              lightMode
                ? "bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500"
                : "bg-[#1d2127] border border-gray-700 text-gray-300 placeholder-gray-500"
            }`}
        />

        <button
          onClick={onAddSubtask}
          disabled={!subtaskText.trim()}
          className={`px-4 py-2 rounded-lg transition
            ${
              subtaskText.trim()
                ? lightMode
                  ? "bg-teal-600 text-white hover:bg-teal-500"
                  : "bg-teal-600 text-gray-900 hover:bg-teal-500"
                : lightMode
                ? "bg-gray-300 text-gray-400 cursor-not-allowed"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
        >
          Add
        </button>
      </div>

      {/* Subtask List */}
      {subtasks.length > 0 && (
        <ul className="mt-2 flex flex-col gap-1">
          {subtasks.map((s, i) => (
            <li
              key={i}
              className={`px-3 py-1 rounded-lg text-sm flex items-center justify-between
                ${
                  lightMode
                    ? "bg-gray-200 text-gray-800"
                    : "bg-gray-700 text-gray-200"
                }`}
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
