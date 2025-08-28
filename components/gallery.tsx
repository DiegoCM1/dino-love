"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const images = [
  { src: "/images/thumbnail.png", caption: "Nuestro primer rawr 🦕" },
  { src: "/images/thumbnail.png", caption: "La llama más tierna 🦙" },
  { src: "/images/thumbnail.png", caption: "Dino-dance night 💃🦖" },
  { src: "/images/thumbnail.png", caption: "Captura 4" },
  { src: "/images/thumbnail.png", caption: "Captura 5" },
  { src: "/images/thumbnail.png", caption: "Captura 6" },
];

export default function Gallery() {
  return (
    <section className="w-full">
      <h2 className="text-3xl font-bold text-center mb-8">Galería de Momentos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            className="relative overflow-hidden rounded-xl shadow-md"
            whileHover={{ rotate: 2, scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={img.src}
              alt={img.caption}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2">
              {img.caption}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Link href="/gallery" className="text-primary underline">
          Ver más aventuras
        </Link>
      </div>
    </section>
  );
}
