import { TPingerCheckData } from "../types";

export interface IRenderScreenProps {
  data: TPingerCheckData;
  choiceData: string[];
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
  page: number;
  dataIndex: number;
  theme: "light" | "dark";
}
