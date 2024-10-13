import { NavigateOptions, To } from "react-router-dom";

import { TPageTransition } from "@/layout/GlobalMain/types";

export type TPageTransitionState = {
  to: To;
  transition: TPageTransition;
  options?: NavigateOptions;
};
