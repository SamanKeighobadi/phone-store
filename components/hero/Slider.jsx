import React from 'react';
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"



// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation]);


const Slider = () => {

    return (
        <div>
            <Swiper navigation={true} className='h-96'>
                <SwiperSlide>
                 
                </SwiperSlide>
                <SwiperSlide>2</SwiperSlide>
                <SwiperSlide>3</SwiperSlide>
                <SwiperSlide>4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
