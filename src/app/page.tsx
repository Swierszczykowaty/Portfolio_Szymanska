'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
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
        {/* Hero Navbar */}
        <nav className="fixed w-full z-50 bg-gradient-to-b from-black to-transparent">
              <Link
                href="/contact"
                className={`cursor-pointer p-2 ${isConcertPage ? 'text-white' : 'text-stone-900'}`}
              >
                <h1>Kontakt</h1>
              </Link>
        </nav>

        <Swiper
          speed={2000}
          effect={'fade'}
          modules={[EffectFade, Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full"
        >
          <SwiperSlide>
            <Image src='/photos/1.webp' className="object-cover h-full w-full" alt="hero" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/2.webp' className="object-cover h-full w-full" alt="hero" fill />
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/3.webp' className="object-cover h-full w-full" alt="hero" fill />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
