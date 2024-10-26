import { useMemo } from "react";

import { IMultiChoiceItemProps } from "./types";

import { tw } from "@/utils/tw";

export default function MultiChoiceItem({ index, text, selectedIndex, setSelectedIndex }: IMultiChoiceItemProps) {
  const isSelected = useMemo(() => selectedIndex.has(index), [selectedIndex]);

  const handleSelection = () => {
    setSelectedIndex((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(index)) {
        newSelected.delete(index);
      } else {
        newSelected.add(index);
      }

      if (newSelected.size !== prevSelected.size || newSelected !== prevSelected) {
        return newSelected;
      }
      return prevSelected;
    });
  };

  return (
    <button
      className={tw(
        isSelected ? "border-[1rem] border-solid border-navy-100 shadow-multiChoiceItemButton" : "",
        "flex min-h-[64rem] w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white"
      )}
      onClick={handleSelection}
    >
      {isSelected && <div className={tw("h-full w-[11rem] rounded-l-[12rem] bg-navy-100")}></div>}
      {text === "해당 부위 없음" || (
        <div className={tw(isSelected ? "ml-[18.25rem]" : "ml-[30rem]", "w-[63rem] text-left text-ktas4 ts-16-bold")}>
          00{index + 1}
        </div>
      )}
      <div
        className={tw(
          text === "해당 부위 없음" ? (isSelected ? "ml-[18.25rem] text-gray-500" : "ml-[30rem] text-gray-500") : "",
          "ts-16-bold"
        )}
      >
        {text}
      </div>
    </button>
  );
}
