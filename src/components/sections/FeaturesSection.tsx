import { type Product, getImagesBySection } from "@/components/data/products";
import {
  Zap, Battery, Droplets, Settings2,
  Activity, Volume2, Eye, Brain, AlertTriangle,
  type LucideIcon,
} from "lucide-react";

// Map icon name strings from products.ts → actual Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Zap, Battery, Droplets, Settings2,
  Activity, Volume2, Eye, Brain, AlertTriangle,
};

// Spray-mode dot colours (pressure-washer specific)
const SPRAY_COLOR_MAP: Record<string, string> = {
  red:    "bg-red-500",
  orange: "bg-orange-400",
  cyan:   "bg-cyan-400",
};

interface Props { product: Product }

const FeaturesSection = ({ product }: Props) => {
  const { features, sprayModes } = product;
  const featureImages = getImagesBySection(product, "features");
  const sprayImage    = featureImages[0];

  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 water-glow" />

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🔥 Key Features{" "}
            <span className="text-gradient">& Capabilities</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Engineered for performance, designed for everyday convenience.
          </p>
        </div>

        {/* Feature cards */}
        <div className={`grid gap-6 mb-20 ${
          features.length <= 3
            ? "sm:grid-cols-3"
            : "sm:grid-cols-2 lg:grid-cols-4"
        }`}>
          {features.map((f, i) => {
            const Icon = ICON_MAP[f.icon];
            return (
              <div
                key={i}
                className="gradient-card p-6 rounded-2xl card-shadow border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-6 h-6 text-primary-foreground" />}
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            );
          })}
        </div>

        {/* Spray Modes — pressure-washer only */}
        {sprayModes?.length && sprayImage && (
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
                💡 Smart, Adjustable Spray Modes
              </h3>
              <p className="text-muted-foreground mb-8">
                Choose the perfect spray pattern for the job with three adjustable modes:
              </p>
              <div className="space-y-4">
                {sprayModes.map((mode, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
                  >
                    <div className={`w-3 h-3 rounded-full ${SPRAY_COLOR_MAP[mode.color] ?? "bg-primary"} mt-1.5`} />
                    <div>
                      <h4 className="font-semibold text-foreground">{mode.name}</h4>
                      <p className="text-sm text-muted-foreground">{mode.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 glow-orange rounded-3xl opacity-30" />
              <img
                src={sprayImage.src}
                alt={sprayImage.alt}
                className="relative z-10 w-full rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;