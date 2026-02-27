import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import { type Product, getImagesBySection } from "@/components/data/products";
import { cn } from "@/lib/utils";
import { useLocation, useNavigate } from "react-router-dom";


interface HeroSectionProps {
  product: Product;
  /** ms between auto-advancing slides. Default 4000 */
  interval?: number;
}

const HeroSection = ({ product, interval = 4000 }: HeroSectionProps) => {
  const { product: info } = product;
  const heroImages = getImagesBySection(product, "hero");
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  // Auto-cycle through hero images
  useEffect(() => {
    if (heroImages.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length);
    }, interval);
    return () => clearInterval(timer);
  }, [heroImages.length, interval]);

  const prev = () =>
    setActiveIndex((i) => (i - 1 + heroImages.length) % heroImages.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % heroImages.length);

  const scrollToOrder = () => {
    const targetId = `order-form`;
    const isOnProductPage = location.pathname === `/${product.id}`;

    if (isOnProductPage) {
      // Already on the right page — just scroll
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to the product page, then scroll once it renders
      navigate(`/${product.id}`);
      // Small delay to allow the page to mount before scrolling
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <section className="relative min-h-screen gradient-hero overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-r from-primary/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 pt-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* ── Text Content ─────────────────────────────────── */}
          <div className="space-y-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-2xl">🔥</span>
              <span className="text-sm font-medium text-primary">{info.offer}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              {info.name.split(" ").slice(0, -2).join(" ")}{" "}
              <span className="text-gradient">
                {info.name.split(" ").slice(-2).join(" ")}
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              {info.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToOrder}>
                <ShoppingCart className="w-5 h-5" />
                Order Now — {info.price.currency} {info.price.amount.toLocaleString()}
              </Button>
              <a href={`tel:${info.contact.phone}`}>
                <Button variant="whatsapp" size="xl" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call to Order
                </Button>
              </a>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-muted-foreground">
              {info.delivery.nationwide && (
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Countrywide Delivery
                </div>
              )}
              {info.delivery.payOnDelivery && (
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Pay on Delivery
                </div>
              )}
              {info.delivery.sameDayCity && (
                <div className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Same Day in {info.delivery.sameDayCity}
                </div>
              )}
            </div>
          </div>

          {/* ── Image Carousel ───────────────────────────────── */}
          <div className="relative">
            {/* Main image */}
            <div className="relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0 glow-orange rounded-2xl opacity-50 z-0" />
              {heroImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  className={cn(
                    "relative z-10 w-full object-cover aspect-video rounded-2xl shadow-2xl transition-all duration-700",
                    i === activeIndex
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[0.98] absolute inset-0",
                  )}
                />
              ))}

              {/* Price badge */}
              <div className="absolute -bottom-3 -left-3 z-20 bg-primary text-primary-foreground px-5 py-2 rounded-xl font-display font-bold text-lg shadow-lg">
                {info.price.currency} {info.price.amount.toLocaleString()}
              </div>
            </div>

            {/* Controls — only shown when there are multiple images */}
            {heroImages.length > 1 && (
              <>
                {/* Prev / Next */}
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/3 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-background/60 border border-border/60 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/3 -translate-y-1/2 z-30 w-8 h-8 rounded-full bg-background/60 border border-border/60 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Dot indicators */}
                <div className="flex justify-center gap-2 mt-4">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        i === activeIndex
                          ? "bg-primary w-6"
                          : "bg-border hover:bg-muted-foreground",
                      )}
                      aria-label={`Go to image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Thumbnail strip */}
            {heroImages.length > 1 && (
              <div className="grid grid-cols-3 gap-3 mt-4">
                {heroImages.map((img, i) => (
                  <button
                    key={img.src}
                    onClick={() => setActiveIndex(i)}
                    className={cn(
                      "relative overflow-hidden rounded-xl border-2 transition-all duration-200",
                      i === activeIndex
                        ? "border-primary shadow-lg scale-[1.03]"
                        : "border-border/50 opacity-70 hover:opacity-100 hover:border-primary/50",
                    )}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full object-cover aspect-square"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;