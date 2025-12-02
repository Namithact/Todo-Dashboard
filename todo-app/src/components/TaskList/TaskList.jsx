import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TaskList({ lightMode,tasks,setTasks }) {
  // const [tasks, setTasks] = useState([
  //   {
  //     title: "Finish project report",
  //     labelColor: "bg-teal-400",
  //     due: "2025-11-30", // Today
  //     completed: true,
  //     priority: "High",
  //   },
  //   {
  //     title: "tt",
  //     labelColor: "bg-blue-400",
  //     due: "2025-12-11",
  //     completed: false,
  //     priority: "Medium",
  //     subtasks: [
  //       {
  //         title: "test",
  //         completed: false,
  //       },
  //     ],
  //   },
  //   {
  //     title: "Finish project report",
  //     labelColor: "bg-teal-400",
  //     due: "2025-11-30", // Today
  //     completed: false,
  //     priority: "High",
  //     subtasks: [
  //       { title: "Draft outline", completed: false },
  //       { title: "Write intro", completed: true },
  //       { title: "Review and edit", completed: false },
  //     ],
  //   },
  //   {
  //     title: "Buy groceries",
  //     labelColor: "bg-orange-400",
  //     due: "2025-11-27", // Tomorrow
  //     completed: false,
  //     priority: "Low",
  //   },
  //   {
  //     title: "Call mom",
  //     labelColor: "bg-blue-400",
  //     due: "2025-11-29", // Today
  //     completed: false,
  //     priority: "Medium",
  //   },
  // ]);

  const [searchTerm, setSearchTerm] = useState("");

  // Search handler
  function searchTask(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  // Build filtered list but keep original indices
  const filteredWithIndex = tasks
    .map((task, originalIndex) => ({ task, originalIndex }))
    .filter(({ task }) => task.title.toLowerCase().includes(searchTerm || ""));
  // function to check the task overdue
  const isOverdue = (task) => {
    if (!task.due) return false;

    const today = new Date().setHours(0, 0, 0, 0);
    const dueDate = new Date(task.due).setHours(0, 0, 0, 0);

    return dueDate < today && !task.completed;
  };

  // Immutable toggle of a main task's completed flag
  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((t, i) => {
        if (i !== index) return t;

        const newCompleted = !t.completed;

        return {
          ...t,
          completed: newCompleted,
          subtasks: t.subtasks
            ? t.subtasks.map((s) => ({ ...s, completed: newCompleted }))
            : [],
        };
      })
    );
  };

  // Immutable toggle of a subtask
  const toggleSubtask = (taskIndex, subIndex) => {
    setTasks((prev) =>
      prev.map((t, i) => {
        if (i !== taskIndex) return t;

        const updatedSubtasks = t.subtasks.map((s, si) =>
          si === subIndex ? { ...s, completed: !s.completed } : s
        );

        // Check if all subtasks are complete
        const allDone = updatedSubtasks.every((s) => s.completed);

        return {
          ...t,
          subtasks: updatedSubtasks,
          completed: allDone, // <-- sync main task
        };
      })
    );
  };

  // Delete task immutably
  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };
  //complete all tasks and subtasks
  const toggleAllTasks = () => {
    setTasks((prev) => {
      const allDone = prev.every((t) => t.completed);
      const newCompleted = !allDone;

      return prev.map((t) => ({
        ...t,
        completed: newCompleted,
        subtasks: t.subtasks
          ? t.subtasks.map((s) => ({ ...s, completed: newCompleted }))
          : [],
      }));
    });
  };

  // Edit task title immutably
  const editTask = (index) => {
    const newTitle = prompt("Enter new task title:", tasks[index]?.title || "");
    if (newTitle !== null && newTitle.trim() !== "") {
      setTasks((prev) =>
        prev.map((t, i) => (i === index ? { ...t, title: newTitle } : t))
      );
    }
  };

  return (
    <main
      className={`
      flex-1 p-5 overflow-y-auto transition-all duration-300
      ${lightMode ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-200"}
    `}
    >
      <TaskListHeader searchItem={searchTask} lightMode={lightMode} />

      {/* Complete All Checkbox */}
      <div className="flex items-center gap-2 mb-4 mt-2">
        <input
          type="checkbox"
          checked={tasks.every((t) => t.completed)}
          onChange={toggleAllTasks}
          className={`
          w-4 h-4 cursor-pointer rounded
          ${lightMode ? "accent-blue-600" : "accent-teal-400"}
        `}
        />
        <label className={lightMode ? "text-gray-700" : "text-gray-300"}>
          Complete All
        </label>
      </div>

      <ul className="flex flex-col gap-3">
        {filteredWithIndex.map(({ task, originalIndex }) => (
          <TaskItem
            key={originalIndex}
            task={task}
            index={originalIndex}
            toggleTask={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
            toggleSubtask={toggleSubtask}
            isOverdue={isOverdue(task)}
            lightMode={lightMode}
          />
        ))}
      </ul>
    </main>
  );
}
