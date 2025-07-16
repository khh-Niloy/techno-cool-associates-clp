"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "/sample1.png",
    heading: "20+ Years of Experience in HVAC Systems",
    subtext: "Best HVAC Solutions with Techno Cool",
  },
  {
    image: "/sample2.png",
    heading: "100+ Completed Projects",
    subtext:
      "Delivering Advanced HVAC Solutions Across Diverse Industries in Bangladesh.",
  },
];

export default function BannerSlider() {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 2000 }}
      loop={true}
      pagination={{ clickable: true }}
      className="w-full lg:h-[32rem] md:h-[52rem] h-[50rem]"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="flex flex-col md:flex-row w-full lg:h-[30rem] md:h-[52rem] h-[50rem]">
            {/* Left Image */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right Text */}
            <div className="w-full md:w-1/2 h-1/2 md:h-full bg-gray-100 flex flex-col justify-center items-center p-8 text-center md:text-left">
              <h2 className="text-4xl text-center font-bold text-gray-800 mb-4">
                {slide.heading}
              </h2>
              <p className="text-xl text-gray-600">{slide.subtext}</p>
              <div className="flex gap-6 mt-6">
                <img src="/daikin.png" className="h-8" alt="Daikin" />
                <img src="/lg.png" className="h-8" alt="LG" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
