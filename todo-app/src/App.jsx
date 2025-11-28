import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import NewTaskPanel from "./components/NewTaskPanel/NewTaskPanel";

export default function App() {
  return (
    <div className="grid grid-cols-[260px_1fr_350px] h-screen overflow-hidden">
      <Sidebar />
      <TaskList />
      <NewTaskPanel />
    </div>
  );
}
