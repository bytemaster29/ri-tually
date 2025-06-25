import { useState } from "react";
import BookingModal from "./BookingModal";
import GuideDetailsModal from "./GuideDetailsModal";
import { Mail, MessageCircle, Eye } from "lucide-react";

const ReligionColors = {
  Hinduism: "bg-orange-100 text-orange-700 border-orange-200",
  Islam: "bg-green-100 text-green-800 border-green-200",
  Christianity: "bg-blue-100 text-blue-700 border-blue-200",
  Buddhism: "bg-yellow-100 text-yellow-900 border-yellow-200",
  Other: "bg-neutral-100 text-neutral-700 border-neutral-200",
};

const ClergyCard = ({ clergy }) => {
  const [showBooking, setShowBooking] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <div className="border rounded-xl bg-white shadow-md hover:shadow-xl hover:scale-[1.025] transition-transform duration-200 flex flex-col items-center p-7 relative group">
        <div className="absolute right-4 top-4 flex flex-col items-end gap-2">
          <span
            className={
              `px-2 py-0.5 text-xs rounded-full border font-semibold flex items-center gap-1 ` +
              (ReligionColors[clergy.religion] || ReligionColors.Other)
            }
          >
            {clergy.religion}
            <span className="ml-1 inline-block bg-green-700 text-white rounded px-1.5 py-0.5 text-[10px] font-bold align-middle">✓ Verified</span>
          </span>
          {clergy.price && (
            <span className="bg-green-100 border border-green-200 text-green-700 px-2 py-0.5 text-xs rounded font-bold mt-1">
              ₹{clergy.price}
            </span>
          )}
        </div>
        <img
          src={clergy.avatar}
          alt={clergy.name}
          className="w-20 h-20 rounded-full border mb-4 object-cover group-hover:ring-2 group-hover:ring-primary transition"
        />
        <h3 className="text-xl font-bold mb-2 text-charcoal font-playfair text-center">{clergy.name}</h3>
        <div className="text-muted text-sm mb-1">{clergy.location}</div>
        <div className="flex flex-wrap justify-center gap-2 mb-2">
          {clergy.languages.map((lang) => (
            <span
              key={lang}
              className="bg-secondary text-muted px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {lang}
            </span>
          ))}
        </div>
        <div className="text-sm mb-2 text-center">
          Rituals:{" "}
          <span className="font-medium">
            {clergy.rituals.join(", ")}
          </span>
        </div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500 text-lg">★</span>
          <span className="text-base font-semibold">{clergy.rating}</span>
          <span className="text-muted text-sm">(127 reviews)</span>
        </div>
        <div className="flex gap-2 mb-4">
          <button
            title="View Details"
            onClick={() => setShowDetails(true)}
            className="bg-secondary border text-charcoal rounded-full p-2 shadow hover:bg-primary/20 transition"
          >
            <Eye className="w-4 h-4" />
          </button>
          <button
            title="Contact"
            className="bg-secondary border text-charcoal rounded-full p-2 shadow hover:bg-green-100 transition"
          >
            <Mail className="w-4 h-4" />
          </button>
          <button
            title="Chat"
            className="bg-secondary border text-charcoal rounded-full p-2 shadow hover:bg-blue-100 transition"
          >
            <MessageCircle className="w-4 h-4" />
          </button>
        </div>
        <button
          className="bg-primary text-charcoal font-semibold px-5 py-2 rounded-lg hover:bg-accent transition"
          onClick={() => setShowBooking(true)}
        >
          Book Now
        </button>
      </div>
      
      <BookingModal open={showBooking} onOpenChange={setShowBooking} clergy={clergy} />
      <GuideDetailsModal open={showDetails} onOpenChange={setShowDetails} clergy={clergy} />
    </>
  );
};

export default ClergyCard;
