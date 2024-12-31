// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import SectionHeading from "../../../Shared/SectionHeading/SectionHeading";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);
  return (
    <>
      <div>
        <SectionHeading
          subHeading={"What Our Clients Say"}
          heading={"TESTIMONIALS"}
        ></SectionHeading>
      </div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review?._id}>
            <div className="m-24">
              <div className="flex justify-center mb-4 lg:mb-8">
                <Rating
                  style={{
                    maxWidth: 180,
                  }}
                  value={review?.rating}
                  readOnly
                />
              </div>
              <div className="text-5xl mb-6 flex justify-center ">
                <FaQuoteLeft />
              </div>
              <p>{review?.details}</p>
              <h3 className="text-3xl font-bold text-orange-400 mt-4">
                {review?.name}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Testimonials;
