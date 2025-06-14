
const HowItWorks = () => (
  <div
    id="howitworks"
    className="rounded-xl bg-card/80 border border-muted p-8 shadow-sm max-w-4xl mx-auto"
  >
    <h2 className="font-playfair text-2xl font-bold mb-5 text-primary">How It Works</h2>
    <ol className="list-decimal pl-6 text-lg text-muted-foreground space-y-2">
      <li>
        <span className="font-semibold text-primary">Browse &amp; Filter:</span>{" "}
        Find a ritual guide by religion, location, ritual type, language, or name.
      </li>
      <li>
        <span className="font-semibold text-primary">View Profiles:</span>{" "}
        Check ratings, specialties, and offerings at a glance.
      </li>
      <li>
        <span className="font-semibold text-primary">Request Booking:</span>{" "}
        Fill a simple form — we’ll notify you when your booking is confirmed.
      </li>
      <li>
        <span className="font-semibold text-primary">Peace of Mind:</span>{" "}
        Only verified, trusted guides for spiritual peace on your important day.
      </li>
    </ol>
  </div>
);

export default HowItWorks;
