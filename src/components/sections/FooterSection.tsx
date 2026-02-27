import { Phone } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 gradient-hero border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center">
              <span className="font-display font-bold text-primary-foreground">PT</span>
            </div>
            <div>
              <span className="font-display font-bold text-foreground">PrimeTech</span>
              <p className="text-sm text-muted-foreground">Clean Faster, Work Smarter</p>
            </div>
          </div>

          <a
            href="tel:0797853894"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-600 text-foreground font-bold hover:bg-green-500 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Call us: 0797853894
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-3 text-center text-sm text-muted-foreground">
          <p className="order-1">© {new Date().getFullYear()} PrimeTech. All rights reserved.</p>

          <p className="text-xs md:text-[10px] text-zinc-400 uppercase tracking-widest order-3 md:order-2">
            Powered by{" "}
            <a
              href="https://nerdwaretechnologies.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition-all duration-300"
            >
              Nerdware Systems Limited
            </a>
          </p>

          <p className="order-2 md:order-3">Countrywide Delivery · Pay on Delivery · Same Day in Nairobi</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;