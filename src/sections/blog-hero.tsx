"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Calendar } from "lucide-react";
import { useRef } from "react";

const BlogHero = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
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

  return (
    <section className="-mt-28" ref={sectionRef}>
      <div className=" ">
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
          className=" py-14 md:py-24 overflow-hidden relative group"
        >
          <div
            className="absolute inset-0 bg-[rgb(2,69,166)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)]"
            style={{
              backgroundImage: 'url("/assets/grid-lines.png")',
            }}
          ></div>

          <div className=" relative mt-28">
            <h2 className=" text-5xl md:text-6xl lg:text-7xl px-4 md:px-0 md:max-w-5xl mx-auto tracking-tighter text-center font-semibold text-white">
              {title}
            </h2>
            <div className=" flex justify-center mt-4">
              <p className=" inline-flex gap-2 items-center justify-center text-center text-lg md:text-xl md:max-w-2xl mx-auto tracking-tight text-white/70 px-12 md:px-0">
                <Calendar />
                Published: {description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogHero;