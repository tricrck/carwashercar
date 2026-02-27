import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">

          {/* Left — Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 hover:opacity-80 transition-opacity">
            <div className="w-9 h-9 rounded-full gradient-cta flex items-center justify-center shadow-sm">
              <span className="font-display font-bold text-primary-foreground text-sm">PT</span>
            </div>
            <span className="font-display font-bold text-foreground text-base tracking-tight">
              PrimeTech
            </span>
          </Link>

          {/* Right — Phone */}
          <div className="shrink-0">
            <a
              href="tel:0797853894"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-7 h-7 rounded-full bg-gray-100 group-hover:bg-blue-50 flex items-center justify-center transition-colors">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="hidden sm:inline text-sm font-medium">0797853894</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;