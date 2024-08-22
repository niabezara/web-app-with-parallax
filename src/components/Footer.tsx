"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Footer() {
  const phrase = "lorem ipsum 🔮 lorem";
  const words = phrase.split(" ");

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <footer
      ref={ref}
      className="pt-[10lvh] min-h-lvh z-[9999] text-white   pb-[5lvh] pr-[5lvw] pl-[5lvw] flex flex-col gap-16"
    >
      <div className="min-h-lvh flex items-end">
        <div className="flex flex-wrap uppercase">
          {words.map((word, i) => {
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const y = useTransform(scrollYProgress, [0, 1], [0, i * -100 - 50]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const ySpring = useSpring(y, {
              stiffness: 1000,
              damping: 200,
            });
            return (
              <motion.div className="h1" key={i} style={{ y: ySpring }}>
                {word}&nbsp;
              </motion.div>
            );
          })}
        </div>
      </div>
      <motion.div style={{ width }} className="border-t border-current" />
      <div className="flex flex-wrap gap-8">
        <div className="grow basis-40">
          <p className="h3 uppercase">github</p>
        </div>
        <div className="grow basis-80 flex flex-col gap-8">
          <div className="bg-black p-4 flex justify-between">
            <a
              href={
                "https://new-portfolio-opgj-28raqgvzb-niabezaras-projects.vercel.app/"
              }
              className="h3 uppercase hover:text-slate-400 transition duration-300"
            >
              Check out
            </a>
            <Image
              alt="arrow"
              src={"/arrow.svg"}
              height={15}
              width={15}
              loading="lazy"
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            vero. Quisquam, blanditiis! Officiis facere dolor commodi? Nesciunt
            qui in magnam sed tempore quasi commodi sapiente minus? Reiciendis
            magni pariatur doloremque.
          </p>
        </div>
      </div>
    </footer>
  );
}
