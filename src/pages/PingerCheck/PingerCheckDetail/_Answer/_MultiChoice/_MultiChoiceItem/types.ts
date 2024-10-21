export interface IMultiChoiceItemProps {
  index: number;
  text: string;
  isSelected: boolean;
  selectedIndex: Set<number>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<Set<number>>>;
}
