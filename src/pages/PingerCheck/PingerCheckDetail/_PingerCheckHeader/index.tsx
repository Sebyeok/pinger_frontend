import Svg from "../../../../components/Svg";

import { IPingerCheckHeaderProps } from "./types";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckHeader({ theme }: IPingerCheckHeaderProps) {
  const navigate = useCustomNavigate();
  return (
    <div className={tw("absolute left-0 top-[calc(env(safe-area-inset-top)+19rem)] w-full")}>
      <div className={tw("flex h-[35rem] w-full items-center justify-between px-[20rem]")}>
        <div
          className={tw(
            theme === "light"
              ? "border-navy-100 text-navy-100"
              : "border-gray-200 bg-[#E3E8EE] bg-opacity-20 text-white",
            "flex h-[35rem] w-[150rem] items-center justify-center rounded-full border-[1rem] border-solid transition-colors ts-16-bold-120"
          )}
        >
          PINGER
          <div className={tw(theme === "light" ? "text-navy-100" : "text-white", "transition-colors ts-16-medium-120")}>
            -CHECK
          </div>
        </div>
        <button
          onClick={() => navigate("/", "slideFromLeft")}
          className={tw("flex h-[26rem] w-[26rem] items-center justify-center")}
        >
          <Svg
            iconName="closeIcon"
            className={tw(theme === "light" ? "fill-gray-500" : "fill-white", "h-[10rem] w-[10rem] transition-colors")}
          />
        </button>
      </div>
    </div>
  );
}
