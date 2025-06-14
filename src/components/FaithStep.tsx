
import React from "react";
import { Book } from "lucide-react";

const RELIGIONS = [
  { key: "Hinduism", label: "Hindu", color: "text-orange-700" },
  { key: "Islam", label: "Muslim", color: "text-green-700" },
  { key: "Christianity", label: "Christian", color: "text-blue-700" },
  { key: "Sikhism", label: "Sikh", color: "text-yellow-800" },
  { key: "Jainism", label: "Jain", color: "text-pink-700" },
  { key: "Buddhism", label: "Buddhist", color: "text-yellow-700" },
  { key: "Other", label: "Other", color: "text-neutral-700" },
];

const FaithStep = ({ value, onChange }: { value: string; onChange: (religion: string) => void }) => (
  <section className="flex flex-col items-center gap-7 py-8">
    <Book className="w-10 h-10 text-primary mb-2" />
    <h2 className="text-3xl font-bold font-playfair">Choose your Faith</h2>
    <ul className="flex flex-wrap justify-center gap-4 max-w-2xl">
      {RELIGIONS.map(r =>
        <li key={r.key}>
          <button
            className={`px-6 py-3 rounded-lg border-2 bg-white shadow font-semibold text-lg transition hover:bg-green-50 focus:ring-2 focus:ring-primary ${r.color} ${value === r.key ? "border-primary ring-2" : "border-muted"}`}
            onClick={() => onChange(r.key)}
          >
            {r.label}
          </button>
        </li>
      )}
    </ul>
  </section>
);

export default FaithStep;
