export default function SubtaskList({ subtasks, toggleSubtask }) {
  return (
    <ul className="mt-3 ml-8 flex flex-col gap-2">
      {subtasks.map((sub, i) => (
        <li key={i} className="flex items-center gap-2 text-gray-300">
          <input
            type="checkbox"
            checked={sub.completed}
            onChange={() => toggleSubtask(i)}
            className="w-4 h-4 rounded border border-gray-500"
          />
          <span className={`${sub.completed ? "line-through text-gray-500" : ""}`}>
            {sub.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
