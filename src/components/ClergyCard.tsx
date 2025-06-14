
import { useState } from "react";
import BookingModal from "./BookingModal";

const ReligionColors = {
  Hinduism: "bg-orange-100 text-orange-700 border-orange-200",
  Islam: "bg-green-100 text-green-800 border-green-200",
  Christianity: "bg-blue-100 text-blue-700 border-blue-200",
  Buddhism: "bg-yellow-100 text-yellow-900 border-yellow-200",
  Other: "bg-neutral-100 text-neutral-700 border-neutral-200",
};

const ClergyCard = ({ clergy }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border rounded-xl bg-card shadow-md hover:shadow-lg transition duration-200 flex flex-col items-center p-7 relative">
      <div className="absolute right-4 top-4">
        <span
          className={
            `px-2 py-0.5 text-xs rounded-full border font-semibold ` +
            (ReligionColors[clergy.religion] || ReligionColors.Other)
          }
        >
          {clergy.religion}
        </span>
      </div>
      <img
        src={clergy.avatar}
        alt={clergy.name}
        className="w-20 h-20 rounded-full border mb-4 object-cover"
      />
      <h3 className="text-xl font-bold mb-2 text-primary">{clergy.name}</h3>
      <div className="text-muted-foreground text-sm mb-1">{clergy.location}</div>
      <div className="text-sm mb-2">
        Rituals:{" "}
        <span className="font-medium">
          {clergy.rituals.join(", ")}
        </span>
      </div>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-yellow-500 text-lg">★</span>
        <span className="text-base">{clergy.rating}</span>
      </div>
      <div className="text-xs text-muted-foreground mb-4">
        Languages: {clergy.languages.join(", ")}
      </div>
      <button
        className="bg-green-700 text-white font-semibold px-5 py-2 rounded-lg hover:bg-green-800 transition"
        onClick={() => setOpen(true)}
      >
        Book
      </button>
      <BookingModal open={open} onOpenChange={setOpen} clergy={clergy} />
    </div>
  );
};

export default ClergyCard;
