import { motion } from "framer-motion";
import { type Product, getImagesBySection } from "@/components/data/products";

interface Props { product: Product }

const GallerySection = ({ product }: Props) => {
  const galleryImages = getImagesBySection(product, "gallery");

  if (!galleryImages.length) return null;

  const colClass =
    galleryImages.length <= 2 ? "grid-cols-2" :
    galleryImages.length === 3 ? "grid-cols-2 md:grid-cols-3" :
    galleryImages.length === 4 ? "grid-cols-2 md:grid-cols-4" :
    "grid-cols-2 md:grid-cols-3 lg:grid-cols-5";

  return (
    <section className="border-b border-border py-12">
      <div className="container mx-auto px-4">
        <div className={`grid ${colClass} gap-3`}>
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group overflow-hidden rounded-xl border border-border"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;