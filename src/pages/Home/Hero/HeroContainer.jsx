// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative'
import { EffectCreative } from 'swiper';

import Hero from "./Hero";
import Hero2 from "./Hero2";

const HeroContainer = () => {
  return (
    <Swiper
    grabCursor={true}
    effect={"creative"}
    creativeEffect={{
        prev: {
            shadow: true,
            translate: ["-120%", 0 , -500]
        },
        next: {
            shadow: true,
            translate: ["-120%", 0 , -500]
        }
    }}
    modules={[EffectCreative]}
    className='mySwiper5'
    loop={true}
    autoplay={
        {
            delay: 250,
            disableOnInteraction: false
        }
    }
    >
      <SwiperSlide>
        <Hero />
      </SwiperSlide>
      <SwiperSlide>
        <Hero2 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroContainer;
