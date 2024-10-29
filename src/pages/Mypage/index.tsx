import { useEffect, useState } from "react";

import dayjs from "dayjs";

import RecordItem from "./_RecordItem";
import { TMypageData } from "./types";

import BottomTab from "@/components/BottomTab";
import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

export default function Mypage() {
  const [text, setText] = useState<string>("");
  const [data, setData] = useState<TMypageData>([]);
  const localData = localStorage.getItem("record");

  function saveMessage() {
    const newData = [...data];
    newData.push({ text, date: dayjs().format("YYYY-MM-DD HH:mm") });

    localStorage.setItem("record", JSON.stringify(newData));

    setText("");
  }

  useEffect(() => {
    if (localData) {
      setData(JSON.parse(localStorage.getItem("record")!) as TMypageData);
    }
  }, [localData]);

  return (
    <div className={tw("mainContainer relative flex h-screen w-full flex-col items-center bg-white")}>
      <Svg iconName="pingerLogo" className={tw("absolute bottom-[50rem] left-0 z-[0] w-[50%] opacity-30")} />
      <div className={tw("mt-[14rem] text-navy-100 ts-22-medium")}>정은이에게 한마디!</div>
      <div className={tw("h-[1rem] w-[45%] bg-navy-100")} />
      <div className={tw("mt-[1rem] h-[1rem] w-[45%] bg-navy-100")} />
      <div className="relative mt-[30rem] flex h-[36.5rem] w-[373rem] items-start justify-between pl-[15rem] pr-[10rem]">
        <input
          placeholder="정은이 바보.."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-[25rem] w-[310rem] outline-none ts-18-regular placeholder:text-gray-400"
        />
        <button
          disabled={text.length === 0}
          onClick={saveMessage}
          className={tw(
            text.length === 0 ? "active:opacity-100" : "",
            "flex h-[30rem] w-[30rem] items-center justify-center rounded-[6rem] bg-navy-100"
          )}
        >
          <Svg iconName="upRightIcon" className="h-[13rem] w-[18rem] stroke-white" />
        </button>
        <div className="absolute bottom-0 left-[0rem] h-[15rem] w-full rounded-bl-[5rem] rounded-br-[5rem] border-b-[2rem] border-l-[2rem] border-r-[2rem] border-solid border-black"></div>
      </div>
      <div className={tw("mt-[16rem] h-[1rem] w-[calc(100%-40rem)] bg-gray-300")}></div>
      <div
        className={tw(
          "z-[1] flex max-h-[calc(100vh-env(safe-area-inset-top)-env(safe-area-inset-bottom)-198rem)] w-full flex-col gap-[8rem] overflow-y-scroll px-[29rem] pb-[100rem] pt-[16rem]"
        )}
      >
        {data.map((item, index) => (
          <RecordItem key={index} text={item.text} date={item.date} />
        ))}
      </div>
      <BottomTab />
    </div>
  );
}
