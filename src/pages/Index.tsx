import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import ProductKitSection from "@/components/ProductKitSection";
import WhyCustomersLoveSection from "@/components/WhyCustomersLoveSection";
import OrderFormSection from "@/components/OrderFormSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <UseCasesSection />
      <ProductKitSection />
      <WhyCustomersLoveSection />
      <OrderFormSection />
      <FooterSection />
    </main>
  );
};

export default Index;
