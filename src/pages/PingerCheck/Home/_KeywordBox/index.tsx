import { useLocation } from "react-router-dom";

import Svg from "@/components/Svg";
import useCustomNavigate from "@/hooks/useCustomNavigate";

export default function KeywordBox({ text }: { text: string }) {
  const navigate = useCustomNavigate();
  const location = useLocation();

  return (
    <button
      onClick={() =>
        navigate("/PingerCheck/Detail", "slideFromRight", {
          state: {
            data: {
              symptom: text,
              name: location.state.data.name,
            },
          },
        })
      }
      className="flex h-[47rem] w-[212rem] items-center justify-between rounded-[10rem] border-[1rem] border-solid border-gray-400 bg-[#9BA4B3] bg-opacity-15 p-[12.5rem]"
    >
      <div className="text-white ts-16-bold">{text}</div>
      <Svg iconName="upRightIcon" className="mr-[0.2rem] h-[13rem] w-[13rem] stroke-white" />
    </button>
  );
}
