import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

import { TPatient } from "@/pages/Study/StudyList/PatientView/types";
import { TStudy } from "@/pages/Study/StudyList/StudyView/types";

const ratio = screen.availWidth / 1920;

export const columns: { [key: string]: ColumnDef<TStudy | TPatient>[] } = {
  study: [
    {
      accessorKey: "studyId",
      header: "Study ID",
      size: 232 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "patientId",
      header: "Patient Id",
      cell: (cellContext) => cellContext.getValue(),
      size: 232 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "patientName",
      header: "Patient Name",
      size: 275 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "institution",
      header: "Institution",
      size: 270 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "description",
      header: "Description",
      size: 384 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "studyDate",
      header: "Study Date",
      cell: (cellContext) => dayjs.unix(cellContext.getValue() as number).format("MM / DD / YYYY"),
      size: 170 * ratio,
    },
    {
      accessorKey: "uploadDate",
      header: "Upload Date",
      cell: (cellContext) => dayjs.unix(cellContext.getValue() as number).format("MM / DD / YYYY"),
      size: 170 * ratio,
    },
    {
      accessorKey: "maxCadaiScore",
      header: "CadAI Score",
      cell: (cellContext) => ((cellContext.getValue() as number) < 10 ? "Low" : (cellContext.getValue() as number)),
      size: 130 * ratio,
    },
  ],
  patient: [
    {
      accessorKey: "patientId",
      header: "Patient Id",
      cell: (cellContext) => cellContext.getValue(),
      size: 232 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "patientName",
      header: "Patient Name",
      cell: (cellContext) => cellContext.getValue(),
      size: 232 * ratio,
      enableSorting: false,
    },
    {
      accessorKey: "institution",
      header: "Institution",
      cell: (cellContext) => cellContext.getValue(),
      size: 275 * ratio,
      enableSorting: false,
    },
  ],
};
