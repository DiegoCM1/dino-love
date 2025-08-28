"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import MeteorShower from "@/components/magicui/meteors";

const PASSWORD = "dinosaurioherido!"; // example password

export default function SecretMessage() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PASSWORD) {
      setUnlocked(true);
      setError("");
    } else {
      setError("Ese no es el rawr correcto 🦖🦙");
      setUnlocked(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden rounded-xl border bg-background p-6">
      <motion.div
        className="absolute bottom-4 right-0 text-4xl"
        animate={{ x: ["-10%", "-110%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        🦕
      </motion.div>
      <motion.div
        className="absolute top-20 left-0 text-4xl"
        animate={{ x: ["110%", "-10%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        🦙
      </motion.div>
      <div className="absolute inset-0 opacity-30">
        <MeteorShower />
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-4">Carta Extremadamente Sentimental. Lease Con Precaución ‼️</h2>
        {!unlocked && (
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm flex flex-col items-center gap-4"
          >
            <motion.input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nuestra palabra 🦕✨🤫"
              className="w-full rounded-md border px-4 py-2"
              animate={error ? { x: [-10, 10, -10, 10, 0] } : {}}
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-primary text-white"
            >
              Desbloquear 🔐
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
        )}

        {unlocked && (
          <div className="text-center mt-4 space-y-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-5xl"
            >
              🦕❤️🦙
            </motion.div>
            <p className="text-lg">Amore, nunca he sido de escribir palabras de amor... Tampoco había regalado flores ni esperado con tantas ansias a hablar con alguien, siempre pensé que esas cosas no eran para mi, que eran simplemente para otro tipo de persona.
            Pero entonces llegaste tú. Desde el día que te vi, el solo hecho de ver tu cara ya me ponía nervioso y desde el momento en que te ví sonreirme supe que tenía una oportunidad, una oportunidad de tener algo real y genuino con aquella persona que tanto soñaba. Llego la primera cita, y supe que tu belleza no era todo lo que tenías, tenías algo más importante; tu persona. Y tu colita también of course, pero muchisimo más tu persona. 💘🦙🦕
            No he sido bueno escribiendo cartas, creo que una frase mal dicha en persona comunica más que cualquier carta, pero este día, para esta ocasión, sentí que tenía que hacerlo, sentí por primera vez la necesidad de escribir algo lindo en papel, bueno, en digital, a la persona que me encanta, mi persona favorita. 💘💝😍
            Contigo aprendí que las flores si tienen sentido, que  las palabras sí pueden abrazar, y que la vida se ve distinta cuando estás con la persona correcta. Gracias por hacerme sentír así, por hacerme conocer a ese Diego que ni siquiera yo conocía, y que ahora no quiero perder. Gracias, en resumen, por ser mi novia, feliz aniversario guerita 🥳🎊🎉.
            Te amo demasiado 💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💓💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝💝🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦕🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦙🦕🦕🦕🦕🦕🦕🦙🦕🦙🦕🦕🦙🦕🦙🦕🦙🦕🦙🦕🦙🦕🦙🦕🦙🦙💓
            </p>
            <FloatingHearts />
          </div>
        )}
      </div>
    </section>
  );
}

function FloatingHearts() {
  const hearts = Array.from({ length: 15 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {hearts.map((_, i) => (
        <motion.span
          key={i}
          className="absolute text-pink-500"
          initial={{
            x: `${Math.random() * 100}%`,
            y: "100%",
            opacity: 0,
          }}
          animate={{ y: "-10%", opacity: 1 }}
          transition={{
            duration: 6,
            delay: i * 0.2,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}
