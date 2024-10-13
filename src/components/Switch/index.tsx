import { useNavigate } from "react-router-dom";

import { tw } from "@/utils/tw";

interface ISwitchProps {
  onText: string;
  offText: string;
  on: boolean;
  setOn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Switch({ onText, offText, on, setOn }: ISwitchProps) {
  const navigate = useNavigate();
  return (
    <div className="relative h-[40rem] w-[200rem] rounded-[5rem] bg-gray-300 no-drag">
      <div
        className={tw(
          "absolute h-[40rem] w-[100rem] rounded-[5rem] bg-main-dark transition-all",
          on ? "left-0" : "left-[100rem]"
        )}
      />
      <button
        className={tw(
          "absolute left-0 flex h-[40rem] w-[100rem] items-center justify-center",
          on ? "text-white" : "text-white-opacity-30 hover:text-white-opacity-80"
        )}
        disabled={on}
        onClick={() => {
          setOn(true);
          navigate("/study");
        }}
      >
        {onText}
      </button>
      <button
        className={tw(
          "absolute right-0 flex h-[40rem] w-[100rem] items-center justify-center",
          !on ? "text-white" : "text-white-opacity-30 hover:text-white-opacity-80"
        )}
        disabled={!on}
        onClick={() => {
          setOn(false);
          navigate("/patient");
        }}
      >
        {offText}
      </button>
    </div>
  );
}
