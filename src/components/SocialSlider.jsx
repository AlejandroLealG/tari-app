import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className='bg-[#c100b7]'>
      <div className='flex flex-col items-center justify-center p-8'>
        <p className='text-[#fff3e9] text-2xl p-8'>Get a taste for Tari and how to eat differente</p>
        <img src="/images/social.svg" alt="" className='w-[285px] h-[59px]'/>
      </div>
      <div className='p-12 ml-[80px]'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          slidesPerView={4}  
          spaceBetween={0}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }} 
        >
          <SwiperSlide className='flex justify-center items-center'>
            <picture>
              <img
                src="/images/social1.webp"
                alt=""
                className='h-[350px] w-[250px] ' 
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'>
            <picture>
              <img
                src="/images/social2.jpeg"
                alt=""
                className='h-[350px] w-[250px] ' 
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'>
            <picture>
              <img
                src="/images/social3.jpeg"
                alt=""
                className='h-[350px] w-[250px] ' 
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'>
            <picture>
              <img
                src="/images/social4.jpeg"
                alt=""
                className='h-[350px] w-[250px] ' 
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide className='flex justify-center items-center'>
            <picture>
              <img
                src="/images/social5.jpeg"
                alt=""
                className='h-[350px] w-[250px] ' 
              />
            </picture>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
