import { useMemo, useState } from "react";

import dayjs from "dayjs";

import { tw } from "@/utils/tw";

export default function DayCheck() {
  const now = useMemo(() => dayjs(), []);

  const dayArray = useMemo(() => {
    const arr = [];
    for (let i = 29; i > 0; i--) arr.push(now.subtract(i, "day"));
    return arr;
  }, [now]);

  const [selectedDay, setSelectedDay] = useState<number>(28);

  return (
    <div
      className={tw(
        "absolute bottom-[111rem] left-[8rem] mt-[12rem] flex h-[calc(100%-env(safe-area-inset-top)-339rem)] w-[calc(100%-16rem)] flex-1 flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] pt-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-white ts-20-medium")}>통증을 느낀지 몇 일 되었나요?</div>
      <div className={tw("my-[42rem] flex w-[308rem] flex-wrap gap-y-[10rem]")}>
        {new Array(dayArray[0].day()).fill(0).map((_, index) => (
          <div key={index + "dummy"} className={tw("h-[40rem] w-[44rem]")} />
        ))}
        {dayArray.map((day, index) => (
          <div
            key={index}
            onClick={() => setSelectedDay(index)}
            className={tw("relative flex h-[40rem] w-[44rem] items-center justify-center")}
          >
            {index >= selectedDay && (
              <div
                className={tw(
                  index > selectedDay ? "w-[44rem]" : "right-0 w-[22rem]",
                  "absolute h-[30rem] bg-[#1D3F6E]"
                )}
              />
            )}
            <div
              className={tw(
                index === selectedDay ? "bg-[#1D3F6E]" : "",
                "absolute flex h-[30rem] w-[30rem] items-center justify-center rounded-full text-white ts-16-bold"
              )}
            >
              {day.date()}
            </div>
          </div>
        ))}
        <div className={tw("relative flex h-[40rem] w-[44rem] items-center justify-center")}>
          <div className={tw("absolute left-0 h-[30rem] w-[30rem] bg-[#1D3F6E]")} />
          <div
            className={tw(
              "absolute flex h-[30rem] w-[30rem] items-center justify-center rounded-full bg-white text-navy-100 ts-16-bold"
            )}
          >
            {now.date()}
          </div>
          <div className={tw("absolute top-[40rem] text-white ts-12-bold")}>오늘</div>
        </div>
      </div>

      <button
        className={tw("relative mt-[0rem] h-[42rem] w-[214rem] rounded-[20rem] bg-white text-navy-100 ts-16-bold")}
      >
        {`${now.diff(dayArray[selectedDay], "day")} 일`}
      </button>
    </div>
  );
}
