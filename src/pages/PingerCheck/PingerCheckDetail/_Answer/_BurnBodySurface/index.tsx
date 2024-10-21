import { useState } from "react";

import { tw } from "@/utils/tw";

const burnBodySurfaceData = [
  {
    title: "10% 미만",
    description: "손가락 하나 크기에서 손바닥 크기(1%)의 10배까지 범위",
  },
  {
    title: "10% 이상",
    description: "손바닥 크기(1%)의 10배 이상의 훨씬 큰 면적",
  },
];

export default function BurnBodySurface() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div
      className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pb-[60rem] pt-[7rem]")}
    >
      {burnBodySurfaceData.map((data, index) => (
        <button
          key={data.title}
          className={tw(
            selectedIndex === index ? "shadow-multiChoiceItemButton border-[1rem] border-solid border-navy-100" : "",
            "flex min-h-[76rem] w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white px-[14rem] py-[18rem]"
          )}
          onClick={() => setSelectedIndex(index)}
        >
          <div className={tw("flex w-full justify-between")}>
            <div className={tw("flex flex-col gap-[8rem]")}>
              <div className={tw("text-left ts-16-bold")}>{data.title}</div>
              <div className={tw("whitespace-pre-line text-left ts-14-medium")}>{data.description}</div>
            </div>
            <div
              className={tw(
                selectedIndex === index ? "border-[7rem] border-navy-100" : "border-[1rem] border-gray-400",
                "h-[25rem] min-w-[25rem] rounded-full border-solid"
              )}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
