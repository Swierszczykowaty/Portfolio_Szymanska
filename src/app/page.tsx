'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Link from "next/link";
import Image from 'next/image';
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP);
import logo from '../../public/logo/karina_logo_white.png'

const Hero = () => {
  useGSAP(() => {
      gsap.fromTo(
        ".herotxt",
        { opacity:0, x:-50 },
        {
          opacity:1,
          x:0,
          duration: 1.3,
          stagger: 0.13,
        }
      );
      gsap.fromTo(
        ".navherotxt",
        { opacity:0, y:-50 },
        {
          opacity:1,
          y:0,
          delay:0.1,
          duration: 1.3,
        }
      );
    },
 []);
  return (
    <>
      <div className="h-[100vh] relative">
        <div className='fixed top-0 z-50 flex items-center justify-center w-full bg-gradient-to-b from-black/80 '>
        <Link href="/">
          <div className='navherotxt flex items-center justify-center opacity-0 w-[250px] md:w-full h-44 md:h-64'>
            <Image
              src={logo}
              alt="logo"
            />
          </div>
        </Link>
        </div>
        <div className="absolute w-full h-full flex items-end">
          <div className='herotxt opacity-0 tracking-widest z-50 text-xl sm:text-2xl mb-44  text-white p-4 mx-6 sm:mx-10 md:mx-16 lg:mx-24 xl:mx-32 2xl:mx-72'>
            <Link
              href="/portfolio/zwierzeta"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex herotxt items-center gap-4 '>
                <h1 className='hover:translate-x-1 duration-300 hover:font-medium transition-all'>Portfolio Psy</h1>
              </div>
            </Link>
            <Link
              href="/portfolio/portrety"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex herotxt items-center gap-4'>
                <h1 className='hover:translate-x-1 duration-300 hover:font-medium transition-all'>Portfolio Ludzie</h1>
              </div>
            </Link>
            <Link
              href="/portfolio/koncerty"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex herotxt items-center gap-4'>
                <h1 className='hover:translate-x-1 duration-300 hover:font-medium transition-all'>Portfolio Koncerty</h1>
              </div>
            </Link>
            <div className='h-[1px] herotxt w-auto mr-32 bg-white m-4'></div>
            <Link
              href="/about"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex herotxt items-center gap-4'>
                <h1 className='hover:translate-x-1 duration-300 hover:font-medium transition-all'>O mnie</h1>
              </div>
            </Link>
            <Link
              href="/contact"
              className={`block cursor-pointer p-4 `}
            >
              <div className='flex herotxt items-center gap-4'>
                <h1 className='hover:translate-x-1 duration-300 hover:font-medium transition-all'>Kontakt</h1>
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
            <Image src="/photos/hero/IMG_008.jpg" className="relative object-cover h-full w-full" alt="hero" fill/>
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/hero/IMG_050.jpg" className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/hero/IMG_047.jpg" className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/hero/IMG_039.jpg" className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/hero/IMG_007.jpg" className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
          <SwiperSlide>
            <Image src="/photos/hero/IMG_51.jpeg" className="relative object-cover h-full w-full" alt="hero" fill />
            <div className='bg-black/25 w-full h-full absolute z-40'></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}

export default Hero;
