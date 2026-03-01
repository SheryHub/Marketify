import { useState } from "react";
import platformImage from "@/asset/63d48cac31734593322642f1b7a5f5f4c5b2d8a6.png";

const youtubeServices = [
  "Channel Management, Video SEO & Thumbnails",
  "Shorts Creation & Posting",
  "YouTube Ads, Targeting & Reports",
];

const linkedinServices = [
  "Page Optimization, Content & Scheduling",
  "LinkedIn Ads & Audience Targeting",
  "Personal Branding",
  "Performance Reports",
];

function ServiceList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="mt-2 w-1.5 h-1.5 rounded-full bg-red-600 flex-shrink-0"
          ></span>
          <span className="text-gray-300" style={{ fontSize: "1rem", lineHeight: 1.7 }}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PlatformSolutions() {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section id="solutions" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="w-14 h-1 bg-red-600 mb-6"></div>
          <h2
            className="text-white"
            style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.01em" }}
          >
            Platform <span className="text-red-500">Solutions</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* YouTube card */}
          <div
            className="rounded-xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(220,38,38,0.25)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "#FF0000", fontSize: "1.1rem", fontWeight: 700 }}
              >
                ▶
              </div>
              <h3
                className="text-white"
                style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "0.04em" }}
              >
                YOUTUBE MARKETING
              </h3>
            </div>
            <ServiceList items={youtubeServices} />
          </div>

          {/* LinkedIn card */}
          <div
            className="rounded-xl p-8"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(220,38,38,0.25)",
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white flex-shrink-0"
                style={{ background: "#0A66C2", fontSize: "1.1rem", fontWeight: 700 }}
              >
                in
              </div>
              <h3
                className="text-white"
                style={{ fontSize: "1.4rem", fontWeight: 800, letterSpacing: "0.04em" }}
              >
                LINKEDIN MARKETING
              </h3>
            </div>
            <ServiceList items={linkedinServices} />
          </div>
        </div>

        {/* Decorative image strip */}
        <div className="relative">
          <div
            className="rounded-xl overflow-hidden"
            style={{
              height: "240px",
              boxShadow: imgHovered
                ? "0 0 80px rgba(220,38,38,0.45), 0 0 0 1px rgba(220,38,38,0.5)"
                : "0 0 0 1px rgba(220,38,38,0.15)",
              transform: imgHovered ? "scale(1.03) translateY(-6px)" : "scale(1) translateY(0)",
              transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s ease",
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <img
              src={platformImage}
              alt="Platform Solutions"
              className="w-full h-full object-contain"
              style={{
                background: "#000",
                transform: imgHovered ? "scale(1.05)" : "scale(1)",
                transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            />
          </div>
          {/* Glow backdrop */}
          <div
            className="absolute inset-0 -z-10 blur-3xl rounded-xl"
            style={{
              background: "radial-gradient(ellipse at center, #dc2626 0%, transparent 70%)",
              opacity: imgHovered ? 0.3 : 0.1,
              transition: "opacity 0.6s ease",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
