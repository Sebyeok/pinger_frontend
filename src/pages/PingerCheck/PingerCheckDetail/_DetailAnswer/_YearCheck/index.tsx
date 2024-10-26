import { useEffect, useRef, useState } from "react";

import { IYearCheckProps } from "./types";

import { tw } from "@/utils/tw";

const yearArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const rem = screen.availWidth / 430;

const ranges = [0, 41 * rem, 75 * rem, 109 * rem, 143 * rem, 177 * rem, 211 * rem, 245 * rem, 279 * rem, 310 * rem];

export default function YearCheck({ setChoiceData, dataIndex, page }: IYearCheckProps) {
  const [selectedYear, setSelectedYear] = useState(0); // Initial selected year
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false); // 스크롤 중인지 여부를 추적

  function handleScroll() {
    if (containerRef.current) {
      const scrollTop = containerRef.current.scrollTop;

      let selectedIndex = 0;
      if (scrollTop < ranges[1]) selectedIndex = 0;
      else if (ranges[1] <= scrollTop && scrollTop < ranges[2]) selectedIndex = 1;
      else if (ranges[2] <= scrollTop && scrollTop < ranges[3]) selectedIndex = 2;
      else if (ranges[3] <= scrollTop && scrollTop < ranges[4]) selectedIndex = 3;
      else if (ranges[4] <= scrollTop && scrollTop < ranges[5]) selectedIndex = 4;
      else if (ranges[5] <= scrollTop && scrollTop < ranges[6]) selectedIndex = 5;
      else if (ranges[6] <= scrollTop && scrollTop < ranges[7]) selectedIndex = 6;
      else if (ranges[7] <= scrollTop && scrollTop < ranges[8]) selectedIndex = 7;
      else if (ranges[8] <= scrollTop && scrollTop < ranges[9]) selectedIndex = 8;
      else if (ranges[9] <= scrollTop) selectedIndex = 9;

      setSelectedYear(selectedIndex); // 중앙에 있는 항목을 selectedYear로 설정

      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        isScrollingRef.current = false; // 스크롤이 멈췄음을 표시
        containerRef.current?.scrollTo({
          top: ranges[selectedIndex] + 1 * rem,
          behavior: "smooth",
        });
      }, 500); // 100ms 후 스크롤 멈춤 감지

      // 스크롤 위치에 따른 크기, 투명도, 라인 높이 조정
      Array.from(containerRef.current.children).forEach((child, index) => {
        const element = child as HTMLElement;
        let fontSize, opacity, lineHeight;

        if (index === selectedIndex) {
          fontSize = 50; // 중앙일 때
          lineHeight = 65;
          opacity = 1;
        } else if (Math.abs(index - selectedIndex) < 2) {
          fontSize = 38; // 한 칸 위나 아래일 때
          lineHeight = 34;
          opacity = 0.35;
        } else {
          fontSize = 30; // 두 칸 위나 아래일 때
          lineHeight = 27;
          opacity = 0.15;
        }

        element.style.fontSize = `${fontSize}rem`;
        element.style.lineHeight = `${lineHeight}rem`;
        element.style.opacity = `${opacity}`;
      });
    }
  }

  useEffect(handleScroll, []);

  useEffect(() => {
    if (dataIndex === page) setChoiceData([String(selectedYear)]);
  }, [selectedYear, page]);

  return (
    <div
      className={tw(
        "mt-[12rem] flex h-full w-[calc(100%-16rem)] flex-col items-center rounded-[25rem] bg-navy-100 px-[43.5rem] py-[24rem]"
      )}
    >
      <div className={tw("text-[50rem] font-semibold leading-[60rem] text-white")}>Q.</div>
      <div className={tw("mt-[10rem] text-white ts-20-medium")}>통증을 느낀지 몇 년 되었나요?</div>
      <div
        className={tw(
          "preventScrollOverflow mt-[69rem] flex h-[215rem] w-[327rem] flex-col gap-[7rem] overflow-y-scroll overscroll-contain pb-[80rem] pt-[75rem]"
        )}
        onScroll={handleScroll}
        ref={containerRef}
      >
        {yearArray.map((year) => (
          <div
            key={year}
            className={tw(
              "flex w-full items-center justify-center text-[50rem] font-semibold text-white transition-all"
            )}
          >{`${year} 년`}</div>
        ))}
      </div>
    </div>
  );
}
