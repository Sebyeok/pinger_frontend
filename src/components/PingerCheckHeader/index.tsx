import Svg from "../Svg";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckHeader() {
  const navigate = useCustomNavigate();
  const a = 1;
  return (
    <div className={tw("absolute left-0 top-[78rem] w-full")}>
      <div className={tw("flex h-[35rem] w-full items-center justify-between px-[20rem]")}>
        <div
          className={tw(
            a === 1 ? "border-navy-100 text-navy-100" : "border-gray-200 bg-[#E3E8EE] bg-opacity-20 text-white",
            "flex h-[35rem] w-[150rem] items-center justify-center rounded-full border-[1rem] border-solid ts-16-bold-120"
          )}
        >
          PINGER <div className={tw(a === 1 ? "text-navy-100" : "text-white", "ts-16-medium-120")}>-CHECK</div>
        </div>
        <button
          onClick={() => navigate("/", "slideFromLeft")}
          className={tw("flex h-[26rem] w-[26rem] items-center justify-center")}
        >
          <Svg iconName="closeIcon" className={tw(a === 1 ? "fill-gray-500" : "fill-white", "h-[10rem] w-[10rem]")} />
        </button>
      </div>
    </div>
  );
}
