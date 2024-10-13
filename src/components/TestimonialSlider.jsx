import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

export default function TestimonialSlider() {
  return (
    <>
      <div className="swp-container">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide>
            <div className="w-3/5 mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 bg-[#F8F8F8]  rounded-lg p-8 lg:p-16">
                <div className="overflow-hidden shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] object-cover"
                    src="https://i.ibb.co.com/KmR5yFn/John.png"
                    alt="John Smith"
                  />
                </div>

                <div>
                  <p className="text-lg md:text-xl">
                    I am extremely happy with the website design and the quality
                    of the work. It exceeded my expectations and I highly
                    recommend it!
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">
                    John Smith
                  </h3>
                  <p className="text-base md:text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-3/5 mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 bg-[#F8F8F8]  rounded-lg p-8 lg:p-16">
                <div className="overflow-hidden shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] object-cover"
                    src="https://i.ibb.co.com/KmR5yFn/John.png"
                    alt="John Smith"
                  />
                </div>

                <div>
                  <p className="text-lg md:text-xl">
                    I am extremely happy with the website design and the quality
                    of the work. It exceeded my expectations and I highly
                    recommend it!
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">
                    John Smith
                  </h3>
                  <p className="text-base md:text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-3/5 mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 bg-[#F8F8F8]  rounded-lg p-8 lg:p-16">
                <div className="overflow-hidden shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] object-cover"
                    src="https://i.ibb.co.com/KmR5yFn/John.png"
                    alt="John Smith"
                  />
                </div>

                <div>
                  <p className="text-lg md:text-xl">
                    I am extremely happy with the website design and the quality
                    of the work. It exceeded my expectations and I highly
                    recommend it!
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">
                    John Smith
                  </h3>
                  <p className="text-base md:text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-3/5 mx-auto">
              <div className="flex flex-col lg:flex-row justify-center items-center lg:justify-between gap-6 bg-[#F8F8F8]  rounded-lg p-8 lg:p-16">
                <div className="overflow-hidden shrink-0">
                  <img
                    className="rounded-full w-[130px] h-[130px] md:w-[200px] md:h-[200px] object-cover"
                    src="https://i.ibb.co.com/KmR5yFn/John.png"
                    alt="John Smith"
                  />
                </div>

                <div>
                  <p className="text-lg md:text-xl">
                    I am extremely happy with the website design and the quality
                    of the work. It exceeded my expectations and I highly
                    recommend it!
                  </p>
                  <h3 className="text-lg md:text-xl font-semibold mt-4">
                    John Smith
                  </h3>
                  <p className="text-base md:text-lg">CEO</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
