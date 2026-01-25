import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Truck, CreditCard, Clock, CheckCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const OrderFormSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    altPhone: "",
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
    
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      toast({
        title: "Missing Information",
        description: "Please fill in your full name and phone number.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Order Submitted! 🎉",
      description: "We'll call you shortly to confirm your order.",
    });
    
    setFormData({
      fullName: "",
      phone: "",
      altPhone: "",
      additionalInfo: "",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="order-form" className="py-20 bg-navy-dark relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Pricing & Delivery Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                👉 Order Now &{" "}
                <span className="text-gradient">Save!</span>
              </h2>
              <p className="text-muted-foreground">
                Experience effortless cleaning today with our special offer price.
              </p>
            </div>

            {/* Price Card */}
            <div className="gradient-card p-8 rounded-3xl border border-primary/30 glow-orange">
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-5xl font-black text-primary">Ksh 4,999</span>
                <span className="text-muted-foreground line-through">Ksh 7,999</span>
              </div>
              <p className="text-green-500 font-semibold">Save Ksh 3,000! 🔥</p>
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
              Fill Your Details to Place Order
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
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
