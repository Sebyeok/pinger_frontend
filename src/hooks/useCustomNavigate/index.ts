import { NavigateOptions, To, useNavigate } from "react-router-dom";

import { TUseCustomNavigateProps } from "./types";

import { TPageTransition } from "@/layout/GlobalMain/types";

export default function useCustomNavigate(): TUseCustomNavigateProps {
  const navigate = useNavigate();
  return (to: To, transition: TPageTransition, options?: NavigateOptions) => {
    const state = options?.state ? { ...options.state, transition } : { transition };
    navigate(to, { ...options, state, replace: true });
  };
}
