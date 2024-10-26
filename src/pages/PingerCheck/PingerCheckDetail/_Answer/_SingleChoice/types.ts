import { TPingerCheckData } from "../../types";

export interface ISingleChoiceProps {
  data: TPingerCheckData;
  page: number;
  dataIndex: number;
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}
