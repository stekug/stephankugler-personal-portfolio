"use client";

import projects from "@/data/projects.json";
import Project from "./Project";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjektCarousel() {
  return (
    <div className="relative">
      <div className="swiper-custom-pagination mb-4 flex justify-center gap-1" />
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <Project project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
