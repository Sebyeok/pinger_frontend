// /**
//  * 태그 제외 텍스트 반환 함수
//  * @param value HTML태그 포함 텍스트
//  */
// export function getPlainText(value: string): string {
//   return value.replace(/(<([^>]+)>)/gi, '');
// }

// /**
//  * 해시태그 반환 함수
//  * @param value 텍스트
//  */
// export function getHashTagList(value: string): string[] | null {
//   return value.match(/#\S+/g);
// }

// /**
//  * 해시태그 반환 함수
//  * @param value HTML태그 포함 텍스트
//  */
// export function getHashTags(value: string): string[] {
//   return getHashTagList(getPlainText(value)) || [];
// }

// /**
//  * 길이제한 텍스트 반환 함수
//  * @param value 텍스트
//  * @param maxLen 텍스트 최대 길이
//  * @param tail ellipsis 대체 텍스트
//  */
// export function getEllipsisText(value: string, maxLen: number, tail = '') {
//   return value.length > maxLen ? value.substring(0, maxLen) + '...' + tail : value;
// }
