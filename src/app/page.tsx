'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Link from "next/link";

const Hero = () => {

  return (
    <>
      <div className="h-[100vh]">
      <nav className="fixed top-0 w-full z-50">
      <div className="flex gap-10 h-36 p-10 items-center justify-center text-white bg-black/10">
          <Link href="/">
          <div >
            <img className="h-10" src="/logo/karina_logo.png" alt="logo" />
          </div>
          </Link>
          <Link href="/about">
            <h1>
              O mnie
            </h1>
          </Link>
          <Link href="/contact">
            <h1>
              Kontakt
            </h1>
          </Link>
          <Link href="/portfolio_dogs">
           <h1>
            Portfolio
           </h1>
          </Link>
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
              <img src='/photos/1.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/photos/2.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>  
            <img src='/photos/3.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
              <img src='/photos/1.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
            <img src='/photos/2.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>  
            <img src='/photos/3.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Hero;