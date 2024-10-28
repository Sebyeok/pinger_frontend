import { useLocation } from "react-router-dom";

import { useSetRecoilState } from "recoil";

import Svg from "../Svg";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { mainButtonModalState } from "@/store/atom";
import { tw } from "@/utils/tw";

const bottomTabPathname: { [key: string]: string } = {
  "/": "home",
  "/Map": "map",
  "/History": "history",
  "/Mypage": "mypage",
};

export default function BottomTab() {
  const setModalOpen = useSetRecoilState(mainButtonModalState);
  const navigate = useCustomNavigate();
  const pathname = useLocation().pathname;
  const nowIn = bottomTabPathname[pathname];

  return (
    <div className="fixed bottom-0 z-[1] flex h-[104rem] w-full justify-center bg-white px-[40rem] pt-[21rem]">
      <div className="flex h-[46rem] w-full items-center justify-between">
        <button
          disabled={nowIn === "home"}
          onClick={() => navigate("/", "fade")}
          className={tw(
            nowIn === "home" ? "active:opacity-100" : "",
            "flex h-[46rem] w-[46rem] items-center justify-center"
          )}
        >
          <Svg
            iconName="bottomTabHomeIcon"
            className={tw(nowIn === "home" ? "stroke-navy-100" : "stroke-gray-400", "h-[28rem] w-[27rem]")}
          />
        </button>
        <button
          onClick={() => navigate("/Map", "fade")}
          className={tw(
            nowIn === "map" ? "active:opacity-100" : "",
            "flex h-[46rem] w-[46rem] items-center justify-center"
          )}
        >
          <Svg
            iconName="bottomTabMapIcon"
            className={tw(
              nowIn === "map" ? "fill-navy-100 stroke-navy-100" : "fill-gray-400 stroke-gray-400",
              "h-[30rem] w-[28rem]"
            )}
          />
        </button>
        <button
          className={tw(
            "flex h-[46rem] w-[46rem] items-center justify-center rounded-full shadow-bottomTabButton",
            "bg-navy-100"
          )}
          onClick={() => setModalOpen(true)}
        >
          <Svg iconName="bottomTabMainIcon" className={tw("fill-white", "h-[20rem] w-[21rem]")} />
        </button>
        <button
          className={tw(
            nowIn === "history" ? "active:opacity-100" : "",
            "flex h-[46rem] w-[46rem] items-center justify-center"
          )}
        >
          <Svg
            iconName="bottomTabListIcon"
            className={tw(nowIn === "history" ? "stroke-navy-100" : "stroke-gray-400", "h-[20rem] w-[23rem]")}
          />
        </button>
        <button className={tw("active:opacity-100", "flex h-[46rem] w-[46rem] items-center justify-center")}>
          <Svg
            iconName="bottomTabPersonIcon"
            className={tw(nowIn === "mypage" ? "stroke-navy-100" : "stroke-gray-400", "h-[26rem] w-[27rem]")}
          />
        </button>
      </div>
    </div>
  );
}
