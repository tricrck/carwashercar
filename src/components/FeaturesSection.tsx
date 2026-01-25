import { Zap, Battery, Droplets, Settings2 } from "lucide-react";
import sprayModes from "@/assets/spray-modes.jpeg";

const features = [
  {
    icon: Zap,
    title: "High-Pressure Power",
    description: "Delivers strong water pressure for deep cleaning stubborn dirt on vehicles, patios, and outdoor surfaces.",
  },
  {
    icon: Battery,
    title: "96V Rechargeable Battery",
    description: "High-capacity batteries provide hours of runtime without being tied to a power outlet.",
  },
  {
    icon: Droplets,
    title: "Flexible Water Source",
    description: "Draws water from buckets, faucets, bottles, or tanks — no special connections needed.",
  },
  {
    icon: Settings2,
    title: "Easy Assembly",
    description: "Ready-to-use setup with ergonomic design for comfort during extended cleaning sessions.",
  },
];

const sprayModesList = [
  {
    name: "0° Jet Mode",
    description: "Intense, focused spray for tough dirt and stains",
    color: "bg-red-500",
  },
  {
    name: "40° Wide Spray",
    description: "Broad coverage for large surfaces",
    color: "bg-orange-bright",
  },
  {
    name: "Foam Mode",
    description: "Ideal for applying soap or cleaning solutions evenly",
    color: "bg-cyan-water",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-navy-dark relative overflow-hidden">
      <div className="absolute inset-0 water-glow" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🔥 High-Pressure Power{" "}
            <span className="text-gradient">Meets Portability</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Designed for superior spraying force with cordless convenience. 
            Clean anywhere, anytime.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="gradient-card p-6 rounded-2xl card-shadow border border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl gradient-cta flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Spray Modes */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4">
              💡 Smart, Adjustable Spray Modes
            </h3>
            <p className="text-muted-foreground mb-8">
              Choose the perfect spray pattern for the job with three adjustable modes:
            </p>
            
            <div className="space-y-4">
              {sprayModesList.map((mode, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/50 border border-border/50"
                >
                  <div className={`w-3 h-3 rounded-full ${mode.color} mt-1.5`} />
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
              src={sprayModes} 
              alt="Three Water Spray Modes" 
              className="relative z-10 w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
