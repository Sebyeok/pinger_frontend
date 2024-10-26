import { useState } from "react";

import healthInsight1 from "@images/healthInsight1.png";
import healthInsight2 from "@images/healthInsight2.png";
import healthInsight3 from "@images/healthInsight3.png";

import IndividualCardContainer from "./_IndividualCardContainer";
import SubmissionConfirmMessageToast from "./_SubmissionConfirmMessageToast";

import { familyData } from "@/assets/data/familyData";
import BottomTab from "@/components/BottomTab";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function Home() {
  const [selectedHealthInsight, setSelectedHealthInsight] = useState<number>(1);

  return (
    <div className="mainContainer h-screen w-full bg-white">
      <div className="mt-[6rem] flex h-[43rem] w-full justify-between pl-[29rem] pr-[20.5rem]">
        <div className="flex h-[43rem] gap-[8rem]">
          <Svg iconName="pingerLogo" className="h-[36rem] w-[23rem]" />
          <Svg iconName="pingerTextLogo" className="mt-[12rem] h-[31rem] w-[105rem] fill-navy-100" />
        </div>
        <div className="flex h-[31rem] items-end gap-[23rem]">
          <Svg iconName="homeLocationIcon" className="h-[25rem] w-[23rem]" />
          <Svg iconName="homeAlarmIcon" className="h-[31rem] w-[34rem]" />
        </div>
      </div>
      <div className="ml-[29rem] mt-[47rem] ts-24-semibold">우리 모두의 건강을 알아보아요!</div>
      <IndividualCardContainer data={familyData} />
      <div className="mt-[6rem] h-[6rem] w-full bg-gray-100" />
      <div className="mt-[21rem] flex h-[31rem] w-full items-center justify-between px-[29rem]">
        <div className="text-ktas2 ts-22-extrabold">건강 Insight</div>
        <div className="flex gap-[2rem]">
          <button
            className={tw(
              "rounded-[60rem] px-[10rem] py-[6rem] transition-colors ts-14-semibold",
              selectedHealthInsight === 1 ? "bg-ktas2 text-white" : "text-gray-600"
            )}
            onClick={() => setSelectedHealthInsight(1)}
          >
            연령
          </button>
          <button
            className={tw(
              "rounded-[60rem] px-[10rem] py-[6rem] transition-colors ts-14-semibold",
              selectedHealthInsight === 2 ? "bg-ktas2 text-white" : "text-gray-600"
            )}
            onClick={() => setSelectedHealthInsight(2)}
          >
            연령 + 성별
          </button>
          <button
            className={tw(
              "rounded-[60rem] px-[10rem] py-[6rem] transition-colors ts-14-semibold",
              selectedHealthInsight === 3 ? "bg-ktas2 text-white" : "text-gray-600"
            )}
            onClick={() => setSelectedHealthInsight(3)}
          >
            건강 점수
          </button>
        </div>
      </div>
      <div className="mt-[23rem] w-full pl-[29rem]">
        {selectedHealthInsight === 1 && <img className="h-[329rem] w-[372rem]" src={healthInsight1} />}
        {selectedHealthInsight === 2 && <img className="h-[279rem] w-[372rem]" src={healthInsight2} />}
        {selectedHealthInsight === 3 && <img className="h-[310rem] w-[425rem]" src={healthInsight3} />}
      </div>
      <SubmissionConfirmMessageToast />
      <BottomTab />
    </div>
  );
}
