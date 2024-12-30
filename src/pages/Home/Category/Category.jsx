// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./category.css";

import category1 from "../../../assets/assets/home/slide1.jpg";
import category2 from "../../../assets/assets/home/slide2.jpg";
import category3 from "../../../assets/assets/home/slide3.jpg";
import category4 from "../../../assets/assets/home/slide4.jpg";
import category5 from "../../../assets/assets/home/slide5.jpg";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
const Category = () => {
  return (
    <>
      <SectionHeading
        subHeading="From 11:00am to 10:00pm"
        heading="ORDER ONLINE"
      ></SectionHeading>

      <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={category1} alt="" />
          <h3 className="absolute text-3xl font-semibold  uppercase  bottom-4 text-white ">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category2} alt="" />
          <h3 className="absolute text-3xl font-semibold  uppercase  bottom-4 text-white ">
            soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category3} alt="" />
          <h3 className="absolute text-3xl font-semibold  uppercase  bottom-4 text-white ">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category4} alt="" />
          <h3 className="absolute text-3xl font-semibold  uppercase  bottom-4 text-white ">
            desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={category5} alt="" />
          <h3 className="absolute text-3xl font-semibold  uppercase  bottom-4 text-white ">
            salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;
