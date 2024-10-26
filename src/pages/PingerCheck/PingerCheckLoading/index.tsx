import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckLoading() {
  const navigate = useCustomNavigate();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => navigate("/PingerCheck/Result/", "fade", { state: location.state }), 1500);
  }, []);

  return (
    <div className="mainContainer flex h-screen w-full flex-col items-center overflow-hidden bg-navy-100">
      <Svg iconName="pingerTextLogo" className="mt-[268rem] h-[31rem] w-[105rem] fill-white" />
      <div className={tw("mt-[16rem] text-gray-100 ts-20-semibold")}>증상을 분석 중입니다...</div>
    </div>
  );
}
