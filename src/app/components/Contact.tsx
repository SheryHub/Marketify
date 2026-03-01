import { Mail, Instagram, Facebook } from "lucide-react";
import logoImage from "@/assets/bd76192cfbcc6d0ef5972ac718d0d2698feb288c.png";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5 text-white" />,
    label: "Email",
    value: "Fadipervaiz98@gmail.com",
    href: "mailto:Fadipervaiz98@gmail.com",
  },
  {
    icon: <Instagram className="w-5 h-5 text-white" />,
    label: "Instagram",
    value: "@official.marketify",
    href: "https://instagram.com/official.marketify",
  },
  {
    icon: <Facebook className="w-5 h-5 text-white" />,
    label: "Facebook",
    value: "official.marketify",
    href: "https://facebook.com/official.marketify",
  },
];

export function Contact() {
  return (
    <section id="contact" className="bg-black py-24">
      {/* Top red divider */}
      <div
        className="w-full mb-16"
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, #dc2626 30%, #dc2626 70%, transparent)" }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div>
          {/* Info */}
          <div className="max-w-xl">
            <div className="w-14 h-1 bg-red-600 mb-6"></div>
            <h2
              className="text-white mb-3"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.75rem)", fontWeight: 800, letterSpacing: "-0.01em" }}
            >
              Get In Touch
            </h2>
            <p
              className="text-gray-400 mb-10"
              style={{ fontSize: "1.05rem", lineHeight: 1.7 }}
            >
              Ready to take your brand to the next level?<br />
              Contact us today and let's make it happen.
            </p>

            <div className="space-y-5">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors"
                    style={{ background: "rgba(220,38,38,0.15)", border: "1px solid rgba(220,38,38,0.3)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500" style={{ fontSize: "0.78rem", letterSpacing: "0.1em" }}>
                      {item.label.toUpperCase()}
                    </p>
                    <p
                      className="text-gray-200 group-hover:text-red-400 transition-colors"
                      style={{ fontSize: "1rem" }}
                    >
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div
          className="mt-20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(220,38,38,0.15)" }}
        >
          <img src={logoImage} alt="Marketify" className="h-10 w-auto" />
          <p className="text-gray-600" style={{ fontSize: "0.85rem" }}>
            © 2026 Marketify. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
