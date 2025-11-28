import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    { title: "Finish project report", labelColor: "bg-teal-400", due: "Today", completed: true, priority: "High" },
    { title: "Buy groceries", labelColor: "bg-orange-400", due: "Tomorrow", completed: false, priority: "Low" },
    { title: "Call mom", labelColor: "bg-blue-400", due: "Today", completed: false, priority: "Medium" },
  ]);

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <main className="flex-1 p-5 bg-gray-900 text-gray-200 overflow-y-auto">
      <TaskListHeader />
      <ul className="flex flex-col gap-3">
        {tasks.map((task, index) => (
          <TaskItem key={index} task={task} index={index} toggleTask={toggleTask} />
        ))}
      </ul>
    </main>
  );
}
