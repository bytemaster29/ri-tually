
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Star, MapPin, Clock, Award, Users, Calendar } from "lucide-react";
import BookingModal from "./BookingModal";

const GuideDetailsModal = ({ open, onOpenChange, clergy }) => {
  const [showBooking, setShowBooking] = useState(false);

  if (!clergy) return null;

  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Wonderful experience, very professional and caring.", date: "2 weeks ago" },
    { name: "Raj P.", rating: 5, text: "Perfect ceremony, highly recommended!", date: "1 month ago" },
    { name: "Emily K.", rating: 4, text: "Great service, will book again.", date: "2 months ago" }
  ];

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-charcoal">{clergy.name}</DialogTitle>
          </DialogHeader>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1">
              <img
                src={clergy.avatar}
                alt={clergy.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold">{clergy.rating}</span>
                  <span className="text-muted">(127 reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <MapPin className="w-5 h-5" />
                  <span>{clergy.location}</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Clock className="w-5 h-5" />
                  <span>15+ years experience</span>
                </div>
                <div className="flex items-center gap-2 text-muted">
                  <Users className="w-5 h-5" />
                  <span>500+ ceremonies</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">About</h3>
                <p className="text-muted leading-relaxed">
                  {clergy.name} is a dedicated spiritual guide with over 15 years of experience in conducting 
                  traditional ceremonies. Known for their compassionate approach and deep knowledge of rituals, 
                  they have helped hundreds of families celebrate their most important moments with grace and dignity.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Specializations</h3>
                <div className="flex flex-wrap gap-2">
                  {clergy.rituals.map((ritual) => (
                    <span
                      key={ritual}
                      className="px-3 py-1 bg-primary/20 text-charcoal rounded-full text-sm font-medium"
                    >
                      {ritual}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {clergy.languages.map((lang) => (
                    <span
                      key={lang}
                      className="px-3 py-1 bg-secondary text-muted rounded-full text-sm"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-charcoal mb-3">Recent Reviews</h3>
                <div className="space-y-3">
                  {reviews.map((review, index) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-4">
                      <div className="flex justify-between items-start mb-1">
                        <span className="font-medium text-charcoal">{review.name}</span>
                        <div className="flex items-center gap-1">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          <span className="text-sm text-muted ml-1">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-muted text-sm">{review.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-charcoal">₹{clergy.price}</span>
                    <span className="text-muted ml-2">per ceremony</span>
                  </div>
                  <button
                    onClick={() => setShowBooking(true)}
                    className="px-6 py-3 bg-primary text-charcoal font-semibold rounded-lg hover:bg-accent transition"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <BookingModal 
        open={showBooking} 
        onOpenChange={setShowBooking} 
        clergy={clergy} 
      />
    </>
  );
};

export default GuideDetailsModal;
