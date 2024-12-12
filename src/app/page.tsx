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
        </Link>        </div>
        <div className="font-thin absolute z-50 top-1/3 left-0 sm:left-14 md:left-24 lg:left-50 2xl:left-60 text-white p-4 b-red-600/20 ">
          <div className='flex p-4 items-center gap-4 cursor-default'>
            <div className='h-2 w-2 bg-white rotate-45'></div>
            <h1 className='block text-xl sm:text-4xl'>Portfolia:</h1>
          </div>
          <div className='flex flex-col ml-6'>
            <Link
              href="/portfolio_dogs"
              className={`block cursor-pointer p-2 sm:text-2xl`}
            >
              <div className='flex  items-center gap-4'>
                <div className='h-1 w-1 bg-white rotate-45'></div>
                <h1>Pieski</h1>
              </div>
            </Link>
            <Link
              href="/portfolio_people"
              className={`block cursor-pointer p-2 sm:text-2xl`}
            >
              <div className='flex  items-center gap-4'>
                <div className='h-1 w-1 bg-white rotate-45'></div>
                <h1>Ludzie</h1>
              </div>
            </Link>
            <Link
              href="/portfolio_concerts"
              className={`block cursor-pointer p-2 sm:text-2xl`}
            >
              <div className='flex  items-center gap-4'>
                <div className='h-1 w-1 bg-white rotate-45'></div>
                <h1>Koncerty</h1>
              </div>
            </Link>
          </div>
          <Link
            href="/about"
            className={`block cursor-pointer p-4 text-xl sm:text-4xl`}
          >
            <div className='flex  items-center gap-4'>
              <div className='h-2 w-2 bg-white rotate-45'></div>
              <h1>O mnie</h1>
            </div>
          </Link>
          <Link
            href="/contact"
            className={`block cursor-pointer p-4 text-xl sm:text-4xl`}
          >
            <div className='flex  items-center gap-4'>
              <div className='h-2 w-2 bg-white rotate-45'></div>
              <h1>Kontakt</h1>
            </div>
          </Link>
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
