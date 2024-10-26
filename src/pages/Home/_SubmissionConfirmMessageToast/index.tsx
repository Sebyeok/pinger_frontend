import { useEffect, useState } from "react";

import { random } from "lodash";

import { tw } from "@/utils/tw";

const hospitals = [
  "현대가정의학과의원",
  "봉생외과의원",
  "이상홍이비인후과의원",
  "로앤산부인과의원",
  "경대가정의학과의원",
  "김주형치과의원",
  "아이온안과의원",
  "하나연합정형외과의원",
  "행복한산부인과의원",
  "이명수정형외과",
  "맑은눈안과의원",
  "킴스건강내과외과의원",
  "이성원비뇨기과의원",
  "강내과의원",
  "마디탑정형외과의원",
  "경북건강내과외과의원",
  "아름산부인과여성병원",
  "한빛소아청소년병원",
  "정담케어내과의원",
];

export default function SubmissionConfirmMessageToast() {
  const [hospital, setHospital] = useState<string>(hospitals[0]);
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHospital(hospitals[random(hospitals.length - 1)]);
      setOpen(true);
      setTimeout(() => setOpen(false), 7000);
    }, 25000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={tw(
        "fixed flex w-screen justify-center",
        "transition-all duration-300",
        open ? "bottom-[105rem] opacity-100" : "bottom-[90rem] opacity-0"
      )}
    >
      <div className={tw("flex w-fit gap-[5rem] rounded-full bg-navy-100 px-[43.5rem] py-[13.5rem]")}>
        <div className="text-white ts-16-regular">{hospital}</div>
        <div className="text-white ts-16-semibold">접수 확인 중...</div>
      </div>
    </div>
  );
}
