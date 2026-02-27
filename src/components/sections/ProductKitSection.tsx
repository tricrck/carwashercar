import { type Product, getImagesBySection } from "@/components/data/products";

interface Props { product: Product }

const ProductKitSection = ({ product }: Props) => {
  const { kitContents } = product;
  const kitImages = getImagesBySection(product, "kit");

  if (!kitContents?.length) return null;

  return (
    <section className="py-20 bg-navy-dark relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🧰 Complete Kit for{" "}
            <span className="text-gradient">Immediate Use</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need is included. Just charge and start!
          </p>
        </div>

        {/* Kit images */}
        {kitImages.length > 0 && (
          <div className={`grid gap-8 mb-16 ${
            kitImages.length === 1 ? "max-w-md mx-auto" :
            kitImages.length === 2 ? "sm:grid-cols-2 max-w-2xl mx-auto" :
            "lg:grid-cols-3"
          }`}>
            {kitImages.map((img, i) => (
              <div key={i} className="relative group">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-80 object-cover rounded-2xl shadow-xl group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        )}

        {/* Kit items list */}
        <div className="gradient-card p-8 rounded-3xl border border-border/50 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-xl mb-6 text-center">
            Your Purchase Includes:
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {kitContents.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">
                  ✓
                </span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductKitSection;