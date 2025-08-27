"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Play, Image as ImageIcon } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";
import { useEffect, useState } from "react";

const phrases = [
  "Los locos al manicomio, los cuerdos al consulado, el tiempo se pasa volando, cuando te tengo a ti a mi lado.",
  "Quiero que cada día a tu lado sea mi mejor aventura.",
  "Tus ojos son mi refugio favorito.",
  "Contigo, cualquier lugar se siente como casa.",
  "Nuestro amor es mi historia favorita.",
  "Eres mi razón para sonreír cada mañana.",
  "En tus brazos encontré mi destino.",
  "Te amo más allá de las palabras.",
  "Cada beso tuyo es un suspiro de eternidad.",
  "Juntos, todo es posible.",
  "Eres el sueño que nunca quiero despertar.",
  "Mi corazón late al ritmo de tu voz.",
  "Tu risa es mi melodía preferida.",
  "Contigo aprendí que el amor es infinito.",
  "Eres el regalo que la vida me dio.",
  "Siempre te elegiría una y otra vez.",
  "Tu amor ilumina mis noches más oscuras.",
  "Eres mi hoy y todos mis mañanas.",
  "Desde que te conocí, todo tiene sentido.",
  "El tiempo se detiene cuando te miro.",
];

export default function Hero() {
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    const id = setInterval(() => {
      setPhrase((prev) => {
        let next = prev;
        while (next === prev) {
          next = phrases[Math.floor(Math.random() * phrases.length)];
        }
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative flex h-full w-full mx-auto items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50">
        <WordPullUp words="365 Días a tu lado" />

        <div className="text-lg text-neutral-500 dark:text-neutral-400 lg:px-1 w-full ">
          <BlurIn key={phrase} className="w-3/4 sm:w-2/3">
            {phrase}
          </BlurIn>

          <FadeIn direction="down" className="my-class">
            <div className="flex items-center gap-2 w-full lg:w-2/3 mt-6">
              <a
                href={process.env.GITHUB_URL}
                target="_blank"
                className="flex-1"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full group/Image"
                >
                  <div>Nosotros</div>
                  <ImageIcon className="h-5 w-5 lg:group-hover/Image:translate-x-1 transition-all duration-300" />
                </Button>
              </a>

              <a
                href="mailto:engage_intellect@protonmail.com"
                target="_blank"
                className="flex-1"
              >
                <Button
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full"
                >
                  <div>Música Maestro</div>
                  <Play className="h-5 w-5 lg:group-hover/Play:translate-x-1 transition-all duration-300" />
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
      <MeteorShower />
    </div>
  );
}
