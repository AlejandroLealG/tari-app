import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <div className='bg-[#c100b7]'>
      <div className='flex flex-col items-center justify-center p-8 '>
        <p className='text-[#fff3e9] text-2xl p-8'>Get a taste for Tari and how to eat differente</p>
        <img src="/images/social.svg" alt="" className='w-[285px] h-[59px]'/>
      </div>
      <div className='p-12'>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          navigation
          /*navigation={
            {
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }
          }*/
          pagination={{ clickable: true }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide>
            <picture>
              <img
                src="/images/social1.webp"
                alt=""
                className='h-[400px] w-[300px]'
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img
                src="/images/social2.jpeg"
                alt=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img
                src="/images/social3.jpeg"
                alt=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img
                src="/images/social4.jpeg"
                alt=""
              />
            </picture>
          </SwiperSlide>
          <SwiperSlide>
            <picture>
              <img
                src="/images/social5.jpeg"
                alt=""
              />
            </picture>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};