"use client";

import { ChevronRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { BorderBeam } from "../custom/border-beam";

const FeatureOne = () => {
  return (
    <div className="w-full h-[40rem] border border-white/15 rounded-xl relative overflow-hidden group">
      <div className=" absolute z-10 pt-4 md:pt-8">
        <div className="flex flex-col items-start">
          <h4 className="text-2xl px-4 md:px-8 text-white font-semibold">
            Fully Responsive
          </h4>
          <p className=" text-white/70 w-[84vw] md:w-[33rem] pl-4 md:pl-8 font-normal text-sm mt-2">
            Our templates are designed to look stunning on any device, from
            mobile screens to large desktops. Each layout adjusts seamlessly,
            ensuring an exceptional user experience across all platforms.
          </p>
          <Button
            variant="link"
            className=" hover:no-underline no-underline text-white w-fit px-4 md:px-8"
          >
            Explore marketplace
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>

        <motion.div
          initial={{ translateX: "-50%" }}
          animate={{ translateX: "0%" }}
          transition={{
            repeat: Infinity,
            duration: 60,
            ease: "linear",
          }}
          className="flex items-start w-full gap-6 pl-0"
        >
          <div className="flex flex-col mt-12 shrink-0 w-fit hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[32rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Desktop - 1440px</p>
            </div>
            <div className="w-[32rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[18rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Tablet - 1280px</p>
            </div>
            <div className="w-[18rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[12rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Mobile - 390px</p>
            </div>
            <div className="w-[12rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 shrink-0 w-fit hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[32rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Desktop - 1440px</p>
            </div>
            <div className="w-[32rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[18rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Tablet - 1280px</p>
            </div>
            <div className="w-[18rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
          <div className="flex flex-col mt-12 hover:-translate-y-12 ease-in-out transition-all duration-300">
            <div className="w-[12rem] h-11 px-2 bg-white/20 gap-4 backdrop-blur-md rounded-lg flex items-center">
              <div className="w-7 aspect-square rounded-md bg-black/30 inline-flex items-center justify-center">
                <Play fill="white" size={16} />
              </div>
              <p>Mobile - 390px</p>
            </div>
            <div className="w-[12rem] h-[32rem] relative mt-2">
              <Image
                fill
                src="/assets/gallery/6.webp"
                className=" object-top object-cover rounded-lg"
                alt="Responsive"
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className=" w-full absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            fill
            src="/assets/gallery/6.webp"
            className=" object-top object-cover"
            alt="Responsive"
          />
        </div>
      </div>
      <div className=" w-full absolute inset-0 bg-gradient-to-b from-[black] backdrop-blur-sm to-transparent" />
      <div className=" hidden group-hover:block rounded-xl inset-0 z-20">
        <BorderBeam colorFrom="#FF5551" colorTo="#FF3530" />
      </div>
    </div>
  );
};

export default FeatureOne;
