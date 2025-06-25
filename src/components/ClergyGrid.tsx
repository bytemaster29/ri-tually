import ClergyCard from "./ClergyCard";
import { useState, useMemo } from "react";

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
  {
    id: 7,
    name: "Rabbi Sarah Goldman",
    religion: "Judaism",
    rituals: ["Wedding", "Bar Mitzvah", "Funeral"],
    location: "Tel Aviv, Israel",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
    languages: ["Hebrew", "English"],
    price: 450,
  },
  {
    id: 8,
    name: "Sheikh Ahmed Hassan",
    religion: "Islam",
    rituals: ["Wedding", "Naming", "Blessing"],
    location: "Dubai, UAE",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    languages: ["Arabic", "English", "Urdu"],
    price: 400,
  },
  {
    id: 9,
    name: "Pastor Maria Santos",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism", "Blessing"],
    location: "São Paulo, Brazil",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/34.jpg",
    languages: ["Portuguese", "Spanish", "English"],
    price: 180,
  },
  {
    id: 10,
    name: "Lama Pemba Sherpa",
    religion: "Buddhism",
    rituals: ["Blessing", "Funeral", "Naming"],
    location: "Dharamshala, India",
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    languages: ["Tibetan", "Hindi", "English"],
    price: 220,
  },
  {
    id: 11,
    name: "Pandit Arun Sharma",
    religion: "Hinduism",
    rituals: ["Puja", "Wedding", "Blessing", "Naming"],
    location: "Varanasi, India",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    languages: ["Hindi", "Sanskrit"],
    price: 2800,
  },
  {
    id: 12,
    name: "Pastor David Kim",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism"],
    location: "Seoul, South Korea",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/29.jpg",
    languages: ["Korean", "English"],
    price: 320,
  },
  {
    id: 13,
    name: "Imam Abdullah Rahman",
    religion: "Islam",
    rituals: ["Wedding", "Funeral", "Naming", "Blessing"],
    location: "Istanbul, Turkey",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/men/67.jpg",
    languages: ["Turkish", "Arabic", "English"],
    price: 280,
  },
  {
    id: 14,
    name: "Sister Catherine Murphy",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism", "Blessing"],
    location: "Dublin, Ireland",
    rating: 4.85,
    avatar: "https://randomuser.me/api/portraits/women/71.jpg",
    languages: ["English", "Gaelic"],
    price: 290,
  },
  {
    id: 15,
    name: "Swami Ananda Saraswati",
    religion: "Hinduism",
    rituals: ["Puja", "Blessing", "Naming"],
    location: "Rishikesh, India",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/82.jpg",
    languages: ["Hindi", "Sanskrit", "English"],
    price: 1800,
  },
  {
    id: 16,
    name: "Rabbi Michael Cohen",
    religion: "Judaism",
    rituals: ["Wedding", "Bar Mitzvah", "Blessing"],
    location: "New York, USA",
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/men/39.jpg",
    languages: ["Hebrew", "English", "Yiddish"],
    price: 500,
  },
  {
    id: 17,
    name: "Zen Master Kenji Yamamoto",
    religion: "Buddhism",
    rituals: ["Blessing", "Funeral"],
    location: "Kyoto, Japan",
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/men/91.jpg",
    languages: ["Japanese", "English"],
    price: 380,
  },
  {
    id: 18,
    name: "Pastor Grace Okafor",
    religion: "Christianity",
    rituals: ["Wedding", "Baptism", "Blessing", "Naming"],
    location: "Lagos, Nigeria",
    rating: 4.7,
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    languages: ["English", "Yoruba", "Igbo"],
    price: 150,
  }
];

function filterClergy({ religion, ritual, language, searchQuery, locationFilter, filters }) {
  return clergyList.filter(cg => {
    const matchesReligion = !religion || cg.religion === religion;
    const matchesRitual = !ritual || cg.rituals.includes(ritual);
    const matchesLanguage = !language || cg.languages.includes(language);
    
    // Search query matching
    const matchesSearch = !searchQuery || 
      cg.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cg.religion.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cg.rituals.some(r => r.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Location filtering
    const matchesLocation = !locationFilter || 
      cg.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    // Price range filtering
    const matchesPriceRange = !filters.priceRange || (() => {
      const price = cg.price;
      const [min, max] = filters.priceRange.split('-').map(p => p.replace('+', ''));
      if (max) {
        return price >= parseInt(min) && price <= parseInt(max);
      } else {
        return price >= parseInt(min);
      }
    })();
    
    // Rating filtering
    const matchesRating = !filters.rating || cg.rating >= parseFloat(filters.rating);
    
    return matchesReligion && matchesRitual && matchesLanguage && 
           matchesSearch && matchesLocation && matchesPriceRange && matchesRating;
  });
}

const ClergyGrid = ({
  religion,
  ritual,
  language,
  searchQuery = "",
  locationFilter = "",
  filters = {}
}: {
  religion: string;
  ritual: string;
  language: string;
  searchQuery?: string;
  locationFilter?: string;
  filters?: any;
}) => {
  const [sortBy, setSortBy] = useState("rating");
  
  const filteredList = useMemo(() => {
    const filtered = filterClergy({ 
      religion, 
      ritual, 
      language, 
      searchQuery, 
      locationFilter, 
      filters 
    });
    
    // Sort results
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return b.rating - a.rating;
      }
    });
  }, [religion, ritual, language, searchQuery, locationFilter, filters, sortBy]);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-charcoal">Available Guides</h2>
          <div className="text-muted text-sm font-medium">
            <span>{filteredList.length} guides found</span>
            <span className="ml-4">Starts from <span className="font-bold text-green-700">₹999</span></span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-muted">Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name A-Z</option>
          </select>
        </div>
      </div>
      
      {filteredList.length === 0 ? (
        <div className="p-6 text-center text-muted rounded-lg border bg-white/50">
          <p className="text-lg mb-2">No matches found</p>
          <p className="text-sm">Try adjusting your search criteria or filters</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredList.map(cg => (
            <ClergyCard key={cg.id} clergy={cg} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ClergyGrid;
