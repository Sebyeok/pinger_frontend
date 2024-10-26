import { useEffect, useState } from "react";

import MultiChoiceItem from "./_MultiChoiceItem";
import { IMultiChoiceProps } from "./types";

import { detailSymptomToNormal } from "@/assets/data/ktas";
import { tw } from "@/utils/tw";

export default function MultiChoice({ data, page, dataIndex, setChoiceData }: IMultiChoiceProps) {
  const [selectedIndex, setSelectedIndex] = useState<Set<number>>(new Set<number>());
  const listData = data.answer.data as string[];
  const type = data.answer.type;

  useEffect(() => {
    const newChoiceData = Array.from(selectedIndex).map((index) => listData[index]);
    if (dataIndex === page) setChoiceData(newChoiceData);
  }, [selectedIndex, page]);

  return (
    <div className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pt-[7rem]")}>
      {listData.map((item, index) => (
        <MultiChoiceItem
          key={index}
          index={index}
          text={type === "symptomSelect" ? detailSymptomToNormal[item] : item}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
    </div>
  );
}
