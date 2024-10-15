import KeywordBox from "./_KeywordBox";

import Svg from "@/components/Svg";

const keywords = ["심장", "호흡", "입, 목/얼굴", "근골격계", "소화", "남성생식계"];

export default function PingerCheck() {
  return (
    <div className="mainContainer h-screen w-full bg-white">
      <div className="mt-[81rem] flex h-full w-full flex-col items-center">
        <Svg iconName="pingerLogo" className="h-auto w-[45rem]" />
        <div className="mt-[30rem] ts-26-bold">정재형님, 어디가 불편하신가요?</div>
        <div className="mt-[16rem] ts-16-medium">검색 혹은 버튼 선택을 해주세요.</div>
        <button className="relative mt-[58rem] flex h-[36.5rem] w-[373rem] justify-between px-[15rem]">
          <div className="text-gray-400 ts-18-regular">몸에 힘이 없고 입이 계속 말라요...</div>
          <Svg iconName="searchIcon" className="h-[25rem] w-[25rem]" />
          <div className="absolute bottom-0 left-[0rem] h-[15rem] w-full rounded-bl-[5rem] rounded-br-[5rem] border-b-[2rem] border-l-[2rem] border-r-[2rem] border-solid border-black"></div>
        </button>
        <div className="mt-[32rem] w-full flex-1 bg-navy-100 px-[29rem] pt-[40rem]">
          <div className="flex justify-between">
            <div className="w-[140rem] text-white ts-18-semibold">발현 가능성이 높은 주증상 키워드</div>
            <div className="flex flex-col gap-[12rem]">
              {keywords.map((keyword) => (
                <KeywordBox key={keyword} text={keyword} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
