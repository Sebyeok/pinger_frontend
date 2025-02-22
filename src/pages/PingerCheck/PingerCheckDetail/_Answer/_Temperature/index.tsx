import { useEffect, useState } from "react";

import { ITemperatureProps } from "./types";

import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

function useFixViewportHeight() {
  useEffect(() => {
    const setRealVh = () => {
      const vh = window.innerHeight * 0.01; // 실제 창 높이
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    setRealVh(); // 초기 설정
    window.addEventListener("resize", setRealVh); // 창 크기 변경 시 업데이트

    return () => window.removeEventListener("resize", setRealVh);
  }, []);
}

export default function Temperature({ setChoiceData, page, dataIndex }: ITemperatureProps) {
  useFixViewportHeight();
  const [temperature, setTemperature] = useState<string>("");

  function validateTemperature(text: string) {
    const pattern = /^(?:[1-9]\d{0,1}\.[1-9]|[1-9]\d{0,1}|)$/;
    return pattern.test(text);
  }

  useEffect(() => {
    if (page === dataIndex) setChoiceData([temperature]);
  }, [temperature, page]);

  // useEffect(() => {
  //   const handleFocus = () => window.scrollTo(0, 0);

  //   const inputs = document.querySelectorAll("input, textarea");
  //   inputs.forEach((input) => {
  //     input.addEventListener("focus", handleFocus);
  //   });

  //   return () => {
  //     inputs.forEach((input) => {
  //       input.removeEventListener("focus", handleFocus);
  //     });
  //   };
  // }, []);

  return (
    <div className="px-[21.5rem]">
      <div
        className={tw(
          "mt-[16rem] flex h-[130rem] w-full items-center justify-between rounded-[15rem] border-[1rem] border-solid border-gray-400 bg-white pl-[50rem] pr-[38rem]"
        )}
      >
        <input
          type="number"
          inputMode="decimal"
          value={temperature}
          onChange={(e) => setTemperature((old) => (validateTemperature(e.target.value) ? e.target.value : old))}
          maxLength={4}
          className={tw("w-full text-[80rem] font-bold outline-none")}
        />
        <div className={tw("mt-[24rem] text-[60rem] font-medium leading-[106rem] text-gray-500")}>°C</div>
      </div>
      <div className={tw("mt-[31rem] flex items-center justify-end gap-[10rem]")}>
        <div className={tw("ts-15-semibold")}>체온계가 없어 정확한 체온을 알 수 없어요</div>
        <Svg iconName="backIcon" className="h-[12rem] w-[18rem] rotate-180 stroke-gray-500" />
      </div>
    </div>
  );
}
