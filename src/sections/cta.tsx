"use client";

import PrimaryButton from "@/components/common/primarybutton";
import Image from "next/image";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { RefObject, useEffect, useRef } from "react";

const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return;
    const { top, left } = to.current.getBoundingClientRect();
    mouseX.set(event.x - left);
    mouseY.set(event.y - top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });

  return [mouseX, mouseY];
};

const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const borderedDivRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className=" w-full py-20 md:py-24" ref={sectionRef}>
      <div className=" w-full container">
        <motion.div
          style={{
            backgroundPositionY,
            backgroundImage: 'url("/assets/stars.png")',
          }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 60,
          }}
          animate={{
            backgroundPositionX: "800px",
          }}
          ref={borderedDivRef}
          className=" border border-white/15 rounded-xl py-14 md:py-24 overflow-hidden relative group"
        >
          <div
            className=" absolute inset-0 bg-[rgb(2,69,166)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] transition duration-700 group-hover:opacity-0"
            style={{
              backgroundImage: 'url("/assets/grid-lines.png")',
            }}
          ></div>
          <motion.div
            className=" absolute inset-0 bg-[rgb(2,69,166)] bg-blend-overlay opacity-0 group-hover:opacity-100"
            style={{
              maskImage,
              backgroundImage: 'url("/assets/grid-lines.png")',
            }}
          ></motion.div>
          <div className=" relative">
            <h2 className=" text-5xl px-4 md:px-0 md:max-w-2xl mx-auto tracking-tighter text-center font-semibold text-white">
              Want a custom website tailored to your needs? Let&apos;s talk
            </h2>
            <div className=" flex justify-center mt-4">
              <p className=" text-center text-sm mx-auto tracking-tight text-white/70 px-12 md:px-0">
                We have helped hundreds of businesses with their website needs
              </p>
            </div>
            <div className=" flex items-center -space-x-4 mx-auto w-fit py-8">
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-1.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-2.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-3.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-4.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-5.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
              <div className="inline-flex items-center justify-center h-11 w-11 p-0.5  md:h-14 md:w-14 bg-white/10 border border-white/10 backdrop-blur-lg rounded-full">
                <div className=" relative h-10 w-10 md:h-14 md:w-14">
                  <Image
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src="/assets/user-6.webp"
                    alt="User"
                    className=" object-contain"
                  />
                </div>
              </div>
            </div>
            <div className=" justify-center w-full inline-flex items-center gap-4 mt-4">
              <Link href="/pricing">
                <div className=" w-fit">
                  <PrimaryButton>Get Astrae Now</PrimaryButton>
                </div>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
