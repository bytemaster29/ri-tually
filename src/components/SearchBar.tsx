
import React, { useState } from "react";
import { Search, Filter, MapPin } from "lucide-react";

const SearchBar = ({ 
  onSearch, 
  onLocationChange, 
  onFilterToggle 
}: {
  onSearch: (query: string) => void;
  onLocationChange: (location: string) => void;
  onFilterToggle: () => void;
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mb-8">
      <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-3 bg-white rounded-xl shadow-lg p-4 border">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name, ritual, or religion..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex-1 relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted w-5 h-5" />
          <input
            type="text"
            placeholder="Location (city, country)"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              onLocationChange(e.target.value);
            }}
            className="w-full pl-10 pr-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={onFilterToggle}
            className="flex items-center gap-2 px-4 py-3 bg-secondary text-charcoal rounded-lg hover:bg-muted transition"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>
          <button
            type="submit"
            className="px-6 py-3 bg-primary text-charcoal font-semibold rounded-lg hover:bg-accent transition"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
