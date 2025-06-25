
import Header from "@/components/Header";
import ClergyGrid from "@/components/ClergyGrid";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { useState } from "react";
import FaithStep from "@/components/FaithStep";
import RitualStep from "@/components/RitualStep";
import Testimonials from "@/components/Testimonials";
import SearchBar from "@/components/SearchBar";
import FilterPanel from "@/components/FilterPanel";
import TrustBadges from "@/components/TrustBadges";
import FeaturedGuides from "@/components/FeaturedGuides";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  // Stepper state
  const [step, setStep] = useState<0|1|2>(0);
  const [religion, setReligion] = useState("");
  const [ritual, setRitual] = useState("");
  const [language, setLanguage] = useState("English");
  
  // Search and filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: "",
    rating: "",
    availability: "",
    experience: ""
  });

  // Forward navigation
  function handleFaithSelect(f: string) {
    setReligion(f);
    setStep(1);
  }
  function handleRitualSelect(r: string) {
    setRitual(r);
    setStep(2);
  }
  function handleChangeLanguage(l: string) {
    setLanguage(l);
  }
  function handleBack() {
    setStep((prev) => {
      if (prev === 2) return 1;
      if (prev === 1) return 0;
      return 0;
    });
  }
  // Reset booking flow
  function handleStartFlow() {
    setStep(0);
    setReligion("");
    setRitual("");
  }

  // Search and filter handlers
  function handleSearch(query: string) {
    setSearchQuery(query);
    setStep(2); // Jump to results
  }

  function handleLocationChange(location: string) {
    setLocationFilter(location);
  }

  function handleFilterToggle() {
    setShowFilters(!showFilters);
  }

  function handleFilterChange(key: string, value: any) {
    if (key === 'reset') {
      setFilters({
        priceRange: "",
        rating: "",
        availability: "",
        experience: ""
      });
    } else {
      setFilters(prev => ({ ...prev, [key]: value }));
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-soft-white via-background to-primary/5">
      <Header language={language} onLanguageChange={handleChangeLanguage} />
      
      {/* Hero Section */}
      <section className="relative flex flex-col items-center bg-gradient-to-r from-primary/10 via-background to-primary/20 px-0 py-0 md:px-8 md:py-10 border-b min-h-[340px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?auto=format&fit=crop&w=1500&q=80"
            alt=""
            className="object-cover w-full h-full opacity-60"
            style={{ filter: "blur(1.5px) brightness(0.9)" }}
            draggable={false}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-transparent to-primary/20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-4 px-8 py-12 md:py-20 items-center">
          <h1 className="font-playfair text-4xl md:text-5xl font-extrabold tracking-tight text-charcoal mb-2 flex items-center gap-4 drop-shadow-md text-center">
            <span>Find &amp; Book Trusted Ritual Guides</span>
          </h1>
          <p className="text-lg md:text-2xl text-muted max-w-3xl text-center">
            Seamlessly connect with verified priests, imams, pastors, monks, and guides for your spiritual and life rituals, from weddings and baptisms to pujas and blessings.
          </p>
          <div className="flex gap-4 mt-6 flex-wrap justify-center">
            <button
              className="bg-primary hover:bg-accent text-charcoal font-bold px-6 py-3 rounded-lg shadow-md transition hover:scale-105"
              onClick={handleStartFlow}
            >
              Start Booking
            </button>
            <button
              className="bg-secondary text-muted font-semibold rounded px-5 py-3 border border-border shadow-sm hover:bg-accent hover:text-charcoal transition"
              onClick={() => setStep(2)}
            >
              Explore Rituals
            </button>
            <button
              className="bg-accent hover:bg-primary text-charcoal font-semibold px-6 py-3 rounded-lg shadow-md transition"
              onClick={() => window.scrollTo({ top: 1200, behavior: "smooth" })}
            >
              Find a Trusted Guide
            </button>
            <button
              className="bg-muted text-charcoal font-bold border px-6 py-3 rounded-lg hover:bg-secondary transition"
              onClick={() => alert("We'll notify you soon!")}
            >
              Join Our Waitlist
            </button>
          </div>
          <div className="mt-7 flex items-center justify-center gap-2">
            <span className="text-muted text-sm">Available in:</span>
            <span className="flex gap-1 text-base font-medium text-charcoal">
              English, Hindi, Tamil, Urdu
            </span>
          </div>
        </div>
      </section>

      {/* Search Section */}
      {step === 2 && (
        <section className="py-8 bg-soft-white">
          <div className="max-w-7xl mx-auto px-4">
            <SearchBar 
              onSearch={handleSearch}
              onLocationChange={handleLocationChange}
              onFilterToggle={handleFilterToggle}
            />
          </div>
        </section>
      )}

      {/* Trust Badges */}
      <TrustBadges />

      {/* Stepper Flow */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-3xl mx-auto mb-10">
          {step === 0 && (
            <FaithStep value={religion} onChange={handleFaithSelect} />
          )}
          {step === 1 && (
            <>
              <RitualStep religion={religion} value={ritual} onChange={handleRitualSelect} />
              <div className="text-center">
                <button className="mt-5 text-sm text-blue-600 hover:underline" onClick={handleBack}>← Back</button>
              </div>
            </>
          )}
        </div>
        {step === 2 && (
          <section id="booking">
            <ClergyGrid 
              religion={religion} 
              ritual={ritual} 
              language={language}
              searchQuery={searchQuery}
              locationFilter={locationFilter}
              filters={filters}
            />
            <div className="mt-3">
              <button className="text-sm text-blue-600 hover:underline" onClick={handleBack}>← Back</button>
            </div>
          </section>
        )}
        
        {/* Featured Guides Section */}
        {step !== 2 && <FeaturedGuides />}
        
        <section className="mt-16">
          <HowItWorks />
        </section>
        <Testimonials />
        
        {/* Newsletter Section */}
        <Newsletter />
      </main>

      {/* Filter Panel */}
      <FilterPanel 
        isOpen={showFilters}
        onClose={() => setShowFilters(false)}
        filters={filters}
        onFilterChange={handleFilterChange}
      />

      <Footer />
    </div>
  );
};

export default Index;
