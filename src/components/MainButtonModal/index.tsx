import { useEffect, useState } from "react";

import { useRecoilState } from "recoil";

import Svg from "../Svg";

import PingerCheckModal from "./_PingerCheckModal";

import { mainButtonModalState } from "@/store/atom";
import { tw } from "@/utils/tw";

export default function MainButtonModal() {
  const [modalOpen, setModalOpen] = useRecoilState(mainButtonModalState);
  const [pingerCheckModalOpen, setPingerCheckModalOpen] = useState<boolean>(false);

  return (
    <div
      className={tw(
        modalOpen ? "visible opacity-100" : "invisible opacity-0",
        "transition-all duration-300",
        "mainContainer absolute z-[100] flex h-screen w-screen flex-col items-center bg-[#E3E8EE] bg-opacity-30 backdrop-blur-[35rem]"
      )}
    >
      <div className="flex flex-col gap-[23rem] pt-[150rem]">
        <button
          onClick={() => setPingerCheckModalOpen(true)}
          className="flex h-[71rem] w-[282rem] items-center justify-center rounded-full bg-navy-100 text-white shadow-pingerCheckButton ts-18-semibold"
        >
          PINGER CHECK !
        </button>
        <button
          onClick={() => {}}
          className="relative flex h-[71rem] w-[282rem] items-center justify-center rounded-full bg-[#F6F7FB] bg-opacity-70 shadow-mainModalButton ts-18-medium"
        >
          <div className="absolute left-[17rem] flex h-[39rem] w-[39rem] items-center justify-center rounded-full bg-white">
            <Svg iconName="thunderIcon" className="h-[19rem] w-[13rem]" />
          </div>
          병원 바로 접수하기
        </button>
        <button
          onClick={() => {}}
          className="relative flex h-[71rem] w-[282rem] items-center justify-center rounded-full bg-[#F6F7FB] bg-opacity-70 shadow-mainModalButton ts-18-medium"
        >
          <div className="absolute left-[17rem] flex h-[39rem] w-[39rem] items-center justify-center rounded-full bg-white">
            <Svg iconName="calendarIcon" className="h-[17rem] w-[19rem]" />
          </div>
          진료 예약하기
        </button>
        <button
          onClick={() => {}}
          className="relative flex h-[71rem] w-[282rem] items-center justify-center rounded-full bg-[#F6F7FB] bg-opacity-70 shadow-mainModalButton ts-18-medium"
        >
          <div className="absolute left-[17rem] flex h-[39rem] w-[39rem] items-center justify-center rounded-full bg-white">
            <Svg iconName="diseaseIcon" className="h-[17rem] w-[17rem]" />
          </div>
          과거 진료내역
        </button>
        <button
          onClick={() => {}}
          className="relative flex h-[71rem] w-[282rem] items-center justify-center rounded-full bg-[#F6F7FB] bg-opacity-70 shadow-mainModalButton ts-18-medium"
        >
          <div className="absolute left-[17rem] flex h-[39rem] w-[39rem] items-center justify-center rounded-full bg-white">
            <Svg iconName="heartIcon" className="h-[17rem] w-[19rem] fill-ktas2 stroke-ktas2" />
          </div>
          내가 찜한 병원
        </button>
      </div>
      <button
        onClick={() => setModalOpen(false)}
        className="absolute bottom-[32rem] flex h-[56rem] w-[56rem] items-center justify-center rounded-full bg-navy-200 shadow-mainModalCloseButton"
      >
        <Svg iconName="closeIcon" className="h-[16rem] w-[16rem] fill-white" />
      </button>
      <PingerCheckModal modalOpen={pingerCheckModalOpen} setModalOpen={setPingerCheckModalOpen} />
    </div>
  );
}
