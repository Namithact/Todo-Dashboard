import CalendarPanel from "../Calendar/Calendar";

export default function DueDate({ lightMode, selectedDate, onSelect }) {
  return (
    <section>
      <h2 className={`text-sm font-medium mb-2 ${lightMode ? "text-black" : "text-gray-300"}`}>
        Due Date
      </h2>
      <div className={`${lightMode ? "bg-white" : "bg-[#1a1d22]"} rounded-xl border border-gray-700 p-4`}>
        <CalendarPanel lightMode={lightMode} selectedDate={selectedDate} onSelect={onSelect} />
      </div>
    </section>
  );
}
