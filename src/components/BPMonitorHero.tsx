import { motion } from "framer-motion";
import { ShoppingCart, Phone, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/bp-monitor-daily.jpeg";

const badges = ["Countrywide Delivery", "Pay on Delivery", "Same Day in Nairobi"];

const BPMonitorHero = () => {
    const scrollToOrder = () => {
        document.getElementById("order-form")?.scrollIntoView({ behavior: "smooth" });
    };
  return (
    <section className="relative overflow-hidden border-b border-border py-16 md:py-24">
      {/* Subtle glow */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 md:grid-cols-2 grid lg:grid-cols-2 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            🔥 Limited Time Offer
          </span>
          <h1 className="mb-4 font-display text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Smart Wrist{" "}
            <span className="text-gradient">Blood Pressure</span>{" "}
            Monitor
          </h1>
          <p className="mb-6 max-w-md text-lg text-muted-foreground">
            This Smart Wrist Blood Pressure Monitor delivers fast, accurate readings at the press of a button anytime, anywhere. Its sleek, lightweight design makes it ideal for home, office, or travel use with no complicated setup required. Featuring a large LED color screen, voice broadcast, and irregular heartbeat detection, it gives you medical-standard accuracy with everyday simplicity so you can track, understand, and protect your health with confidence.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 py-5">
              <Button variant="hero" size="xl" onClick={scrollToOrder}>
                <ShoppingCart className="w-5 h-5" />
                Order Now - Ksh 2,500
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-2xl bg-primary/10 blur-2xl" />
            <img
              src={heroImg}
              alt="Smart Wrist Blood Pressure Monitor with LED display"
              className="relative z-10 w-full max-w-md rounded-xl object-cover"
              loading="eager"
            />
            <div className="absolute bottom-4 left-4 z-20 rounded-lg bg-primary px-4 py-2 font-display text-lg font-bold text-primary-foreground shadow-lg">
              Ksh 2,500
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BPMonitorHero;