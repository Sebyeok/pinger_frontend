import "./Calendar.css";

import { cloneElement, PropsWithChildren, ReactElement, useEffect, useMemo, useState } from "react";
import Calendar from "react-calendar";
import { FieldValues, Path, PathValue } from "react-hook-form";

import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

import { SCustomCalendar as S } from "./styles";
import { TCustomCalendar } from "./types";
export default function CustomCalendar<T extends FieldValues>({
  name,
  hookForm,
  minDate,
  maxDate,
  position = "bottom",
  children,
  disabled = false,
  childrenOpenDrop = false,
}: PropsWithChildren<TCustomCalendar<T>>) {
  const { setValue, watch } = hookForm;
  const date = dayjs.unix(watch(name));

  const className = useMemo(() => "customCalendarComponent" + uuidv4(), []);

  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const targetElement = event.target as HTMLElement;
      const yourElement = document.querySelector("." + className) as HTMLElement;
      // 바깥을 클릭했을 때
      if (
        yourElement &&
        !yourElement.contains(targetElement) &&
        !(
          targetElement.className.includes("react-calendar") ||
          targetElement.parentElement?.className.includes("react-calendar")
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <S.Container className={className}>
      <S.ChildrenWrapper type="button" disabled={disabled} onClick={() => setOpen((open) => !open)}>
        {childrenOpenDrop ? cloneElement(children as ReactElement, { open }) : children}
      </S.ChildrenWrapper>
      {open && (
        <S.CalendarWrapper $position={position}>
          <Calendar
            calendarType="gregory"
            minDate={minDate ? dayjs.unix(minDate).toDate() : undefined}
            maxDate={maxDate ? dayjs.unix(maxDate).toDate() : undefined}
            value={date.toDate()}
            onChange={(value) => {
              const dayjsValue = dayjs(value as Date)
                .set("hour", date.hour())
                .set("minute", date.minute())
                .set("second", 0);

              setValue(name, dayjsValue.unix() as PathValue<T, Path<T>>);
            }}
            locale="en"
            onClickDay={() => setOpen((open) => !open)}
          />
        </S.CalendarWrapper>
      )}
    </S.Container>
  );
}
