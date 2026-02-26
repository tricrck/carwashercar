import { motion } from "framer-motion";
import { Activity, Volume2, Eye, Battery, Brain, AlertTriangle } from "lucide-react";

const features = [
  { icon: Activity, title: "Medical Accuracy ±3mmHg", desc: "Reliable systolic, diastolic & pulse readings." },
  { icon: Eye, title: "Large LED Color Screen", desc: "Three-color display, easy to read even in low light." },
  { icon: Volume2, title: "Voice Broadcast", desc: "Results read aloud — perfect for seniors." },
  { icon: AlertTriangle, title: "IHB & High BP Alerts", desc: "Automatic irregular heartbeat & high BP warnings." },
  { icon: Battery, title: "USB Rechargeable", desc: "No battery replacements. Lightweight & portable." },
  { icon: Brain, title: "Memory Function", desc: "Stores readings to track health trends." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const BPMonitorFeatures = () => {
  return (
    <section className="border-b border-border py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-3 text-center font-display text-3xl font-bold text-foreground md:text-4xl">
          🔥 Why Customers Love It
        </h2>
        <p className="mb-10 text-center text-muted-foreground">
          Smart technology meets everyday health monitoring.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/40 hover:shadow-card"
            >
              <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 font-display text-base font-semibold text-card-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BPMonitorFeatures;