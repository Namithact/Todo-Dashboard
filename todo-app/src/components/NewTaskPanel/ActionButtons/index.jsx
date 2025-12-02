import { useState, useRef } from "react";
import LabelDropdown from "./LabelDropdown";
import PriorityDropdown from "./PriorityDropdown";

import AddSubtaskButton from "./AddSubtaskButton";
import SubtaskInput from "./SubtaskInput";
import AddTaskButton from "./AddTaskButton";

export default function ActionButtons({ task, setTask, onAddTask, lightMode }) {
  const [showSubtaskInput, setShowSubtaskInput] = useState(false);
  const [subtaskText, setSubtaskText] = useState("");

  const labelDropdownRef = useRef(null);
  const priorityDropdownRef = useRef(null);

  const handleAddSubtask = () => {
    if (!subtaskText.trim()) return;

    setTask((prev) => ({
      ...prev,
      subtasks: [...prev.subtasks, { title: subtaskText, completed: false }],
    }));

    setSubtaskText("");
  };

  const handleAddTask = () => {
    onAddTask();

    // Reset fields
    setSubtaskText("");
    setShowSubtaskInput(false);

    setTask((prev) => ({
      ...prev,
      labelColor: "",
      priority: "",
    }));

    labelDropdownRef.current?.reset();
    priorityDropdownRef.current?.reset();
  };

  return (
    <section className="w-full flex flex-col gap-4">

      {/* TOP BUTTONS ROW */}
      <div className="flex gap-2">
        <div className="flex-1 min-w-0">
          <LabelDropdown
            ref={labelDropdownRef}
            lightMode={lightMode}
            onSelect={(label) =>
              setTask((prev) => ({ ...prev, labelColor: label.color }))
            }
          />
        </div>

        <div className="flex-1 min-w-0">
          <PriorityDropdown
            ref={priorityDropdownRef}
            lightMode={lightMode}
            onSelect={(priority) =>
              setTask((prev) => ({ ...prev, priority }))
            }
          />
        </div>

        <AddSubtaskButton
          lightMode={lightMode}
          onClick={() => setShowSubtaskInput(true)}
        />
      </div>

      {/* SUBTASK FIELD */}
      {showSubtaskInput && (
        <SubtaskInput
          lightMode={lightMode}
          subtaskText={subtaskText}
          setSubtaskText={setSubtaskText}
          onAddSubtask={handleAddSubtask}
          subtasks={task.subtasks}
        />
      )}

      {/* ADD TASK BUTTON */}
      <AddTaskButton
        lightMode={lightMode}
        taskTitle={task.title}
        onAddTask={handleAddTask}
      />
    </section>
  );
}
