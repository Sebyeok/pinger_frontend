import { TPingerCheckData } from "../../types";

export interface ITimeChoiceProps {
  data: TPingerCheckData;
  page: number;
  dataIndex: number;
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}
