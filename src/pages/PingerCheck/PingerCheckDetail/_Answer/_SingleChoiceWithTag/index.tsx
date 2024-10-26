import { useEffect, useState } from "react";

import { ISingleChoiceWithTagProps, TSingleChoiceWithTagListData } from "./types";

import { tw } from "@/utils/tw";

const burnData = [
  {
    title: "1도 화상",
    tags: ["붉은 피부", "따금거림", "가벼운 부기"],
    desc: "피부가 붉어지고, 따끔거리거나 약간 아픈 느낌이 들며, 가벼운 부기가 있을 수 있음.",
  },
  {
    title: "2도 화상",
    tags: ["통증", "물집", "따가움", "부종"],
    desc: "심한 통증과 피부가 붉어지고 물집이 생김. 물집이 터지면 상처가 드러나며, 촉감이 아프고 따가움. 이와 함께 부종이 동반될 수 있음.",
  },
  {
    title: "3도 화상",
    tags: ["검은 피부", "무통증", "건조한 피부"],
    desc: "피부가 하얗거나 검게 변하고, 심한 통증이 없을 수 있음(신경 손상으로 인해). 피부가 매우 건조하고 거칠며, 주변 피부와는 다르게 촉감이 변함.",
  },
];

export default function SingleChoiceWithTag({ data, page, dataIndex, setChoiceData }: ISingleChoiceWithTagProps) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const listData = data.answer.data as TSingleChoiceWithTagListData;

  useEffect(() => {
    if (dataIndex === page && selectedIndex !== -1) setChoiceData([String(selectedIndex)]);
  }, [selectedIndex, page]);

  return (
    <div
      className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pb-[60rem] pt-[7rem]")}
    >
      {listData.map((data, index) => (
        <button
          key={index}
          className={tw(
            "flex w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white px-[14rem] py-[18rem]",
            selectedIndex === index
              ? "border-[1rem] border-solid border-navy-100 px-[13.25rem] py-[17.25rem] shadow-multiChoiceItemButton"
              : ""
          )}
          onClick={() => setSelectedIndex(index)}
        >
          <div className={tw("flex w-full")}>
            <div className={tw("min-w-[47rem] text-left text-ktas4 ts-16-bold")}>{index + 1}단계</div>
            <div className={tw("w-[310rem]")}>
              <div className={tw("flex flex-col gap-[8rem]")}>
                <div className={tw("text-left ts-16-bold")}>{data.title}</div>
                <div className={tw("flex gap-[5rem]")}>
                  {data.tags.map((tag) => (
                    <div
                      key={tag}
                      className={tw(
                        "flex rounded-full border-[1rem] border-solid border-gray-400 px-[8rem] py-[2rem] ts-14-medium-120"
                      )}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className={tw("mr-[8rem] w-full whitespace-pre-line text-left ts-14-regular")}>{data.desc}</div>
              </div>
            </div>

            <div
              className={tw(
                selectedIndex === index ? "border-[7rem] border-navy-100" : "border-[1rem] border-gray-400",
                "h-[25rem] min-w-[25rem] rounded-full border-solid"
              )}
            />
          </div>
        </button>
      ))}
    </div>
  );
}
