import dayjs from "dayjs";

export const familyData = [
  {
    tag: { text: "본인", color: "ktas1" },
    name: "정재형",
    birth: dayjs("1981-12-31"),
    recentRecord: { hospital: "경북건강내과외과의원", date: dayjs("2024-03-20") },
  },
  {
    tag: { text: "배우자", color: "ktas2" },
    name: "이윤정",
    birth: dayjs("1984-05-28"),
    recentRecord: { hospital: "아름산부인과여성병원", date: dayjs("2024-05-10") },
  },
  {
    tag: { text: "자녀", color: "ktas3" },
    name: "정진아",
    birth: dayjs("2015-12-15"),
    recentRecord: { hospital: "한빛소아청소년병원", date: dayjs("2024-07-28") },
  },
  {
    tag: { text: "부모님", color: "ktas4" },
    name: "정우철",
    birth: dayjs("1955-07-09"),
    recentRecord: { hospital: "정담케어내과의원", date: dayjs("2024-04-07") },
  },
];
