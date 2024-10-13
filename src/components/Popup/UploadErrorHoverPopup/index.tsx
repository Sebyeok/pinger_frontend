import Svg from "../../Svg";

export default function UploadErrorHoverPopup() {
  return (
    <div
      id="errorHoverPopup"
      className="t-[5000rem] fixed flex max-w-[316rem] gap-[10rem] rounded-[5rem] bg-gray-400 p-[15rem]"
    >
      <div className="h-[16rem] w-[16rem]">
        <Svg iconName="caution" className="h-[16rem] min-h-[16rem] w-[16rem] min-w-[16rem]" />
      </div>
      <div
        id="errorHoverPopupText"
        className="w-full break-all text-[14rem] font-extralight leading-[16rem] text-white"
      ></div>
    </div>
  );
}
