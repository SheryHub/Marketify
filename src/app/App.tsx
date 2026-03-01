import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Vision } from "./components/Vision";
import { Packages } from "./components/Packages";
import { PlatformSolutions } from "./components/PlatformSolutions";
import { CustomPackage } from "./components/CustomPackage";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-black" style={{ scrollBehavior: "smooth" }}>
      <Navigation />
      <Hero />
      {/* Divider */}
      <div
        className="w-full"
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3) 30%, rgba(220,38,38,0.3) 70%, transparent)" }}
      ></div>
      <Vision />
      <div
        className="w-full"
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3) 30%, rgba(220,38,38,0.3) 70%, transparent)" }}
      ></div>
      <Packages />
      <div
        className="w-full"
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3) 30%, rgba(220,38,38,0.3) 70%, transparent)" }}
      ></div>
      <PlatformSolutions />
      <div
        className="w-full"
        style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(220,38,38,0.3) 30%, rgba(220,38,38,0.3) 70%, transparent)" }}
      ></div>
      <CustomPackage />
      <Contact />
    </div>
  );
}
