import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css'
import 'swiper/css/free-mode'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';


import slide_image_1 from '../../images/crop.png';
import slide_image_2 from '../../images/contrast.png';
import slide_image_3 from '../../images/grayscale.png';
import slide_image_4 from '../../images/reset.png';
import slide_image_5 from '../../images/rotate-left.png';
import slide_image_6 from '../../images/rotate-right.png';
import slide_image_7 from '../../images/save.png';


const SwiperSlider = () => {
    return (
      

        <div className='items-center justify-center my-40 mx-32 sliderImg'>
      <div className='ml-20'>
        <h1 className='text-5xl text-center' style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>
        Our Creative Tools</h1>
        <h1 className='mb-10 text-center text-3xl text-gray-400 font-semibold py-5'>Use those tools & polish your image</h1>
      </div>
      <Swiper
        // effect='coverflow'
        // centeredSlides={true}
        // spaceBetween={10}
        // slidesPerView={4}
        
        // loop={true}
        // navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}

        modules={[Navigation, Pagination]}
        spaceAround={10}
        slidesPerView={4}
        centeredSlides={true}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
      >
        <SwiperSlide>
          <img src={slide_image_1} alt='slide_image' />
          <p className='text-white ml-8'>crop</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_2} alt='slide_image' />
          <p className='text-white ml-5'>contrast</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_3} alt='slide_image' />
          <p className='text-white ml-5'>grayscale</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_4} alt='slide_image' />
          <p className='text-white ml-8'>reset</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_5} alt='slide_image' />
          <p className='text-white ml-5'>rotate-left</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_6} alt='slide_image' />
          <p className='text-white ml-5'>rotate-right</p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide_image_7} alt='slide_image' />
          <p className='text-white ml-8'>save</p>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default SwiperSlider;