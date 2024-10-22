import { useLocation } from "react-router-dom";

import Burn from "./_Answer/_Burn";
import BurnBodySurface from "./_Answer/_BurnBodySurface";
import Dizziness from "./_Answer/_Dizziness";
import MultiChoice from "./_Answer/_MultiChoice";
import Pain from "./_Answer/_Pain";
import Temperature from "./_Answer/_Temperature";
import DayCheck from "./_DetailAnswer/_DayCheck";
import MonthCheck from "./_DetailAnswer/_MonthCheck";
import SingleChoice from "./_DetailAnswer/_SingleChoice";
import TimeCheck from "./_DetailAnswer/_TimeCheck";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

export default function PingerCheckDetail() {
  const navigate = useCustomNavigate();
  const location = useLocation();
  console.log(location.state);
  const a = 1;
  return (
    <div className={tw(a === 1 ? "bg-gray-100" : "bg-navy-100", "mainContainer h-screen w-full")}>
      <div className="flex h-full w-full flex-col items-center px-[8rem] pt-[75rem]">
        <div className={tw("flex h-full w-full flex-col rounded-[25rem] bg-gray-100 px-[21rem] pt-[22rem]")}>
          <div className={tw("ts-26-semibold")}>{"아래의 항목 중 해당하는"}</div>
          <div className={tw("flex text-ktas1 ts-26-semibold")}>
            {"증상 or 상태"}
            <div className="text-black ts-26-semibold">{"를 선택해주세요."}</div>
          </div>
          <div className={tw("my-[19rem] text-gray-500 ts-16-medium")}>{"해당하는 버튼을 모두 선택해주세요."}</div>

          {/* {<MultiChoice />} */}
          {/* {<Temperature />} */}
          {/* {<Dizziness />} */}
          {/* {<Burn />} */}
          {/* {<BurnBodySurface />} */}
          {/* {<Pain />} */}
          {/* {<SingleChoice />} */}
          {/* {<TimeCheck />} */}
          {/* {<DayCheck />} */}
          {<MonthCheck />}
        </div>
      </div>
    </div>
  );
}
