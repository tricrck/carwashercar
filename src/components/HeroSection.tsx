import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import productHero from "@/assets/product-hero.jpeg";
import productKitDisplay from "@/assets/product-kit-display.jpeg";
import productFunction from "@/assets/product-function.jpeg";

const heroImages = [
  { src: productHero, alt: "High Pressure Spray Gun Complete Kit" },
  { src: productKitDisplay, alt: "Complete Kit with 2 Batteries and Charger" },
  { src: productFunction, alt: "Function Display - Spray Gun Features" },
];

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container relative z-10 pt-8 pb-16">
        

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-2xl">🔥</span>
              <span className="text-sm font-medium text-primary">Limited Time Offer</span>
            </div>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Rechargeable Cordless{" "}
              <span className="text-gradient">High Pressure</span>{" "}
              Car Washer Gun
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              This cordless, battery-powered pressure washer delivers strong water pressure for effective cleaning at home or on the go. Its lightweight, compact design makes it easy to carry and use anywhere no power outlets or cords required. Equipped with a multifunctional adjustable nozzle, you can switch effortlessly between high pressure direct spray, wide fan spray, or gentle shower mode to handle everything from car washing to outdoor and household cleaning.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToOrder}>
                <ShoppingCart className="w-5 h-5" />
                Order Now - Ksh 4,999
              </Button>
              <a href="tel:0797853894">
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call to Order
                </Button>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Countrywide Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Pay on Delivery
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Same Day in Nairobi
              </div>
            </div>
          </div>

          {/* Product Images Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main large image */}
              <div className="col-span-2 relative">
                <div className="absolute inset-0 glow-orange rounded-2xl opacity-50" />
                <img 
                  src={heroImages[0].src} 
                  alt={heroImages[0].alt}
                  className="relative z-10 w-full rounded-2xl shadow-2xl object-cover aspect-video"
                />
                {/* Price Badge */}
                <div className="absolute -bottom-3 -left-3 z-20 bg-primary text-primary-foreground px-5 py-2 rounded-xl font-display font-bold text-lg shadow-lg">
                  Ksh 4,999
                </div>
              </div>
              
              {/* Two smaller images */}
              <div className="relative group">
                <img 
                  src={heroImages[1].src} 
                  alt={heroImages[1].alt}
                  className="w-full rounded-xl shadow-lg object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="relative group">
                <img 
                  src={heroImages[2].src} 
                  alt={heroImages[2].alt}
                  className="w-full rounded-xl shadow-lg object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;