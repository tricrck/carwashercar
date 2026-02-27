import { useState, useEffect, useCallback } from "react";
import { ArrowRight, Phone, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import HeroSection from "@/components/HeroSection";
import { products, getImagesBySection, type Product } from "@/components/data/products";
import Header from "@/components/Header";
import FooterSection from "@/components/sections/FooterSection";

// ─── How long each product stays in the hero (ms) ────────────────────────────
const HERO_CYCLE_INTERVAL = 6000;

// ─── Product Card ─────────────────────────────────────────────────────────────

const ProductCard = ({ product }: { product: Product }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { product: info, features, id } = product;
  const heroImages = getImagesBySection(product, "hero");
  const thumbnail = heroImages[0];

  return (
    <div className="gradient-card rounded-3xl border border-border/50 hover:border-primary/50 card-shadow transition-all duration-300 hover:-translate-y-1 overflow-hidden group flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 glow-orange opacity-0 group-hover:opacity-30 transition-opacity duration-300 z-10 rounded-t-3xl" />
        {thumbnail ? (
          <img
            src={thumbnail.src}
            alt={thumbnail.alt}
            className="w-full object-cover aspect-video group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full aspect-video bg-secondary/50 flex items-center justify-center">
            <ShoppingCart className="w-12 h-12 text-muted-foreground/30" />
          </div>
        )}
        {/* Offer badge */}
        <div className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/90 backdrop-blur-sm text-primary-foreground text-xs font-semibold">
          🔥 {info.offer}
        </div>
        {/* Price badge */}
        <div className="absolute bottom-3 right-3 z-20 bg-background/80 backdrop-blur-sm border border-border/60 text-foreground px-4 py-1.5 rounded-xl font-display font-bold text-base shadow-lg">
          {info.price.currency} {info.price.amount.toLocaleString()}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-xl mb-2 leading-snug">{info.name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{info.description}</p>

        {/* Top features */}
        <ul className="space-y-2 mb-6">
          {features.slice(0, 3).map((f) => (
            <li key={f.title} className="flex items-start gap-2 text-sm">
              <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-3 h-3" />
              </span>
              <span className="text-muted-foreground">
                <span className="font-medium text-foreground">{f.title}</span>{" "}
                — {f.description}
              </span>
            </li>
          ))}
        </ul>

        {/* Delivery badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {info.delivery.nationwide && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground">
              🚚 Countrywide
            </span>
          )}
          {info.delivery.payOnDelivery && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground">
              💳 Pay on Delivery
            </span>
          )}
          {info.delivery.sameDayCity && (
            <span className="text-xs px-2.5 py-1 rounded-full bg-secondary border border-border/50 text-muted-foreground">
              ⚡ Same Day — {info.delivery.sameDayCity}
            </span>
          )}
        </div>

        {/* CTAs */}
        <div className="mt-auto flex flex-col sm:flex-row gap-3">
          <NavLink to={`/${id}`} className="flex-1">
            <Button variant="hero" className="w-full" size="lg">
              View Product
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </NavLink>
          <a href={`tel:${info.contact.phone}`} className="flex-1">
            <Button variant="whatsapp" className="w-full" size="lg">
              <Phone className="w-4 h-4" />
              Order Now
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Index Page ───────────────────────────────────────────────────────────────

const Index = () => {
  const [heroIndex, setHeroIndex] = useState(0);

  // Cycle through products in the hero
  const advance = useCallback(() => {
    setHeroIndex((prev) => (prev + 1) % products.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, HERO_CYCLE_INTERVAL);
    return () => clearInterval(timer);
  }, [advance]);

  const activeProduct = products[heroIndex];

  return (
    <main>
      {/* Sticky Header */}
      <Header />
      {/* ── Hero: cycles through each product ── */}
      <div className="relative">
        <HeroSection product={activeProduct} interval={4000} />
      </div>

      {/* ── Product Cards ── */}
      <section className="py-20 bg-navy-dark relative overflow-hidden">
        <div className="absolute inset-0 water-glow" />

        <div className="container relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              🛒 Our{" "}
              <span className="text-gradient">Products</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Premium quality, fast delivery anywhere in Kenya. Pay on delivery — no risk.
            </p>
          </div>

          {/* Cards grid */}
          <div
            className={`grid gap-12 ${
              products.length === 1
                ? "max-w-lg mx-auto"
                : products.length === 2
                ? "sm:grid-cols-2 max-w-4xl mx-auto"
                : "sm:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-16 grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
            {[
              { emoji: "🚚", title: "Countrywide Delivery", sub: "We deliver across all of Kenya" },
              { emoji: "💳", title: "Pay on Delivery", sub: "No upfront payment required" },
              { emoji: "⚡", title: "Same Day — Nairobi", sub: "Next day outside Nairobi" },
            ].map((t) => (
              <div
                key={t.title}
                className="gradient-card p-5 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="text-3xl mb-2">{t.emoji}</div>
                <p className="font-semibold text-sm text-foreground">{t.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{t.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
};

export default Index;