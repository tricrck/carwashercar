import { Check } from "lucide-react";

const benefits = [
  "Cordless convenience meets electric-grade power",
  "Adjustable modes for every cleaning need",
  "Easy setup — no plumber required",
  "Reliable performance for home or professional use",
  "Portable and lightweight design",
  "Long-lasting rechargeable batteries",
];

const WhyCustomersLoveSection = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            🌟 Why Customers{" "}
            <span className="text-gradient">Love It</span>
          </h2>
          <p className="text-muted-foreground mb-12">
            Wave goodbye to slow, ineffective cleaning tools. Get power, flexibility, and precision — all in one compact device.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-5 rounded-xl gradient-card border border-border/50 text-left hover:border-primary/50 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-green-500" />
                </div>
                <span className="font-medium text-foreground">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-primary/20 to-orange-glow/10 border border-primary/30">
            <p className="font-display text-xl sm:text-2xl font-bold mb-2">
              Take Your Cleaning to the Next Level
            </p>
            <p className="text-muted-foreground">
              Perfect for busy homeowners, car enthusiasts, and outdoor maintenance pros.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyCustomersLoveSection;
