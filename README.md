## React-Template-Beamworks

- For BeamWorks Front-end Team
- React + TypeScript + Vite
- Versioning
  > - v.0.0.1 (2023.12.21) [node - v18.17.1]
  > - v.0.0.2 (2023.12.27) [node - v18.17.1]
  >   > - 전역 상태 관리 라이브러리 redux -> recoil로 교체
- Contributor
  > - Sebyeok Jeong

## How to Use

- bun 설치 (https://bun.sh/docs/installation)

- git clone
- bun install
- bun dev
- 로컬 저장소 .git 파일 삭제 (rm -rf .git)
- git init
- git remote add origin [New Repository URL] <br>
- svg 파일은 assets/images/svg 파일 내에 저장하고, 터미널에 bun svg 스크립트 실행.

## 주요 사용 라이브러리

- 스타일링
  > - styled-components (https://styled-components.com/)
- 전역 상태 관리
  > - recoil (https://recoiljs.org/ko/)
- 비동기 상태 관리
  > - react-query (https://tanstack.com/query/v5/docs/react/overview)
- API
  > - axios (https://axios-http.com/kr/docs/intro)
- form
  > - react-hook-form (https://react-hook-form.com/)
- route
  > - react-router-dom (https://reactrouter.com/en/main)
- font
  > - pretendard (https://github.com/orioncactus/pretendard)
- (적응형 웹을 위한) 웹/앱 탐지
  > - react-device-detect (https://github.com/duskload/react-device-detect)

## 주요 사용 라이브러리 관련 참조 문서

- Recoil - Atom & Selector : https://tech.osci.kr/recoil-state-management-of-react/
- Recoil with Storage(feat. effects) : https://tech.osci.kr/recoil-react-js-state-management/
- Recoil 정확하게 사용하기 - Selector : https://tech.osci.kr/recoil-selector/
- react18 Transition : https://tech.osci.kr/react-18v/
- React Query 도입에 관하여 : https://tech.osci.kr/react-query/
- [번역] React Query API의 의도된 중단 : https://velog.io/@cnsrn1874/breaking-react-querys-api-on-purpose
  > - 원본 : https://tkdodo.eu/blog/breaking-react-querys-api-on-purpose
- 위 글(React Query API의 의도된 중단)에 대한 discusstion : https://github.com/TanStack/query/discussions/5279
- react-hook-form 을 활용해 효과적으로 폼 관리하기 : https://tech.osci.kr/introduce-react-hook-form/
- react-hook-form useController 훅 사용법 : https://tech.osci.kr/react-hook-form-with-mui/
- react-hook-form 응용 : https://tech.osci.kr/react-hook-form-series-3/

## 권장 추가 사용 라이브러리

- 반응형 웹
  > - react-responsive (https://github.com/yocontra/react-responsive)
- ui 라이브러리
  > - mui/material (https://mui.com/material-ui/)
- 스와이퍼 컴포넌트
  > - swiper (https://swiperjs.com/react)
- 유니크한 id값 생성
  > - uuid (https://github.com/uuidjs/uuid)
- 날짜 format control 라이브러리
  > - date-fns (https://date-fns.org/)
- 달력 라이브러리
  > - react-day-picker (https://github.com/gpbl/react-day-picker)

## 폴더 구조

```
├── public
│   ├── images
├── src
│   ├── App.tsx
│   ├── main.tsx
│   ├── api
│   ├── assets
│   ├── components
│   ├── constants
│   ├── hooks
│   ├── layout
│   ├── lib
│   ├── pages
│   ├── router
│   ├── stores
│   ├── themes
│   └── utils
├── index.html
├── jest.config.ts
├── jest.setup.ts
├── package.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock


/main.tsx - 어플리케이션 엔트리 포인트
/App.tsx - 어플리케이션 root 컴포넌트

/src/api : API 정의
/src/components : 공통 컴포넌트 정의
/src/constants : 공통적으로 사용되는 상수 정의
/src/hooks : React hooks 정의
/src/layout : 레이아웃 컴포넌트 정의(헤더, 메인, 푸터, 모달)
/src/pages : 라우터와 연동되는 page 단위 컴포넌트 정의
/src/router : 라우터 정의
/src/stores : 전역 상태 관리 함수 정의
/src/themes : 전역 테마 스타일 정의
/src/utils : 공통 유틸 함수 정의
```

## Import

- tsconfig paths 설정을 통해 "@/" 라는 path를 import 하면 어떤 경로에서도 "src/" 로 접근이 가능하도록 설정하였음.

```javascript
import imageSrc from '../../assets/images/1.png';
import imageSrc from '@/assets/images/1.png';
```

## Image

- tsconfig paths 설정을 통해 "@images/" 라는 path를 import 하면 어떤 경로에서도 "src/assets/images/" 로 접근이 가능하도록 설정하였음.

```javascript
import imageSrc from '../../assets/images/1.png';
import imageSrc from '@images/1.png';
```

- SVG 컴포넌트
  > - src/components/ui/Svg 참조
  > - https://dev.to/mondal10/dynamic-svg-component-in-vite-react-ts-3pih 참고
  > - vite-plugin-svgr@3.3.0 라이브러리 이용
  > - src/assets/images/svg에 svg 파일 추가한 후, src/components/ui/Svg/types.ts의 TypeIconName 변수에 파일명 추가한 후 아래 예시처럼 사용

```javascript
<Svg
  iconName="fileName"
  svgProps={{
    width: '150px',
    height: 'auto',
  }}
/>
```

## API

- axios
  > - /src/api/axios.ts 파일 내에 customAxios라는 인스턴스 생성하여 기본 config 설정.
  > - 주석처리한 부분에는 Header 설정 및 interceptor 설정 예시가 있음.
- tanstack/react-query
  > - /src/api/query.ts 파일 내에 queryClient 선언 및 defaultOption을 선언.
  > - /src/api/[api카테고리]/query.ts 파일 내에 useQuery 및 useMutation 이용 훅 선언.

## Styling

- src/themes/base.ts 파일 내 GlobalStyle을 이용한 전역 CSS 세팅 및 글꼴 설정.
- src/themes/styles.ts 파일 내 전역 Color Palette 및 전역 스타일 변수 선언.
- src/themes/utils.ts 파일 내 css 관련 util 함수 선언.
- styled-components를 이용하여 만든 component들은
  > - page의 경우 src/pages/[pageName]/(styles.ts || styles.pc.ts || styles.mobile.ts) 파일 내에 객체 형태로 선언.
  > - components의 경우 src/components/(form || ui)/[componentName]/style.ts 파일 내에 객체 형태로 선언.

## 네이밍

- 기본적으로 변수명은 camelCase 사용. 컴포넌트 폴더 명은 PascalCase 사용.
- 변수명은 컴포넌트 및 함수의 특징을 내포하고 있어야 함.
- interface의 경우 IUser 와 같은 I로 시작하는 변수명 사용 권장.
- styled-components를 이용하여 만든 컴포넌트의 경우 객체 명은 SGlobalHeader 와 같은 S로 시작하는 변수명 사용 권장.
  > - 객체 내부 변수 네이밍 권장사항
  >   > - 가장 바깥을 차지하는 컴포넌트의 경우 Container
  >   > - 무언가를 감싸고 있는 컴포넌트의 경우 Wrapper 변수명 사용 권장.
  >   > - 예) Container, ButtonWrapper, TextWrapper, IconWrapper, ...

## 권장 컴포넌트 주석 스타일

- 각 컴포넌트의 상단에 주석을 아래 형태로 달면, 컴포넌트를 불러와 사용할 때 작성해놓은 Description을 볼 수 있음.

```
/**
* 컴포넌트 Title
* @description 컴포넌트 설명
* @params props.a - a props 설명
* @params props.b - b props 설명
* @params props.c - c props 설명
* @params props.d - d props 설명
*/
```

- 특정 Issue가 있을 경우 아래 형태로 남겨놓을 경우 추후 처리하기 용이.

```
/**
* @todo ~~~처리 필요
*/
```

## 주석 혹은 남아 있는 코드들

- 주석 혹은 남아 있는 코드들은 예시로 참고. (예시는 참고용이지 정답이 아님.)

## dependencies

    "@tanstack/react-query": "^5.0.0",
    "axios": "^1.5.1",
    "pretendard": "^1.3.8",
    "react": "^18.2.0",
    "react-device-detect": "^2.2.3",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.47.0",
    "react-router-dom": "^6.16.0",
    "recoil": "^0.7.7",
    "styled-components": "^6.0.8"

## devDependencies

    "@testing-library/jest-dom": "^6.1.3",
    "@testing-library/react": "^14.0.0",
    "@types/jest": "^29.5.4",
    "@types/node": "^20.6.0",
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@types/react-router-dom": "^5.3.3",
    "@types/styled-components": "^5.1.29",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vheemstra/vite-plugin-imagemin": "1.0.8",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-config-prettier": "^9.0.0",
    "eslint-import-resolver-typescript": "^3.6.0",
    "eslint-plugin-import": "^2.28.1",
    "eslint-plugin-jsx-a11y": "^6.7.1",
    "eslint-plugin-prettier": "^5.0.0",
    "eslint-plugin-react": "^7.33.2",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "identity-obj-proxy": "^3.0.0",
    "imagemin-gifsicle": "7.0.0",
    "imagemin-mozjpeg": "10.0.0",
    "imagemin-pngquant": "9.0.2",
    "imagemin-svgo": "10.0.1",
    "jest": "^29.6.4",
    "jest-environment-jsdom": "^29.6.4",
    "jest-svg-transformer": "^1.0.0",
    "prettier": "^3.0.3",
    "ts-jest": "^29.1.1",
    "ts-node": "^10.9.1",
    "typescript": "^5.0.2",
    "vite": "^4.4.5",
    "vite-plugin-svgr": "^3.3.0",
    "vite-tsconfig-paths": "^4.2.1"
