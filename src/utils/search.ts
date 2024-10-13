// import { IDataTableData } from '@/components/DataTable/types';
// import dayjs from 'dayjs';

// export function search(data: IDataTableData, input: string): IDataTableData | [] {
//     const processedText = input.replace(/[-\s/.]/g, '').toLocaleLowerCase();
//     const isUnix = (text: string) => /^\d{10}$/.test(text); // Unix timestamp 확인

//     const objectValuesToString = (obj: any, key?: string): string => {
//         if (obj === null || obj === undefined) return '';
//         if (typeof obj === 'object') {
//             return Object.entries(obj)
//                 .map(([k, value]) => {
//                     // epicStatus 키를 확인하고 해당 값에 대해 returnStatusText 함수를 적용
//                     // if (k === 'epicStatus') {
//                     //     return objectValuesToString(returnStatusText(value as string, processedIsGEM), k);
//                     // } else if (k === 'role') {
//                     //     return objectValuesToString(returnRole(value as string), k);
//                     // } else {
//                     if (k === 'id') return '';
//                     else return objectValuesToString(value, k);
//                     // }
//                 })
//                 .join(' ');
//         } else if (Array.isArray(obj)) {
//             return obj.map((element) => objectValuesToString(element)).join(' ');
//         } else {
//             let text = obj.toString();
//             if (isUnix(text) && !key) {
//                 // Unix timestamp 일 경우 'YYYY년 M월 D일 A h:mm' 형식으로 변환
//                 text = dayjs.unix(parseInt(text)).format('YYYY년 M월 D일 A h:mm');
//             }
//             return text.replace(/[-\s/.]/g, '').toLocaleLowerCase();
//         }
//     };

//     return data.filter((item) => objectValuesToString(item).includes(processedText));
// }
