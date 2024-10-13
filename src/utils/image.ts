// import { Images } from '@/themes/styles';

// /**
//  * 서버이미지 소스 path 반환 함수
//  * @param path 파일명
//  * @param midPath 서버path의 하위 path
//  * @returns 서버이미지 소스 PATH
//  */
// export const serverSrc = (path: string | undefined, midPath = '') =>
//   path ? `${import.meta.env.VITE_API_S3}/${midPath ? midPath + '/' : '/'}${path}` : Images.FileNoImg;

// /**
//  * 프로필이미지 소스 path 반환 함수
//  * @param path 파일명
//  * @returns 프로필이미지 소스 Path | 기본이미지파일
//  */
// export const profileSrc = (path: string | undefined) =>
//   path ? `${import.meta.env.VITE_API_S3}/profile/${path}` : Images.UserNoimg;
