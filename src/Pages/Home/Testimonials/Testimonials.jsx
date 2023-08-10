import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
//Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://double-digit-server.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  // const {name, details, _id,rating}=reviews
  return (
    <div className="my-20">
      <SectionTitle
        subHeading={"What Our Client Say?"}
        heading={"Testimonials"}
      />

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-32 py-20 text-center">

              <Rating className="mx-auto" style={{ maxWidth: 200}} value={review.rating} readOnly />
              <p className=" py-3">{review.details}</p>
              <h3 className=" text-3xl text-orange-500">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
