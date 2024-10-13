import { ClassValue } from "clsx";

import { tw } from "@/utils/tw";

interface ISwitchProps {
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: ClassValue;
  disabled?: boolean;
}

export default function Button({ text, onClick = () => {}, className = [], disabled = false }: ISwitchProps) {
  return (
    <button
      className={tw(
        "flex h-[40rem] items-center justify-center rounded-[5rem] bg-main-dark px-[30rem] text-white ts-medium-20 hover:bg-main-semidark disabled:bg-gray-200 disabled:text-white-opacity-30",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
}
