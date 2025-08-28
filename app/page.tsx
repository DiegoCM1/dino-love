import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import SecretMessage from "@/components/secret-message";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-5xl mx-auto gap-16 py-10 px-2 lg:px-4">
      <Hero />
      <Gallery />
      <SecretMessage />
    </div>
  );
}
