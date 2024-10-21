import { useState } from "react";

import { tw } from "@/utils/tw";

const singleChoiceData = {
  question: "머리 통증을 느낀지 얼마나 되었나요?",
  answers: [
    {
      text: "00 시간",
      value: "time",
    },
    {
      text: "00 일",
      value: "day",
    },
    {
      text: "00 달(월)",
      value: "month",
    },
    {
      text: "00 년(해)",
      value: "year",
    },
  ],
};

export default function SingleChoice() {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  return (
    <div
      className={tw(
        "absolute bottom-[111rem] left-[8rem] mt-[12rem] flex h-[calc(100%-env(safe-area-inset-top)-339rem)] w-[calc(100%-16rem)] flex-1 flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] py-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-white ts-20-medium")}>{singleChoiceData.question}</div>
      <div className={tw("mt-[76rem] flex flex-col gap-[14rem]")}>
        {singleChoiceData.answers.map((answer, index) => (
          <button
            key={answer.value}
            onClick={() => setSelectedIndex(index)}
            className={tw(
              selectedIndex === -1 || selectedIndex === index ? "opacity-100" : "opacity-50",
              "flex h-[42rem] w-[214rem] items-center justify-center rounded-[20rem] bg-white ts-16-semibold"
            )}
          >
            {answer.text}
          </button>
        ))}
      </div>
    </div>
  );
}
