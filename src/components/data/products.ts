// At the top of products.ts
import { Images } from "@/components/data/images";
// ─── Types ────────────────────────────────────────────────────────────────────

export interface Price {
  amount: number;
  currency: string;
}

export interface DeliveryFee {
  min: number;
  max: number;
  currency: string;
}

export interface Delivery {
  nationwide: boolean;
  payOnDelivery: boolean;
  sameDayCity: string;
  nextDayOutsideCity?: boolean;
  deliveryFee?: DeliveryFee;
}

export interface Contact {
  phone: string;
  whatsapp?: string;
  whatsappMessage?: string;
}

export interface ProductInfo {
  name: string;
  price: Price;
  description: string;
  offer: string;
  delivery: Delivery;
  contact: Contact;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface SprayMode {
  name: string;
  description: string;
  color: string;
}

export interface ProductImage {
  src: string;   // asset path matching the original TSX import
  alt: string;
  section: "hero" | "features" | "kit" | "useCases" | "gallery";
}

export interface Product {
  id: string;
  product: ProductInfo;
  images: ProductImage[];
  features: Feature[];
  customerBenefits: string[];
  tagline: string;
  targetAudience: string[];
  // Pressure Washer only
  sprayModes?: SprayMode[];
  kitContents?: string[];
  useCases?: string[];
}

// ─── Pressure Washer ──────────────────────────────────────────────────────────

export const pressureWasher: Product = {
  id: "pressure-washer",
  product: {
    name: "Rechargeable Cordless High Pressure Car Washer Gun",
    price: {
      amount: 4999,
      currency: "KSH",
    },
    description:
      "This cordless, battery-powered pressure washer delivers strong water pressure for effective cleaning at home or on the go. Its lightweight, compact design makes it easy to carry and use anywhere — no power outlets or cords required. Equipped with a multifunctional adjustable nozzle, you can switch effortlessly between high pressure direct spray, wide fan spray, or gentle shower mode to handle everything from car washing to outdoor and household cleaning.",
    offer: "Limited Time Offer",
    delivery: {
      nationwide: true,
      payOnDelivery: true,
      sameDayCity: "Nairobi",
    },
    contact: {
      phone: "0797853894",
    },
  },
  images: [
    // HeroSection.tsx
    {
      src: Images.productHero,
      alt: "High Pressure Spray Gun Complete Kit",
      section: "hero",
    },
    {
      src: Images.productKitDisplay,
      alt: "Complete Kit with 2 Batteries and Charger",
      section: "hero",
    },
    {
      src: Images.productFunction,
      alt: "Function Display - Spray Gun Features",
      section: "hero",
    },
    // FeaturesSection.tsx
    {
      src: Images.sprayModes,
      alt: "Three Water Spray Modes",
      section: "features",
    },
    // ProductKitSection.tsx
    {
      src: Images.kitOpen1,
      alt: "Complete Kit in Carrying Case",
      section: "kit",
    },
    {
      src: Images.kitOpen2,
      alt: "Kit Contents Display",
      section: "kit",
    },
    {
      src: Images.kitOpen3,
      alt: "Easy Installation Guide",
      section: "kit",
    },
    // UseCasesSection.tsx
    {
      src: Images.useCases,
      alt: "Multiple Use Cases - Washing Cars, Floors, Mats, Roofs",
      section: "useCases",
    },
    {
      src: Images.scenarios,
      alt: "Meet the needs of multiple scenarios",
      section: "useCases",
    },
  ],
  features: [
    {
      icon: "Zap",
      title: "High-Pressure Power",
      description:
        "Delivers strong water pressure for deep cleaning stubborn dirt on vehicles, patios, and outdoor surfaces.",
    },
    {
      icon: "Battery",
      title: "96V Rechargeable Battery",
      description:
        "High-capacity batteries provide hours of runtime without being tied to a power outlet.",
    },
    {
      icon: "Droplets",
      title: "Flexible Water Source",
      description:
        "Draws water from buckets, faucets, bottles, or tanks — no special connections needed.",
    },
    {
      icon: "Settings2",
      title: "Easy Assembly",
      description:
        "Ready-to-use setup with ergonomic design for comfort during extended cleaning sessions.",
    },
  ],
  sprayModes: [
    {
      name: "0° Jet Mode",
      description: "Intense, focused spray for tough dirt and stains",
      color: "red",
    },
    {
      name: "40° Wide Spray",
      description: "Broad coverage for large surfaces",
      color: "orange",
    },
    {
      name: "Foam Mode",
      description: "Ideal for applying soap or cleaning solutions evenly",
      color: "cyan",
    },
  ],
  kitContents: [
    "High-Pressure Spray Gun",
    "2x Rechargeable 96V Batteries",
    "Spray Nozzles",
    "Foam Pot",
    "Hose with Filter Attachment",
    "Battery Charger",
    "Carrying Case",
  ],
  useCases: [
    "Cars & Vehicles",
    "Home Exteriors",
    "Garden & Plants",
    "Driveways & Patios",
    "Outdoor Furniture",
    "Bikes & Motorcycles",
    "Floor Mats",
    "Construction Equipment",
  ],
  customerBenefits: [
    "Cordless convenience meets electric-grade power",
    "Adjustable modes for every cleaning need",
    "Easy setup — no plumber required",
    "Reliable performance for home or professional use",
    "Portable and lightweight design",
    "Long-lasting rechargeable batteries",
  ],
  tagline: "Take Your Cleaning to the Next Level",
  targetAudience: ["Busy homeowners", "Car enthusiasts", "Outdoor maintenance professionals"],
};

// ─── BP Monitor ───────────────────────────────────────────────────────────────

export const bpMonitor: Product = {
  id: "bp-monitor",
  product: {
    name: "Smart Wrist Blood Pressure Monitor",
    price: {
      amount: 2500,
      currency: "KSH",
    },
    description:
      "This Smart Wrist Blood Pressure Monitor delivers fast, accurate readings at the press of a button anytime, anywhere. Its sleek, lightweight design makes it ideal for home, office, or travel use with no complicated setup required. Featuring a large LED color screen, voice broadcast, and irregular heartbeat detection, it gives you medical-standard accuracy with everyday simplicity so you can track, understand, and protect your health with confidence.",
    offer: "Limited Time Offer",
    delivery: {
      nationwide: true,
      payOnDelivery: true,
      sameDayCity: "Nairobi",
    },
    contact: {
      phone: "0797853894",
      whatsapp: "254797853894",
      whatsappMessage: "Hi, I want to order the Smart Wrist Blood Pressure Monitor",
    },
  },
  images: [
    // BPMonitorHero.tsx
    {
      src: Images.bpMonitorDaily,
      alt: "Smart Wrist Blood Pressure Monitor with LED display",
      section: "hero",
    },
    {
      src: Images.bpMonitorPackage,
      alt: "Monitor with packaging and USB cable",
      section: "hero",
    },
    {
      src: Images.bpMonitorWrist,
      alt: "Monitor worn on wrist",
      section: "hero",
    },
    // BPMonitorGallery.tsx
    {
      src: Images.bpMonitorBox,
      alt: "Blood pressure monitor complete package",
      section: "gallery",
    },
    {
      src: Images.bpMonitorFeatures,
      alt: "Features: auto power-off, voice broadcast, IHB detection",
      section: "gallery",
    },
    {
      src: Images.bpMonitorPackage,
      alt: "Monitor with packaging and USB cable",
      section: "gallery",
    },
    {
      src: Images.bpMonitorWrist,
      alt: "Monitor worn on wrist",
      section: "gallery",
    },
    {
      src: Images.bpMonitorAccuracy,
      alt: "Medical standard accuracy ±3mmHg",
      section: "gallery",
    },
  ],
  features: [
    {
      icon: "Activity",
      title: "Medical Accuracy ±3mmHg",
      description: "Reliable systolic, diastolic & pulse readings.",
    },
    {
      icon: "Eye",
      title: "Large LED Color Screen",
      description: "Three-color display, easy to read even in low light.",
    },
    {
      icon: "Volume2",
      title: "Voice Broadcast",
      description: "Results read aloud — perfect for seniors.",
    },
    {
      icon: "AlertTriangle",
      title: "IHB & High BP Alerts",
      description: "Automatic irregular heartbeat & high BP warnings.",
    },
    {
      icon: "Battery",
      title: "USB Rechargeable",
      description: "No battery replacements. Lightweight & portable.",
    },
    {
      icon: "Brain",
      title: "Memory Function",
      description: "Stores readings to track health trends.",
    },
  ],
  customerBenefits: [
    "Medical Accuracy ±3mmHg",
    "Large LED Color Screen",
    "Voice Broadcast for seniors",
    "IHB & High BP Alerts",
    "USB Rechargeable — no battery replacements",
    "Memory Function to track health trends",
  ],
  tagline: "Take charge of your health today. Early monitoring saves lives.",
  targetAudience: ["Seniors", "Home users", "Office workers", "Travelers"],
};

// ─── All Products ─────────────────────────────────────────────────────────────

export const products: Product[] = [pressureWasher, bpMonitor];

export const getProductById = (id: string): Product | undefined =>
  products.find((p) => p.id === id);

// ─── Image Helpers ────────────────────────────────────────────────────────────

export type ImageSection = ProductImage["section"];

export const getImagesBySection = (product: Product, section: ImageSection): ProductImage[] =>
  product.images.filter((img) => img.section === section);