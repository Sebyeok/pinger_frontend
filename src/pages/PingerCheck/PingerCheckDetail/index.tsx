import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import RenderScreen from "./_RenderScreen";
import { TPingerCheckData } from "./types";

import { detailSymptoms } from "@/assets/data/ktas";
import PingerCheckFooter from "@/pages/PingerCheck/PingerCheckDetail/_PingerCheckFooter";
import PingerCheckHeader from "@/pages/PingerCheck/PingerCheckDetail/_PingerCheckHeader";
import { tw } from "@/utils/tw";

const lightThemeType = ["singleChoiceDetail", "timeChoice", "timeCheck", "dayCheck", "monthCheck", "yearCheck"];

export default function PingerCheckDetail() {
  const location = useLocation();
  const locationData = useMemo(() => location.state.data, []);

  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [data, setData] = useState<TPingerCheckData[]>([makeFirstData()]);
  const [page, setPage] = useState<number>(0);

  const [choiceData, setChoiceData] = useState<string[]>([]);

  const mainRef = useRef<HTMLDivElement>(null);

  function makeFirstData(): TPingerCheckData {
    return {
      question: {
        title: ["아래의 항목 중 해당하는", "증상 or 상태", "를 선택해주세요."],
        titleDesc: "해당하는 버튼을 모두 선택해주세요.",
      },
      answer: {
        type: "symptomSelect",
        data: detailSymptoms[locationData.symptom],
      },
    };
  }

  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.style.transform = `translateX(-${page * 100}%)`;
    }

    if (lightThemeType.includes(data[page].answer.type)) setTheme("light");
    else setTheme("dark");
  }, [page]);

  return (
    <div
      className={tw(
        theme === "light" ? "bg-gray-100" : "bg-navy-100",
        "mainContainer h-screen w-full transition-colors"
      )}
    >
      <div className={tw("relative mt-[75rem] h-[calc(100vh-env(safe-area-inset-top)-177rem)] w-full overflow-hidden")}>
        <div ref={mainRef} className={tw("flex h-full w-full overflow-visible transition-transform duration-300")}>
          {data.map((pingerCheckData, index) => (
            <RenderScreen
              key={index}
              dataIndex={index}
              data={pingerCheckData}
              page={page}
              choiceData={choiceData}
              setChoiceData={setChoiceData}
              theme={theme}
            />
          ))}
        </div>
      </div>
      <PingerCheckHeader theme={theme} />
      <PingerCheckFooter
        page={page}
        setPage={setPage}
        data={data}
        setData={setData}
        choiceData={choiceData}
        setChoiceData={setChoiceData}
      />
    </div>
  );
}
