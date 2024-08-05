import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      slidesPerView={1}
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
          <div className="absolute inset-14 flex flex-col container lg:w-1/2  md:w-3/4 items-start justify-center p-10 text-white">
            <h2 className='lg:text-8xl  md:text-6xl font-bold mb-4'>Say hola to a new kind of hot sauce</h2>
            <p className='text-2xl mb-4'>Eat diferente!</p>
            <button className="bg-[#192bff] text-white px-6 py-3 rounded-full text-xl mt-8">View more</button>
          </div>

          <img
            src="/images/BANNER1_1.webp"
            alt=""
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <div className="absolute inset-14 flex flex-col container lg:w-1/2  md:w-3/4 items-start justify-center p-10 text-white">
            <h2 className='lg:text-8xl  md:text-6xl font-bold mb-4'>From Peru With a kick</h2>
            <p className='text-2xl mb-4'>Made with peppers grown in Peru, Tari is your passport to more flavorful,
              adventurous eating. It's bold. It's creamy. It's a little spicy. It's a kick in a bottle.</p>
            <button className="bg-[#192bff] text-white px-6 py-3 rounded-full text-xl mt-8">View more</button>
          </div>

          <img
            src="/images/BANNER1_2.webp"
            alt=""
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <div className="absolute inset-14 flex flex-col container lg:w-1/2  md:w-3/4 items-start justify-center p-10 text-white">
            <h2 className='lg:text-8xl  md:text-6xl font-bold mb-4'>Made with peppers grown in Peru</h2>
            <p className='text-2xl mb-4'>Our signature Aji Amarillo and Aji Rocoto peppers - which are nothing like
              jalapeños or bell peppers - grow in the heart of Peru, bringing you bold and unique textures and flavors.</p>
            <button className="bg-[#192bff] text-white px-6 py-3 rounded-full text-xl mt-8">View more</button>
          </div>

          <img
            src="/images/BANNER1_3.webp"
            alt=""
          />
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <div className="absolute inset-14 flex flex-col container md:w-3/4 items-start justify-center p-10 text-white">
            <h2 className='lg:text-8xl  md:text-6xl font-bold mb-4'>Transform every meal with a spicy kick of Peruvian inspiration</h2>
            <button className="bg-[#192bff] text-white px-6 py-3 rounded-full text-xl mt-8">View more</button>
          </div>

          <img
            src="/images/BANNER1_4.webp"
            alt=""
          />
        </picture>
      </SwiperSlide>
        {/*<div className="swiper-button-next-custom"></div>
        <div className="swiper-button-prev-custom"></div>*/}
    </Swiper>
  );
};