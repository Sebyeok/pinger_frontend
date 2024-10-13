import { faker } from "@faker-js/faker";
import { ColumnSort, SortingState } from "@tanstack/react-table";
import dayjs from "dayjs";

import { TStudy } from "@/pages/Study/StudyList/StudyView/types";

const range = (len: number) => {
  const arr: number[] = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPerson = (): TStudy => {
  return {
    studyId: faker.number.int(100000000000),
    patientId: faker.number.int(100000000),
    patientName: faker.person.lastName(),
    institution: faker.company.name(),
    description: faker.person.jobTitle(),
    studyDate: dayjs(faker.date.anytime()),
    uploadDate: dayjs(faker.date.anytime()),
    cadaiScore: faker.number.int(100),
  };
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): TStudy[] => {
    const len = lens[depth]!;
    return range(len).map((): TStudy => {
      return {
        ...newPerson(),
      };
    });
  };

  return makeDataLevel();
}

const data = makeData(1000);

//simulates a backend api
export const fetchData = async (start: number, size: number, sorting: SortingState) => {
  const dbData = [...data];
  if (sorting.length) {
    const sort = sorting[0] as ColumnSort;
    const { id, desc } = sort as { id: keyof TStudy; desc: boolean };
    dbData.sort((a, b) => {
      if (desc) {
        return a[id] < b[id] ? 1 : -1;
      }
      return a[id] > b[id] ? 1 : -1;
    });
  }

  //simulate a backend api
  await new Promise((resolve) => setTimeout(resolve, 200));

  return {
    data: dbData.slice(start, start + size),
    meta: {
      totalRowCount: dbData.length,
    },
  };
};
