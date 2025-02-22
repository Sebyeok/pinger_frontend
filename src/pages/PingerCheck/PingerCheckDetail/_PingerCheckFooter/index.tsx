import { useLocation } from "react-router-dom";

import { IPingerCheckFooterProps } from "./types";

import { questionData, timeChoiceData } from "@/assets/data/flowData";
import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckFooter({
  page,
  setPage,
  data,
  setData,
  choiceData,
  setChoiceData,
}: IPingerCheckFooterProps) {
  const navigate = useCustomNavigate();
  const location = useLocation();

  const rightClickDisabled = choiceData.length === 0 || (choiceData.length === 1 && !choiceData[0]);

  function handleLeftClick() {
    if (page === 0) {
      navigate("/PingerCheck/", "slideFromLeft", { state: location.state });
    } else if (data[page].answer.type.includes("Check")) {
      setPage((old) => old - 1);
      setTimeout(
        () =>
          setData((old) => {
            const newData = [...old];
            newData.pop();
            return newData;
          }),
        300
      );
    } else setPage((old) => old - 1);
  }

  function handleRightClick() {
    if (page === 0 && data[0].answer.type === "symptomSelect") {
      const newData = questionData(location.state.data.name)[location.state.data.symptom].filter((item) =>
        choiceData.some((choiceSymptom) => item.symptom?.includes(choiceSymptom))
      );
      setData((old) => [old[0], ...newData]);
      setChoiceData([]);
      setPage((old) => old + 1);
    } else if (page === 1 && data[1].answer.type === "symptomSelect") {
      const newData = questionData(location.state.data.name)[location.state.data.symptom].filter((item) =>
        choiceData.some((choiceSymptom) => item.symptom?.includes(choiceSymptom))
      );
      setData((old) => [old[0], old[1], ...newData]);
      setChoiceData([]);
      setPage((old) => old + 1);
    } else if (data[page].answer.type === "timeChoice") {
      if (choiceData[0] === "0") {
        setData((old) => [...old, timeChoiceData.time]);
      } else if (choiceData[0] === "1") {
        setData((old) => [...old, timeChoiceData.day]);
      } else if (choiceData[0] === "2") {
        setData((old) => [...old, timeChoiceData.month]);
      } else if (choiceData[0] === "3") {
        setData((old) => [...old, timeChoiceData.year]);
      }
      setChoiceData([]);
      setPage((old) => old + 1);
    } else if (page === data.length - 1) {
      navigate("/PingerCheck/Loading/", "slideFromRight", { state: location.state });
    } else {
      setChoiceData([]);
      setPage((old) => old + 1);
    }
  }
  return (
    <div className={tw("absolute bottom-0 flex h-[103rem] w-full flex-col bg-white")}>
      <div className={tw("relative h-[5rem] w-full bg-gray-300")}>
        <div
          className={tw("h-full bg-ktas1", "transition-[width]")}
          style={{
            width: `calc(${10 * (page + 1) >= 95 ? 95 + ((page + 1) % 5) : 10 * (page + 1)}%)`,
          }}
        />
        <div className={tw("absolute left-0 top-0 flex h-full w-full justify-between")}>
          <div />
          <div className={tw("h-full w-[4rem] bg-white")} />
          <div className={tw("h-full w-[4rem] bg-white")} />
          <div />
        </div>
      </div>
      <div className={tw("flex w-full flex-1 justify-between px-[30rem] pt-[20rem]")}>
        <button onClick={handleLeftClick} className={tw("h-[33rem] w-[33rem]")}>
          <Svg iconName="backIcon" className="h-[24rem] w-[33rem] stroke-navy-100" />
        </button>
        <button
          disabled={rightClickDisabled}
          onClick={handleRightClick}
          className={tw(rightClickDisabled ? "active:opacity-100" : "", "h-[33rem] w-[33rem]")}
        >
          <Svg
            iconName="backIcon"
            className={tw(rightClickDisabled ? "stroke-gray-400" : "stroke-navy-100", "h-[24rem] w-[33rem] rotate-180")}
          />
        </button>
      </div>
    </div>
  );
}
