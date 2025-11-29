import TaskListHeader from "./TaskListHeader";
import TaskItem from "./TaskItem";
import { useState } from "react";

export default function TaskList() {
  const [tasks, setTasks] = useState([
    {
      title: "Finish project report",
      labelColor: "bg-teal-400",
      due: "Today",
      completed: true,
      priority: "High",
    },
    {
      title: "Buy groceries",
      labelColor: "bg-orange-400",
      due: "Tomorrow",
      completed: false,
      priority: "Low",
    },
    {
      title: "Call mom",
      labelColor: "bg-blue-400",
      due: "Today",
      completed: false,
      priority: "Medium",
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  //search task
  function searchTask(e) {
    setSearchTerm(e.target.value);
    
  }
  //Derived filtered tasks
  const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  // Delete task
  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  // Edit task (example: update the title)
  const editTask = (index) => {
    const newTitle = prompt("Enter new task title:", tasks[index].title);
    if (newTitle !== null && newTitle.trim() !== "") {
      const newTasks = [...tasks];
      newTasks[index].title = newTitle;
      setTasks(newTasks);
    }
  };
  // Toggle completed
  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <main className="flex-1 p-5 bg-gray-900 text-gray-200 overflow-y-auto">
      <TaskListHeader searchItem={searchTask} />
      <ul className="flex flex-col gap-3">
        {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            toggleTask={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        ))}
      </ul>
    </main>
  );
}
