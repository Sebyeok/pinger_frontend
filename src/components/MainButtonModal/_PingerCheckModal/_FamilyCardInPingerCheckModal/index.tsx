import dayjs, { Dayjs } from "dayjs";
import { useSetRecoilState } from "recoil";

import { IFamilyCardInPingerCheckModalProps } from "./types";

import useCustomNavigate from "@/hooks/useCustomNavigate";
import { mainButtonModalState } from "@/store/atom";
import { tw } from "@/utils/tw";

export default function FamilyCardInPingerCheckModal({
  tag,
  name,
  birth,
  isActive,
  setModalOpen,
}: IFamilyCardInPingerCheckModalProps) {
  const navigate = useCustomNavigate();
  const setMainButtonModalOpen = useSetRecoilState(mainButtonModalState);
  const tagColor =
    tag.color === "ktas1"
      ? "bg-ktas1"
      : tag.color === "ktas2"
        ? "bg-ktas2"
        : tag.color === "ktas3"
          ? "bg-ktas3"
          : "bg-ktas4";
  const borderColor =
    tag.color === "ktas1"
      ? "border-ktas1 "
      : tag.color === "ktas2"
        ? "border-ktas2 "
        : tag.color === "ktas3"
          ? "border-ktas3 "
          : "border-ktas4 ";

  const age = calculateAge(birth);

  function calculateAge(birthDate: Dayjs) {
    const today = dayjs();
    const birth = dayjs(birthDate);

    // 나이 계산
    let age = today.year() - birth.year();

    // 생일이 안 지났으면 나이에서 1을 뺌
    if (today.month() < birth.month() || (today.month() === birth.month() && today.date() < birth.date())) age--;

    return age;
  }

  return (
    <button
      className={tw(
        isActive ? "shadow-individualCard" : "opacity-50",
        "mr-[15rem] h-[207rem] w-[169rem] min-w-[169rem] rounded-[20rem] border-[1.5rem] border-solid bg-white px-[20rem] py-[19rem]",
        borderColor
      )}
      onClick={() => {
        setModalOpen(false);
        setMainButtonModalOpen(false);
        navigate("/PingerCheck/", "slideFromRight");
      }}
    >
      <div
        className={tw(
          "h-[22rem] w-fit rounded-full px-[12.5rem] py-[4rem] ts-12-bold",
          tagColor,
          tag.color === "ktas3" ? "text-black" : "text-white"
        )}
      >
        {tag.text}
      </div>
      <div className={tw("mt-[23rem] flex items-center gap-[3rem]")}>
        <div className={tw("ts-24-bold")}>{name}</div>
        <div className={tw("ts-24-medium")}>{"님"}</div>
      </div>
      <div className={tw("mt-[38rem] flex flex-col items-end gap-[2rem]")}>
        <div className={tw("mt-[6rem] ts-16-date")}>{birth.format("YYYY.MM.DD")}</div>
        <div className={tw("mt-[6rem] ts-16-semibold")}>만 {age}세</div>
      </div>
    </button>
  );
}
