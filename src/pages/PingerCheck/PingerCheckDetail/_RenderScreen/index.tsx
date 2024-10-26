import { useCallback, useEffect } from "react";

import BurnBodySurface from "../_Answer/_BurnBodySurface";
import MultiChoice from "../_Answer/_MultiChoice";
import Pain from "../_Answer/_Pain";
import SingleChoice from "../_Answer/_SingleChoice";
import SingleChoiceWithTag from "../_Answer/_SingleChoiceWithTag";
import Temperature from "../_Answer/_Temperature";
import DayCheck from "../_DetailAnswer/_DayCheck";
import MonthCheck from "../_DetailAnswer/_MonthCheck";
import SingleChoiceDetail from "../_DetailAnswer/_SingleChoiceDetail";
import TimeCheck from "../_DetailAnswer/_TimeCheck";
import TimeChoice from "../_DetailAnswer/_TimeChoice";
import YearCheck from "../_DetailAnswer/_YearCheck";

import { IRenderScreenProps } from "./types";

import { tw } from "@/utils/tw";

const lightThemeType = ["singleChoiceDetail", "timeChoice", "timeCheck", "dayCheck", "monthCheck", "yearCheck"];

export default function RenderScreen({ data, dataIndex, setChoiceData, page }: IRenderScreenProps) {
  const type = data.answer.type;

  return (
    <div className="relative flex h-full min-w-full flex-col items-center px-[8rem]">
      <div className={tw("flex h-full w-full flex-col rounded-t-[25rem] bg-gray-100 pt-[22rem]")}>
        <div className={tw("px-[21rem]")}>
          <div className={tw("ts-26-semibold")}>{data.question.title[0]}</div>
          <div className={tw("flex text-ktas1 ts-26-semibold")}>
            {data.question.title[1]}
            <div className="text-black ts-26-semibold">{data.question.title[2]}</div>
          </div>
          <div className={tw("my-[19rem] text-gray-500 ts-16-medium")}>
            {data.question.titleDesc ? data.question.titleDesc : "아래의 내용을 확인하고 해당되는 버튼을 선택해주세요."}
          </div>
        </div>
        <div
          className={tw(
            lightThemeType.includes(type) ? "pb-[8rem]" : "px-[21.5rem]",
            "flex flex-1 flex-col items-center"
          )}
        >
          {(() => {
            if (type === "symptomSelect" || type === "multiChoice")
              return <MultiChoice data={data} page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "temperature")
              return <Temperature page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "singleChoice")
              return <SingleChoice data={data} page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "singleChoiceWithTag")
              return (
                <SingleChoiceWithTag data={data} page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />
              );
            else if (type === "burnBodySurface")
              return <BurnBodySurface page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "pain") return <Pain page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "singleChoiceDetail")
              return <SingleChoiceDetail data={data} page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "timeChoice")
              return <TimeChoice data={data} page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "timeCheck")
              return <TimeCheck page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "dayCheck")
              return <DayCheck page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "monthCheck")
              return <MonthCheck page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
            else if (type === "yearCheck")
              return <YearCheck page={page} dataIndex={dataIndex} setChoiceData={setChoiceData} />;
          })()}
        </div>
      </div>
    </div>
  );
}
