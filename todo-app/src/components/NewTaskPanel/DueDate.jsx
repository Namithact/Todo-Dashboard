import CalendarPanel from "../Calendar/Calendar";

export default function DueDate({lightMode}) {
  return (
    <section>
      <h2 className={`gap-3 ${
            lightMode ? "text-black" : "text-gray-300 "
          } text-sm font-medium mb-2`}>Due Date</h2>

      <div className={`${lightMode?"bg-white":"bg-[#1a1d22]"}  rounded-xl border border-gray-700 p-4`}>
        <CalendarPanel lightMode={lightMode}/>
      </div>
    </section>
  );
}
