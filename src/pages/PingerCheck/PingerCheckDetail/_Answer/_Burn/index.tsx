import { useState } from "react";

import { tw } from "@/utils/tw";

const burnData = [
  {
    stage: 1,
    tags: ["붉은 피부", "따금거림", "가벼운 부기"],
    description: "피부가 붉어지고, 따끔거리거나 약간 아픈 느낌이 들며, 가벼운 부기가 있을 수 있음.",
  },
  {
    stage: 2,
    tags: ["통증", "물집", "따가움", "부종"],
    description:
      "심한 통증과 피부가 붉어지고 물집이 생김. 물집이 터지면 상처가 드러나며, 촉감이 아프고 따가움. 이와 함께 부종이 동반될 수 있음.",
  },
  {
    stage: 3,
    tags: ["검은 피부", "무통증", "건조한 피부"],
    description:
      "피부가 하얗거나 검게 변하고, 심한 통증이 없을 수 있음(신경 손상으로 인해). 피부가 매우 건조하고 거칠며, 주변 피부와는 다르게 촉감이 변함.",
  },
];

export default function Burn() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  return (
    <div
      className={tw("flex w-full flex-1 flex-col gap-[12rem] overflow-y-auto overflow-x-visible pb-[60rem] pt-[7rem]")}
    >
      {burnData.map((data, index) => (
        <button
          key={data.stage}
          className={tw(
            "flex w-[calc(100%-0.5rem)] items-center rounded-[12rem] bg-white px-[14rem] py-[18rem]",
            selectedIndex === index
              ? "shadow-multiChoiceItemButton border-[1rem] border-solid border-navy-100 px-[13.25rem] py-[17.25rem]"
              : ""
          )}
          onClick={() => setSelectedIndex(index)}
        >
          <div className={tw("flex w-full")}>
            <div className={tw("min-w-[47rem] text-left text-ktas4 ts-16-bold")}>{data.stage}단계</div>
            <div className={tw("w-[310rem]")}>
              <div className={tw("flex flex-col gap-[8rem]")}>
                <div className={tw("text-left ts-16-bold")}>{data.stage}도 화상</div>
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
                <div className={tw("mr-[8rem] w-full whitespace-pre-line text-left ts-14-regular")}>
                  {data.description}
                </div>
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
