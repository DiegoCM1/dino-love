"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  { src: "/images/thumbnail.png", caption: "Nuestro primer rawr 🦕" },
  { src: "/images/thumbnail.png", caption: "La llama más tierna 🦙" },
  { src: "/images/thumbnail.png", caption: "Dino-dance night 💃🦖" },
  { src: "/images/thumbnail.png", caption: "Captura 4" },
  { src: "/images/thumbnail.png", caption: "Captura 5" },
  { src: "/images/thumbnail.png", caption: "Captura 6" },
];

export default function Gallery() {
  const [selected, setSelected] = useState<{
    src: string;
    caption: string;
  } | null>(null);

  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Galería de Momentos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-md aspect-[3/4]"
            whileHover={{ rotate: 2, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            onClick={() => {
              if (typeof window !== "undefined" && window.innerWidth < 640) {
                setSelected(img);
              }
            }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={300}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 sm:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <div className="absolute inset-0 pointer-events-none flex flex-wrap items-center justify-center text-6xl gap-4 opacity-20">
              <span>🦖</span>
              <span>🦕</span>
              <span>🦙</span>
            </div>
            <div className="relative z-10 max-h-[80vh] w-auto p-4">
              <Image
                src={selected.src}
                alt={selected.caption}
                width={400}
                height={600}
                className="object-contain w-full h-full"
              />
              <p className="mt-2 text-center text-white">{selected.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
