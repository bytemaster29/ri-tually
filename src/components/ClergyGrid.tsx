import ClergyCard from "./ClergyCard";
import { useState } from "react";

// Demo data for version 1
const clergyList = [
  {
    id: 1,
    name: "Pandit Ramesh Tiwari",
    religion: "Hinduism",
    rituals: ["Puja", "Wedding", "Blessing"],
    location: "Delhi, India",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    languages: ["Hindi", "Sanskrit", "English"],
    price: 3500,
  },
  {
    id: 2,
    name: "Imam Yusuf Ali",
    religion: "Islam",
    rituals: ["Wedding", "Funeral", "Naming"],
    location: "New York, USA",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    languages: ["Arabic", "English"],
    price: 250,
  },
  {
    id: 3,
    name: "Pastor Miriam Chen",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism"],
    location: "London, UK",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/48.jpg",
    languages: ["English", "Mandarin"],
    price: 300,
  },
  {
    id: 4,
    name: "Ven. Tenzin Dawa",
    religion: "Buddhism",
    rituals: ["Blessing", "Funeral"],
    location: "Kathmandu, Nepal",
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/88.jpg",
    languages: ["Tibetan", "Nepali", "English"],
    price: 200,
  },
  {
    id: 5,
    name: "Father Joseph O'Connell",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism", "Funeral"],
    location: "Boston, USA",
    rating: 4.95,
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
    languages: ["English", "Spanish"],
    price: 275,
  },
  {
    id: 6,
    name: "Pandit Lakshmi Devi",
    religion: "Hinduism",
    rituals: ["Puja", "Wedding"],
    location: "Mumbai, India",
    rating: 4.85,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    languages: ["Hindi", "Marathi"],
    price: 4800,
  },
  // Add more later!
];

function filterClergy({ religion, ritual, language }) {
  return clergyList.filter(cg => {
    const matchesReligion = !religion || cg.religion === religion;
    const matchesRitual = !ritual || cg.rituals.includes(ritual);
    // Filtering by language (optional)
    const matchesLanguage = !language || cg.languages.includes(language);
    return matchesReligion && matchesRitual && matchesLanguage;
  });
}

const ClergyGrid = ({
  religion,
  ritual,
  language,
}: {
  religion: string;
  ritual: string;
  language: string;
}) => {
  const list = filterClergy({ religion, ritual, language });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-primary">Available Guides</h2>
      <div className="mb-3 text-muted-foreground text-sm font-medium">
        <span>Starts from <span className="font-bold text-green-700">₹999</span></span>
      </div>
      {list.length === 0 ? (
        <div className="p-6 text-center text-muted-foreground rounded-lg border bg-muted/40">
          No matches. Try adjusting your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map(cg => (
            <ClergyCard key={cg.id} clergy={cg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClergyGrid;
