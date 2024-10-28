import { useState } from "react";

import KakaoMap from "./_KakaoMap";

import BottomTab from "@/components/BottomTab";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function Map() {
  const [status, setStatus] = useState<number>(0);

  return (
    <div className="mainContainer relative h-screen w-full bg-white">
      <div
        className={tw(
          "shadow-mapTopContainer absolute top-0 z-[2] flex w-full flex-col items-center rounded-b-[20rem] bg-white pb-[18rem] pt-[env(safe-area-inset-top)]"
        )}
      >
        <div className="mt-[6rem] flex h-[43rem] w-full justify-between px-[20rem]">
          <div className="ml-[9rem] flex h-[43rem] items-center gap-[6rem]">
            <Svg iconName="homeLocationIcon" className="h-[25rem] w-[23rem]" />
            <div className={tw("ml-[4rem] ts-18-semibold")}>대구 북구 대학로</div>
            <Svg iconName="upRightIcon" className="h-[18rem] w-[13rem] stroke-black" />
          </div>
          <Svg iconName="homeAlarmIcon" className="mr-[0.5rem] h-[31rem] w-[34rem]" />
        </div>
        <button className="relative mt-[34rem] flex h-[36.5rem] w-[390rem] justify-between px-[15rem]">
          <div className="text-gray-400 ts-18-regular">병원을 검색해보세요.</div>
          <Svg iconName="searchIcon" className="h-[25rem] w-[25rem]" />
          <div className="absolute bottom-0 left-[0rem] h-[15rem] w-full rounded-bl-[5rem] rounded-br-[5rem] border-b-[2rem] border-l-[2rem] border-r-[2rem] border-solid border-black"></div>
        </button>
        <div className={tw("mt-[16.5rem] flex w-full items-center justify-between px-[20rem]")}>
          <div className={tw("flex gap-[5rem]")}>
            {["병의원", "달빛어린이", "응급실"].map((item, index) => (
              <button
                key={item}
                onClick={() => setStatus(index)}
                className={tw(
                  status === index ? "bg-navy-100 text-white" : "text-gray-600 ts-15-medium-120",
                  "rounded-full px-[15rem] py-[10rem] transition-all ts-15-semibold-120"
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <div className={tw("flex gap-[8rem]")}>
            <div className={tw("ts-14-medium-120")}>진료중</div>
            <div
              className={tw("flex h-[15.56rem] w-[35rem] items-center justify-end rounded-full bg-black pr-[1.94rem]")}
            >
              <div className={tw("h-[11.67rem] w-[11.67rem] rounded-full bg-white")} />
            </div>
          </div>
        </div>
      </div>
      <div className={tw("h-full w-full bg-white")}>
        <KakaoMap status={status} />
      </div>
      <BottomTab />
    </div>
  );
}
