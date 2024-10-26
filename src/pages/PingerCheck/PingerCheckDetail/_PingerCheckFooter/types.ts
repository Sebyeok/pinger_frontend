import { TPingerCheckData } from "../types";

export interface IPingerCheckFooterProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  data: TPingerCheckData[];
  setData: React.Dispatch<React.SetStateAction<TPingerCheckData[]>>;
  choiceData: string[];
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}
