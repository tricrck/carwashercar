import { motion } from "framer-motion";
import { ShoppingCart, Phone, Package, Truck, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const deliveryInfo = [
  { icon: Truck, title: "Countrywide Delivery", desc: "We deliver across Kenya" },
  { icon: CreditCard, title: "Pay on Delivery", desc: "No upfront payment needed" },
  { icon: Clock, title: "Same Day (Nairobi)", desc: "Next day outside Nairobi" },
  { icon: Package, title: "Delivery Fee", desc: "Ksh 200 – Ksh 400" },
];

const BPMonitorCTA = () => {
  return (
    <section className="border-b border-border py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            👉 Order Now & Save!
          </h2>
          <p className="mb-6 text-muted-foreground">
            Take charge of your health today. Early monitoring saves lives.
          </p>

          <div className="mb-6">
            <span className="font-display text-5xl font-bold text-primary">Ksh 2,500</span>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-lg bg-primary px-8 font-semibold text-primary-foreground shadow-lg hover:shadow-xl"
            >
              <a href="https://wa.me/254797853894?text=Hi%2C%20I%20want%20to%20order%20the%20Smart%20Wrist%20Blood%20Pressure%20Monitor" target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order Now - Ksh 2,500
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              className="rounded-lg bg-accent px-8 font-semibold text-accent-foreground"
            >
              <a href="tel:0797853894">
                <Phone className="mr-2 h-4 w-4" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {deliveryInfo.map((d) => (
              <div key={d.title} className="rounded-lg border border-border bg-card p-4 text-center">
                <d.icon className="mx-auto mb-2 h-5 w-5 text-primary" />
                <p className="text-sm font-semibold text-card-foreground">{d.title}</p>
                <p className="text-xs text-muted-foreground">{d.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BPMonitorCTA;