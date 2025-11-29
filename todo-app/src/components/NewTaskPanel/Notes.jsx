export default function Notes() {
  return (
    <section>
      <h2 className="text-gray-400 text-sm font-medium mb-2">Note</h2>

      <div className="bg-[#1a1d22] rounded-xl border border-gray-700 p-3 flex flex-col gap-3 relative">
        {/* Formatting toolbar */}
        <div className="flex items-center gap-4 text-gray-400">
          <button className="hover:text-gray-200 transition">B</button>
          <button className="hover:text-gray-200 transition">I</button>
          <button className="hover:text-gray-200 transition">U</button>
          <button className="hover:text-gray-200 transition">/</button>
          <button className="hover:text-gray-200 transition">●</button>
          <button className="hover:text-gray-200 transition">1.</button>
        </div>

        {/* Textarea */}
        <textarea
          placeholder="Here your note here."
          className="bg-transparent text-gray-300 placeholder-gray-500 w-full h-28 pr-10 focus:outline-none resize-none"
        ></textarea>

        {/* Add Note Button */}
        <button
          className="absolute bottom-3 right-3 w-7 h-7 flex items-center justify-center rounded-full border border-teal-500 text-teal-400 hover:bg-teal-500/10 transition"
          aria-label="Add note"
        >
          C
        </button>
      </div>
    </section>
  );
}
