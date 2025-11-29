import { Plus, Edit3, Link } from "lucide-react";

export default function ActionButtons() {
  return (
    <section className="flex items-center gap-3">
      <button className="px-4 py-2 rounded-xl bg-teal-600 text-gray-900 font-semibold hover:bg-teal-500 transition">
        + Sea
      </button>

      <button className="p-2 rounded-xl bg-[#1d2127] border border-gray-700 hover:bg-gray-700 transition">
        <Edit3 size={16} className="text-gray-300" />
      </button>

      <button className="p-2 rounded-xl bg-[#1d2127] border border-gray-700 hover:bg-gray-700 transition">
        <Link size={16} className="text-gray-300" />
      </button>

      <button className="p-2 rounded-xl bg-[#1d2127] border border-gray-700 hover:bg-gray-700 transition">
        <Plus size={16} className="text-gray-300" />
      </button>
    </section>
  );
}
