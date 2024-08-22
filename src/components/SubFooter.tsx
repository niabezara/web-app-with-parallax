"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function SubFooter() {
  const word = "ooooo";
  const letters = word.split("");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end end"],
  });

  return (
    <section
      ref={ref}
      className="min-h-lvh text-white pt-[5lvh] pb-[5lvh] pr-[5lvw] pl-[5lvw] flex justify-center items-center overflow-hidden"
    >
      <div className="flex">
        {letters.map((letter, i) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yPari = useTransform(
            scrollYProgress,
            [0, 1],
            [Math.random() * 100 - 50, 0]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yPariSpring = useSpring(yPari, {
            stiffness: 1000,
            damping: 200,
          });
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yDispari = useTransform(
            scrollYProgress,
            [0, 1],
            [Math.random() * -100 - 50, 0]
          );
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const yDispariSpring = useSpring(yDispari, {
            stiffness: 1000,
            damping: 200,
          });

          return (
            <motion.p
              key={i}
              style={{
                // color: i % 2 && "white",
                y: i % 2 ? yPariSpring : yDispariSpring,
              }}
              className="h1 uppercase"
            >
              {letter}&nbsp;
            </motion.p>
          );
        })}
      </div>
    </section>
  );
}
