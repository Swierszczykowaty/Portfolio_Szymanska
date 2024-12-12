'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from 'next/image';

const Hero = () => {

  return (
    <>
      <div className="h-[100vh] relative">
        <div className='fixed top-0 z-50 flex items-center justify-center w-full py-10 bg-gradient-to-b from-black/80 '>
        <Link href="/">
          <div>
            <Image
              src="/logo/karina_logo_white.png"
              alt="logo"
              width={280} 
              height={40}
            />
          </div>
        </Link>
        </div>
        <div className="absolute w-full h-full flex items-end">
          <div className='tracking-widest z-50 text-xl sm:text-2xl mb-44  text-white p-4 mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-72'>
            <Link
              href="/contact"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex  items-center gap-4'>
                <h1>Portfolio Zwierzeta</h1>
              </div>
            </Link>
            <Link
              href="/contact"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex  items-center gap-4'>
                <h1>Portfolio Ludzie</h1>
              </div>
            </Link>
            <Link
              href="/contact"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex  items-center gap-4'>
                <h1>Portfolio Koncerty</h1>
              </div>
            </Link>
            <div className='h-[1px] w-auto mr-32 bg-white m-4'></div>
            <Link
              href="/about"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex  items-center gap-4'>
                <h1>O mnie</h1>
              </div>
            </Link>
            <Link
              href="/contact"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex  items-center gap-4'>
                <h1>Kontakt</h1>
              </div>
            </Link>
          </div>
        </div>
        <Swiper
          speed={2000}
          effect={'fade'}
          modules={[EffectFade, Autoplay, Pagination]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          className="h-full w-full "
        >
          <SwiperSlide>
            <Image src='/photos/dogs/8.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/dogs/9.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>          
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/dogs/7.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
