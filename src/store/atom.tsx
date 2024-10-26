import { atom } from "recoil";

import { TPageTransitionState, TPingerCheckData } from "./type";

export const pageTransitionState = atom<TPageTransitionState>({
  key: "pageTransitionState",
  default: {
    to: "/",
    transition: "fade",
  },
});

export const mainButtonModalState = atom<boolean>({
  key: "mainButtonModalState",
  default: false,
});
