import { ISvgProps } from "./types";
import { useDynamicSvgImport } from "./useDynamicSvgImport";

export default function Svg({ iconName, ...svgProps }: ISvgProps) {
  const { SvgIcon } = useDynamicSvgImport(iconName);
  return <>{SvgIcon && <SvgIcon {...svgProps} />}</>;
}
