
import React from "react";

const RITUALS: Record<string, string[]> = {
  Hinduism: ["Puja", "Wedding", "Havan", "Naming"],
  Islam: ["Nikkah", "Funeral", "Janaza", "Aqiqah", "Naming"],
  Christianity: ["Wedding", "Baptism", "Blessing", "Funeral"],
  Sikhism: ["Marriage", "Naam Karan", "Antam Sanskar", "Ardas"],
  Jainism: ["Puja", "Solemnization"],
  Buddhism: ["Blessing", "Funeral"],
  Other: ["Wedding", "Naming", "Blessing", "Other"],
};

const RitualStep = ({
  religion,
  value,
  onChange,
}: {
  religion: string;
  value: string;
  onChange: (ritual: string) => void;
}) => {
  const rituals = RITUALS[religion] || RITUALS["Other"];
  return (
    <section className="flex flex-col items-center gap-7 py-7">
      <h2 className="text-2xl font-bold font-playfair">What do you want to book?</h2>
      <ul className="flex flex-wrap justify-center gap-3 max-w-2xl">
        {rituals.map(r => (
          <li key={r}>
            <button
              className={`px-5 py-2 rounded-lg border-2 bg-white shadow font-medium transition hover:bg-green-50 focus:ring-2 focus:ring-primary ${value === r ? "border-primary ring-2 bg-green-100" : "border-muted"}`}
              onClick={() => onChange(r)}
            >
              {r}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default RitualStep;
