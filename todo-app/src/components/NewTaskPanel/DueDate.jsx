import CalendarPanel from "../Calendar/Calendar";

export default function DueDate() {
  return (
    <section>
      <h2 className="text-gray-400 text-sm font-medium mb-2">Due Date</h2>

      <div className="bg-[#1a1d22] rounded-xl border border-gray-700 p-4">
        <CalendarPanel />
      </div>
    </section>
  );
}
