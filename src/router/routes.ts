// import { COMMUNITY_ROUTE_META, HOME_ROUTE_META, NON_FOOTER_META, NON_MOBILE_FOOTER_META, USER_META } from './meta';
// import { Route } from './types';

// /**
//  * 라우터 정의
//  * @description
//  * - fullPath
//  * - relativePath
//  * - meta: meta 정보
//  * - access: access 권한 정보

//  */
// const ROUTES: Record<string, Route> = {
//   home: { fullPath: '/', relativePath: '/', meta: HOME_ROUTE_META },
//   // Alarm(모바일 전용 페이지)
//   aliem: { fullPath: '/aliem', relativePath: 'aliem', meta: NON_FOOTER_META, access: { loggedInOnly: true } },
//   // USER
//   userLogin: {
//     fullPath: '/user/login',
//     relativePath: 'login',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userFindId: {
//     fullPath: '/user/find-id',
//     relativePath: 'find-id',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userFindPwd: {
//     fullPath: '/user/find-pwd',
//     relativePath: 'find-pwd',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userFindPwdComplete: {
//     fullPath: '/user/find-pwd-complete',
//     relativePath: 'find-pwd-complete',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userAgree: {
//     fullPath: '/user/join/agree',
//     relativePath: 'agree',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userAuth: { fullPath: '/user/join/auth', relativePath: 'auth', meta: USER_META },
//   userJoin: {
//     fullPath: '/user/join/form',
//     relativePath: 'form',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   userJoinComplete: {
//     fullPath: '/user/join/complete',
//     relativePath: 'complete',
//     meta: USER_META,
//     access: { notLoggedInOnly: true },
//   },
//   authSuccess: { fullPath: '/success', relativePath: 'success', access: { notLoggedInOnly: true } },
//   authFail: { fullPath: '/fail', relativePath: 'fail', access: { notLoggedInOnly: true } },
//   // REDIRECT
//   kakaoRedirect: {
//     fullPath: '/login/auth/callback',
//     relativePath: 'auth/callback',
//     access: { notLoggedInOnly: true },
//   },
//   // SEARCH
//   searchResult: {
//     fullPath: '/search/result',
//     relativePath: 'search/result',
//     meta: NON_MOBILE_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   // COMPANY
//   companyMembership: { fullPath: '/company/membership', relativePath: 'company/membership' },
//   // NOTICE
//   noticeList: { fullPath: '/notice/list', relativePath: 'list', meta: NON_MOBILE_FOOTER_META },
//   noticeDetails: { fullPath: '/notice/details', relativePath: 'details', meta: NON_MOBILE_FOOTER_META },
//   // CONTENTS
//   contentsList: {
//     fullPath: '/contents/list',
//     relativePath: 'list',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true, doctorOnly: true },
//   },
//   contentsWrite: {
//     fullPath: '/contents/write',
//     relativePath: 'write',
//     meta: COMMUNITY_ROUTE_META.LIST,
//     access: { loggedInOnly: true, doctorOnly: true },
//   },
//   // mobile only
//   newsletterDetails: {
//     fullPath: '/newsletter/details',
//     relativePath: 'details',
//     access: { loggedInOnly: true, doctorOnly: true },
//   },
//   // COMMUNITY
//   communityList: {
//     fullPath: '/community/list',
//     relativePath: 'list',
//     meta: COMMUNITY_ROUTE_META.LIST,
//     access: { loggedInOnly: true },
//   },
//   communityWrite: {
//     fullPath: '/community/write',
//     relativePath: 'write',
//     meta: COMMUNITY_ROUTE_META.LIST,
//     access: { loggedInOnly: true },
//   },
//   // MYPAGE
//   mypage: {
//     fullPath: '/mypage',
//     relativePath: '/',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageInfo: {
//     fullPath: '/mypage/info',
//     relativePath: 'info',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageMarketing: {
//     fullPath: '/mypage/marketing',
//     relativePath: 'marketing',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageNotificationList: {
//     fullPath: '/mypage/notification/list',
//     relativePath: 'notification/list',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageNotificationDetails: {
//     fullPath: '/mypage/notification/details',
//     relativePath: 'notification/details',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageSettings: {
//     fullPath: '/mypage/settings/',
//     relativePath: 'settings',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageSettingsList: {
//     fullPath: '/mypage/settings/faq-list',
//     relativePath: 'faq-list',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   // mobile only
//   mypageSettingFaqDetails: {
//     fullPath: '/mypage/settings/faq',
//     relativePath: 'faq',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   // mobile only
//   mypageSettingTermsDetails: {
//     fullPath: '/mypage/settings/terms',
//     relativePath: 'terms',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   // mobile only
//   mypageSettingPrivacyDetails: {
//     fullPath: '/mypage/settings/policy',
//     relativePath: 'policy',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },

//   mypageUseHistory: {
//     fullPath: '/mypage/use-history',
//     relativePath: 'use-history',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageInquiryList: {
//     fullPath: '/mypage/inquiry/list',
//     relativePath: 'inquiry/list',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageInquiryDetails: {
//     fullPath: '/mypage/inquiry/details',
//     relativePath: 'inquiry/details',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
//   mypageWithdraw: {
//     fullPath: '/mypage/withdraw',
//     relativePath: 'withdraw',
//     meta: NON_FOOTER_META,
//     access: { loggedInOnly: true },
//   },
// };

// export default ROUTES;
