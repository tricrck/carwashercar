import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Truck, CreditCard, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

type Product = "original" | "bpmonitor";

const PRODUCT_CONFIG: Record<Product, {
  title: string;
  subtitle: string;
  price: string;
  originalPrice: string;
  savings: string;
  formTitle: string;
}> = {
  original: {
    title: "Order Now & Save!",
    subtitle: "Experience effortless cleaning today with our special offer price.",
    price: "Ksh 4,999",
    originalPrice: "Ksh 7,999",
    savings: "Save Ksh 3,000! 🔥",
    formTitle: "Fill Your Details to Place Order",
  },
  bpmonitor: {
    title: "Order Now & Save!",
    subtitle: "Monitor your blood pressure from the comfort of your home.",
    price: "Ksh 2,500",
    originalPrice: "",
    savings: "",
    formTitle: "Fill Your Details to Place Order",
  },
};

const OrderFormSection = ({ activePage }: { activePage: Product }) => {
  const product = PRODUCT_CONFIG[activePage];

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
    location: "",
    additionalInfo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      // Track conversion event
      if (window.gtag) {
        window.gtag('event', 'form_submit', {
          form_type: 'order',
          product: activePage,
          location: formData.location,
        });
      }
      
      toast({
        title: "Order Submitted! 🎉",
        description: "We'll call you shortly to confirm your order.",
      });
      
      setFormData({
        fullName: "",
        phone: "",
        altPhone: "",
        location: "",
        additionalInfo: "",
      });
    } catch (error) {
      console.error('Form submission error:', error);
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
    <section id="order-form" className="py-20 bg-navy-dark relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing & Delivery Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                👉 {product.title.split("&")[0]}&{" "}
                <span className="text-gradient">Save!</span>
              </h2>
              <p className="text-muted-foreground">{product.subtitle}</p>
            </div>

            {/* Price Card */}
            <div className="gradient-card p-8 rounded-3xl border border-primary/30 glow-orange">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-5xl font-black text-primary">{product.price}</span>
                <span className="text-muted-foreground line-through">{product.originalPrice}</span>
              </div>
              <p className="text-green-500 font-semibold">{product.savings}</p>
            </div>

            {/* Delivery Info */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-xl">Delivery Information</h3>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <Truck className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Countrywide Delivery</p>
                    <p className="text-sm text-muted-foreground">We deliver across Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <CreditCard className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Pay on Delivery</p>
                    <p className="text-sm text-muted-foreground">No upfront payment needed</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Same Day (Nairobi)</p>
                    <p className="text-sm text-muted-foreground">Next day outside Nairobi</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 border border-border/50">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">Delivery Fee</p>
                    <p className="text-sm text-muted-foreground">Ksh 200 – Ksh 400</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-xl bg-green-600/20 border border-green-600/30">
              <p className="font-semibold text-foreground mb-2">For any inquiries, reach us:</p>
              <a 
                href="tel:0797853894"
                className="inline-flex items-center gap-2 text-green-500 font-bold text-xl hover:underline"
              >
                <Phone className="w-5 h-5" />
                0797853894
              </a>
            </div>
          </div>

          {/* Order Form */}
          <div className="gradient-card p-8 rounded-3xl border border-border/50 card-shadow">
            <h3 className="font-display font-bold text-2xl mb-6">
              {product.formTitle}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Hidden field so EmailJS knows which product was ordered */}
              <input type="hidden" name="product" value={activePage} />

              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="bg-secondary/50 border-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0712345678"
                  className="bg-secondary/50 border-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-foreground mb-2">
                  Location *
                </label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Nairobi, Westlands"
                  className="bg-secondary/50 border-border"
                  required
                />
              </div>

              <div>
                <label htmlFor="altPhone" className="block text-sm font-medium text-foreground mb-2">
                  Alternative Phone Number
                </label>
                <Input
                  id="altPhone"
                  name="altPhone"
                  type="tel"
                  value={formData.altPhone}
                  onChange={handleChange}
                  placeholder="Optional"
                  className="bg-secondary/50 border-border"
                />
              </div>

              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-foreground mb-2">
                  Additional Information
                </label>
                <Textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  placeholder="e.g. Number of sets, exact address, Estate, Apartment, House no., etc"
                  rows={4}
                  className="bg-secondary/50 border-border resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="hero" 
                size="xl" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Order 🚀"}
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