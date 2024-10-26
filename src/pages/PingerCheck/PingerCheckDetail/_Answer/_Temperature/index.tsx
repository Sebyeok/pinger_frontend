import { useEffect, useState } from "react";

import { ITemperatureProps } from "./types";

import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function Temperature({ setChoiceData, page, dataIndex }: ITemperatureProps) {
  const [temperature, setTemperature] = useState<string>("");

  function validateTemperature(text: string) {
    const pattern = /^(?:[1-9]\d{0,1}\.[1-9]|[1-9]\d{0,1}|)$/;
    return pattern.test(text);
  }

  useEffect(() => {
    if (page === dataIndex) setChoiceData([temperature]);
  }, [temperature, page]);

  return (
    <div>
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
