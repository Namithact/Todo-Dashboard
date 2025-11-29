export default function TaskInput() {
  return (
    <section>
      <label htmlFor="taskTitle" className="sr-only">Task Title</label>
      <input
        id="taskTitle"
        type="text"
        placeholder="Natural language processing..."
        className="w-full bg-[#1a1d22] text-gray-300 placeholder-gray-500 rounded-xl px-4 py-3 
                   border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
    </section>
  );
}
