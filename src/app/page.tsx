'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
const Hero = () => {

  return (
    <>
      <div className="h-[100vh]">
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