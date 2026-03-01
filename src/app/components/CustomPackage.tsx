import { useState } from "react";
import customImage from "@/assets/4f2be3886e4036a34dde90a80892059f45fde2f1.png";

const options = [
  "One-time setup or full monthly management",
  "Ad budget consultation & management",
  "Mix of 2 or more platforms",
  "Content-only OR Ads-only options",
  "Reporting & analytics dashboards",
];

export function CustomPackage() {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative order-2 lg:order-1">
            <div
              className="rounded-xl overflow-hidden"
              style={{
                aspectRatio: "4/3",
                boxShadow: imgHovered
                  ? "0 0 100px rgba(220,38,38,0.45), 0 0 0 1px rgba(220,38,38,0.5)"
                  : "0 0 60px rgba(220,38,38,0.12), 0 0 0 1px rgba(220,38,38,0.2)",
                transform: imgHovered ? "scale(1.04) translateY(-6px)" : "scale(1) translateY(0)",
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s ease",
              }}
              onMouseEnter={() => setImgHovered(true)}
              onMouseLeave={() => setImgHovered(false)}
            >
              <img
                src={customImage}
                alt="Custom Package"
                className="w-full h-full object-contain"
                style={{
                  background: "#000",
                  transform: imgHovered ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
            </div>
            {/* Accent glow */}
            <div
              className="absolute -bottom-4 -left-4 -z-10 rounded-xl blur-2xl"
              style={{
                width: "50%",
                height: "50%",
                background: "#dc2626",
                opacity: imgHovered ? 0.5 : 0.3,
                transition: "opacity 0.6s ease",
              }}
            ></div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="w-14 h-1 bg-red-600 mb-6"></div>
            <h2
              className="text-white mb-8"
              style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.25rem)", fontWeight: 800, lineHeight: 1.2, letterSpacing: "-0.01em" }}
            >
              CUSTOM PACKAGE<br />
              <span className="text-red-500">OPTIONS INCLUDE</span>
            </h2>

            <ul className="space-y-4 mb-12">
              {options.map((option, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div
                    className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)" }}
                  >
                    <span className="text-red-500" style={{ fontSize: "0.75rem", fontWeight: 700 }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className="text-gray-300"
                    style={{ fontSize: "1rem", lineHeight: 1.7 }}
                  >
                    {option}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA text */}
            <div
              className="rounded-xl p-6"
              style={{
                background: "linear-gradient(135deg, #1a0505 0%, #0d0000 100%)",
                border: "1px solid rgba(220,38,38,0.4)",
              }}
            >
              <p
                className="text-white"
                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", fontWeight: 800, lineHeight: 1.3 }}
              >
                LET'S TAKE YOUR BRAND FROM<br />
                <span className="text-red-500">ORDINARY TO UNFORGETTABLE</span>
              </p>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-5 bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded transition-colors"
                style={{ fontWeight: 600, letterSpacing: "0.04em" }}
              >
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
