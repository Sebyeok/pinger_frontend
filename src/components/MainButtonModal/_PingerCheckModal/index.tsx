import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import FamilyCardInPingerCheckModal from "./_FamilyCardInPingerCheckModal";
import { IPingerCheckModalProps } from "./types";

import { familyData } from "@/assets/data/familyData";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function PingerCheckModal({ modalOpen, setModalOpen }: IPingerCheckModalProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div
      className={tw(
        modalOpen ? "visible opacity-100" : "invisible opacity-0",
        "transition-all duration-300",
        "absolute top-0 flex h-screen w-screen flex-col items-center justify-end bg-[#3E4C59] bg-opacity-70 backdrop-blur-[20rem]"
      )}
    >
      <div className={tw("absolute top-0 h-screen w-screen")} onClick={() => setModalOpen(false)} />
      <div
        className={tw(
          modalOpen ? "translate-y-0" : "translate-y-full",
          "flex h-[464rem] w-screen flex-col items-center rounded-t-[25rem] bg-gray-100 transition-all duration-300"
        )}
      >
        <div className={tw("mt-[32rem] flex ts-24-bold")}>
          누구의&nbsp;<div className="text-ktas1 ts-24-bold">PINGER_CHECK</div>&nbsp;인가요?
        </div>
        <div className={tw("mt-[14rem] ts-16-medium")}>증상 분류를 시작할 프로필을 선택해주세요.</div>
        <div className="mt-[21rem] flex h-[208rem] w-screen items-center">
          <Swiper
            className="h-[247rem] overflow-x-auto overflow-y-visible pl-[20rem] pr-[50rem] pt-[25rem] scrollbar-hide"
            slidesPerView={2}
            onSlideChange={(e) => setActiveIndex(e.activeIndex)}
          >
            {familyData.map((item, index) => (
              <SwiperSlide key={item.name + item.tag + index} className="h-[207rem] w-[169rem]">
                <FamilyCardInPingerCheckModal {...item} isActive={index === activeIndex || index === activeIndex + 1} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button
          onClick={() => setModalOpen(false)}
          className="absolute bottom-[32rem] flex h-[56rem] w-[56rem] items-center justify-center rounded-full bg-navy-200 shadow-mainModalCloseButton"
        >
          <Svg iconName="closeIcon" className="h-[16rem] w-[16rem]" />
        </button>
      </div>
    </div>
  );
}
