# 당신의 웨딩 플래너, SO NEW WEDDING

메인 레포 : <br/> 배포 URL : https://sonew-wedding.kro.kr <br/>

## 프로젝트 소개

## 팀원 구성

| 손수민(FE)                                                                                                                                          | 김수민(FE)                                                                                             | 이상민(FE)                                                                                                      | 김대식(FE)                                                                                            | 박미선(FE)                                                                                              |
| --------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| <img src ="https://avatars.githubusercontent.com/u/174682226?u=b40f4d28c0076a166a245a90710ff4b161765b30&v=4" width=150 height=150> <br /> @SOOMin13 | <img src ="https://avatars.githubusercontent.com/u/174302300?v=4" width=150 height=150> <br /> @siltea | <img src ="https://avatars.githubusercontent.com/u/146797468?v=4" width=150 height=150> <br /> @sangmin0310-afk | <img src ="https://avatars.githubusercontent.com/u/88811407?v=4" width=150 height=150> <br /> @tosioB | <img src ="https://avatars.githubusercontent.com/u/175471571?v=4" width=150 height=150> <br /> @mi-suni |

## 1. 개발환경

Front : React, TypeScript, SCSS, Axios, Zustand <br /> 배포환경 : AWS<br /> 버전 및 이슈관리 : Github, Github Issues
<br /> 협업 툴 : Discord, Notion <br /> 디자인 : Figma Front : React, TypeScript, SCSS, Axios, Zustand <br /> 배포환경 :
AWS<br /> 버전 및 이슈관리 : Github, Github Issues <br /> 협업 툴 : Discord, Notion <br /> 디자인 : Figma

## 2. 채택한 개발 기술과 브랜치 전략

### Vite - 빠른 개발 환경 설정 도구

- 이점: 빠른 번들링과 핫 리로딩 기능을 제공하여 개발 속도를 높여줍니다. 초기 로딩이 빠르고, 경량화된 빌드 결과물을
  생성할 수 있습니다.
- 이점: 빠른 번들링과 핫 리로딩 기능을 제공하여 개발 속도를 높여줍니다. 초기 로딩이 빠르고, 경량화된 빌드 결과물을
  생성할 수 있습니다.
- 사용 이유: Vite는 React와 TypeScript 프로젝트에 최적화되어 있으며, 빠른 피드백 루프를 통해 생산성을 크게 향상시킵니다.

### React - UI 라이브러리

- 이점: 컴포넌트 기반 아키텍처 덕분에 UI를 재사용 가능한 컴포넌트로 나눌 수 있습니다. 이를 통해 코드의 재사용성이
  높아지고 유지 보수가 용이해집니다.
- 이점: 컴포넌트 기반 아키텍처 덕분에 UI를 재사용 가능한 컴포넌트로 나눌 수 있습니다. 이를 통해 코드의 재사용성이
  높아지고 유지 보수가 용이해집니다.
- 사용 이유: 빠르게 UI를 만들고 관리하기 적합하여, 데이터와 상호작용하는 동적인 예약 사이트의 개발에 최적입니다.

### TypeScript - 정적 타입 시스템

- 이점: 변수나 함수에 타입을 미리 지정하여 코드의 안정성을 높이고, 에러를 사전에 방지할 수 있습니다. IDE에서 자동 완성,
  타입 오류 체크 등의 지원이 강화됩니다.
- 사용 이유: 대규모 프로젝트일수록 타입 안정성이 중요합니다. 타입스크립트를 사용하면 코드가 복잡해질 때 타입 에러를 쉽게
  찾을 수 있어 협업과 유지 보수에도 유리합니다.
- 이점: 변수나 함수에 타입을 미리 지정하여 코드의 안정성을 높이고, 에러를 사전에 방지할 수 있습니다. IDE에서 자동 완성,
  타입 오류 체크 등의 지원이 강화됩니다.
- 사용 이유: 대규모 프로젝트일수록 타입 안정성이 중요합니다. 타입스크립트를 사용하면 코드가 복잡해질 때 타입 에러를 쉽게
  찾을 수 있어 협업과 유지 보수에도 유리합니다.

### SCSS - CSS 전처리기

- 이점: SCSS는 CSS의 기능을 확장하여 변수, 중첩, 믹스인 등의 고급 기능을 제공함으로써 코드의 재사용성을 높이고
  유지보수를 용이하게 합니다. 복잡한 스타일 구조를 간결하고 체계적으로 관리할 수 있으며, 대규모 프로젝트에서 일관된
  스타일 적용이 가능합니다.
- 사용 이유: SCSS를 사용하면 코드 중복을 줄이고, 유지보수성을 높이며, 프로젝트 전반에 걸쳐 일관된 스타일을 쉽게 적용할
  수 있습니다.

- 이점: SCSS는 CSS의 기능을 확장하여 변수, 중첩, 믹스인 등의 고급 기능을 제공함으로써 코드의 재사용성을 높이고
  유지보수를 용이하게 합니다. 복잡한 스타일 구조를 간결하고 체계적으로 관리할 수 있으며, 대규모 프로젝트에서 일관된
  스타일 적용이 가능합니다.
- 사용 이유: SCSS를 사용하면 코드 중복을 줄이고, 유지보수성을 높이며, 프로젝트 전반에 걸쳐 일관된 스타일을 쉽게 적용할
  수 있습니다.

### Axios - HTTP 클라이언트 라이브러리

- 이점: 비동기 데이터 요청과 응답 처리가 쉽고, 요청에 대한 오류 핸들링을 효율적으로 관리할 수 있습니다. API 요청 시
  데이터 변환이나 헤더 설정을 간단하게 할 수 있습니다.
- 사용 이유: 예약 사이트는 서버와의 데이터 통신이 많기 때문에, Axios로 예약 정보나 사용자 데이터를 관리하면 비동기
  작업을 안정적으로 처리할 수 있습니다.
- 이점: 비동기 데이터 요청과 응답 처리가 쉽고, 요청에 대한 오류 핸들링을 효율적으로 관리할 수 있습니다. API 요청 시
  데이터 변환이나 헤더 설정을 간단하게 할 수 있습니다.
- 사용 이유: 예약 사이트는 서버와의 데이터 통신이 많기 때문에, Axios로 예약 정보나 사용자 데이터를 관리하면 비동기
  작업을 안정적으로 처리할 수 있습니다.

### Zustand - 상태 관리 라이브러리

- 이점: 간단한 API와 가벼운 구조로 필요한 상태만 관리할 수 있어 프로젝트의 성능을 높입니다. 전역 상태를 효율적으로
  다루며, 사용법이 간단하고 빠릅니다.
- 사용 이유: 예약 상태, 로그인 상태 등 전역에서 공유할 데이터가 많습니다. Zustand를 사용하면 복잡한 상태 관리 없이 전역
  상태를 손쉽게 다룰 수 있어 개발 생산성이 향상됩니다. 이 스택 조합은 빠르고 유지보수성 높은 코드를 작성할 수 있게
  합니다.
- 이점: 간단한 API와 가벼운 구조로 필요한 상태만 관리할 수 있어 프로젝트의 성능을 높입니다. 전역 상태를 효율적으로
  다루며, 사용법이 간단하고 빠릅니다.
- 사용 이유: 예약 사이트에서는 예약 상태, 로그인 상태 등 전역에서 공유할 데이터가 많습니다. Zustand를 사용하면 복잡한
  상태 관리 없이 전역 상태를 손쉽게 다룰 수 있어 개발 생산성이 향상됩니다. 이 스택 조합은 빠르고 유지보수성 높은 코드를
  작성할 수 있게 하여, 사용자에게 최적의 경험을 제공하는 숙박 예약 사이트 개발에 적합합니다.

### AWS - 안정적이고 확장 가능한 클라우드 서비스

- 이점: AWS는 클라우드 기반 서비스로, 확장성, 안정성, 보안성을 모두 충족합니다. S3를 사용한 정적 파일 호스팅과 CloudFront를 통한 CDN 배포로 빠른 웹 성능을 제공합니다.
- 사용 이유: 웨딩 전문가 고용 및 예약 사이트와 같은 프로젝트는 높은 트래픽 처리와 안정적인 데이터 관리가 필수적입니다.
           AWS를 사용하면 전문가 정보와 예약 데이터를 안전하게 저장하고 관리할 수 있습니다. S3와 CloudFront를 통해 빠른 정적 파일 배포를 제공하며, 글로벌 확장성과 안정성을 보장합니다.

### GitHub Actions - CI/CD 자동화를 위한 워크플로우 플랫폼
  
이점: GitHub Actions는 코드 변경 사항을 자동으로 테스트, 빌드, 배포까지 연결하는 CI/CD 파이프라인을 제공합니다. 
     YAML 기반의 구성으로 유연하게 설정할 수 있고, GitHub 저장소와 긴밀하게 통합되어 협업이 용이합니다.

사용 이유: GitHub Actions는 웨딩 전문가 고용 및 예약 사이트의 지속적 배포와 품질 관리를 자동화하여 개발 속도와 코드 신뢰성을 높입니다. 
         특히 jakejarvis/s3-sync-action과 같은 오픈소스 액션을 사용하여 AWS S3에 정적 사이트를 자동 배포할 수 있습니다. 
         이를 통해 개발자는 기능 개발에 집중할 수 있으며, 안정적인 배포 환경을 유지함으로써 사용자와 전문가 모두에게 안정적이고 빠른 서비스를 제공합니다.

### 브랜치 전략

Git-flow 전략을 기반으로 main, develop 브랜치와 feature 보조 브랜치를 운용했습니다.

main 브랜치는 배포 단계에서만 사용하는 브랜치입니다. featue 브랜치는 기능 단위로, 독립적인 개발 환경을 위하여
사용하였으며 merge 후 각 브랜치는 삭제하였습니다. main 브랜치는 배포 단계에서만 사용하는 브랜치입니다. featue 브랜치는
기능 단위로, 독립적인 개발 환경을 위하여 사용하였으며 merge 후 각 브랜치는 삭제하였습니다.

## 3. 프로젝트 구조

frontend/
├── .github/             # GitHub Actions 및 워크플로우 설정 파일
├── assets/              # 정적 파일 (예: 이미지, 아이콘 등)
├── node_modules/        # 설치된 NPM 패키지
├── public/image/        # 퍼블릭 경로에 위치한 정적 이미지
├── src/                 # 소스 코드 디렉토리
│   ├── api/             # API 호출 관련 코드
│   ├── assets/          # 프로젝트 내부에서 사용하는 에셋
│   ├── components/      # 공통 컴포넌트 모음
│   ├── config/          # 환경 설정 및 설정 파일
│   ├── layouts/         # 페이지 레이아웃 컴포넌트
│   ├── pages/           # 각 라우트에 대응하는 페이지 컴포넌트
│   ├── store/           # Zustand를 사용한 전역 상태 관리
│   ├── styles/          # 전역 및 컴포넌트 스타일 파일
│   ├── uiComponents/    # UI를 구성하는 컴포넌트
│   ├── utils/           # 유틸리티 함수
│   ├── App.tsx          # 루트 컴포넌트
│   ├── Common.tsx       # 공통 컴포넌트 table
│   ├── global.scss      # 글로벌 스타일 설정
│   ├── main.tsx         # 애플리케이션 진입 파일
│   └── vite-env.d.ts    # Vite 관련 타입 정의
├── .env.development     # 개발 환경 변수 파일
├── .env.production      # 프로덕션 환경 변수 파일
├── .eslintrc            # ESLint 설정 파일
├── .prettierrc          # Prettier 설정 파일
├── .stylelintrc.json    # StyleLint 설정 파일
├── eslint.config.js     # ESLint 추가 설정
├── index.html           # HTML 템플릿
├── package.json         # 프로젝트 설정 및 의존성 관리 파일
├── package-lock.json    # NPM 패키지 버전 고정 파일
└── README.md            # 프로젝트 설명 파일


## 4. 역할분담

### 손수민 (팀장)

- <b>UI</b>

  - 페이지 :

    - 로그인 페이지 : 서비스를 이용하는 유저가 회원 가입 및 로그인을 진행하는 페이지
    - 메인 페이지 : 해당 서비스를 이용하기 위한 고객이 처음으로 접하게되는 사이트의 메인 페이지

  - 공통 컴포넌트 :
    - Header: 게스트, 유저, 전문가에 따라 헤더 분기 나눔 작업

- <b> 페이지 및 기능 설명 </b>

  - 소셜 로그인 : 구글, 네이버, 카카오로 부터 인가 코드를 제공받아서 백엔드에 post 요청을 보낸 후 그에 대한 응답으로 AT,
    유저 상태, 정보 등을 받아와서 로그인과 동시에 회원 정보를 받아옴. 액세스 토큰 만료 시에 백엔드로 다시 요청을 보내서
    리프레시 토큰이 만료되지 않았다면 AT를 재발급 받고, RT가 만료되었다면 로그아웃 후 로그인 페이지로 리디렉트하여 재
    로그인을 유도함.

    - 구글 소셜 로그인 : 구글 계정을 통한 소셜 로그인 기능 제공
    - 네이버 소셜 로그인 : 네이버 계정을 통한 소셜 로그인 기능 제공
    - 카카오 소셜 로그인: 카카오 계정을 통한 소셜 로그인 기능 제공

  - 로그아웃 : 백엔드 서버에 로그아웃 요청을 보낸 후, 전역으로 관리하는 유저 상태 및 정보를 로그아웃 상태로 변경하고
    세션 스토리지에 저장된 access token 등을 삭제하고 메인 페이지로 리디렉트 처리함.

  - 캐러셀 : 메인 페이지에서 서비스의 정체성을 보여줄 수 있는 사진을 슬라이드 형태의 캐러셀로 보여줌. (React-slick 사용)

  - 전문가 리스트 노출 : 비로그인 상태에서도 다양한 전문가에 대한 정보에 접근할 수 있도록 분야 선택에 따른 전문가
    리스트를 노출함. 탭 클릭 시마다 새로운 전문가 정보를 받아옴.

  - Header 분기처리: 게스트, 유저, 전문가 총 3가지 전역상태를 만들고, 게스트 단에서 보여질 header 메뉴, 유저 상태와
    전문가 상태에 따라 보여질 header 메뉴를 분리하여 보여줌.

### 김수민 (부팀장)

- <b>UI</b>
  - 페이지 : User Estimation Edit Page / Mypage 내 User, Expert Reservation List Page
  - 공통 컴포넌트 : Header / Footer
- <b>기능</b>
  - Scroll Top / Back Prevent

### 이상민

- <b>UI</b>
  - 페이지 : Estimation List Page/ Expert List Page
  - 공통 컴포넌트 : Badge / Rating / Loading Spinner
- <b>기능</b>

### 김대식

- <b>UI</b>
  - 페이지 : Chat Room Page / Chat List Page
  - 공통 컴포넌트 : badge / rating / header/ footer / Loading Spinner 제외 다 만듦
- <b>기능</b>
  - Web Socket 관련기능 (채팅/알림)

### 박미선

- <b>UI</b>
  - 페이지 : Expert Profile Edit Page / Mypage 내 Expert Calender Page
  - 공통 컴포넌트 : Confirm / Toast Message
- <b>기능</b>
  - isExpert에 따라 전문가 프로필 등록 페이지와 전문가 프로필 수정 페이지로 나눠짐
  - 각 section에 따라 예외처리가 들어감
  - 전문가의 캘린더 페이지에서 일정 조회 가능함
  - 일정 클릭 시 상세 일정 모달이 보여짐
  - Toast Message에서 'success' or 'error'로 구분하여 오른쪽 상단에 일정 시간 동안 뜨게 만듦

## 5. 개발 기간 및 작업 관리

### 개발 기간

- 전체 개발 기간 : 2024-11-07 ~ 2024-12-11
- 전체 개발 기간 : 2024-11-07 ~ 2024-12-11
- 기획 :2024-11-07 ~ 2024-11-18
- UI 구현 : 2024-11-18 ~ 2024-11-30
- 기능 구현 : 2024-11-18 ~ 2024-12-11

### 작업 관리

GitHub Projects와 Issues를 사용하여 진행 상황을 공유했습니다. 데일리 스크럼을 진행하며 작업 순서와 방향성에 대한 고민을
나누었습니다. PR Template을 이용하여 작업내용을 공유하였습니다.

## 6. 페이지 별 기능

|         회원가입          |          로그인           |          로그아웃          |       이메일 인증        |
| :-----------------------: | :-----------------------: | :------------------------: | :----------------------: |
| <img src="" alt="SignUp"> | <img src="" alt="SignIn"> | <img src="" alt="SignOut"> | <img src="" alt="Email"> |

|          메인 화면          |           검색            |        숙소 예약         |      마이페이지 /예약취소      |
| :-------------------------: | :-----------------------: | :----------------------: | :----------------------------: |
| <img src="" alt="MainPage"> | <img src="" alt="Search"> | <img src="" alt="order"> | <img src="" alt="orderCencle"> |

|          메인 화면          |           예약관리           |          숙소 관리           |       숙소/객실 추가       |
| :-------------------------: | :--------------------------: | :--------------------------: | :------------------------: |
| <img src="" alt="MainPage"> | <img src="" alt="HostOrder"> | <img src="" alt="RoomState"> | <img src="" alt="RoomAdd"> |

## 7. 트러블 슈팅

### 손수민

## 8. 프로젝트 후기

### 손수민 (팀장)

프론트엔드 개발을 시작하고서 처음으로 팀장이라는 직책을 맡게 되어서 부담감도 있었던 건 사실이었지만, 다사다난했던 지난 날을 돌이켜 보면 팀원들이 있었기 때문에 여기까지 올 수 있었던 것 같아 감사한 마음이다.
쏘뉴웨딩 프로젝트를 하면서 기억에 남는 점이 었다면, 소셜 로그인을 처음 시도해보면서 플로우를 잘 이해하지 못해서 많은 시행착오가 있었는데 이번 프로젝트를 마무리하는 시점에서는 소셜 로그인에 대해 알고 이해하게 되었다는 것이다.
또한, 3팀이 함께 하나의 프로젝트를 완성하기 위해 의기투합하다보니 이런 저런 갈등들이 많이 생겼었다. 이를 해결하기 위해 팀원들 간의 의견을 나누고 그 격차를 줄이는 여러가지 과정을 거치면서 
팀장으로써의 태도와 마음가짐, 책임감에 대해 배우고 체득할 수 있었던 뜻깊은 시간이었다. 

### 김수민 (부팀장)

### 이상민 (팀원)

### 김대식 (팀원)

### 박미선 (팀원)

- 다사다난했던 프로젝트지만 그래도 프엔 팀원들이 있어서 버틸 수 있지 않았나 싶다.
