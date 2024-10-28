import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import KeywordBox from "./_KeywordBox";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";

const keywords: { [key: string]: string[] } = {
  정재형: ["소화", "신경계", "피부", "알레르기", "코, 귀", "연관 증상이 없어요"],
  이윤정: ["신경계", "소화", "코, 귀", "피부", "알레르기", "연관 증상이 없어요"],
  정진아: ["소화", "알레르기", "피부", "신경계", "코, 귀", "연관 증상이 없어요"],
  정우철: ["피부", "신경계", "알레르기", "코, 귀", "소화기계", "연관 증상이 없어요"],
};

export default function PingerCheck() {
  const navigate = useCustomNavigate();
  const location = useLocation();

  const keyword = useMemo(
    () => (location.state.data.name ? keywords[location.state.data.name] : keywords.정재형),
    [location.state]
  );

  return (
    <div className="mainContainer h-screen w-full overflow-hidden bg-white">
      <div className="mt-[81rem] flex h-full w-full flex-col items-center">
        <Svg iconName="pingerLogo" className="h-[69rem] w-[45rem]" />
        <div className="mt-[30rem] ts-26-bold">{location.state.data.name}님, 어디가 불편하신가요?</div>
        <div className="mt-[16rem] ts-16-medium">검색 혹은 버튼 선택을 해주세요.</div>
        <button className="relative mt-[58rem] flex h-[36.5rem] w-[373rem] justify-between px-[15rem]">
          <div className="text-gray-400 ts-18-regular">몸에 힘이 없고 입이 계속 말라요...</div>
          <Svg iconName="searchIcon" className="h-[25rem] w-[25rem]" />
          <div className="absolute bottom-0 left-[0rem] h-[15rem] w-full rounded-bl-[5rem] rounded-br-[5rem] border-b-[2rem] border-l-[2rem] border-r-[2rem] border-solid border-black"></div>
        </button>
        <div className="relative mt-[32rem] w-full flex-1 bg-navy-100 px-[29rem] pt-[40rem]">
          <div className="flex justify-between">
            <div className="w-[140rem] text-white ts-18-semibold">발현 가능성이 높은 주증상 키워드</div>
            <div className="flex flex-col gap-[12rem]">
              {keyword.map((item, index) => (
                <KeywordBox key={item + index} text={item} />
              ))}
            </div>
          </div>
        </div>
        <button
          className="absolute bottom-[51rem] left-[30rem]"
          onClick={() => navigate("/", "slideFromLeft", { state: location.state })}
        >
          <Svg iconName="backIcon" className="h-[24rem] w-[33rem] stroke-white" />
        </button>
      </div>
    </div>
  );
}
