import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Truck, CreditCard, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import { type Product } from "@/components/data/products";

interface Props { product: Product }

const OrderFormSection = ({ product }: Props) => {
  const { product: info, id } = product;
  const { price, delivery, contact } = info;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    location: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.location.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your full name, phone number, and location.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Build derived strings for the template
      const deliveryFeeStr = delivery.deliveryFee
        ? `${delivery.deliveryFee.currency} ${delivery.deliveryFee.min} – ${delivery.deliveryFee.max}`
        : "To be confirmed";

      const totalStr = delivery.deliveryFee
        ? `${price.currency} ${(price.amount + delivery.deliveryFee.min).toLocaleString()} – ${(price.amount + delivery.deliveryFee.max).toLocaleString()}`
        : `${price.currency} ${price.amount.toLocaleString()}`;

      const deliveryTime = delivery.sameDayCity
        ? `Same Day (${delivery.sameDayCity})${delivery.nextDayOutsideCity ? " / Next Day (Other Areas)" : ""}`
        : "To be confirmed";

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          // ── Customer ─────────────────────────────────────
          fullName:       formData.fullName,
          phone:          formData.phone,
          altPhone:       formData.altPhone || "N/A",
          location:       formData.location,
          additionalInfo: formData.additionalInfo || "None",
          // ── Product ──────────────────────────────────────
          product_id:     id,
          product_name:   info.name,
          product_price:  `${price.currency} ${price.amount.toLocaleString()}`,
          // ── Delivery & totals ────────────────────────────
          delivery_fee:   deliveryFeeStr,
          total_estimate: totalStr,
          delivery_time:  deliveryTime,
          contact_phone:  contact.phone,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      if (window.gtag) {
        window.gtag("event", "form_submit", {
          form_type: "order",
          product: id,
          location: formData.location,
        });
      }

      toast({
        title: "Order Submitted! 🎉",
        description: "We'll call you shortly to confirm your order.",
      });

      setFormData({ fullName: "", phone: "", altPhone: "", location: "", additionalInfo: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your order. Please try again or call us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={`order-form`} className="py-20 bg-navy-dark relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* ── Left: Pricing & Delivery ─────────────────────── */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                👉 Order Now &{" "}
                <span className="text-gradient">Save!</span>
              </h2>
              <p className="text-muted-foreground">{info.offer} — fast delivery across Kenya.</p>
            </div>

            {/* Price card */}
            <div className="gradient-card p-8 rounded-3xl border border-primary/30 glow-orange">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-5xl font-black text-primary">
                  {price.currency} {price.amount.toLocaleString()}
                </span>
              </div>
              <p className="text-green-500 font-semibold">Pay on delivery. No upfront payment.</p>
            </div>

            {/* Delivery info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl">Delivery Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {delivery.nationwide && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <Truck className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Countrywide Delivery</p>
                      <p className="text-sm text-muted-foreground">We deliver across Kenya</p>
                    </div>
                  </div>
                )}
                {delivery.payOnDelivery && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Pay on Delivery</p>
                      <p className="text-sm text-muted-foreground">No upfront payment needed</p>
                    </div>
                  </div>
                )}
                {delivery.sameDayCity && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Same Day ({delivery.sameDayCity})</p>
                      <p className="text-sm text-muted-foreground">
                        {delivery.nextDayOutsideCity
                          ? "Next day outside Nairobi"
                          : `Same day in ${delivery.sameDayCity}`}
                      </p>
                    </div>
                  </div>
                )}
                {delivery.deliveryFee && (
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-semibold text-foreground">Delivery Fee</p>
                      <p className="text-sm text-muted-foreground">
                        {delivery.deliveryFee.currency} {delivery.deliveryFee.min} – {delivery.deliveryFee.max}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-xl bg-green-600/20 border border-green-600/30">
              <p className="font-semibold text-foreground mb-2">For any inquiries, reach us:</p>
              <a
                href={`tel:${contact.phone}`}
                className="inline-flex items-center gap-2 text-green-500 font-bold text-xl hover:underline"
              >
                <Phone className="w-5 h-5" />
                {contact.phone}
              </a>
            </div>
          </div>

          {/* ── Right: Order Form ────────────────────────────── */}
          <div className="gradient-card p-8 rounded-3xl border border-border/50 card-shadow">
            <h3 className="font-display font-bold text-2xl mb-6">
              Fill Your Details to Place Order
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName" name="fullName" value={formData.fullName}
                  onChange={handleChange} placeholder="Enter your full name"
                  className="bg-secondary/50 border-border" required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone" name="phone" type="tel" value={formData.phone}
                  onChange={handleChange} placeholder="e.g. 0712345678"
                  className="bg-secondary/50 border-border" required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                  Location *
                </label>
                <Input
                  id="location" name="location" value={formData.location}
                  onChange={handleChange} placeholder="e.g. Nairobi, Westlands"
                  className="bg-secondary/50 border-border" required
                />
              </div>

              <div>
                <label htmlFor="altPhone" className="block text-sm font-medium text-foreground mb-2">
                  Alternative Phone Number
                </label>
                <Input
                  id="altPhone" name="altPhone" type="tel" value={formData.altPhone}
                  onChange={handleChange} placeholder="Optional"
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                  Additional Information
                </label>
                <Textarea
                  id="additionalInfo" name="additionalInfo" value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="e.g. Number of units, exact address, estate, apartment, house no., etc."
                  rows={4} className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit" variant="hero" size="xl"
                className="w-full" disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting…" : "Submit Order 🚀"}
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll call you to confirm your order and delivery details.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OrderFormSection;