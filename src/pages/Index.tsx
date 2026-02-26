import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProductKitSection from "@/components/ProductKitSection";
import WhyCustomersLoveSection from "@/components/WhyCustomersLoveSection";
import OrderFormSection from "@/components/OrderFormSection";
import FooterSection from "@/components/FooterSection";
import BPMonitorHero from "@/components/BPMonitorHero";
import BPMonitorGallery from "@/components/BPMonitorGallery";
import BPMonitorFeatures from "@/components/BPMonitorFeatures";
import BPMonitorCTA from "@/components/BPMonitorCTA";
import { Phone } from "lucide-react";

type Product = "original" | "bpmonitor";

const Index = () => {
  const [activePage, setActivePage] = useState<Product>("original");

  return (
    <main className="min-h-screen">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">

            {/* Left — Logo */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-9 h-9 rounded-full gradient-cta flex items-center justify-center shadow-sm">
                <span className="font-display font-bold text-primary-foreground text-sm">PT</span>
              </div>
              <span className="font-display font-bold text-foreground text-base tracking-tight">
                PrimeTech
              </span>
            </div>

            {/* Center — Product Switcher */}
            <div className="flex flex-1 justify-center min-w-0">

              {/* Mobile: native select */}
              <select
                className="sm:hidden text-sm font-bold tracking-tight text-foreground bg-transparent border-none outline-none cursor-pointer max-w-full"
                style={{ color: "inherit" }}
                value={activePage}
                onChange={(e) => setActivePage(e.target.value as Product)}
              >
                <option value="original" style={{ backgroundColor: '#111111', color: '#ffffff' }}>Car Washer Gun</option>
                <option value="bpmonitor" style={{ backgroundColor: '#111111', color: '#ffffff' }}>BP Monitor</option>
              </select>

              {/* Desktop: plain text tabs */}
              <nav className="hidden sm:flex items-center gap-6">
                <button
                  onClick={() => setActivePage("original")}
                  className={`text-base font-bold tracking-tight transition-colors duration-200 whitespace-nowrap ${
                    activePage === "original"
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  Car Washer Gun
                </button>
                <button
                  onClick={() => setActivePage("bpmonitor")}
                  className={`text-base font-bold tracking-tight transition-colors duration-200 whitespace-nowrap ${
                    activePage === "bpmonitor"
                      ? "text-foreground"
                      : "text-foreground/40 hover:text-foreground/70"
                  }`}
                >
                  BP Monitor
                </button>
              </nav>

            </div>

            {/* Right — Phone */}
            <div className="shrink-0">
              
                <a href="tel:0797853894"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
              >
                <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="hidden sm:inline text-sm font-medium">0797853894</span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Pages */}
      {activePage === "original" ? (
        <>
          <HeroSection />
          <FeaturesSection />
          <UseCasesSection />
          <ProductKitSection />
          <WhyCustomersLoveSection />
          <OrderFormSection activePage={activePage}/>
          <FooterSection />
        </>
      ) : (
        <>
          <BPMonitorHero />
          <BPMonitorGallery />
          <BPMonitorFeatures />
          <BPMonitorCTA />
          <OrderFormSection activePage={activePage}/>
          <FooterSection />
        </>
      )}
    </main>
  );
};

export default Index;