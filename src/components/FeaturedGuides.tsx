
import React from "react";
import { Star, MapPin } from "lucide-react";

const FeaturedGuides = () => {
  const featuredGuides = [
    {
      id: 1,
      name: "Pandit Ramesh Tiwari",
      religion: "Hinduism",
      rating: 4.9,
      location: "Delhi, India",
      ceremonies: 500,
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      featured: "Top Rated"
    },
    {
      id: 2,
      name: "Imam Yusuf Ali",
      religion: "Islam",
      rating: 4.8,
      location: "New York, USA",
      ceremonies: 300,
      avatar: "https://randomuser.me/api/portraits/men/61.jpg",
      featured: "Most Booked"
    },
    {
      id: 3,
      name: "Pastor Miriam Chen",
      religion: "Christianity",
      rating: 4.9,
      location: "London, UK",
      ceremonies: 400,
      avatar: "https://randomuser.me/api/portraits/women/48.jpg",
      featured: "Highly Recommended"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-charcoal mb-12 font-playfair">
          Featured Spiritual Guides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGuides.map((guide) => (
            <div key={guide.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="relative mb-4">
                <img
                  src={guide.avatar}
                  alt={guide.name}
                  className="w-20 h-20 rounded-full mx-auto object-cover"
                />
                <div className="absolute -top-2 -right-2 bg-accent text-white text-xs px-2 py-1 rounded-full">
                  {guide.featured}
                </div>
              </div>
              <h3 className="text-xl font-bold text-charcoal mb-2 text-center">{guide.name}</h3>
              <div className="flex items-center justify-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="text-charcoal font-semibold">{guide.rating}</span>
                <span className="text-muted text-sm">({guide.ceremonies} ceremonies)</span>
              </div>
              <div className="flex items-center justify-center gap-1 text-muted mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{guide.location}</span>
              </div>
              <div className="text-center">
                <span className="inline-block bg-primary/20 text-charcoal px-3 py-1 rounded-full text-sm font-medium">
                  {guide.religion}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGuides;
