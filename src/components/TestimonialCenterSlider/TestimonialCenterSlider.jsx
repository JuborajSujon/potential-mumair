import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./TestimonialCenterSlider.css";
import { Pagination, Autoplay } from "swiper/modules";
import info from "../../data/user_info";

export default function TestimonialCenterSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { testimonials } = info;

  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper">
        {testimonials.map((testmonial, index) => (
          <SwiperSlide key={testmonial.id}>
            <div
              className={`testimonial-slide ${
                index === activeIndex ? "active-slide" : "inactive-slide"
              } w-full h-full rounded-lg`}>
              <div className="flex flex-col lg:flex-row justify-center items-stretch lg:justify-between gap-6 bg-[#F8F8F8] rounded-lg p-8 lg:p-16 min-h-[400px] ">
                <div className="overflow-hidden shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] object-cover"
                    src={testmonial.photo}
                    alt={testmonial.name}
                  />
                </div>
                <div>
                  <p className="text-lg md:text-xl dark:text-black">
                    <span className="text-[#FD6F00] text-7xl align-base">
                      &ldquo;
                    </span>
                    {testmonial.desc}
                    <span className="text-[#FD6F00] text-7xl align-top">
                      &rdquo;
                    </span>
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-4 dark:text-black">
                    {testmonial.name}
                  </h3>
                  <p className="text-base md:text-lg dark:text-black">
                    {testmonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
