/*
npm run svg
yarn svg
bun svg
*/

import backIcon from "@images/svg/backIcon.svg?react";
import bottomTabHomeIcon from "@images/svg/bottomTabHomeIcon.svg?react";
import bottomTabListIcon from "@images/svg/bottomTabListIcon.svg?react";
import bottomTabMainIcon from "@images/svg/bottomTabMainIcon.svg?react";
import bottomTabMapIcon from "@images/svg/bottomTabMapIcon.svg?react";
import bottomTabPersonIcon from "@images/svg/bottomTabPersonIcon.svg?react";
import calendarIcon from "@images/svg/calendarIcon.svg?react";
import closeIcon from "@images/svg/closeIcon.svg?react";
import diseaseIcon from "@images/svg/diseaseIcon.svg?react";
import heartIcon from "@images/svg/heartIcon.svg?react";
import homeAlarmIcon from "@images/svg/homeAlarmIcon.svg?react";
import homeLocationIcon from "@images/svg/homeLocationIcon.svg?react";
import pingerLogo from "@images/svg/pingerLogo.svg?react";
import pingerTextLogo from "@images/svg/pingerTextLogo.svg?react";
import searchIcon from "@images/svg/searchIcon.svg?react";
import thunderIcon from "@images/svg/thunderIcon.svg?react";
import upRightIcon from "@images/svg/upRightIcon.svg?react";

import { ISvgProps } from "./types";

const SvgComponents = {
  backIcon,
  bottomTabHomeIcon,
  bottomTabListIcon,
  bottomTabMainIcon,
  bottomTabMapIcon,
  bottomTabPersonIcon,
  calendarIcon,
  closeIcon,
  diseaseIcon,
  heartIcon,
  homeAlarmIcon,
  homeLocationIcon,
  pingerLogo,
  pingerTextLogo,
  searchIcon,
  thunderIcon,
  upRightIcon,
};

export default function Svg({ iconName, ...props }: ISvgProps) {
  const Component = SvgComponents[iconName];
  return <Component {...props} />;
}
