/*
npm run svg
yarn svg
bun svg
*/

import { ComponentPropsWithoutRef } from 'react';

export type TSvgName = 
    | 'bottomTabHomeIcon'
    | 'bottomTabListIcon'
    | 'bottomTabMainIcon'
    | 'bottomTabMapIcon'
    | 'bottomTabPersonIcon'
    | 'calendarIcon'
    | 'closeIcon'
    | 'diseaseIcon'
    | 'heartIcon'
    | 'homeAlarmIcon'
    | 'homeLocationIcon'
    | 'pingerLogo'
    | 'pingerTextLogo'
    | 'thunderIcon'
    | 'upRightIcon';

export interface ISvgProps extends React.SVGProps<SVGSVGElement> {
    iconName: TSvgName;
    svgProps?: ComponentPropsWithoutRef<'svg'>;
}
