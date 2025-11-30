import { useState, useRef } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import NewTaskPanel from "./components/NewTaskPanel/NewTaskPanel";
import { Menu, Plus, X } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newTaskOpen, setNewTaskOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  // Refs to panels to detect outside clicks
  const sidebarRef = useRef(null);
  const newTaskRef = useRef(null);

  const handleOverlayClick = (e) => {
    // Only close if click is outside panels
    if (
      (sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)) ||
      (newTaskOpen &&
        newTaskRef.current &&
        !newTaskRef.current.contains(e.target))
    ) {
      setSidebarOpen(false);
      setNewTaskOpen(false);
    }
  };

  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] flex items-center justify-center py-12 px-10 overflow-hidden relative">
      {/* Light Mode Toggle */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <label className="text-white text-sm hidden sm:block">Light Mode</label>

        <button
          onClick={() => setLightMode(!lightMode)}
          className="px-3 py-1 bg-gray-700 text-white rounded-md text-sm sm:text-base"
        >
          {lightMode ? "On" : "Off"}
        </button>
      </div>

      {/* Toggle Buttons for Mobile/Tablet */}
      <div className="absolute top-4 left-4 z-50 flex gap-2 lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-gray-700 rounded-md text-white"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <button
          onClick={() => setNewTaskOpen(!newTaskOpen)}
          className="p-2 bg-teal-600 rounded-md text-white"
        >
          <Plus size={20} />
        </button>
      </div>

      {/* Main Grid */}
      <div
        className={`
          grid 
          grid-cols-1      /* Mobile & Tablet: single column */
          lg:grid-cols-[260px_1fr_360px] /* Desktop: 3-column */
          h-[90%] w-full max-w-[1200px] 
          bg-[#0f141b]/60 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl
          relative
          
        `}
      >
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`
            absolute lg:relative top-0 left-0 h-full z-40 bg-gray-800 
            w-64 transform transition-transform duration-300
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
            lg:translate-x-0
          `}
        >
          <Sidebar lightMode={lightMode} />
        </aside>

        {/* Task List */}
        <TaskList className="order-1" lightMode={lightMode} />

        {/* New Task Panel */}
        <aside
          ref={newTaskRef}
          className={`
            absolute lg:relative top-0 right-0 h-full z-30 bg-gray-800 
            w-80 transform transition-transform duration-300
            ${newTaskOpen ? "translate-x-0" : "translate-x-full"}
            lg:translate-x-0
          `}
        >
          <NewTaskPanel lightMode={lightMode} />
        </aside>

        {/* Overlay for mobile/tablet */}
        {(sidebarOpen || newTaskOpen) && (
          <div
            className="absolute inset-0 z-20 lg:hidden"
            style={{ background: "transparent" }} // no dim effect
            onClick={handleOverlayClick}
          />
        )}
      </div>
    </div>
  );
}
