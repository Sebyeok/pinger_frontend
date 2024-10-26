import { TPingerCheckData } from "../../types";

export interface IMultiChoiceProps {
  data: TPingerCheckData;
  page: number;
  dataIndex: number;
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}
