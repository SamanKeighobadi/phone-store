import React from "react";
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation ,Autoplay} from "swiper";

// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="h-96"
      >
        <SwiperSlide className="bg-red-600">
          <Image
            alt="saman"
            src={"/images/imgjpg.jpg"}
            width={400}
            height={400}
            layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-blue-600">
          <Image
            alt="saman"
            src={"/images/img3.png"}
            width={400}
            height={400}
            layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-indigo-600">
          <Image
            alt="saman"
            src={"/images/Capture_7_8.jpg"}
            width={400}
            height={400}
            layout="fill"
          />
        </SwiperSlide>
        <SwiperSlide className="bg-violet-800">
          <Image
            alt="saman"
            src={"/images/img3.png"}
            width={400}
            height={400}
            layout="fill"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
