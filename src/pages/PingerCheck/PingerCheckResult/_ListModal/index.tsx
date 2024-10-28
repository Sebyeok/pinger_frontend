import { useMemo, useState } from "react";

import ListModalItem from "./_ListModalItem";
import { IListModalProps } from "./types";

import { tw } from "@/utils/tw";

const hospitalListData = [
  {
    name: "청명 이비인후과",
    distance: "631m",
    address: "대구시 중구 동성로 101",
  },
  {
    name: "소리샘 이비인후과",
    distance: "865m",
    address: "대구시 중구 동성로 120",
  },
  {
    name: "맑은 숨 이비인후과",
    distance: "1.2km",
    address: "대구시 중구 국채보상로 150",
  },
  {
    name: "하늘소리 이비인후과",
    distance: "1.3km",
    address: "대구시 중구 중앙대로 160",
  },
  {
    name: "편안한귀 이비인후과",
    distance: "1.7km",
    address: "대구시 중구 중앙대로 180",
  },
];

const emergencyListData = [
  {
    name: "대구경북대학교병원",
    distance: "1.4km",
    address: "대구시 중구 동덕로 130",
  },
  {
    name: "대구가톨릭대학교병원",
    distance: "2.3km",
    address: "대구시 남구 두류공원로17길 33",
  },
  {
    name: "영남대학교병원",
    distance: "3.0km",
    address: "대구시 남구 현충로 170",
  },
  {
    name: "대구파티마병원",
    distance: "4.2km",
    address: "대구시 동구 아양로 99",
  },
  {
    name: "계명대학교 동산병원",
    distance: "5.0km",
    address: "대구시 달서구 달구벌대로 1035",
  },
];

export default function ListModal({ modalOpen, setModalOpen }: IListModalProps) {
  const [state, setState] = useState<number>(0);
  const data = useMemo(() => (state === 0 ? hospitalListData : emergencyListData), [state]);

  return (
    <div
      className={tw(
        modalOpen ? "visible opacity-100" : "invisible opacity-0",
        "transition-all duration-300",
        "absolute flex h-full w-full flex-col items-center bg-black bg-opacity-60"
      )}
    >
      <div className={tw("absolute h-full w-full")} onClick={() => setModalOpen(false)}></div>
      <div
        className={tw(
          "shadow-resultModalContainer absolute bottom-[38rem] flex h-[540rem] w-[390rem] flex-col items-center rounded-[20rem] bg-white"
        )}
      >
        <div
          onClick={() => setModalOpen(false)}
          onDrag={() => setModalOpen(false)}
          className={tw("mt-[10rem] h-[6rem] w-[48rem] rounded-[10rem] bg-gray-300")}
        />
        <div className={tw("mt-[23rem] flex w-full")}>
          <button
            onClick={() => setState(0)}
            className={tw(
              state === 0 ? "active:opacity-100" : "",
              "flex h-[35rem] w-1/2 flex-col items-center justify-between"
            )}
          >
            <div className={tw(state === 0 ? "" : "text-gray-400", "ts-18-semibold")}>병의원</div>
            <div className={tw(state === 0 ? "h-[3rem] bg-black" : "h-[1rem] bg-gray-400", "w-full")} />
          </button>
          <button
            onClick={() => setState(1)}
            className={tw(
              state === 1 ? "active:opacity-100" : "",
              "flex h-[35rem] w-1/2 flex-col items-center justify-between gap-[5rem]"
            )}
          >
            <div className={tw(state === 1 ? "" : "text-gray-400", "ts-18-semibold")}>응급실</div>
            <div className={tw(state === 1 ? "h-[3rem] bg-black" : "h-[1rem] bg-gray-400", "w-full")} />
          </button>
        </div>
        <div className={tw("flex w-full flex-1 flex-col gap-[18rem] px-[22rem] pt-[18rem]")}>
          {data.map((item, index) => (
            <div key={item.name + index} className={tw("flex flex-col gap-[18rem]")}>
              <ListModalItem {...item} isEmergency={state === 1} />
              {data.length - 1 === index || <div className={tw("h-[1rem] w-full bg-gray-300")} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
