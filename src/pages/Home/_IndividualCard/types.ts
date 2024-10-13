import { Dayjs } from "dayjs";

export interface ICardData {
  tag: { text: string; color: string };
  name: string;
  birth: Dayjs;
  recentRecord: {
    hospital: string;
    date: Dayjs;
  };
}

export interface IIndividualCardProps extends ICardData {
  isActive: boolean;
}
