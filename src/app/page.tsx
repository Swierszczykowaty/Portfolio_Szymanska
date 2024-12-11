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
        <div className='fixed top-0 z-50 flex items-center justify-center w-full py-10'>
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
        <div className="font-semibold absolute z-50 top-1/3 left-60 text-white p-4 b-red-600/20 ">
          <h1 className='block p-4 text-2xl'>Portfolia:</h1>
          <div className='flex flex-col ml-6'>
            <Link
              href="/portfolio_dogs"
              className={`block cursor-pointer p-2 text-xl`}
            >
              <h1>- Pieski</h1>
            </Link>
            <Link
              href="/portfolio_people"
              className={`block cursor-pointer p-2 text-xl`}
            >
              <h1>- Ludzie</h1>
            </Link>
            <Link
              href="/portfolio_concerts"
              className={`block cursor-pointer p-2 text-xl`}
            >
              <h1>- Koncerty</h1>
            </Link>
          </div>
          <Link
            href="/about"
            className={`block cursor-pointer p-4 text-2xl`}
          >
            <h1>O mnie</h1>
          </Link>
          <Link
            href="/contact"
            className={`block cursor-pointer p-4 text-2xl`}
          >
            <h1>Kontakt</h1>
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
            <Image src='/photos/1.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/2.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>          
          </SwiperSlide>
          <SwiperSlide>
            <Image src='/photos/3.webp' className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/20 w-full h-full absolute z-40'></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
