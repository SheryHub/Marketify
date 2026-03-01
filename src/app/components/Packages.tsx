import { useState } from "react";

const allPackages = [
  {
    title: "STARTER",
    price: "PKR 15,000",
    period: "/ MONTH",
    features: [
      "3 Static Posts / Week",
      "1 Platform (Instagram or Facebook)",
      "Caption + Hashtag",
      "Scheduling & Posting",
      "Monthly Performance Report",
    ],
    note: "Best for solo entrepreneurs or new businesses",
    highlight: false,
  },
  {
    title: "BASIC BOOST",
    price: "PKR 20,000",
    period: "/ MONTH",
    features: [
      "4 Static Posts / Week",
      "1 Platform + Stories (3×/week)",
      "Content Strategy",
      "Brand Design",
      "Performance Tracking",
      "1 Reel Suggestion / Month",
    ],
    note: "Small business wanting regular online activity",
    highlight: false,
  },
  {
    title: "SMARTER GROWTH",
    price: "PKR 30,000",
    period: "/ MONTH",
    features: [
      "4–5 Mixed Posts / Week (Static + Carousel)",
      "2 Platforms",
      "5 Stories / Week",
      "Brand Design + Caption",
      "Hashtag & Posting Strategy",
      "Monthly Strategy Review",
    ],
    note: "Small to mid-size brands building visibility",
    highlight: true,
  },
  {
    title: "ACCELERATE",
    price: "PKR 40,000",
    period: "/ MONTH",
    features: [
      "All from Smarter Growth, plus:",
      "3 Platforms (Instagram, Facebook & LinkedIn or TikTok)",
      "Influencer Research & Coordination",
      "Custom Highlight Covers",
    ],
    note: "Active brands seeking consistent growth",
    highlight: false,
  },
  {
    title: "PRO VISION",
    price: "PKR 50,000",
    period: "/ MONTH",
    features: [
      "Dedicated Social Media Manager",
      "Paid Ad Management",
      "6 Reels a Month (Branded Editing)",
      "Brand Tone & Visual Guideline",
    ],
    note: "Service businesses & product brands scaling up",
    highlight: false,
  },
  {
    title: "BRAND AUTHORITY",
    price: "PKR 60,000",
    period: "/ MONTH",
    features: [
      "Everything in Pro Vision",
      "Paid Ad Management",
      "6 Reels / Month",
      "Daily Community Engagement",
      "Brand Design + Caption",
      "Brand Tone & Visual Guidelines",
    ],
    note: "Established brands and e-commerce players",
    highlight: true,
  },
];

export function Packages() {
  const [hoveredIndex, setHoveredIndex] = useState<
    number | null
  >(null);

  return (
    <section id="packages" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-14 h-1 bg-red-600 mx-auto mb-6"></div>
          <h2
            className="text-white mb-3"
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.75rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
            }}
          >
            Social Media Marketing
          </h2>
          <p
            className="text-red-500"
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
            }}
          >
            SERVICE PACKAGES
          </p>
        </div>

        {/* Cards grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: "1200px" }}
        >
          {allPackages.map((pkg, index) => {
            const isHovered = hoveredIndex === index;
            const isDimmed =
              hoveredIndex !== null && !isHovered;
            return (
              <div
                key={pkg.title}
                className="relative rounded-xl flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  background: isHovered
                    ? "linear-gradient(145deg, #1a0505 0%, #0d0000 100%)"
                    : pkg.highlight
                      ? "linear-gradient(145deg, #1a0505 0%, #0d0000 100%)"
                      : "rgba(255,255,255,0.03)",
                  border: isHovered
                    ? "1px solid #dc2626"
                    : pkg.highlight
                      ? "1px solid #dc2626"
                      : "1px solid rgba(220,38,38,0.2)",
                  boxShadow: isHovered
                    ? "0 0 0 1px #dc2626, 0 20px 60px rgba(220,38,38,0.45), 0 8px 32px rgba(0,0,0,0.8)"
                    : pkg.highlight
                      ? "0 0 40px rgba(220,38,38,0.2)"
                      : "none",
                  transform: isHovered
                    ? "translateY(-14px) scale(1.04)"
                    : isDimmed
                      ? "translateY(2px) scale(0.97)"
                      : "translateY(0) scale(1)",
                  opacity: isDimmed ? 0.45 : 1,
                  transition:
                    "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease, opacity 0.3s ease, border-color 0.3s ease, background 0.3s ease",
                  zIndex: isHovered ? 10 : 1,
                }}
              >
                {/* Top accent bar — always visible on hover, only for highlights otherwise */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-xl"
                  style={{
                    background:
                      "linear-gradient(90deg, #dc2626, #7f1d1d)",
                    opacity: isHovered || pkg.highlight ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }}
                ></div>

                <div className="p-7 flex flex-col flex-1">
                  {/* Title */}
                  <h3
                    className="text-white mb-4"
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      transition: "color 0.3s ease",
                      color: isHovered ? "#ffffff" : undefined,
                    }}
                  >
                    {pkg.title}
                  </h3>

                  {/* Price */}
                  <div
                    className="mb-6 pb-6"
                    style={{
                      borderBottom:
                        "1px solid rgba(220,38,38,0.2)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.75rem",
                        fontWeight: 700,
                        color: isHovered
                          ? "#f87171"
                          : "#ef4444",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-gray-400 ml-1"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {pkg.period}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"></span>
                        <span
                          className="text-gray-300"
                          style={{
                            fontSize: "0.9rem",
                            lineHeight: 1.6,
                          }}
                        >
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Note */}
                  <p
                    className="text-gray-500 text-center italic mt-auto pt-4"
                    style={{
                      fontSize: "0.8rem",
                      borderTop:
                        "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    {pkg.note}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}