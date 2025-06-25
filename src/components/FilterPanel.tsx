
import React from "react";
import { X } from "lucide-react";

const FilterPanel = ({ 
  isOpen, 
  onClose, 
  filters, 
  onFilterChange 
}: {
  isOpen: boolean;
  onClose: () => void;
  filters: any;
  onFilterChange: (key: string, value: any) => void;
}) => {
  if (!isOpen) return null;

  const priceRanges = [
    { label: "Under ₹1,000", value: "0-1000" },
    { label: "₹1,000 - ₹3,000", value: "1000-3000" },
    { label: "₹3,000 - ₹5,000", value: "3000-5000" },
    { label: "Above ₹5,000", value: "5000+" }
  ];

  const ratings = [
    { label: "4.5+ Stars", value: "4.5" },
    { label: "4.0+ Stars", value: "4.0" },
    { label: "3.5+ Stars", value: "3.5" },
    { label: "Any Rating", value: "0" }
  ];

  const availability = [
    { label: "Available Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
    { label: "Any Time", value: "any" }
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h3 className="text-xl font-bold text-charcoal">Advanced Filters</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <div>
            <h4 className="font-semibold text-charcoal mb-3">Price Range</h4>
            <div className="grid grid-cols-2 gap-2">
              {priceRanges.map(range => (
                <label key={range.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="priceRange"
                    value={range.value}
                    checked={filters.priceRange === range.value}
                    onChange={(e) => onFilterChange('priceRange', e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm text-muted">{range.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-charcoal mb-3">Minimum Rating</h4>
            <div className="grid grid-cols-2 gap-2">
              {ratings.map(rating => (
                <label key={rating.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="rating"
                    value={rating.value}
                    checked={filters.rating === rating.value}
                    onChange={(e) => onFilterChange('rating', e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm text-muted">{rating.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-charcoal mb-3">Availability</h4>
            <div className="grid grid-cols-2 gap-2">
              {availability.map(avail => (
                <label key={avail.value} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="availability"
                    value={avail.value}
                    checked={filters.availability === avail.value}
                    onChange={(e) => onFilterChange('availability', e.target.value)}
                    className="text-primary"
                  />
                  <span className="text-sm text-muted">{avail.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-charcoal mb-3">Experience</h4>
            <select
              value={filters.experience || ""}
              onChange={(e) => onFilterChange('experience', e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Any Experience</option>
              <option value="1-5">1-5 Years</option>
              <option value="5-10">5-10 Years</option>
              <option value="10-20">10-20 Years</option>
              <option value="20+">20+ Years</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 p-6 border-t">
          <button
            onClick={() => {
              onFilterChange('reset', true);
              onClose();
            }}
            className="flex-1 px-4 py-3 border border-gray-300 text-muted rounded-lg hover:bg-gray-50 transition"
          >
            Clear All
          </button>
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 bg-primary text-charcoal font-semibold rounded-lg hover:bg-accent transition"
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterPanel;
