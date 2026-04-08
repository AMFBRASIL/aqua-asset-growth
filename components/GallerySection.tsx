import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/assets/resort-lake.jpg", label: "Lago natural e paisagismo" },
  { src: "/assets/resort-pool.jpg", label: "Piscina e área de lazer" },
  { src: "/assets/resort-kids.jpg", label: "Parque aquático infantil" },
  { src: "/assets/resort-night-1.jpg", label: "Vista noturna — paisagismo iluminado" },
  { src: "/assets/resort-lounge.jpg", label: "Lounge com vista para piscina" },
  { src: "/assets/resort-bar.jpg", label: "Churrasqueira e bar gourmet" },
  { src: "/assets/resort-night-2.jpg", label: "Fachada iluminada à noite" },
  { src: "/assets/resort-aerial.jpg", label: "Vista aérea do empreendimento" },
  { src: "/assets/resort-playroom.jpg", label: "Brinquedoteca" },
  { src: "/assets/resort-night-3.jpg", label: "Jardins iluminados à noite" },
  { src: "/assets/resort-water.jpg", label: "Piscina principal" },
];

const GallerySection = () => {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const navigate = (dir: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + photos.length) % photos.length);
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Conheça o <span className="text-gradient-nature">Empreendimento</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Imagens reais do Ibiunature Aqua Clube — um resort completo pronto para operar.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
              onClick={() => setLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                  i === 0 ? "h-full min-h-[300px] md:min-h-[400px]" : "h-48 md:h-56"
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-3 left-3 right-3 text-primary-foreground text-sm font-body font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {photo.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 md:left-8 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 md:right-8 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              src={photos[lightbox].src}
              alt={photos[lightbox].label}
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="absolute bottom-6 text-primary-foreground font-body text-sm">
              {photos[lightbox].label} — {lightbox + 1}/{photos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
