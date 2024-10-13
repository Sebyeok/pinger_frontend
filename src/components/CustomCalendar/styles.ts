import styled from "styled-components";

export const SCustomCalendar = {
  Container: styled.div`
    position: relative;
    width: fit-content;
    height: 28px;
    border-radius: 3px;
  `,

  ChildrenWrapper: styled.button`
    cursor: pointer;
    &:disabled {
      cursor: auto;
    }
  `,

  CalendarWrapper: styled.div<{ $position: string }>`
    position: absolute;
    z-index: 10;
    left: -1px;
    margin-top: 4px;
    border-radius: 5px;
    box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.2);
    background-color: white;
    overflow: hidden;

    ${({ $position }) =>
      $position === "top" &&
      `
            bottom:32px;
        `}
  `,
};
