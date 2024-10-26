import { TPingerCheckData } from "../../types";

export interface ISingleChoiceWithTagProps {
  data: TPingerCheckData;
  page: number;
  dataIndex: number;
  setChoiceData: React.Dispatch<React.SetStateAction<string[]>>;
}

export type TSingleChoiceWithTagListData = { title: string; tags: string[]; desc: string }[];
