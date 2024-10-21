import Svg from "../Svg";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckFooter() {
  const navigate = useCustomNavigate();
  return (
    <div className={tw("absolute bottom-0 flex h-[103rem] w-full flex-col bg-white")}>
      <div className={tw("relative h-[5rem] w-full bg-gray-300")}>
        <div className={tw("h-full w-[20rem] bg-ktas1")} />
        <div className={tw("absolute left-0 top-0 flex h-full w-full justify-between")}>
          <div />
          <div className={tw("h-full w-[4rem] bg-white")} />
          <div className={tw("h-full w-[4rem] bg-white")} />
          <div />
        </div>
      </div>
      <div className={tw("flex w-full flex-1 justify-between px-[30rem] pt-[20rem]")}>
        <button className={tw("h-[33rem] w-[33rem]")}>
          <Svg iconName="backIcon" className="h-[24rem] w-[33rem] stroke-navy-100" />
        </button>
        <button className={tw("h-[33rem] w-[33rem]")}>
          <Svg iconName="backIcon" className="h-[24rem] w-[33rem] rotate-180 stroke-navy-100" />
        </button>
      </div>
    </div>
  );
}
