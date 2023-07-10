import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"

// import required modules
import { Pagination } from 'swiper/modules';
const Caregory = () => {
    return (
        <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-20 mt-10"
      >
        <SwiperSlide>
          <img className=' w-3/4' src={slide1} alt="" />
          <h1 className=' text-center font-semibold text-3xl -mt-16'>Salad</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h1 className=' text-center font-semibold text-3xl -mt-16'>Pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h1 className=' text-center font-semibold text-3xl -mt-16'>Soup</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h1 className=' text-center font-semibold text-3xl -mt-16'>Dessert</h1>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h1 className=' text-center font-semibold text-3xl -mt-16'>Salad</h1>
        </SwiperSlide>
        
      </Swiper>
    );
};

export default Caregory;