import { useState } from "react";
import TaskInput from "./TaskInput";
import ActionButtons from "./ActionButtons";
import Subtasks from "./Subtasks";
import Notes from "./Notes";
import DueDate from "./DueDate";

export default function NewTaskPanel({ lightMode, addTask }) {
  const initialTaskState = {
    title: "",
    labelColor: "",
    priority: "",
    due: "",
    subtasks: [],
    completed: false,
  };

  const [task, setTask] = useState(initialTaskState);

  const handleAddTask = () => {
    if (!task.title.trim()) return;

    addTask(task);             // send to parent
    setTask(initialTaskState); // reset fields including due date, label, priority, subtasks
  };

  return (
    <aside
      className={`w-80 h-full flex-shrink-0 ${
        lightMode ? "bg-white text-black" : "bg-gray-800 text-gray-200"
      } border-l border-gray-800 p-5 flex flex-col gap-6 overflow-y-auto`}
    >

      {/* TITLE INPUT */}
      <TaskInput
        lightMode={lightMode}
        value={task.title}
        onChange={(value) =>
          setTask((prev) => ({ ...prev, title: value }))
        }
      />

      {/* LABEL, PRIORITY, SUBTASK BUTTONS */}
      <ActionButtons
        lightMode={lightMode}
        task={task}
        setTask={setTask}
        onAddTask={handleAddTask}
      />

      {/* DUE DATE PICKER */}
      <DueDate
        lightMode={lightMode}
        selectedDate={task.due}
        onSelect={(date) =>
          setTask((prev) => ({ ...prev, due: date }))
        }
      />

      {/* SUBTASKS SECTION */}
      <Subtasks
        lightMode={lightMode}
        subtasks={task.subtasks}
        setSubtasks={(list) =>
          setTask((prev) => ({ ...prev, subtasks: list }))
        }
      />

      {/* NOTES FIELD */}
      <Notes lightMode={lightMode} />
    </aside>
  );
}
