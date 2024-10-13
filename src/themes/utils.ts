import { css } from "styled-components";

export const cssValue = (value: string | number) => (typeof value === "string" ? value : value + "px");

export const nonScrollbar = css`
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
`;

// export const styledScollbar = css`
//   padding-right: 4px;

//   &::-webkit-scrollbar {
//     width: 8px;
//   }

//   &::-webkit-scrollbar-track {
//     width: 8px;
//     background-color: transparent;
//     padding-left: 4px;
//   }
//   &::-webkit-scrollbar-thumb {
//     width: 8px;
//     border: 2px solid transparent;
//     border-radius: 4px;
//     background-color: #d9d9d9;
//     background-clip: padding-box;
//   }
// `;
