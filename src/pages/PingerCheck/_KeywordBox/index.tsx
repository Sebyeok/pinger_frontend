import Svg from "@/components/Svg";

export default function KeywordBox({ text }: { text: string }) {
  return (
    <button className="flex h-[47rem] w-[212rem] items-center justify-between rounded-[10rem] border-[1rem] border-solid border-gray-400 bg-[#9BA4B3] bg-opacity-15 p-[12.5rem]">
      <div className="text-white ts-16-bold">{text}</div>
      <Svg iconName="upRightIcon" className="mr-[0.2rem] h-[13rem] w-[13rem] stroke-white" />
    </button>
  );
}
