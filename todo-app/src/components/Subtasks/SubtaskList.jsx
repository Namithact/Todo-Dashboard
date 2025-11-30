export default function SubtaskList({ subtasks, toggleSubtask, lightMode }) {
  const textColor = lightMode ? "text-black" : "text-gray-300";
  const completedColor = lightMode ? "line-through text-gray-400" : "line-through text-gray-500";
  const borderColor = lightMode ? "border-gray-500" : "border-gray-500"; // adjust if needed

  return (
    <ul className="mt-3 ml-8 flex flex-col gap-2">
      {subtasks.map((sub, i) => (
        <li key={i} className={`flex items-center gap-2 ${textColor}`}>
          <input
            type="checkbox"
            checked={sub.completed}
            onChange={() => toggleSubtask(i)}
            className={`w-4 h-4 rounded border ${borderColor}`}
          />
          <span className={sub.completed ? completedColor : ""}>
            {sub.title}
          </span>
        </li>
      ))}
    </ul>
  );
}
