import { useState } from "react";
import { ListPlus } from "lucide-react";
import LabelDropdown from "./LabelDropdown";
import PriorityDropdown from "./PriorityDropdown";

export default function ActionButtons({ task, setTask, onAddTask, lightMode }) {
  const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  const [subtaskText, setSubtaskText] = useState("");

  const handleAddSubtask = () => {
    if (!subtaskText.trim()) return;

    setTask((prev) => ({
      ...prev,
      subtasks: [...prev.subtasks, { title: subtaskText, completed: false }],
    }));

    setSubtaskText("");
    setShowSubtaskInput(false);
  };

  return (
    <section className="w-full flex flex-col gap-4">

      {/* LABEL - PRIORITY - SUBTASK ROW */}
      <div className="flex gap-2">
        <div className="flex-1 min-w-0">
          <LabelDropdown
            lightMode={lightMode}
            onSelect={(label) =>
              setTask((prev) => ({ ...prev, labelColor: label.color }))
            }
          />
        </div>

        <div className="flex-1 min-w-0">
          <PriorityDropdown
            lightMode={lightMode}
            onSelect={(priority) => setTask((prev) => ({ ...prev, priority }))}
          />
        </div>

        <button
          onClick={() => setShowSubtaskInput(true)}
          className={`flex-1 min-w-0 flex items-center justify-center gap-2 px-2 py-2 
            rounded-xl transition text-sm truncate
            ${lightMode
              ? "bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200"
              : "bg-[#1d2127] border border-gray-700 text-gray-300 hover:bg-gray-700"
            }`}
        >
          <ListPlus size={16} />
          <span className="truncate">Subtask</span>
        </button>
      </div>

      {/* SUBTASK INPUT FIELD */}
      {showSubtaskInput && (
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            value={subtaskText}
            onChange={(e) => setSubtaskText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAddSubtask()}
            placeholder="Enter subtask…"
            className={`flex-1 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 transition
              ${lightMode
                ? "bg-gray-100 border border-gray-300 text-gray-800 placeholder-gray-500"
                : "bg-[#1d2127] border border-gray-700 text-gray-300 placeholder-gray-500"
              }`}
          />
          <button
            onClick={handleAddSubtask}
            disabled={!subtaskText.trim()}
            className={`px-4 py-2 rounded-lg transition
              ${subtaskText.trim()
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
      )}

      {/* ADD TASK BUTTON */}
      <button
        onClick={onAddTask}
        disabled={!task.title.trim()}
        className={`w-full py-3 rounded-xl font-semibold text-sm transition
          ${task.title.trim()
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
    </section>
  );
}
