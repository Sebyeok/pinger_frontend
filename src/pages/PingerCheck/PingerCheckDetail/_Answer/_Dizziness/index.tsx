import { useState } from "react";

import { tw } from "@/utils/tw";

const dizzinessData = [
  "가만히 서 있는데, 주위 물체나 공간이 계속\n빙글빙글 도는 느낌이 들어요.",
  "걸을 때 휘청거려요.\n마치 울퉁불퉁한 구름 위를 걷는 것 같아요.",
  "눈 앞이 아득해지면서 쓰러질 것처럼 어지러워요.",
  "머리가 띵한 느낌이에요.",
];

export default function Dizziness() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div
      className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pb-[60rem] pt-[7rem]")}
    >
      {dizzinessData.map((text, index) => (
        <button
          key={text}
          className={tw(
            selectedIndex === index ? "shadow-multiChoiceItemButton border-[1rem] border-solid border-navy-100" : "",
            "flex min-h-[76rem] w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white px-[14rem]"
          )}
          onClick={() => setSelectedIndex(index)}
        >
          <div className={tw("flex w-full justify-between")}>
            <div className={tw("whitespace-pre-line text-left ts-14-medium")}>{text}</div>
            <div
              className={tw(
                selectedIndex === index ? "border-[7rem] border-navy-100" : "border-[1rem] border-gray-400",
                "h-[25rem] w-[25rem] rounded-full border-solid"
              )}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
