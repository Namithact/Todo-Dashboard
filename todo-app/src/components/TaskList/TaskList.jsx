import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TaskList({ lightMode, tasks, setTasks }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Search handler
  function searchTask(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  // Filtered list
  const filteredWithIndex = tasks
    .map((task, originalIndex) => ({ task, originalIndex }))
    .filter(({ task }) => task.title.toLowerCase().includes(searchTerm || ""));

  // Check if task is overdue
  const isOverdue = (task) => {
    if (!task.due) return false;
    const today = new Date().setHours(0, 0, 0, 0);
    const dueDate = new Date(task.due).setHours(0, 0, 0, 0);
    return dueDate < today && !task.completed;
  };

  // Toggle main task
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

  // Toggle subtask
  const toggleSubtask = (taskIndex, subIndex) => {
    setTasks((prev) =>
      prev.map((t, i) => {
        if (i !== taskIndex) return t;
        const updatedSubtasks = t.subtasks.map((s, si) =>
          si === subIndex ? { ...s, completed: !s.completed } : s
        );
        const allDone = updatedSubtasks.every((s) => s.completed);
        return { ...t, subtasks: updatedSubtasks, completed: allDone };
      })
    );
  };

  // Delete task
  const deleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // Complete all tasks
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

  // Edit task
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
    flex-1 flex flex-col p-5 overflow-y-auto transition-all duration-300
    ${lightMode ? "bg-gray-100 text-gray-800" : "bg-gray-900 text-gray-200"}
  `}
    >
      <TaskListHeader searchItem={searchTask} lightMode={lightMode} />

      {/* Complete All Checkbox */}
      {tasks.length > 0 && (
        <div className="flex items-center gap-2 mb-4 mt-2">
          <input
            type="checkbox"
            checked={tasks.every((t) => t.completed)}
            onChange={toggleAllTasks}
            className={`w-4 h-4 cursor-pointer rounded ${
              lightMode ? "accent-blue-600" : "accent-teal-400"
            }`}
          />
          <label className={lightMode ? "text-gray-700" : "text-gray-300"}>
            Complete All
          </label>
        </div>
      )}

      {/* Task List or Fallback */}
      {filteredWithIndex.length > 0 ? (
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
      ) : (
        <div
          className={`flex flex-col items-center justify-center py-20 text-center gap-2 ${
            lightMode ? "text-gray-500" : "text-gray-400"
          }`}
        >
          <span className="text-4xl">📝</span>
          <p className="text-lg font-semibold">No pending tasks</p>
          <p className="text-sm">
            You have completed all tasks or no task has been added yet.
          </p>
        </div>
      )}
    </main>
  );
}
