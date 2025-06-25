
import React from "react";
import { Shield, Award, Clock, Users } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "Verified Guides",
      description: "All guides verified with background checks"
    },
    {
      icon: Award,
      title: "Top Rated",
      description: "4.8+ average rating from 10,000+ ceremonies"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock customer service"
    },
    {
      icon: Users,
      title: "50,000+ Families",
      description: "Trusted by families worldwide"
    }
  ];

  return (
    <section className="py-16 bg-white/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-charcoal mb-12 font-playfair">
          Why Choose Ritually?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <badge.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">{badge.title}</h3>
              <p className="text-muted text-sm">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
