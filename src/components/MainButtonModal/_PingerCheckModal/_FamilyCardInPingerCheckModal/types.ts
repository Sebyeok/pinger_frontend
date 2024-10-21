import { Dayjs } from "dayjs";

export interface IFamilyCardInPingerCheckModalProps {
  tag: { text: string; color: string };
  name: string;
  birth: Dayjs;
  isActive: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
