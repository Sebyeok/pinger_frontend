import { useState } from "react";

import Svg from "@/components/Svg";
import { tw } from "@/utils/tw";

const likedList = ["청명 이비인후과", "하늘소리 이비인후과", "대구경북대학교병원", "대구가톨릭대학교병원"];

export default function ListModalItem({
  name,
  distance,
  address,
  isEmergency,
}: {
  name: string;
  distance: string;
  address: string;
  isEmergency: boolean;
}) {
  const [like, setLike] = useState<boolean>(likedList.includes(name) ? true : false);
  return (
    <div className={tw("flex h-[49rem] w-full")}>
      <button onClick={() => setLike((old) => !old)}>
        <Svg
          iconName="heartIcon"
          className={tw(
            like ? "fill-ktas2 stroke-ktas2" : "fill-none stroke-gray-400",
            "h-[17rem] w-[18rem] transition-colors"
          )}
        />
      </button>
      <div className={tw("ml-[20rem] flex w-[255rem] flex-col gap-[4rem]")}>
        <div className={tw("ts-18-semibold")}>{name}</div>
        <div className={tw("flex items-center gap-[12rem]")}>
          <div className={tw("w-[46rem] ts-14-semibold")}>{distance}</div>
          <div className={tw("ts-14-regular")}>{address}</div>
        </div>
      </div>
      <div className={tw("flex items-center gap-[2rem]")}>
        <div className={tw("ts-16-medium")}>{isEmergency ? "전화" : "접수"}</div>
        <Svg iconName="upRightIcon" className="h-[13rem] w-[18rem] stroke-ktas1" />
      </div>
    </div>
  );
}
