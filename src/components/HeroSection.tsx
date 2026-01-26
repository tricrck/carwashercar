import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart } from "lucide-react";
import productHero from "@/assets/product-hero.jpeg";

const HeroSection = () => {
  const scrollToOrder = () => {
    document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-transparent to-transparent blur-3xl" />
      
      <div className="container relative z-10 pt-8 pb-16">
        {/* Header */}
        <header className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground">PT</span>
            </div>
            <span className="font-display font-bold text-foreground">PrimeTech</span>
          </div>
          <a 
            href="tel:0797853894" 
            className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">0797853894</span>
          </a>
        </header>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[calc(100vh-200px)]">
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
              Transform your cleaning routine with a powerful, versatile and portable solution for automotive, home, garden, and outdoor cleaning tasks.
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

          {/* Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 glow-orange rounded-3xl opacity-50" />
              <img 
                src={productHero} 
                alt="High Pressure Spray Gun Complete Kit"
                className="relative z-10 w-full max-w-lg rounded-3xl shadow-2xl animate-float"
              />
              {/* Price Badge */}
              <div className="absolute -bottom-4 -left-4 z-20 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-display font-bold text-xl shadow-lg">
                Ksh 4,999
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;