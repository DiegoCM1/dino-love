import Hero from "@/components/hero";
import Gallery from "@/components/gallery";
import SecretMessage from "@/components/secret-message";
import ThemeToggle from "@/components/theme-toggle";


export default function Home() {
  return (
     <div className="relative w-full flex flex-col items-center justify-center max-w-5xl mx-auto gap-16 py-10 px-2 lg:px-4">
      <div className="absolute top-2 right-4">
        <ThemeToggle />
      </div>
      <Hero />
      <Gallery />
      <SecretMessage />
    </div>
  );
}
