import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import NewTaskPanel from "./components/NewTaskPanel/NewTaskPanel";

export default function App() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] flex items-center justify-center p-6 overflow-hidden">

      <div className="grid grid-cols-[260px_1fr_360px] h-full w-full max-w-[1600px] 
                      bg-[#0f141b]/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">

        <Sidebar />
        <TaskList />
        <NewTaskPanel />

      </div>
    </div>
  );
}
