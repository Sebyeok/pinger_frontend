import { useMemo, useState } from "react";

import CircularSlider from "@fseehawer/react-circular-slider";
import dayjs from "dayjs";
import koDayjs from "dayjs/locale/ko";

import { palette } from "@/themes/styles";
import { tw } from "@/utils/tw";

const rem = screen.availWidth / 430;

function calculateAngle(hours: number, minutes: number): number {
  let angle = 90 - (hours * 15 + minutes * 0.25);

  if (angle > 180) {
    angle -= 360;
  } else if (angle < -180) {
    angle += 360;
  }

  return angle;
}

export default function TimeCheck() {
  const now = useMemo(() => dayjs().locale(koDayjs), []);
  const nowAngle = useMemo(() => calculateAngle(now.hour(), now.minute()), [now]);

  const [angle, setAngle] = useState<number>(1);

  return (
    <div
      className={tw(
        "absolute bottom-[111rem] left-[8rem] mt-[12rem] flex h-[calc(100%-env(safe-area-inset-top)-339rem)] w-[calc(100%-16rem)] flex-1 flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] py-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-white ts-20-medium")}>통증을 느낀지 몇 시간이 되었나요?</div>
      <div className={tw("mt-[13rem] text-gray-200 ts-18-medium")}>현재 시각 | {now.format("A hh:mm")}</div>
      <div className={tw("relative mt-[21rem] flex h-[239rem] w-[239rem] items-center justify-center")}>
        <CircularSlider
          min={1}
          max={23}
          dataIndex={0}
          knobPosition={nowAngle}
          direction={-1}
          knobColor={"white"}
          knobSize={30 * rem}
          onChange={setAngle}
          hideLabelValue
          hideKnobRing
          progressColorFrom={palette.navy[100]}
          progressColorTo={palette.navy[100]}
          progressSize={23 * rem}
          trackColor="#ffffff"
          trackSize={30 * rem}
          width={239 * rem}
        ></CircularSlider>
        <div
          className={tw(
            "absolute flex h-[171rem] w-[171rem] flex-col items-center justify-center rounded-full border-[1rem] border-solid border-white"
          )}
        >
          <div className={tw("absolute top-[10rem] text-white ts-12-bold")}>오전 12시</div>
          <div className={tw("absolute top-[22rem] flex w-[98rem] justify-between")}>
            <div className={tw("text-white ts-12-bold")}>10</div>
            <div className={tw("text-white ts-12-bold")}>2</div>
          </div>
          <div className={tw("absolute top-[45rem] flex w-[138rem] justify-between")}>
            <div className={tw("text-white ts-12-bold")}>8</div>
            <div className={tw("text-white ts-12-bold")}>4</div>
          </div>
          <div className={tw("absolute flex w-[158rem] justify-between")}>
            <div className={tw("text-white ts-12-bold")}>오후 6시</div>
            <div className={tw("text-white ts-12-bold")}>오전 6시</div>
          </div>
          <div className={tw("absolute bottom-[45rem] flex w-[138rem] justify-between")}>
            <div className={tw("text-white ts-12-bold")}>4</div>
            <div className={tw("text-white ts-12-bold")}>8</div>
          </div>
          <div className={tw("absolute bottom-[22rem] flex w-[98rem] justify-between")}>
            <div className={tw("text-white ts-12-bold")}>2</div>
            <div className={tw("text-white ts-12-bold")}>10</div>
          </div>
          <div className={tw("absolute bottom-[10rem] text-white ts-12-bold")}>오후 12시</div>
        </div>
      </div>
      <button className={tw("mt-[32rem] h-[42rem] w-[214rem] rounded-[20rem] bg-white text-navy-100 ts-16-bold")}>
        {`약 ${angle} 시간`}
      </button>
    </div>
  );
}
