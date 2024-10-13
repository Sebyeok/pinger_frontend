// export function dateFormatting(beforeDate: string) {
//   // Date 객체 생성
//   const date = new Date(beforeDate);

//   // 원하는 날짜 형식 생성
//   const year = date.getFullYear();
//   const month = date.getMonth() + 1;
//   const day = date.getDate();

//   const formattedDate = year + '년 ' + month + '월 ' + day + '일';

//   return formattedDate;
// }

// const KO_DAY = ['일', '월', '화', '수', '목', '금', '토'];
// export function getKoDay(date: Date): string {
//   const numDay = date.getDay();
//   return KO_DAY[numDay];
// }

// // 현재 시각을 기준으로 얼마만큼의 시간이 지났는지 한국어로 표시
// export function elapsedTime(date: string) {
//   const start = new Date(date);
//   const end = new Date();

//   const diff = Math.floor((end.getTime() - start.getTime()) / 1000);

//   const times = [
//     { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
//     { name: '달', milliSeconds: 60 * 60 * 24 * 30 },
//     { name: '일', milliSeconds: 60 * 60 * 24 },
//     { name: '시간', milliSeconds: 60 * 60 },
//     { name: '분', milliSeconds: 60 },
//   ];

//   for (const value of times) {
//     const betweenTime = Math.floor(diff / value.milliSeconds);

//     if (betweenTime > 0) {
//       return `${betweenTime}${value.name}전`;
//     }
//   }
//   return '방금 전';
// }
