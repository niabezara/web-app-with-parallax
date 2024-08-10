"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function HeroParallax() {
  const t = useTranslations("HeroTitle");

  return (
    <div>
      <Parallax
        scale={[1.0, 1.6]}
        startScroll={0} // Start the scaling effect when the scroll position is at 0
        endScroll={700} // End the scaling effect when the scroll position reaches 400
        shouldAlwaysCompleteAnimation={true}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        <Image
          src="/second.png"
          alt="foreground"
          width={1440}
          height={1162}
          layout="responsive"
          quality={100}
        />
      </Parallax>

      <Parallax
        scale={[1.0, 1.2]}
        startScroll={0} // Start the scaling effect when the scroll position is at 0
        endScroll={800} // End the scaling effect when the scroll position reaches 400
        shouldAlwaysCompleteAnimation={true}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100%",
        }}
      >
        <Image
          src="/main.jpg"
          alt="background"
          width={2304}
          height={1296}
          layout="responsive"
          quality={100}
        />
      </Parallax>

      <Parallax
        opacity={[2, 0]}
        startScroll={0}
        endScroll={400}
        style={{
          position: "fixed",
          // left: "32%",
          zIndex: 160,
          top: "26vw",
          width: "100%",
          transform: "tanslateX(50%)",
        }}
      >
        <div className="flex flex-col items-center">
          <h1 className="text-white text-[40px]">{t("title")}</h1>
        </div>
      </Parallax>
      <Parallax
        opacity={[0, 1]}
        translateY={[50, -50]}
        startScroll={400}
        endScroll={800}
        style={{
          position: "fixed",

          zIndex: 300,
          top: "26vw",
          width: "100%",
          transform: "tanslateX(50%)",
        }}
      >
        <div className="flex flex-col items-center gap-3">
          <p className="text-white text-[32px]">{t("subTitle")}</p>
          <Link href="/CTA" className="cursor-pointer">
            <button className="text-white border-[2px] rounded-[16px] px-4 py-3">
              {t("button")}
            </button>
          </Link>
        </div>
      </Parallax>
      <div className="z-[126] fixed left-[50%] bottom-16">
        <Parallax
          className="scrollgif"
          translateY={[0, -50]} // Correctly using translateY for vertical movement
          opacity={[1, 0]} // Fading out as you scroll
          shouldAlwaysCompleteAnimation={true}
        >
          <Image src="/scrollgif.gif" width={50} height={50} alt="gif" />
        </Parallax>
      </div>

      <div
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 200,
          paddingTop: "56%",
          height: "400vh",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#000",
            height: "100%",
          }}
        ></div>
      </div>
    </div>
  );
}
