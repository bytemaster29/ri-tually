
import React, { useState } from "react";
import { Mail } from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 3000);
  };

  return (
    <section className="py-16 bg-primary/10">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-charcoal mb-4 font-playfair">
          Stay Connected
        </h2>
        <p className="text-muted text-lg mb-8 max-w-2xl mx-auto">
          Get updates on new spiritual guides, special ceremonies, and exclusive offers in your area.
        </p>
        
        {!subscribed ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-charcoal font-semibold rounded-lg hover:bg-accent transition"
            >
              Subscribe
            </button>
          </form>
        ) : (
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-lg max-w-md mx-auto">
            Thank you for subscribing! Check your email for confirmation.
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
