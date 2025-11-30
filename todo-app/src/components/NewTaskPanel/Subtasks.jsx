export default function Subtasks({ lightMode }) {
  return (
    <section>
      <h2
        className={`${
          lightMode ? "text-black" : "text-gray-400 "
        }text-sm font-medium mb-2`}
      >
        Subtasks
      </h2>

      <div className="flex flex-col gap-3">
        <label
          className={`flex items-center gap-3 ${
            lightMode ? "text-black" : "text-gray-300 "
          }`}
        >
          <input
            type="checkbox"
            checked
            readOnly
            className="w-4 h-4 rounded border-gray-600 bg-teal-600"
          />
          Add a new subtask
        </label>

         <label
          className={`flex items-center gap-3 ${
            lightMode ? "text-black" : "text-gray-300 "
          }`}
        >
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-600 bg-[#1c1f24]"
          />
          Add thrɘ subtask
        </label>

         <label
          className={`flex items-center gap-3 ${
            lightMode ? "text-black" : "text-gray-300 "
          }`}
        >
          <input
            type="checkbox"
            className="w-4 h-4 rounded border-gray-600 bg-[#1c1f24]"
          />
          Add a comment note
        </label>
      </div>
    </section>
  );
}
