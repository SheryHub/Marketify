import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoImage from "../../asset/bd76192cfbcc6d0ef5972ac718d0d2698feb288c.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "Vision", id: "vision" },
    { label: "Packages", id: "packages" },
    { label: "Solutions", id: "solutions" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500"
      style={{
        background: scrolled ? "rgba(0,0,0,0.25)" : "rgba(0,0,0,0.35)",
        backdropFilter: "blur(16px)",
        borderColor: scrolled ? "rgba(153,27,27,0.2)" : "transparent",
        boxShadow: scrolled ? "none" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <img src={logoImage} alt="Marketify Logo" className="h-11 w-auto" />

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-gray-300 hover:text-white transition-colors tracking-wide"
                style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded transition-colors"
              style={{ fontSize: "0.9rem", letterSpacing: "0.05em" }}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-red-800/40 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-gray-300 hover:text-white text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded transition-colors w-full"
          >
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}