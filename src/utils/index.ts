// import { Images } from '@/themes/styles';
// import { SyntheticEvent } from 'react';

// // 이미지가 없을 경우, 기본 이미지 할당
// export function addDefaultImg(e: SyntheticEvent<HTMLImageElement, Event>) {
//   e.currentTarget.src = Images.UserNoimg;
// }

// // 문자열에서 html태그가 포함된 문자열이면 태그를 제외해주는 함수
// export function withoutHtmlTags(str: string) {
//   return str.replace(/<\/?[^>]+(>|$)/g, '');
// }

// // 글자수가 일정 수 넘으면 ... (리스트에 사용)
// // offset: 제한 글
// export function cutString({ params, offset }: { params: string; offset: number }): string {
//   return params.length >= offset ? params.substring(0, offset) + '...' : params;
// }
