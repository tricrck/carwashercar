import { motion } from "framer-motion";
import imgBox from "@/assets/bp-monitor-box.jpeg";
import imgFeatures from "@/assets/bp-monitor-features.jpeg";
import imgPackage from "@/assets/bp-monitor-package.jpeg";
import imgWrist from "@/assets/bp-monitor-wrist.jpeg";
import imgAccuracy from "@/assets/bp-monitor-accuracy.jpeg";

const images = [
  { src: imgBox, alt: "Blood pressure monitor complete package" },
  { src: imgFeatures, alt: "Features: auto power-off, voice broadcast, IHB detection" },
  { src: imgPackage, alt: "Monitor with packaging and USB cable" },
  { src: imgWrist, alt: "Monitor worn on wrist" },
  { src: imgAccuracy, alt: "Medical standard accuracy ±3mmHg" },
];

const BPMonitorGallery = () => {
  return (
    <section className="border-b border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {images.map((img, i) => (
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

export default BPMonitorGallery;