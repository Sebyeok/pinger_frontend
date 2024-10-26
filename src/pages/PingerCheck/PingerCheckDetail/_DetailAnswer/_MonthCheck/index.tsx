import { useEffect, useMemo, useState } from "react";

import dayjs from "dayjs";

import { IMonthCheckProps } from "./types";

import { tw } from "@/utils/tw";

export default function MonthCheck({ setChoiceData, dataIndex, page }: IMonthCheckProps) {
  const now = useMemo(() => dayjs(), []);

  const monthArray = useMemo(() => {
    const arr = [];
    for (let i = 11; i > 0; i--) arr.push(now.subtract(i, "month"));
    return arr;
  }, [now]);

  const [selectedMonth, setSelectedMonth] = useState<number>(10);

  useEffect(() => {
    if (dataIndex === page) setChoiceData([String(selectedMonth)]);
  }, [selectedMonth, page]);
  return (
    <div
      className={tw(
        "mt-[12rem] flex h-full w-[calc(100%-16rem)] flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] py-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-white ts-20-medium")}>통증을 느낀지 몇 달 되었나요?</div>
      <div className={tw("my-[22rem] flex w-[336rem] flex-wrap gap-y-[20rem]")}>
        {monthArray.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedMonth(index)}
            className={tw("relative flex h-[63rem] w-[84rem] items-end justify-center")}
          >
            {index >= selectedMonth && (
              <div
                className={tw(
                  index > selectedMonth
                    ? index === 3 || index === 7
                      ? "left-0 w-[42.5rem]"
                      : index === 4 || index === 8
                        ? "right-0 w-[42.5rem]"
                        : "w-[84rem]"
                    : index === 3 || index === 7
                      ? ""
                      : "right-0 w-[42rem]",
                  "absolute h-[45rem] bg-[#1D3F6E]"
                )}
              />
            )}
            <div
              className={tw(
                index >= selectedMonth ? "bg-[#1D3F6E]" : "",
                "absolute flex h-[45rem] w-[45rem] items-center justify-center rounded-full border-[1rem] border-solid border-white text-white ts-16-bold"
              )}
            >
              {day.month() + 1}
            </div>
          </div>
        ))}
        <div className={tw("relative flex h-[63rem] w-[84rem] items-end justify-center")}>
          <div className={tw("absolute left-0 h-[45rem] w-[42rem] bg-[#1D3F6E]")} />
          <div
            className={tw(
              "absolute flex h-[45rem] w-[45rem] items-center justify-center rounded-full bg-white text-navy-100 ts-16-bold"
            )}
          >
            {now.month() + 1}
          </div>
          <div className={tw("absolute top-0 text-white ts-12-bold")}>이번 달</div>
        </div>
      </div>
      <div
        className={tw(
          "relative mt-[57rem] flex h-[42rem] w-[214rem] items-center justify-center rounded-[20rem] bg-white text-navy-100 ts-16-bold"
        )}
      >
        {`약 ${now.diff(monthArray[selectedMonth], "month")} 개월`}
      </div>
    </div>
  );
}
