
import Header from "@/components/Header";
import ClergyGrid from "@/components/ClergyGrid";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import { useState } from "react";

const Index = () => {
  // Filtering state (placeholder for now)
  const [search, setSearch] = useState("");
  const [religion, setReligion] = useState("");
  const [ritual, setRitual] = useState("");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-100 via-white to-green-100 px-8 py-10 border-b">
        <div className="max-w-5xl mx-auto flex flex-col gap-4">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-primary mb-2 flex items-center gap-4">
            <span>Find &amp; Book Trusted Ritual Guides</span>
            <span className="hidden md:inline-flex">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><g><path d="M12 3L2 21h20L12 3Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/></g></svg>
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl">
            Seamlessly connect with verified priests, imams, pastors, monks, and guides for your spiritual and life rituals, from weddings and baptisms to pujas and blessings.
          </p>
        </div>
        {/* Simple Filters */}
        <form className="mt-8 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div>
            <label className="block mb-1 font-medium text-sm">Search</label>
            <input
              type="text"
              placeholder="Priest, Imam, Pastor..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full px-4 py-2 rounded border border-input focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Religion</label>
            <select
              value={religion}
              onChange={e => setReligion(e.target.value)}
              className="w-full px-4 py-2 rounded border border-input bg-white"
            >
              <option value="">All</option>
              <option value="Hinduism">Hinduism</option>
              <option value="Islam">Islam</option>
              <option value="Christianity">Christianity</option>
              <option value="Buddhism">Buddhism</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm">Ritual</label>
            <select
              value={ritual}
              onChange={e => setRitual(e.target.value)}
              className="w-full px-4 py-2 rounded border border-input bg-white"
            >
              <option value="">All</option>
              <option value="Wedding">Wedding</option>
              <option value="Puja">Puja</option>
              <option value="Baptism">Baptism</option>
              <option value="Blessing">Blessing</option>
              <option value="Funeral">Funeral</option>
              <option value="Naming">Naming</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <button
            type="button"
            className="bg-primary text-primary-foreground font-semibold rounded px-4 py-2 transition hover:bg-primary/80 focus:ring-2 focus:ring-primary"
            onClick={e => e.preventDefault()}
            tabIndex={-1} // no-op for now
          >
            Search
          </button>
        </form>
      </section>
      {/* Main Content */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-12">
        <section>
          <ClergyGrid search={search} religion={religion} ritual={ritual} />
        </section>
        <section className="mt-16">
          <HowItWorks />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
