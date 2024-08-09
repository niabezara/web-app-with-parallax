"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

export default function HeroParallax() {
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
        opacity={[1, 0]}
        style={{
          position: "fixed",
          left: 0,
          top: "26vw",
          width: "100%",
        }}
      >
        {/* <Image
          style={{
            width: "30vw",
          }}
          src="/goonies.png"
          alt="Goonies"
        /> */}
      </Parallax>

      {/* <div
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
      </div> */}
    </div>
  );
}
