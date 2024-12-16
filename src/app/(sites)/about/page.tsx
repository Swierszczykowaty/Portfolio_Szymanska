'use client';
import Image from 'next/image';
import aboutData from '@/database/about.json';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutPhoto",
      { opacity:0, y:-50 },
      {
        opacity:1,
        y:0,
        duration: 1.3,
      }
    );
    gsap.fromTo(
      ".aboutTxt",
      { opacity:0, y:50 },
      {
        opacity:1,
        y:0,
        duration: 1.3,
      }
    );
  },
[]);

  return (
      <div
        className="
          w-full flex items-center flex-grow
           xl:h-[calc(100vh-445px)]"
      >
      <div className="flex xl:flex-row flex-col gap-12 xl:gap-16 items-center">
        <div className="relative h-[400px] aboutPhoto w-full xl:w-2/5 xl:h-[450px]">
          <Image
            className="h-full w-full object-cover"
            src="/photos/concert/1.webp"
            alt="AboutPhoto"
            fill
            draggable={false}
          />
        </div>
        <div className="text-black flex flex-col aboutTxt xl:w-3/5 ">
          <div className="flex flex-col">
            <p className="italic text-xl font-normal">{aboutData.title}</p>
            <p className="text-2xl font-medium">{aboutData.subtitle}</p>
          </div>
          {aboutData.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`mt-${index === 0 ? 6 : 2} text-[14px] md:text-[16px] text-base leading-loose tracking-wide text-justify`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
