import { SetStateAction, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";

import { InfiniteData, UseInfiniteQueryResult } from "@tanstack/react-query";
import {
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  OnChangeFn,
  Row,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import dayjs from "dayjs";

import Svg from "../Svg";

import "./index.css";
import { columns } from "./columns";

import { TPatientApiResponse, TStudyApiResponse } from "@/api/Study/types";
import { TPatient } from "@/pages/Study/StudyList/PatientView/types";
import { TStudy } from "@/pages/Study/StudyList/StudyView/types";
import { TSearchFilter } from "@/pages/Study/StudyList/types";
import { tw } from "@/utils/tw";

type TUseGetList =
  | ((
      sorting: SortingState,
      searchfilter?: TSearchFilter
    ) => UseInfiniteQueryResult<InfiniteData<TStudyApiResponse, unknown>, Error>)
  | (() => UseInfiniteQueryResult<InfiniteData<TPatientApiResponse, unknown>, Error>);
interface ITabelProps {
  type: string;
  tableHeight: string;
  cellHeight: number;
  tableWidth: string;
  useGetList: TUseGetList;
  minHeight?: string;
  clickedRow?: Row<TPatient> | undefined;
  setClickedRow?: React.Dispatch<SetStateAction<Row<TPatient> | undefined>>;
  searchFilter?: TSearchFilter;
}

export default function VirtualizedTable({
  type,
  tableHeight,
  cellHeight,
  tableWidth,
  useGetList,
  minHeight = "0rem",
  clickedRow,
  setClickedRow,
  searchFilter,
}: ITabelProps) {
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const [sorting, setSorting] = useState<SortingState>([]);

  const { data, fetchNextPage, isFetching } = useGetList(sorting, searchFilter);

  const flatData = useMemo(
    () => (data?.pages?.flatMap((page) => page.rawData as unknown) as TPatient[] | TStudy[]) ?? [],
    [data]
  );
  const totalDBRowCount = useMemo(() => (data ? data.pages[data.pages.length - 1].totalElements : 0), [data]); //data.pages[data.pages.length-1].total
  const totalFetched = useMemo(() => flatData.length, [flatData]);

  //called on scroll and possibly on mount to fetch more data as the user scrolls and reaches bottom of table
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement;
        //once the user has scrolled within 200px of the bottom of the table, fetch more data if we can
        if (scrollHeight - scrollTop - clientHeight < 200 && !isFetching && totalFetched < totalDBRowCount) {
          fetchNextPage();
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  );

  //a check on mount and after a fetch to see if the table is already scrolled to the bottom and immediately needs to fetch more data
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current);
  }, [fetchMoreOnBottomReached]);

  const table = useReactTable<TStudy | TPatient>({
    data: flatData,
    columns: columns[type],
    state: {
      sorting,
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualSorting: true,
    debugTable: true,
    enableRowSelection: true,
  });

  //scroll to top of table when sorting changes
  const handleSortingChange: OnChangeFn<SortingState> = (updater) => {
    setSorting(updater);
    if (table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0);
    }
  };

  //since this table option is derived from table row model state, we're using the table.setOptions utility
  table.setOptions((prev) => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }));

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => (cellHeight * screen.availHeight) / 1920,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
      typeof window !== "undefined" && navigator.userAgent.indexOf("Firefox") === -1
        ? (element) => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  });

  return (
    <div className="flex flex-col" style={{ minWidth: tableWidth }}>
      <div
        onScroll={(e) => fetchMoreOnBottomReached(e.target as HTMLDivElement)}
        ref={tableContainerRef}
        className={tw("relative w-full overflow-auto", `h-[${tableHeight}] min-h-[${minHeight}]`)}
      >
        <table className="flex w-full flex-col">
          <thead className="sticky top-[-1rem] z-10 flex bg-gray-500">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="flex h-[56rem] gap-[1rem]">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      className={tw(
                        header.column.getCanSort()
                          ? "SortableHeader flex w-full cursor-pointer items-center gap-[5rem]"
                          : "flex w-full items-center"
                      )}
                      key={header.id}
                      style={{
                        width: header.getSize(),
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      <div
                        className={tw(
                          header.column.getCanSort() &&
                            "flex select-none items-center justify-start gap-[5rem] ts-light-20"
                        )}
                      >
                        {flexRender(header.column.columnDef.header, header.getContext())}
                        {{
                          asc: <Svg iconName="sort" className={tw("w-[14rem] rotate-180", "fill-main")} />,
                          desc: <Svg iconName="sort" className={tw("w-[14rem] fill-main")} />,
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                      {header.column.getCanSort() && !header.column.getIsSorted() && (
                        <Svg iconName="sort" className={tw("hoverIcon w-[14rem]")} />
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody
            className="StudyTableBody relative flex flex-col"
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`, //tells scrollbar how big the table is
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow, index) => {
              const row = rows[virtualRow.index] as Row<TStudy | TPatient>;
              if (setClickedRow) {
                return (
                  <tr
                    className={tw(
                      clickedRow?.index === row.index ? "ClickedRow" : "",
                      "z-9 absolute flex w-full cursor-pointer gap-[1rem]"
                    )}
                    data-index={virtualRow.index} //needed for dynamic row height measurement
                    ref={(node) => rowVirtualizer.measureElement(node)} //measure dynamic row height
                    key={row.id}
                    onClick={() => setClickedRow(row as Row<TPatient>)}
                    style={{
                      transform: `translateY(calc(${virtualRow.start}px + ${index * 5}rem))`, //this should always be a `style` as it changes on scroll
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="flex h-[35rem] w-full items-center justify-center bg-gray-300 px-[10rem]"
                          style={{
                            width: cell.column.getSize(),
                          }}
                          title={
                            (cell.column.id.includes("Date")
                              ? dayjs(cell.getValue() as number).format("MM / DD / YYYY")
                              : cell.getValue()) as string
                          }
                        >
                          <div className="overflow-hidden text-ellipsis text-nowrap ts-light-16">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              } else {
                return (
                  <tr
                    className="z-9 absolute flex w-full gap-[1rem]"
                    data-index={virtualRow.index} //needed for dynamic row height measurement
                    ref={(node) => rowVirtualizer.measureElement(node)} //measure dynamic row height
                    key={row.id}
                    style={{
                      transform: `translateY(calc(${virtualRow.start}px + ${index * 5}rem))`, //this should always be a `style` as it changes on scroll
                    }}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="bg-gray-300"
                          title={
                            (cell.column.id.includes("Date")
                              ? dayjs(cell.getValue() as number).format("MM / DD / YYYY")
                              : cell.getValue()) as string
                          }
                          style={{
                            width: cell.column.getSize(),
                          }}
                        >
                          <Link
                            className="flex h-[35rem] w-full items-center justify-center px-[10rem]"
                            to={`/viewer/${row.getValue("studyId")}`}
                          >
                            <div className="overflow-hidden text-ellipsis text-nowrap ts-light-16">
                              {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </div>
                          </Link>
                        </td>
                      );
                    })}
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
