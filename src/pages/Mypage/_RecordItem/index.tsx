import { tw } from "@/utils/tw";

export default function RecordItem({ text, date }: { text: string; date: string }) {
  return (
    <div className={tw("flex w-full flex-col")}>
      <div className={tw("flex flex-wrap gap-x-[10rem] ts-16-regular")}>
        {text} <div className={tw("text-navy-100 ts-16-regular")}>({date})</div>
      </div>
      <div className={tw("mt-[4rem] h-[0.5rem] w-full bg-gray-200")}></div>
    </div>
  );
}
