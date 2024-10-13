import { FieldValues, Path, PathValue, UseFormReturn } from "react-hook-form";
import { Range, getTrackBackground } from "react-range";

import { palette } from "@/themes/styles";
import { tw } from "@/utils/tw";

export type TCustomCalendar<T extends FieldValues> = {
  name: Path<T>;
  hookForm: UseFormReturn<T>;
};

const STEP = 1;
const MIN = 0;
const MAX = 100;

export default function Slider<T extends FieldValues>({ name, hookForm }: TCustomCalendar<T>) {
  const { watch, setValue } = hookForm;
  const values = watch(name);
  return (
    <div className="relative flex flex-wrap justify-center">
      <Range
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        rtl={false}
        onChange={(onChangeValues) => {
          console.log(values.every((v: number, i: number) => v === onChangeValues[i]));
          if (!values.every((v: number, i: number) => v === onChangeValues[i])) {
            setValue(name, onChangeValues as PathValue<T, Path<T>>);
          }
        }}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
            }}
            className="relative flex h-[20rem] w-full items-center"
          >
            <div
              ref={props.ref}
              className="h-[7rem] w-full self-center rounded-[4rem]"
              style={{
                background: getTrackBackground({
                  values,
                  colors: [palette.gray[500] + "80", palette.main.dark, palette.gray[500] + "80"],
                  min: MIN,
                  max: MAX,
                  rtl: false,
                }),
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, index }) => (
          <div
            {...props}
            key={props.key}
            className="absolute z-[20] flex items-center justify-center"
            style={{
              ...props.style,
            }}
          >
            <div className="h-[15rem] w-[15rem] rounded-full bg-white shadow-custom" />
            <div
              className={tw(
                index === 0 ? "bottom-[24rem]" : "top-[24rem]",
                "absolute h-[20rem] rounded-[2rem] border-[1rem] border-solid border-white px-[4rem] py-[1rem] text-[13rem] font-extralight"
              )}
            >
              {values[index]}
            </div>
          </div>
        )}
      />
    </div>
  );
}
