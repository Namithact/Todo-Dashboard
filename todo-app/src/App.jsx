import { useState, useRef, useEffect } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import TaskList from "./components/TaskList/TaskList";
import NewTaskPanel from "./components/NewTaskPanel/NewTaskPanel";
import { Menu, Plus, X } from "lucide-react";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [newTaskOpen, setNewTaskOpen] = useState(false);

  // Initialize lightMode from sessionStorage
  const [lightMode, setLightMode] = useState(() => {
    const saved = localStorage.getItem("lightMode");
    return saved === "true"; // stored as string, convert to boolean
  });

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const sidebarRef = useRef(null);
  const newTaskRef = useRef(null);

  // Save tasks to localStorage whenever tasks state changes
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Save lightMode to sessionStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("lightMode", lightMode);
  }, [lightMode]);

  const addTask = (task) => {
    const formatted = {
      title: task.title,
      labelColor: task.labelColor,
      due: task.due,
      completed: false,
      priority: task.priority,
      subtasks: task.subtasks,
    };

    setTasks((prev) => [...prev, formatted]);
    console.log("Task added:", formatted);
  };

  const handleOverlayClick = (e) => {
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
    <div
      className={`h-screen w-full flex items-center justify-center py-12 px-4 sm:px-10 ${
        lightMode
          ? "bg-gray-100 text-black"
          : "bg-gradient-to-br from-[#0f383d] via-[#0f1d2b] to-[#0b0f14] text-gray-200"
      } relative`}
    >
      {/* Light Mode Toggle */}
      <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
        <label
          className={`text-sm hidden sm:block ${
            lightMode ? "text-black" : "text-white"
          }`}
        >
          Light Mode
        </label>
        <button
          onClick={() => setLightMode(!lightMode)}
          className={`px-3 py-1 rounded-md text-sm sm:text-base ${
            lightMode ? "bg-gray-300 text-black" : "bg-gray-700 text-white"
          }`}
        >
          {lightMode ? "On" : "Off"}
        </button>
      </div>

      {/* Mobile/Tablet Toggles */}
      <div className="absolute top-4 left-4 z-50 flex gap-2 lg:hidden">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className={`p-2 rounded-md ${
            lightMode ? "bg-gray-300 text-black" : "bg-gray-700 text-white"
          }`}
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

      {/* Main Layout */}
      <div
        className={`relative h-[90%] w-full max-w-[1200px] rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl
        ${lightMode ? "bg-white/80" : "bg-[#0f141b]/60"} flex overflow-hidden`}
      >
        {/* Sidebar */}
        <aside
          ref={sidebarRef}
          className={`absolute lg:relative top-0 left-0 h-full w-64 z-40 transform transition-transform duration-300 overflow-y-auto
            ${
              lightMode
                ? "bg-white text-black border-r border-gray-300 scrollbar-light"
                : "bg-gray-800 text-gray-200 scrollbar"
            }
            ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } lg:translate-x-0`}
        >
          <Sidebar lightMode={lightMode} />
        </aside>

        {/* Task List */}
        <div
          className={`flex-1 flex flex-col h-full  ${
            lightMode
              ? "bg-white text-black border-l border-gray-300 scrollbar-light"
              : "bg-gray-800 text-gray-200 scrollbar"
          }`}
        >
          <TaskList lightMode={lightMode} tasks={tasks} setTasks={setTasks} />
        </div>

        {/* New Task Panel */}
        <aside
          ref={newTaskRef}
          className={`absolute lg:relative top-0 right-0 h-full w-80 z-30 transform transition-transform duration-300 overflow-y-auto
            ${
              lightMode
                ? "bg-white text-black border-l border-gray-300 scrollbar-light"
                : "bg-gray-800 text-gray-200 scrollbar"
            }
            ${
              newTaskOpen ? "translate-x-0" : "translate-x-full"
            } lg:translate-x-0`}
        >
          <NewTaskPanel lightMode={lightMode} addTask={addTask} />
        </aside>

        {/* Overlay for mobile/tablet */}
        {(sidebarOpen || newTaskOpen) && (
          <div
            className="absolute inset-0 z-20 lg:hidden bg-black/10"
            onClick={handleOverlayClick}
          />
        )}
      </div>
    </div>
  );
}
