import { useForm } from "react-hook-form";

import { ILoginForm } from "./types";

import { EMAIL_PATTERN } from "@/constants/pattern";
import useCustomNavigate from "@/hooks/useCustomNavigate";
import { tw } from "@/utils/tw";

const LOGIN_FORM_DEFAULT_VALUE = {
  email: "",
  password: "",
  "remember-me": true,
};

export default function Login() {
  const navigate = useCustomNavigate();
  const hookForm = useForm<ILoginForm>({
    mode: "onChange",
    defaultValues: LOGIN_FORM_DEFAULT_VALUE,
  });

  const {
    formState: { isValid },
    handleSubmit,
    watch,
    setValue,
  } = hookForm;

  const saveId = watch("remember-me");

  const errorMessage = {
    email: "Invalid user ID, Please verify and try again.",
  };

  const rules = {
    email: {
      required: true,
      pattern: { value: EMAIL_PATTERN, message: errorMessage.email },
    },
    password: {
      required: true,
    },
  };
  return (
    <div className="flex h-screen w-full items-center justify-center bg-red pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)]">
      hi
      <div className={tw("fixed left-[40px] top-[env(safe-area-inset-top)] z-[100] flex gap-[20px] text-black")}>
        <button className={tw("bg-main text-black")} onClick={() => navigate("/hi", "slideFromLeft")}>
          hi from Left
        </button>
      </div>
      <div className={tw("fixed bottom-[0px] left-[40px] z-[100] flex gap-[20px] text-black")}>
        <button className={tw("bg-main text-black")} onClick={() => navigate("/hi", "slideFromRight")}>
          hi from Right
        </button>
      </div>
    </div>
  );
}
