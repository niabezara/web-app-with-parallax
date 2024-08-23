"use client";
import { images } from "@/utils/data";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import Image from "next/image";
import { useRef } from "react";

interface Iimage {
  title: string;
  img: string;
}

export default function Gallery() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const xLeft = useTransform(scrollYProgress, [0, 1], [250, -500]);
  const xRight = useTransform(scrollYProgress, [0, 1], [-250, 500]);
  const y = useTransform(scrollYProgress, [0, 1], ["0rem", "50rem"]);
  const xLeftSpring = useSpring(xLeft, { stiffness: 1000, damping: 200 });
  const xRightSpring = useSpring(xRight, { stiffness: 1000, damping: 200 });

  return (
    <section
      ref={ref}
      className="min-h-lvh z-[9999] overflow-hidden pt-[5lvh] pb-[5lvh] bg-black  w-full "
    >
      {images.map((img: Iimage, i: number) => {
        return (
          <motion.div
            key={i}
            className="flex overflow-hidden"
            style={{
              x: i % 2 ? xLeftSpring : xRightSpring,
              justifyContent: i % 2 ? "flex-end" : "flex-start",
            }}
          >
            <motion.div
              style={{ y: y }}
              className="relative h-[80rem] w-[20rem] mt-[-50rem]"
            >
              <Image
                alt={img.title}
                src={img.img}
                key={i}
                layout="fill"
                objectFit="contain"
                className="object-cover w-[200px] h-[200px]"
                loading="lazy"
              />
            </motion.div>
          </motion.div>
        );
      })}
    </section>
  );
}
