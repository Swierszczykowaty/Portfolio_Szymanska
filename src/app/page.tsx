'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation"; 
import Image from 'next/image';
const Hero = () => {
  const pathname = usePathname();
  const isConcertPage = pathname === "/portfolio_concerts";
  return (

    <>
      <div className="h-[100vh]">
      <nav className="sticky w-full z-50">
      <div className="flex flex-col p-10 items-center justify-center text-stone-900">
        <Link href="/">
          <div>
            <Image
              src={isConcertPage ? "/logo/karina_logo_white.png" : "/logo/karina_logo.png"}
              alt="logo"
              width={240} 
              height={48}
            />
          </div>
        </Link>
        <div className="flex pt-8 gap-16">
          <Link
            href="/about"
            className={`cursor-pointer p-2 ${isConcertPage ? 'text-white' : 'text-stone-900'}`}
          >
            <h1>O mnie</h1>
          </Link>
          <div className="relative group p-2">
            <div className="flex items-center">
              <h1 className={`cursor-pointer ${isConcertPage ? 'text-white' : 'text-stone-900'}`}>Portfolio</h1>
              <IoIosArrowDown
                className={`ml-2 group-hover:rotate-180 duration-300 ${isConcertPage ? 'text-white' : 'text-stone-900'}`}
              />
            </div>
            <div
              className={`absolute left-1/2 transform duration-300 -translate-x-1/2 top-full rounded-md ${
                isConcertPage ? 'bg-stone-900 shadow-custom-light' : 'bg-white shadow-custom-dark'
              } opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity pointer-events-none`}
            >
              <Link
                href="/portfolio_dogs"
                className={`flex w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800' : 'text-stone-900 hover:bg-gray-100'}  rounded-md`}
              >
                Pieski
              </Link>
              <Link
                href="/portfolio_people"
                className={`flex w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800' : 'text-stone-900 hover:bg-gray-100'}  rounded-md`}
              >
                Ludzie
              </Link>
              <Link
                href="/portfolio_concerts"
                className={`flex w-28 px-4 py-2 ${isConcertPage ? 'text-white hover:bg-stone-800' : 'text-stone-900 hover:bg-gray-100'}  rounded-md`}
              >
                Koncerty
              </Link>
            </div>
          </div>
          <Link
            href="/contact"
            className={`cursor-pointer p-2 ${isConcertPage ? 'text-white' : 'text-stone-900'}`}
          >
            <h1>Kontakt</h1>
          </Link>
        </div>
      </div>
    </nav>
      <Swiper
        speed={2000}
        effect={'fade'}
        modules={[EffectFade, Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false,}} 
        loop={true}  
        className="h-full w-full ">
          <SwiperSlide>
            <Image src='/photos/1.webp' className="object-cover h-full w-full" alt="hero" width={1000} height={1000} />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/2.webp' className="object-cover h-full w-full" alt="hero" width={1000} height={1000}/>
          </SwiperSlide>
          <SwiperSlide>  
            <Image src='/photos/3.webp' className="object-cover h-full w-full" alt="hero" width={1000} height={1000}/>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Hero;