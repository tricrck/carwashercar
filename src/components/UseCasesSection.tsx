import useCases from "@/assets/use-cases.jpeg";
import scenarios from "@/assets/scenarios.jpeg";

const UseCasesSection = () => {
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Use Cases Grid */}
          <div className="relative group">
            <div className="absolute inset-0 glow-orange rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={useCases} 
              alt="Multiple Use Cases - Washing Cars, Floors, Mats, Roofs" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Scenarios Image */}
          <div className="relative group">
            <div className="absolute inset-0 glow-orange rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src={scenarios} 
              alt="Meet the needs of multiple scenarios" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>

        {/* Applications List */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            "🚗 Cars & Vehicles",
            "🏠 Home Exteriors",
            "🌳 Garden & Plants",
            "🏢 Driveways & Patios",
            "🪑 Outdoor Furniture",
            "🚲 Bikes & Motorcycles",
            "🧹 Floor Mats",
            "🏗️ Construction Equipment",
          ].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-secondary/30 border border-border/50 hover:border-primary/50 transition-colors"
            >
              <span className="text-lg">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
