import TaskInput from "./TaskInput";
import ActionButtons from "./ActionButtons";
import Subtasks from "./Subtasks";
import Notes from "./Notes";
import DueDate from "./DueDate";

export default function NewTaskPanel() {
  return (
    <aside
      className="w-80 bg-gray-800 border-l border-gray-800 p-5 flex flex-col gap-6 overflow-y-auto"
      aria-label="New Task Panel"
    >
      <TaskInput />
      <ActionButtons />
      <Subtasks />
      <Notes />
      <DueDate />
    </aside>
  );
}
