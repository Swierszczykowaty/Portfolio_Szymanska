'use client';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation"; 
import Image from 'next/image';
import { useEffect } from 'react';
import gsap from "gsap";

const Nav_comp = () => {
  const pathname = usePathname();
  const isConcertPage = pathname === "/portfolio/koncerty";

  useEffect(() => {
    gsap.fromTo(
      ".navbar",
      { opacity:0, x:-50 },
      {
        opacity:1,
        x:0,
        duration: 1.3,
        stagger: 0.20,
      }
    );
  },
[]);

  return (
    <nav className="sticky w-full z-50 ">
      <div className="flex flex-col p-10 mb-4 items-center justify-center text-stone-900">
        <Link href="/">
          <div>
            <Image
              src={isConcertPage ? "/logo/karina_logo_white.png" : "/logo/karina_logo.png"}
              alt="logo"
              width={280} 
              height={40}
            />
          </div>
        </Link>
        <div className={`flex  pt-8 duration-300 gap-10 md:gap-16 2xl:gap-[80px] text-nowrap`}>
          <Link
            href="/about"
            className={`cursor-pointer p-4 ${isConcertPage ? 'text-white' : 'text-stone-900 hover:text-stone-500 duration-300'}`}
          >
            <h1>O mnie</h1>
          </Link>
          <div className={`relative group p-4 ${isConcertPage ? 'text-white' : 'text-stone-900 duration-300'}`}>
            <div className="flex flex-row items-center">
              <h1 className={`cursor-default `}>Portfolio</h1>
              <IoIosArrowDown
                className={`ml-2 group-hover:rotate-180 duration-300`}
              />
            </div>
            <div
              className={`absolute left-1/2 flex transform duration-300 -translate-y-3 -translate-x-1/2 top-full ${
                isConcertPage ? 'bg-stone-900 shadow-custom-light' : 'bg-white shadow-custom-dark'
              } opacity-0 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all pointer-events-none`}
            >
              <Link
                href="/portfolio/zwierzeta"
                className={`flex justify-center w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800 ' : 'text-stone-900 hover:bg-gray-100 hover:text-stone-600'}  `}
              >
                Pieski
              </Link>
              <Link
                href="/portfolio/koncerty"
                className={`flex justify-center w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800' : 'text-stone-900 hover:bg-gray-100 hover:text-stone-600'}  `}
              >
                Koncerty
              </Link>
              <Link
                href="/portfolio/portrety"
                className={`flex justify-center w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800' : 'text-stone-900 hover:bg-gray-100 hover:text-stone-600'} `}
              >
                Ludzie
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className={`cursor-pointer p-4 ${isConcertPage ? 'text-white' : 'text-stone-900 hover:text-stone-500 duration-300'}`}
          >
            <h1>Kontakt</h1>
          </Link>
        </div>
      </div>
    </nav>
  );
}
export default Nav_comp;
