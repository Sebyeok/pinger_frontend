import { useMemo } from "react";

import dayjs from "dayjs";

import BottomTab from "@/components/BottomTab";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

const historyData = [
  {
    name: "정재형",
    birth: dayjs("1981-12-31"),
    date: dayjs("2024-10-28"),
    symptoms: ["역류성 인후두염", "협심증", "식도염", "심부진"],
    color: {
      bg: "bg-[#FFEFB4]",
      finger: "bg-ktas3",
    },
    ktas: 3,
  },
  {
    name: "정우철",
    birth: dayjs("1963-1-3"),
    date: dayjs("2024-10-12"),
    symptoms: ["고혈압 악화", "COPD", "전립선 비대증", "배뇨장애"],
    color: {
      bg: "bg-[#A7E5D1]",
      finger: "bg-ktas4",
    },
    ktas: 4,
  },
  {
    name: "정진아",
    birth: dayjs("2015-12-11"),
    date: dayjs("2024-10-4"),
    symptoms: ["천식 발작", "중증 탈수", "고열성 경련"],
    color: {
      bg: "bg-[#F9C4AE]",
      finger: "bg-ktas2",
    },
    ktas: 2,
  },
];

export default function History() {
  const today = dayjs();
  const monthData = useMemo(
    () =>
      Array.from([0, 3, 0, 1, 4, 3], (number, i) => ({
        month: today.subtract(5 - i, "month").format("M"),
        number,
      })),
    []
  );

  return (
    <div className="mainContainer h-screen w-full bg-navy-100">
      <div className="mt-[6rem] flex h-[43rem] w-full items-center justify-between px-[29rem]">
        <div className={tw("text-white ts-24-bold")}>{today.format("YYYY년 M월")}</div>
        <div className="flex items-center gap-[27rem]">
          <Svg iconName="chartIcon" className="h-[25rem] w-[26rem]" />
          <div className={tw("flex flex-col gap-[4rem]")}>
            <div className={tw("h-[5rem] w-[5rem] rounded-full bg-white")}></div>
            <div className={tw("h-[5rem] w-[5rem] rounded-full bg-white")}></div>
            <div className={tw("h-[5rem] w-[5rem] rounded-full bg-white")}></div>
          </div>
        </div>
      </div>
      <div className={tw("mt-[27rem] flex items-center justify-between px-[29rem]")}>
        {monthData.map((item, index) => (
          <div key={item.month} className={tw("relative flex h-[57rem] flex-col items-center justify-between")}>
            <div className={tw(monthData.length - 1 === index ? "text-navy-100" : "text-white", "z-[1] ts-18-medium")}>
              {item.month}월
            </div>
            <div
              className={tw(monthData.length - 1 === index ? "text-gray-600" : "text-gray-300", "z-[1] ts-16-medium")}
            >
              {item.number}
            </div>
            {monthData.length - 1 === index && (
              <div className={tw("absolute top-[-12rem] z-[0] h-[77rem] w-[52rem] rounded-[60rem] bg-white")}></div>
            )}
          </div>
        ))}
      </div>
      <div className={tw("mt-[24rem] flex px-[8rem]")}>
        <div className={tw("flex h-[31rem] flex-col items-center justify-between")}>
          <div className={tw("text-gray-100 ts-16-bold")}>전체</div>
          <div className={tw("h-[3rem] w-[69rem] bg-white")} />
        </div>
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className={tw("flex h-[31rem] flex-col items-center justify-between")}>
            <div className={tw("text-gray-400 ts-16-bold")}>{`LV. ${item}`}</div>
            <div className={tw("h-[1rem] w-[69rem] bg-gray-400")} />
          </div>
        ))}
      </div>
      <div
        className={tw(
          "flex h-[calc(100vh-260rem-env(safe-area-inset-top)-env(safe-area-inset-bottom))] flex-col items-center gap-[14rem] overflow-y-scroll px-[20rem] pb-[15rem] pt-[20rem]"
        )}
      >
        <button
          className={tw(
            "relative flex min-h-[105rem] w-full items-center justify-center rounded-[15rem] bg-[#3E4C59] bg-opacity-40"
          )}
        >
          <div className={tw("absolute h-[2.5rem] w-[20rem] rounded-[10rem] bg-white")} />
          <div className={tw("absolute h-[2.5rem] w-[20rem] rotate-90 rounded-[10rem] bg-white")} />
        </button>
        <div className={tw("flex w-full flex-col gap-[14rem]")}>
          {historyData.map((item) => (
            <div
              key={item.name}
              className={tw(item.color.bg, "relative h-[145rem] w-full rounded-[15rem] pl-[23rem] pt-[21rem]")}
            >
              <div className={tw("w-fit rounded-[20rem] bg-white px-[8rem] py-[2rem] text-[#142133] ts-14-medium-120")}>
                {item.date.format("M월 D일")}
              </div>
              <div className={tw("mt-[16rem] flex h-[23rem] items-end")}>
                <div className={tw("ts-22-bold")}>{item.name}</div>
                <div className={tw("whitespace-pre-line ts-22-medium")}>&nbsp;님</div>
                <div className={tw("mb-[3rem] ml-[10rem] text-gray-600 ts-14-medium-120")}>
                  {item.birth.format("YYYY. MM. DD.")}
                </div>
              </div>
              <div className={tw("absolute bottom-[24rem] z-[1] flex items-center")}>
                <Svg iconName="historyCheckIcon" className="h-[18rem] w-[18rem]" />
                <div className={tw("ml-[8rem] flex")}>
                  {item.symptoms.map((symptom, index) => (
                    <div key={symptom + index} className={tw("flex items-center")}>
                      <div className={tw("ts-16-medium")}>{symptom}</div>
                      {index === item.symptoms.length - 1 || (
                        <div className={tw("whitespace-pre-line ts-16-medium")}>&nbsp;•&nbsp;</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className={tw("absolute right-[10rem] top-[10rem] flex items-center gap-[7rem]")}>
                <div className={tw("text-navy-100 ts-16-semibold")}>{`Level. ${item.ktas}`}</div>
                <Svg iconName="upRightIcon" className="h-[13rem] w-[18rem] stroke-black" />
              </div>
              <div className={tw("absolute bottom-0 right-[47rem] z-[0]")}>
                <div className={tw(item.color.finger, "mb-[19rem] h-[91rem] w-[91rem] rounded-full")} />
                <div className={tw(item.color.finger, "absolute bottom-0 right-0 h-[64.5rem] w-[91rem]")} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <BottomTab />
    </div>
  );
}
