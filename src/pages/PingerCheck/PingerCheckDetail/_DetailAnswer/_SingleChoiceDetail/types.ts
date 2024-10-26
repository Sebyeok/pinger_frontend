import { TPingerCheckData } from "../../types";

export interface ISingleChoiceDetailaProps {
  data: TPingerCheckData;
  page: number;
  dataIndex: number;
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}
