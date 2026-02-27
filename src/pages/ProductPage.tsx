import { useParams, Navigate } from "react-router-dom";
import { getProductById } from "@/components/data/products";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProductKitSection from "@/components/sections/ProductKitSection";
import UseCasesSection from "@/components/sections/UseCasesSection";
import WhyCustomersLoveSection from "@/components/sections/WhyCustomersLoveSection";
import GallerySection from "@/components/sections/GallerySection";
// import CTASection from "@/components/sections/CTASection";
import OrderFormSection from "@/components/sections/OrderFormSection";
import FooterSection from "@/components/sections/FooterSection";
import { useEffect } from "react";

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) return <Navigate to="/" replace />;

  const hasKit     = !!product.kitContents?.length;
  const hasUses    = !!product.useCases?.length;
  const hasGallery = product.images.some((i) => i.section === "gallery");

  return (
    <main>
      <Header />
      <HeroSection product={product}/>
      <FeaturesSection product={product} />
      {hasKit     && <ProductKitSection product={product} />}
      {hasUses    && <UseCasesSection   product={product} />}
      {hasGallery && <GallerySection    product={product} />}
      <WhyCustomersLoveSection product={product} />
      {/* <CTASection              product={product} /> */}
      <OrderFormSection        product={product} />
      <FooterSection />
    </main>
  );
};

export default ProductPage;