import { useState } from "react";
import visionImage from "../../asset/93129c238527bd0e2a46a2f1267d7bcdafd254ef.png";

const platforms = [
  {
    name: "YouTube",
    icon: "▶",
    color: "#FF0000",
    desc: "Reach millions through video — ads, SEO, and channel growth.",
  },
  {
    name: "Google",
    icon: "G",
    color: "#EA4335",
    desc: "Dominate search results and drive high-intent traffic.",
  },
  {
    name: "LinkedIn",
    icon: "in",
    color: "#0A66C2",
    desc: "B2B targeting, thought leadership, and professional reach.",
  },
];

export function Vision() {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section id="vision" className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header row */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
          <div>
            <div className="w-14 h-1 bg-red-600 mb-6"></div>
            <h2
              className="text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.01em" }}
            >
              TARGETED SOLUTIONS ACROSS<br />
              <span className="text-red-500">YOUTUBE, GOOGLE & LINKEDIN</span>
            </h2>
          </div>

          <div className="flex flex-col justify-center">
            <p
              className="text-gray-400"
              style={{ fontSize: "1.05rem", lineHeight: 1.85 }}
            >
              At Marketify, we understand that every platform requires a unique strategy. That's why we offer customized marketing packages tailored to your brand's specific goals — whether it's lead generation, video reach, search visibility, or B2B targeting.
            </p>
          </div>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {platforms.map((p) => (
            <div
              key={p.name}
              className="rounded-lg p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(220,38,38,0.25)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-white"
                style={{ background: p.color, fontSize: "1.2rem", fontWeight: 700 }}
              >
                {p.icon}
              </div>
              <h3 className="text-white mb-2" style={{ fontSize: "1.2rem", fontWeight: 700 }}>
                {p.name}
              </h3>
              <p className="text-gray-400" style={{ fontSize: "0.95rem", lineHeight: 1.7 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Image strip */}
        <div className="relative">
          <div
            className="rounded-xl overflow-hidden"
            style={{
              height: "280px",
              boxShadow: imgHovered
                ? "0 0 80px rgba(220,38,38,0.45), 0 0 0 1px rgba(220,38,38,0.5)"
                : "0 0 0 1px rgba(220,38,38,0.2)",
              transform: imgHovered ? "scale(1.03) translateY(-6px)" : "scale(1) translateY(0)",
              transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s ease",
            }}
            onMouseEnter={() => setImgHovered(true)}
            onMouseLeave={() => setImgHovered(false)}
          >
            <img
              src={visionImage}
              alt="Vision"
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