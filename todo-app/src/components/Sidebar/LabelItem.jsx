export default function LabelItem({ lightMode, label, color, icon }) {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer
                 hover:bg-white/10 transition-colors"
      role="button"
      tabIndex={0}
      aria-label={label}
    >
      {icon ? (
        <div className="w-3 h-3 flex items-center justify-center text-gray-400 text-sm">
          {icon}
        </div>
      ) : (
        <span
          className={`w-3 h-3 rounded-full ${color}`}
          aria-hidden="true"
        ></span>
      )}
      <span className={` ${lightMode ? "text-black" : "text-gray-200"}`}>
        {label}
      </span>
    </div>
  );
}
