
import React from "react";

const TESTIMONIALS = [
  {
    name: "Ayesha (Mumbai)",
    text: "Ritually made it so easy to find a trusted Imam for my son's Nikkah. The platform was transparent and quick.",
    faith: "Islam",
  },
  {
    name: "Sarah (Delhi)",
    text: "We booked a Pandit for Grah Pravesh. The entire process was smooth and I felt very secure about the guide’s credentials.",
    faith: "Hinduism",
  },
  {
    name: "Mark (Chennai)",
    text: "As a Christian in India, it’s hard to know whom to trust. With Ritually, I found a Pastor for my baby’s Baptism effortlessly.",
    faith: "Christianity",
  },
];
const COLORS: Record<string, string> = {
  Hinduism: "bg-orange-50 text-orange-700",
  Islam: "bg-green-50 text-green-700",
  Christianity: "bg-blue-50 text-blue-700",
};

const Testimonials = () => (
  <section className="mt-16 px-3 max-w-3xl mx-auto">
    <h2 className="font-playfair text-2xl font-bold text-center mb-7">What People Say</h2>
    <ul className="flex flex-col md:flex-row gap-4 justify-center">
      {TESTIMONIALS.map(t => (
        <li
          key={t.name}
          className={`rounded-xl border shadow px-6 py-5 flex-1 ${COLORS[t.faith] || "bg-muted"}`}
        >
          <p className="text-lg font-medium mb-3">“{t.text}”</p>
          <span className="block font-semibold text-sm">{t.name}</span>
        </li>
      ))}
    </ul>
  </section>
);
export default Testimonials;
