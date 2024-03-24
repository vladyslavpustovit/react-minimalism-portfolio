import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './works.css'

import ProjectCard from "./ProjectCard";
import { projects } from "../../../data/projects";
export const Works = () => {
  return (
    <section className="section bg-blue-50">
      <div className="w-full h-full flex items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          spaceBetween={100}
          loop={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
        >
          {projects.map((proj, index) => (
            <SwiperSlide key={"project_" + index}>
              <ProjectCard project={proj} />
            </SwiperSlide>
          ))}
          <div className="slider-controller">
            <div className="swiper-button-prev slider-arrow">
              <img className="w-16" src="/assets/arrow-left-lg.svg" />
            </div>
            <div className="swiper-button-next slider-arrow">
              <img className="w-16" src="/assets/arrow-right-lg.svg" />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </section>
  );
};
