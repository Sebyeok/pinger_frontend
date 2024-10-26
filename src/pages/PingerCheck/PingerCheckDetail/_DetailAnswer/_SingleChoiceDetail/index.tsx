import { useEffect, useState } from "react";

import { ISingleChoiceDetailaProps } from "./types";

import { tw } from "@/utils/tw";

export default function SingleChoice({ data, page, dataIndex, setChoiceData }: ISingleChoiceDetailaProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const listData = data.answer.data as string[];

  useEffect(() => {
    if (dataIndex === page && selectedIndex !== -1) setChoiceData([String(selectedIndex)]);
  }, [selectedIndex, page]);

  return (
    <div
      className={tw(
        "mt-[12rem] flex h-full w-[calc(100%-16rem)] flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] py-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-center text-white ts-20-medium")}>{data.question.detailQuestion}</div>
      <div className={tw("mt-[76rem] flex flex-col gap-[14rem]")}>
        {listData.map((answer, index) => (
          <button
            key={answer}
            onClick={() => setSelectedIndex(index)}
            className={tw(
              selectedIndex === -1 || selectedIndex === index ? "opacity-100" : "opacity-50",
              "flex h-[42rem] w-[214rem] items-center justify-center rounded-[20rem] bg-white ts-16-semibold"
            )}
          >
            {answer}
          </button>
        ))}
      </div>
    </div>
  );
}
