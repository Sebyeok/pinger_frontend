import { useMemo } from "react";

import { IMultiChoiceItemProps } from "./types";

import { tw } from "@/utils/tw";

export default function MultiChoiceItem({ index, text, selectedIndex, setSelectedIndex }: IMultiChoiceItemProps) {
  const isSelected = useMemo(() => selectedIndex.has(index), [selectedIndex]);
  return (
    <button
      className={tw(
        isSelected ? "shadow-multiChoiceItemButton border-[1rem] border-solid border-navy-100" : "",
        "flex min-h-[64rem] w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white"
      )}
      onClick={() =>
        setSelectedIndex((old) => {
          const newValue = new Set(old);
          if (newValue.has(index)) newValue.delete(index);
          else newValue.add(index);
          return newValue;
        })
      }
    >
      {isSelected && <div className={tw("h-full w-[11rem] rounded-l-[12rem] bg-navy-100")}></div>}
      <div className={tw(isSelected ? "ml-[18.25rem]" : "ml-[30rem]", "w-[63rem] text-left text-ktas4 ts-16-bold")}>
        00{index}
      </div>
      <div className={tw("ts-16-bold")}>{text}</div>
    </button>
  );
}
