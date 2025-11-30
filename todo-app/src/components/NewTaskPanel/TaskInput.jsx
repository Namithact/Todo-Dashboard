export default function TaskInput({lightMode}) {
  return (
    <section>
      <label htmlFor="taskTitle" className="sr-only">Task Title</label>
      <input
        id="taskTitle"
        type="text"
        placeholder="Enter the task Name..."
        className={`w-full  ${lightMode ? "bg-white text-black placeholder-black" : "bg-[#1a1d22] text-gray-300 placeholder-gray-500"}  rounded-xl px-4 py-3 
                   border border-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-500`}
      />
    </section>
  );
}
