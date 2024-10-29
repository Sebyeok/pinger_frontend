/*
npm run svg
yarn svg
bun svg
*/

import { ComponentPropsWithoutRef } from "react";

export type TSvgName =
  | "backIcon"
  | "bottomTabHomeIcon"
  | "bottomTabListIcon"
  | "bottomTabMainIcon"
  | "bottomTabMapIcon"
  | "bottomTabPersonIcon"
  | "calendarIcon"
  | "chartIcon"
  | "closeIcon"
  | "diseaseIcon"
  | "heartIcon"
  | "historyCheckIcon"
  | "homeAlarmIcon"
  | "homeLocationIcon"
  | "pingerLogo"
  | "pingerTextLogo"
  | "rightIcon"
  | "searchIcon"
  | "thunderIcon"
  | "upRightIcon";

export interface ISvgProps extends React.SVGProps<SVGSVGElement> {
  iconName: TSvgName;
  svgProps?: ComponentPropsWithoutRef<"svg">;
}
