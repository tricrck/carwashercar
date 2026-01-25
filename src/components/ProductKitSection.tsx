import productCase from "@/assets/product-case.jpeg";
import productCaseOpen from "@/assets/product-case-open.jpeg";
import installation from "@/assets/installation.jpeg";

const kitItems = [
  "High-Pressure Spray Gun",
  "2x Rechargeable 96V Batteries",
  "Spray Nozzles",
  "Foam Pot",
  "Hose with Filter Attachment",
  "Battery Charger",
  "Carrying Case",
];

const ProductKitSection = () => {
  return (
    <section className="py-20 bg-navy-dark relative">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🧰 Complete Kit for{" "}
            <span className="text-gradient">Immediate Use</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need is included. Just charge and start cleaning!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Kit Image 1 */}
          <div className="relative group">
            <img 
              src={productCase} 
              alt="Complete Kit in Carrying Case" 
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Kit Image 2 */}
          <div className="relative group">
            <img 
              src={productCaseOpen} 
              alt="Kit Contents Display" 
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Kit Image 3 */}
          <div className="relative group">
            <img 
              src={installation} 
              alt="Easy Installation Guide" 
              className="w-full h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* Kit Items */}
        <div className="gradient-card p-8 rounded-3xl border border-border/50 max-w-3xl mx-auto">
          <h3 className="font-display font-bold text-xl mb-6 text-center">Your Purchase Includes:</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {kitItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm">✓</span>
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
