export interface IMultiChoiceItemProps {
  index: number;
  text: string;
  selectedIndex: Set<number>;
  setSelectedIndex: React.Dispatch<React.SetStateAction<Set<number>>>;
}
