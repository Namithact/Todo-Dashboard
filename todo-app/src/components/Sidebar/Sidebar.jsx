import { User, Briefcase, ShoppingBag } from "lucide-react";
import SidebarItem from "./SidebarItem";
import LabelItem from "./LabelItem";
export default function Sidebar({ lightMode }) {
  const projects = [
    { label: "Work", Icon: Briefcase },
    { label: "Personal", Icon: User },
    { label: "Shopping", Icon: ShoppingBag },
  ];

  return (
    <aside
      className={`h-full w-full p-5 flex  flex-col gap-8   ${
        lightMode ? "bg-white text-black" : "bg-gray-800 text-gray-200"
      }`}
      aria-label="Sidebar Navigation"
    >
      {/* Logo */}
      <header className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center">
          <span className="text-lg font-semibold">✓</span>
        </div>
        <h1 className="text-xl font-semibold ">Todo List</h1>
      </header>

      {/* Projects Section */}
      <nav aria-label="Projects">
        <div className="flex items-center justify-between mb-3">
          <p
            className={`text-sm uppercase tracking-wide ${
              lightMode ? "text-black" : "text-gray-400"
            }`}
          >
            Projects
          </p>
          <button
            className="text-gray-400 hover:text-gray-200"
            aria-label="Add Project"
          >
            +
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {projects.map(({ label, Icon }) => (
            <li key={label}>
              <SidebarItem lightMode={lightMode} label={label} Icon={Icon} />
            </li>
          ))}
        </ul>
      </nav>

      {/* Labels Section */}
      <section aria-labelledby="labels-heading">
        <div className="flex items-center justify-between mb-3">
          <p
            id="labels-heading"
            className={`text-sm uppercase tracking-wide ${
              lightMode ? "text-black" : "text-gray-400"
            }`}
          >
            Labels
          </p>
          <button
            className="text-gray-400 hover:text-gray-200"
            aria-label="Add Label"
          >
            +
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          <li>
            <LabelItem lightMode={lightMode} label="Work" color="bg-teal-400" />
          </li>
          <li>
            <LabelItem
              lightMode={lightMode}
              label="Personal"
              color="bg-blue-400"
            />
          </li>
          <li>
            <LabelItem
              lightMode={lightMode}
              label="Shopping"
              color="bg-orange-400"
            />
          </li>
          <li>
            <LabelItem lightMode={lightMode} label="Grant" color="bg-red-400" />
          </li>
          <li>
            <LabelItem lightMode={lightMode} label="Tags" icon="🏷" />
          </li>
        </ul>
      </section>
    </aside>
  );
}
