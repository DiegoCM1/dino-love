"use client";

import MeteorShower from "@/components/magicui/meteors";
import WordPullUp from "@/components/magicui/word-pull-up";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/magicui/fade-in";
import { Play, Pause, Heart as ImageIcon } from "lucide-react";
import BlurIn from "@/components/magicui/blur-in";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";


const phrases = [
  "Los locos al manicomio, los cuerdos al consulado, el tiempo se pasa volando, cuando te tengo a ti a mi lado.",
  "Si me dieran un peso por cada vez que te pienso, sería pobre, porque ya te habría comprado 1000 pares de botas con ese dinero.",
  "Te amo ❤",
  "Porque mi cuerpo, se quema, de tanta pasión, que corre en mi mente, la imaginación. 🔥",
  "Besarte es mi pasatiempo favorito, ¡y lo sabes!",
  "Guereja patas de coneja, eres todo lo que busco 🦕💘🦕",
  "Si, soy cursi.",
  "Cada vez que hablamos los problemas desaparecen, nada existe excepto tu voz y tu imagen dentro de mi mente.",
  "Así el mundo se acabe, y todo lo que existe mañana desapareciera, esta llama no se apaga, hasta que yo me muera 🦙❤.",
  "Los carros son azules, gris es la carretera, si tu estuvieras más lejos, yo daría lo que fuera, por estar junto a mi guera.",
  "Eres el sueño del que nunca quiero despertar.",
  "Le hace falta un beso, que le de una rosa, que le haga sentir como si fuera su novia (Ya lo eres, besote en la frentona 😘).",
  "Que hasta donde te quiero, esa necia pregunta no responderé, si en mi amor no hay distancias, si no hay cerca no hay lejos, ¿como te haré saber?.",
  "Ahora se porque mi corazón nunca estuvo deacuerdo.",
  "Siempre te elegiría una y otra vez.",
  "No le vayas a decir, pero me estoy fijando en mi secretaria 🤫👀",
  "Pensar en ti es casi como respirar, básicamente inevitable. 💘",
  "Chiquita, así estás de trompuda? O quieres beso? 😘💓.",
  "El tiempo es muy raro, es lento cuando estamos lejos y es lo más rápido del mundo cuando hablo contigo, pero se detiene cuando te veo a los ojos",
];

export default function Hero() {
  const [phrase, setPhrase] = useState(phrases[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [showHeart, setShowHeart] = useState(false);

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

          <motion.div
            className="absolute top-2/4 right-0 text-4xl"
            animate={{ x: ["-50%", "-110%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            🦕
          </motion.div>

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
                  className="flex items-center gap-2 w-full group/Heart"
                  onClick={() => {
                    setShowHeart(true);
                    setTimeout(() => setShowHeart(false), 1500);
                  }}
                >
                  <div>Te elijo otra vez</div>
                  <ImageIcon className="h-5 w-5 lg:group-hover/Heart:translate-x-1 transition-all duration-300" />
                </Button>
              </a>
              <div className="flex-1">
                <Button
                  onClick={() => {
                    const audio = audioRef.current;
                    if (!audio) return;
                    if (isPlaying) {
                      audio.pause();
                    } else {
                      audio.play();
                    }
                    setIsPlaying(!isPlaying);
                  }}
                  variant="default"
                  size="lg"
                  className="flex items-center gap-2 w-full group/Play"
                >
                  <div>{isPlaying ? "Pausar" : "Música Maestro"}</div>
                  {isPlaying ? (
                    <Pause className="h-5 w-5 lg:group-hover/Play:translate-x-1 transition-all duration-300" />
                  ) : (
                    <Play className="h-5 w-5 lg:group-hover/Play:translate-x-1 transition-all duration-300" />
                  )}
                </Button>
                <audio
                  ref={audioRef}
                  src="/music/mi-sorpresa-fuiste-tu.mp3"
                  className="hidden"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
      <MeteorShower />
      <AnimatePresence>
        {showHeart && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="text-9xl text-pink-500 drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 1, 0] }}
              transition={{ duration: 1.5 }}
            >
              ❤️
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
