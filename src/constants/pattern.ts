/* eslint-disable no-useless-escape */
export const TEL_PATTERN = /[0-9]{2,3}-[0-9]{3,4}-[0-9]{3,4}/;
export const EMAIL_PATTERN = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
export const PASSWORD_PATTERN = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-`])(?=.*[0-9]).{8,25}$/;
export const IMG_PATTERN = /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/;
export const NAME_PATTERN = /^[a-zA-Z0-9ㄱ-ㅎ가-힣]{1,10}$/;
export const NUMBER_PATTERN = /^([0-9]|\n)*?$/;
export const NON_SPACE_PATTERN = /^\S*$/;
