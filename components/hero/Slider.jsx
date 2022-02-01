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

    const sliders = [
        {id:1,src:'https://images.samsung.com/nl/smartphones/galaxy-s21/buy/02_ImageCarousel/03_GroupShot-T2/S21plus_Group_KV_MO_img.jpg'},
        {id:2,src:'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Capture_7_8.JPG'
    },
        {id:3,src:'https://tvadsongs.uk/wp-content/uploads/2017/09/Samsung-Galaxy-Note8-Discover-the-Note8-TV-Ad.png'
    },
    ]

    return (
        <div>
            <Swiper navigation={true} autoplay={true} className='h-96'>
            {sliders.map((slider,index) => (
                <SwiperSlide key={index}>
                    <Image alt='saman' src={slider.src} width={100} height={100} />
                </SwiperSlide>
            ))}
                <SwiperSlide className='bg-red-600'>
                 1
                </SwiperSlide>
                <SwiperSlide className='bg-blue-600'>2</SwiperSlide>
                <SwiperSlide className='bg-indigo-600'>3</SwiperSlide>
                <SwiperSlide className='bg-violet-800'>4</SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Slider;
