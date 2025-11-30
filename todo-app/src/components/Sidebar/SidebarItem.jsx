export default function SidebarItem({ lightMode, label, Icon }) {
  return (
    <div
      className="flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer
                 hover:bg-white/10 transition-colors group"
      role="button"
      tabIndex={0}
      aria-label={label}
    >
      <div
        className={`w-5 h-5 rounded-md bg-white/10 flex items-center justify-center 
                      ${
                        lightMode
                          ? "text-black group-hover:text-gray-400"
                          : "text-gray-400 group-hover:text-white"
                      }`}
      >
        {Icon && <Icon size={16} aria-hidden="true" />}
      </div>
      <span
        className={`${
          lightMode
            ? "text-black group-hover:text-gray-400"
            : "text-gray-200 group-hover:text-white"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
