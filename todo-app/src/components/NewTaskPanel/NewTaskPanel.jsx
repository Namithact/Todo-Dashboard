import TaskInput from "./TaskInput";
import ActionButtons from "./ActionButtons";
import Subtasks from "./Subtasks";
import Notes from "./Notes";
import DueDate from "./DueDate";

export default function NewTaskPanel({lightMode}) {
  return (
    <aside
      className={`w-80 ${
        lightMode ? "bg-white text-black" : " bg-gray-800 text-gray-200"
      } border-l border-gray-800 p-5 flex flex-col gap-6 overflow-y-auto`}
      aria-label="New Task Panel"
    >
      <TaskInput lightMode={lightMode}/>
      <ActionButtons lightMode={lightMode}/>
      <Subtasks lightMode={lightMode}/>
      <Notes lightMode={lightMode} />
      <DueDate lightMode={lightMode}/>
    </aside>
  );
}
