import { tw } from "@/utils/tw";

export default function HotTextItem({ index, text }: { index: number; text: string }) {
  return (
    <div className={tw("flex h-[47rem] w-full")}>
      <div className={tw("flex h-full w-[43rem] items-center justify-center ts-16-semibold")}>{index}</div>
      <div
        className={tw("flex flex-1 items-center border-b-[1rem] border-solid border-gray-400 pl-[4rem] ts-16-semibold")}
      >
        {text}
      </div>
    </div>
  );
}
