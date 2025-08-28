import Image from "next/image";

const images = [
  { src: "/images/thumbnail.png", caption: "Nuestro primer rawr 🦕" },
  { src: "/images/thumbnail.png", caption: "La llama más tierna 🦙" },
  { src: "/images/thumbnail.png", caption: "Dino-dance night 💃🦖" },
  { src: "/images/thumbnail.png", caption: "Captura 4" },
  { src: "/images/thumbnail.png", caption: "Captura 5" },
  { src: "/images/thumbnail.png", caption: "Captura 6" },
];

export default function GalleryPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Galería de Momentos</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, idx) => (
          <div key={idx} className="break-inside-avoid overflow-hidden rounded-xl shadow-md">
            <Image
              src={img.src}
              alt={img.caption}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
            <div className="p-2 text-xs text-center">{img.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
