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
              <div className="bg-[#F8F8F8] h-full flex flex-col lg:flex-row gap-4 justify-center items-center rounded-lg p-8 lg:p-16">
                <div className="overflow-hidden h-full shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] object-cover"
                    src={testmonial.photo}
                    alt={testmonial.name}
                  />
                </div>
                <div className="flex flex-col h-full justify-between">
                  <p className="text-lg md:text-xl dark:text-black">
                    <span className="text-[#FD6F00] text-7xl align-base">
                      &ldquo;
                    </span>
                    {testmonial.desc}
                    <span className="text-[#FD6F00] text-7xl align-top">
                      &rdquo;
                    </span>
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold -mt-3 dark:text-black">
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
