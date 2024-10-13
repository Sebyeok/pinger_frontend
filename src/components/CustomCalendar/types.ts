import { FieldValues, Path, UseFormReturn } from "react-hook-form";

export type TCustomCalendar<T extends FieldValues> = {
  name: Path<T>;
  hookForm: UseFormReturn<T>;
  childrenOpenDrop?: boolean;
  minDate?: number;
  maxDate?: number;
  cautionText?: string;
  timeLimit?: boolean;
  position?: string;
  disabled?: boolean;
};
