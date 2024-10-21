import { useState } from "react";
import { Direction, getTrackBackground, Range } from "react-range";

import Svg from "@/components/Svg";
import { palette } from "@/themes/styles";
import { tw } from "@/utils/tw";

const painData = [
  {
    stage: 6,
    text: "참기 어려울 정도로 고통스럽고, 움직임이 제한됨. 말하기조차 힘들 만큼 극심한 통증이 지속됨.",
  },
  {
    stage: 5,
    text: "통증으로 인해 일상적인 활동이 매우 어려울 정도로 고통스러움. 상당한 스트레스와 불편함을 느끼게 됨.",
  },
  {
    stage: 4,
    text: "통증이 일상생활을 방해할 정도로 느껴짐. 집중력이 저하되거나 휴식을 취해야 할 필요를 느끼게 됨.",
  },
  {
    stage: 3,
    text: "통증이 느껴지지만 참을 수 있는 정도임. 일상 활동은 가능하지만, 통증을 계속해서 인식하게 됨.",
  },
  {
    stage: 2,
    text: "아주 약한 불편함이나 가벼운 압박감을 느끼며, 통증은 거의 없지만 순간적으로 신경이 쓰일 수 있음.",
  },
  {
    stage: 1,
    text: "아무 통증도 없으며, 불편하거나 신경 쓸 부분이 전혀 없고 평소와 다름없음.",
  },
];

export default function Pain() {
  const [score, setScore] = useState<number[]>([3]);

  return (
    <div className={tw("mt-[40rem] h-full pb-[140rem]")}>
      <div className={tw("flex h-full items-start gap-[20rem]")}>
        <div className={tw("mt-[-8rem] flex h-[calc(100%+24rem)] flex-col justify-between")}>
          {painData.map((data) => (
            <div
              className={tw(
                data.stage === score[0] ? "ts-16-bold" : "ts-16-medium",
                "relative flex h-[32rem] items-center text-gray-600"
              )}
            >
              {data.stage > 1 ? `${data.stage}단계` : ""}
              {data.stage === 1 && (
                <div
                  className={tw(
                    data.stage === score[0] ? "ts-16-bold" : "ts-16-medium",
                    "absolute bottom-[16rem] text-gray-600 ts-16-medium"
                  )}
                >
                  1단계
                </div>
              )}
              {data.stage === score[0] && (
                <div
                  className={tw(
                    data.stage === 1 ? "mb-[16rem]" : "",
                    "absolute left-[100rem] w-[271rem] rounded-[12rem] border-[1rem] border-solid border-navy-100 bg-white px-[16rem] py-[15rem] ts-16-semibold"
                  )}
                >
                  {data.text}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className={tw("flex h-full flex-col pb-[6rem]")}>
          <Range
            direction={Direction.Up}
            label="Select your value"
            step={1}
            min={1}
            max={6}
            values={score}
            onChange={(values) => setScore(values)}
            renderMark={({ props, index }) => (
              <div
                {...props}
                key={props.key}
                style={{
                  ...props.style,
                }}
                className="ml-[1rem] flex h-[32rem] w-full items-center justify-center"
              >
                <div
                  className={tw(
                    index > 6 - score[0] ? "bg-white" : "bg-gray-500",
                    "h-[4rem] w-[4rem] rounded-full",
                    index === 5 ? "mt-[-24rem]" : ""
                  )}
                ></div>
              </div>
            )}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  flexGrow: 1,
                }}
                className="flex h-full w-[10rem] flex-1 flex-col"
              >
                <div
                  ref={props.ref}
                  className="realtive flex h-full w-[10rem] flex-col justify-between rounded-[4rem] pt-[8rem]"
                  style={{
                    background: getTrackBackground({
                      values: score,
                      colors: ["transparent", palette.gray[300]],
                      min: 1,
                      max: 6,
                      direction: Direction.Up,
                    }),
                    alignSelf: "center",
                  }}
                >
                  <div
                    className={tw("absolute bottom-0 z-[-1] h-full w-full rounded-full")}
                    style={{ background: "linear-gradient(180deg, #0E2848 -65.91%, #68CAAB 100%)" }}
                  />
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                key={props.key}
                className={tw(
                  score[0] === 1 ? "mt-[-12rem]" : score[0] === 6 ? "mt-[-2rem]" : "",
                  "shadow-painThumb h-[32rem] w-[32rem] rounded-full border-[1.5rem] border-solid border-navy-100 bg-white outline-none"
                )}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
