import { type Product, getImagesBySection } from "@/components/data/products";

const USE_CASE_EMOJIS: Record<string, string> = {
  "Cars & Vehicles":        "🚗",
  "Home Exteriors":         "🏠",
  "Garden & Plants":        "🌳",
  "Driveways & Patios":     "🏢",
  "Outdoor Furniture":      "🪑",
  "Bikes & Motorcycles":    "🚲",
  "Floor Mats":             "🧹",
  "Construction Equipment": "🏗️",
};

interface Props { product: Product }

const UseCasesSection = ({ product }: Props) => {
  const { useCases } = product;
  const useCaseImages = getImagesBySection(product, "useCases");

  if (!useCases?.length) return null;

  return (
    <section className="py-20 gradient-hero relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🪛 Multifunctional &{" "}
            <span className="text-gradient">Versatile</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Perfect for cars, bikes, driveways, fences, gardening tools, outdoor furniture, and more.
          </p>
        </div>

        {/* Use-case images */}
        {useCaseImages.length > 0 && (
          <div className={`grid gap-8 mb-12 ${useCaseImages.length >= 2 ? "lg:grid-cols-2" : ""}`}>
            {useCaseImages.map((img, i) => (
              <div key={i} className="relative group">
                <div className="absolute inset-0 glow-orange rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            ))}
          </div>
        )}

        {/* Applications grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((item, i) => {
            const emoji = USE_CASE_EMOJIS[item] ?? "✅";
            return (
              <div
                key={i}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors"
              >
                <span className="text-lg">{emoji} {item}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;