import baner1 from '../images/baner1.png';
import baner2 from '../images/baner2.png';
import carousel from '../images/carousel.png';
import carousel2 from '../images/carousel2.png';
import carousel3 from '../images/carousel3.png';
import { Link } from 'react-router-dom';

import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';

const NewArticles = () => {
    return ( 
        <div className="news">
        <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y,Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{delay:3000}}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide><Link to={'products/3'}><img src={carousel} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'products/4'}><img src={carousel2} alt="" /></Link></SwiperSlide>
        <SwiperSlide><Link to={'products/1'}><img src={carousel3} alt="" /></Link></SwiperSlide>
    </Swiper>
    <div className="banner">
            <Link to={'products/5'}><img src={baner1} alt="baner1" /></Link>
            <Link to={'products/6'}><img src={baner2} alt="baner2" /></Link>
            </div>
    </div>
     );
}
export default NewArticles;
