import "swiper/css";
import "swiper/css/pagination";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import IndividualCard from "../_IndividualCard";

import { IIndividualCardContainerProps } from "./type";

export default function IndividualCardContainer({ data }: IIndividualCardContainerProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="mt-[10rem] flex h-[208rem] w-screen items-center">
      <Swiper
        className="h-[208rem] overflow-x-auto overflow-y-visible pl-[20rem] pr-[50rem] pt-[15rem] scrollbar-hide"
        slidesPerView={"auto"}
        spaceBetween={"12rem"}
        onSlideChange={(e) => setActiveIndex(e.activeIndex)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={item.name + item.tag + index} className="h-[178rem] w-[362rem]">
            <IndividualCard {...item} isActive={index === activeIndex} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
