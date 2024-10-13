import { IIndividualCardProps } from "./types";

import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function IndividualCard({ tag, name, birth, recentRecord, isActive }: IIndividualCardProps) {
  const tagColor =
    tag.color === "ktas1"
      ? "bg-ktas1"
      : tag.color === "ktas2"
        ? "bg-ktas2"
        : tag.color === "ktas3"
          ? "bg-ktas3"
          : "bg-ktas4";

  return (
    <div
      className={tw(
        isActive ? "shadow-individualCard" : "opacity-50",
        "border-navy-100 flex h-[178rem] w-[362rem] min-w-[362rem] items-center gap-[21rem] rounded-[12rem] border-[1.5rem] border-solid bg-white py-[22.5rem] pr-[14rem]"
      )}
    >
      <div className="ml-[22rem] w-[89rem]">
        <div
          className={tw(
            "ts-12-bold h-[22rem] w-fit rounded-full px-[12.5rem] py-[4rem]",
            tagColor,
            tag.color === "ktas3" ? "text-black" : "text-white"
          )}
        >
          {tag.text}
        </div>
        <div className={tw("mt-[12rem] flex items-center gap-[3rem]")}>
          <div className={tw("ts-24-bold")}>{name}</div>
          <div className={tw("ts-24-medium")}>{"님"}</div>
        </div>
        <div className={tw("ts-16-date mt-[6rem]")}>{birth.format("YYYY.MM.DD")}</div>
      </div>
      <div className="flex-1">
        <div className={tw("ml-[7.5rem]")}>
          <div className={tw("ts-13-semibold text-gray-500")}>최근 의료 기록</div>
          <div className={tw("ts-17-bold mt-[12rem]")}>{recentRecord.hospital}</div>
          <div className={tw("mt-[5rem] flex gap-[10rem]")}>
            <div className={tw("ts-14-medium-120 text-gray-500")}>방문일자</div>
            <div className={tw("ts-14-medium-120 text-gray-600")}>{recentRecord.date.format("YYYY.MM.DD")}</div>
          </div>
        </div>
        <div className={tw("my-[16rem] h-[1rem] w-full bg-black")} />
        <button className={tw("mx-[7.5rem] flex w-[calc(100%-15rem)] items-center justify-between")}>
          <div className={tw("ts-16-semibold")}>{tag.text === "본인" ? "나의 질병 관리" : "질병 관리"}</div>
          <Svg iconName="upRightIcon" className="h-[13rem] w-[13rem]" />
        </button>
      </div>
    </div>
  );
}
