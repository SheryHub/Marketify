import { useState } from "react";
import heroImage from "@/asset/76faaedc5cf70e0bc0fdb46bbfd9016387017c70.png";

export function Hero() {
  const [hovered, setHovered] = useState(false);

  const scrollToPackages = () => {
    document.getElementById("packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="bg-black pt-20 min-h-screen flex items-center overflow-hidden"
      style={{
        transition: "min-height 0.6s cubic-bezier(0.4,0,0.2,1)",
        minHeight: hovered ? "110vh" : "100vh",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <div
          className="grid lg:grid-cols-2 gap-12 items-center"
          style={{
            padding: hovered ? "5rem 0" : "4rem 0",
            transition: "padding 0.6s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {/* Text side */}
          <div
            style={{
              transform: hovered ? "translateY(-8px)" : "translateY(0)",
              transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Red accent line */}
            <div
              className="h-1 bg-red-600 mb-8"
              style={{
                width: hovered ? "80px" : "56px",
                transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)",
              }}
            ></div>

            <h1
              className="text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05, letterSpacing: "-0.02em" }}
            >
              MARKETIFY
            </h1>

            <p
              className="text-red-500 mb-8"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", fontWeight: 600, letterSpacing: "0.08em" }}
            >
              WHERE BRANDS GROW SMARTER
            </p>

            <div className="border-l-4 border-red-600 pl-6 mb-10">
              <p
                className="text-gray-300"
                style={{ fontSize: "clamp(1rem, 1.8vw, 1.2rem)", lineHeight: 1.8 }}
              >
                Data-Driven Digital Marketing Solutions<br />
                That Build, Scale, and Convert Brands
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToPackages}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3.5 rounded transition-colors"
                style={{ fontWeight: 600, letterSpacing: "0.05em" }}
              >
                View Packages
              </button>
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="border border-red-600 text-red-500 hover:bg-red-600 hover:text-white px-8 py-3.5 rounded transition-colors"
                style={{ fontWeight: 600, letterSpacing: "0.05em" }}
              >
                Get In Touch
              </button>
            </div>
          </div>

          {/* Image side */}
          <div className="relative flex justify-center lg:justify-end">
            <div
              className="relative rounded-xl overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "520px",
                aspectRatio: "4/3",
                boxShadow: hovered
                  ? "0 0 100px rgba(220,38,38,0.45), 0 0 0 1px rgba(220,38,38,0.4)"
                  : "0 0 60px rgba(220,38,38,0.25), 0 0 0 1px rgba(220,38,38,0.2)",
                transform: hovered ? "scale(1.04) translateY(-6px)" : "scale(1) translateY(0)",
                transition: "transform 0.6s cubic-bezier(0.4,0,0.2,1), box-shadow 0.6s ease",
              }}
            >
              <img
                src={heroImage}
                alt="Marketify Hero"
                className="w-full h-full object-contain"
                style={{
                  background: "#000",
                  transform: hovered ? "scale(1.06)" : "scale(1)",
                  transition: "transform 0.8s cubic-bezier(0.4,0,0.2,1)",
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(153,0,0,0.3) 0%, transparent 60%)" }}
              ></div>
            </div>
            {/* Glow that intensifies on hover */}
            <div
              className="absolute inset-0 -z-10 blur-3xl"
              style={{
                background: "radial-gradient(ellipse at center, #dc2626 0%, transparent 70%)",
                opacity: hovered ? 0.35 : 0.2,
                transition: "opacity 0.6s ease",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
