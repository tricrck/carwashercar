import { motion } from "framer-motion";
import { ShoppingCart, Phone, Package, Truck, CreditCard, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { type Product } from "@/components/data/products";

interface Props { product: Product }

const CTASection = ({ product }: Props) => {
  const { product: info } = product;
  const { price, delivery, contact, name } = info;

  const whatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp}${
        contact.whatsappMessage
          ? `?text=${encodeURIComponent(contact.whatsappMessage)}`
          : ""
      }`
    : `tel:${contact.phone}`;

  const deliveryCards = [
    { icon: Truck,      title: "Countrywide Delivery", desc: "We deliver across Kenya",       show: delivery.nationwide },
    { icon: CreditCard, title: "Pay on Delivery",       desc: "No upfront payment needed",     show: delivery.payOnDelivery },
    { icon: Clock,      title: `Same Day (${delivery.sameDayCity})`, desc: delivery.nextDayOutsideCity ? "Next day outside Nairobi" : `Delivered same day in ${delivery.sameDayCity}`, show: true },
    { icon: Package,    title: "Delivery Fee",           desc: delivery.deliveryFee ? `${delivery.deliveryFee.currency} ${delivery.deliveryFee.min} – ${delivery.deliveryFee.max}` : "Contact us for rates", show: true },
  ].filter((d) => d.show);

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
            👉 Order Now &{" "}
            <span className="text-gradient">Save!</span>
          </h2>
          <p className="mb-6 text-muted-foreground">{info.offer} — grab yours today.</p>

          <div className="mb-6">
            <span className="font-display text-5xl font-bold text-primary">
              {price.currency} {price.amount.toLocaleString()}
            </span>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <Button
              size="lg"
              asChild
              className="rounded-lg bg-primary px-8 font-semibold text-primary-foreground shadow-lg hover:shadow-xl"
            >
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="mr-2 h-4 w-4" />
                Order Now — {price.currency} {price.amount.toLocaleString()}
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="whatsapp"
              className="rounded-lg px-8 font-semibold"
            >
              <a href={`tel:${contact.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call to Order
              </a>
            </Button>
          </div>

          <div className={`grid gap-4 ${deliveryCards.length <= 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-4"}`}>
            {deliveryCards.map((d) => (
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

export default CTASection;