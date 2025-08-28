"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Play, Heart as ImageIcon } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";
import { useEffect, useState } from "react";

const phrases = [
  "Los locos al manicomio, los cuerdos al consulado, el tiempo se pasa volando, cuando te tengo a ti a mi lado.",
  "Si me dieran un peso por cada vez que te pienso, sería pobre, porque ya te habría comprado 1000 pares de botas con ese dinero.",
  "Te amo ❤",
  "Porque mi cuerpo, se quema, de tanta pasión, que corre en mi mente, la imaginación.",
  "Besarte es mi pasatiempo favorito, ¡y lo sabes!",
  "Guereja patas de coneja, eres todo lo que busco 🦕💘🦕",
  "Si, soy cursi.",
  "Cada vez que hablamos los problemas desaparecen, nada existe excepto tu voz y tu imagen dentro de mi mente.",
  "Así el mundo se acabe, y todo lo que existe mañana desapareciera, esta llama no se apaga, hasta que yo me muera 🦙❤.",
  "Los carros son azules, gris es la carretera, si tu estuvieras más lejos, yo daría lo que fuera, por estar junto a mi guera.",
  "Eres el sueño del que nunca quiero despertar.",
  "Escuchar tu voz es... Algo que nunca quiero dejar de hacer.",
  "Le hace falta un beso, que le de una rosa, que le haga sentir como si fuera su novia (Ya lo eres, besote en la frentona 😘).",
  "Que hasta donde te quiero, esa necia pregunta no responderé, si en mi amor no hay distancias, si no hay cerca no hay lejos, ¿como te haré saber?.",
  "Ahora se porque mi corazón nunca estuvo deacuerdo.",
  "Siempre te elegiría una y otra vez.",
  "No le vayas a decir, pero me estoy fijando en mi secretaria 🤫👀",
  "Eres mi hoy y todos mis mañanas.",
  "Llamaron loco a aquel que bailaba, aquellos que no podían oír la música.",
  "El tiempo es muy raro, es lento cuando estamos lejos y es lo más rápido del mundo cuando hablo contigo, pero se detiene cuando te veo a los ojos",
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
