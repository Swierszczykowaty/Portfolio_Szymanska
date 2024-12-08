'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const Hero = () => {

  return (
    <>
      <div className="h-[100vh]">
      <Swiper pagination={{ dynamicBullets: true, }} modules={[Pagination, Autoplay]} autoplay={{ delay: 3500, disableOnInteraction: false,}} loop={true}  className="h-full w-full ">
          <SwiperSlide>
              <img src='/photos/1.webp' className="object-cover h-full w-full" alt="hero" />
          </SwiperSlide>
          <SwiperSlide>
              <div className="bg-yellow-500 w-full h-full"></div>
          </SwiperSlide>
          <SwiperSlide>  
              <div className="bg-red-700 w-full h-full"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
export default Hero;