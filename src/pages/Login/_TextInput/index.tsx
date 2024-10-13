import { useEffect, useState } from "react";
import { InputHTMLAttributes } from "react";
import { FieldValues, Path, RegisterOptions, UseFormReturn } from "react-hook-form";

import Svg from "../../../components/Svg";
import { TSvgName } from "../../../components/Svg/types";

import { tw } from "@/utils/tw";

type TTextInput<T extends FieldValues> = InputHTMLAttributes<HTMLInputElement> & {
  name: Path<T>;
  hookForm: UseFormReturn<T>;
  iconName?: TSvgName;
  rules?: Omit<RegisterOptions<T>, "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled">;
  showMessage?: boolean;
};

export default function TextInput<T extends FieldValues>({
  name,
  rules,
  hookForm,
  iconName,
  showMessage = false,
  ...props
}: TTextInput<T>) {
  const {
    register,
    getValues,
    watch,
    formState: { errors },
  } = hookForm;

  const [err, setErr] = useState<boolean>(!!errors[name]);

  const value = showMessage ? watch(name) : getValues()[name];

  function onBlurHandler() {
    if (value && errors[name]) {
      setErr(true);
    }
  }

  useEffect(() => {
    if (!showMessage) {
      setErr(!!errors[name]);
    } else {
      if (err && !errors[name]) {
        setErr(false);
      }
      if (!value) {
        setErr(false);
      }
    }
  }, [errors, value]);

  return (
    <div
      className={tw(
        err && showMessage ? "outline outline-[1rem] outline-red" : "",
        "relative flex w-full gap-[20rem] rounded-[12rem] bg-gray-200 px-[20rem] has-[.LoginInput:focus]:outline has-[.LoginInput:focus]:outline-[1rem] has-[.LoginInput:focus]:outline-main-dark"
      )}
    >
      {iconName && (
        <div className="flex h-[55rem] w-[25rem] items-center justify-center">
          <Svg iconName={iconName} className="w-[25rem]" />
        </div>
      )}
      <input
        className={tw(
          "LoginInput h-[55rem] w-full bg-gray-200 bg-transparent pr-[5rem] text-white !caret-white ts-light-22h placeholder:text-white-opacity-30 focus:outline-none"
        )}
        {...register(name, { ...rules })}
        onBlur={!showMessage ? () => {} : onBlurHandler}
        {...props}
      />
      {err && showMessage && (
        <div
          className={tw(
            props.style?.height ? `top-[${props.style?.height}]` : "left-0 top-[60rem] gap-[10rem]",
            "absolute flex items-center"
          )}
        >
          {/* {err && showMessage && errors[name]?.message && (
            <div className="w-[20rem]">
              <Svg iconName="caution" className="w-[20rem]" />
            </div>
          )} */}
          <div className="text-red">{err && showMessage && (errors[name]?.message as string)}</div>
        </div>
      )}
    </div>
  );
}
