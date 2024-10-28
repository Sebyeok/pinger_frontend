import { useState } from "react";
import { useLocation } from "react-router-dom";

import HotTextItem from "./_HotTextItem";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

const hotTextData = ["열이 나요", "독감인 것 같아요", "기침이 나와요", "코로나에 감연된 것 같아요", "냄새가 잘 안나요"];

export default function PingerCheckSearch() {
  const navigate = useCustomNavigate();
  const location = useLocation();
  const [searchText, setSearchText] = useState<string>("");
  const [showResult, setShowResult] = useState<boolean>(false);

  return (
    <div className="mainContainer h-screen w-full overflow-hidden bg-gray-200">
      <div className="mt-[42rem] flex h-full w-full flex-col items-center rounded-t-[25rem] bg-white">
        <div className="relative mt-[29rem] flex h-[36.5rem] w-[373rem] items-start justify-between pl-[15rem] pr-[10rem]">
          <input
            placeholder="눈과 피부가 노랗게 보여요"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setSearchText("눈과 피부가 노랗게 보여요")}
            className="h-[25rem] w-[310rem] outline-none ts-18-regular placeholder:text-gray-400"
          />
          <button
            onClick={() => setShowResult(true)}
            className={tw("flex h-[36.5rem] w-[36.5rem] items-start justify-center")}
          >
            <Svg iconName="searchIcon" className="h-[25rem] w-[25rem]" />
          </button>
          <div className="absolute bottom-0 left-[0rem] h-[15rem] w-full rounded-bl-[5rem] rounded-br-[5rem] border-b-[2rem] border-l-[2rem] border-r-[2rem] border-solid border-black"></div>
        </div>
        {showResult ? (
          <div className={tw("mt-[28rem] flex w-full flex-col px-[20rem]")}>
            <button
              onClick={() =>
                navigate("/PingerCheck/Detail", "slideFromRight", {
                  state: {
                    data: {
                      symptom: "황달",
                      name: location.state.data.name,
                    },
                  },
                })
              }
              className={tw("flex h-[56rem] w-full items-center justify-between px-[8rem] py-[17rem]")}
            >
              <div className={tw("ts-16-semibold")}>황달</div>
              <Svg iconName="upRightIcon" className="h-[13rem] w-[18rem] stroke-gray-500" />
            </button>
          </div>
        ) : (
          <div className="relative mt-[28rem] w-full flex-1 px-[20rem]">
            <div className="ml-[6rem] w-full ts-18-semibold">인기 검색어</div>
            <div className={tw("mt-[8rem] h-[1rem] w-full bg-black")}></div>
            <div className="flex flex-col">
              {hotTextData.map((item, index) => (
                <HotTextItem key={item + index} index={index + 1} text={item} />
              ))}
            </div>
          </div>
        )}
        <button
          className="absolute bottom-[51rem] left-[30rem]"
          onClick={() => navigate("/PingerCheck", "slideFromLeft", { state: location.state })}
        >
          <Svg iconName="backIcon" className="h-[24rem] w-[33rem] stroke-white" />
        </button>
      </div>
    </div>
  );
}
