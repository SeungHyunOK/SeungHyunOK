export const Projects = {
  Glowshelfie: [
    {
      badges: ["솔로", "사이드", "반응형"],
      logo: "/images/glowshelfie/glowshelfie_logo.png",
      title: "Glowshelfie-맟춤 스킨케어 추천 플렛폼",
      subTitle: "2024.12.01 ~ 2024.12.15 솔로",
      introImg: "/images/glowshelfie/mainpage.webp",
      simpleDescription:
        "개인 맞춤형 한국 스킨케어 루틴을 제안하는 플랫폼으로, 사용자가 간단한 퀴즈를 통해 자신의 피부 타입과 고민을 파악한 후, 그에 맞는 최적의 스킨케어 루틴을 추천받을 수 있도록 설계되었습니다.",
      features: [
        "맞춤형 스킨케어 추천",
        "브랜드 쇼핑 연계",
        "심플하고 직관적인 UI",
      ],
      techStack: {
        React: [
          "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        ],
        TypeScript: [
          "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        ],
        "Next.js": [
          "Next.js는 React 기반으로 SSR과 SSG를 지원해 초기 로딩 속도와 SEO에 유리합니다.",
        ],
      },
      workDetails: {
        "핵심 알고리즘 최적화 및 성능 튜닝": [
          "사용자 맞춤형 추천 로직의 알고리즘 최적화와 컴포넌트 렌더링 성능 개선을 통해 응답속도와 사용자 경험을 획기적으로 향상시켰습니다.",
        ],
        "비동기 API 통합 및 에러 핸들링 강화": [
          "비동기 통신을 위한 API 통합 작업 중 발생한 예외 상황을 체계적으로 관리하여 시스템 안정성과 데이터 무결성을 확보했습니다.",
        ],
        "프론트엔드 아키텍처 리팩토링 및 컴포넌트 모듈화": [
          "코드 리팩토링과 모듈화 전략을 도입해 재사용성과 유지보수성을 극대화하는 클린 아키텍처를 구축했습니다.",
        ],
        "CI/CD 파이프라인 구축 및 코드 품질 관리": [
          "GitHub Actions 기반의 CI/CD 환경을 설정하고, 정적 분석 도구(ESLint, Prettier)를 도입하여 지속적인 코드 품질 개선을 했습니다.",
        ],
      },
      troubleShooting: {
        "비동기 API 호출 시 예외 발생 및 응답 지연 문제": [
          "해결: 캐싱 전략 도입 및 비동기 처리 로직 최적화를 통해 에러 핸들링 강화",
          "회고: 전체적인 시스템 안정성 향상에 기여하였으며, 모니터링 체계 강화의 필요성을 재인식함",
        ],
        "렌더링 성능 저하 및 불필요한 재렌더링 발생": [
          "해결: 컴포넌트 모듈화와 메모이제이션 기법 도입으로 성능 최적화 진행",
          "회고: UI 반응성이 크게 개선되어 사용자 경험 향상에 기여, 코드 구조 개선의 중요성을 확인함",
        ],
      },
      results: {
        피드페이지: ["/images/glowshelfie/feed.webp"],
        피드클릭시: ["/images/glowshelfie/feedClick.webp"],
        홈페이지: ["/images/glowshelfie/mainpage.webp"],
        퀴즈페이지: ["/images/glowshelfie/quiz_1.webp"],
        상점페이지: ["/images/glowshelfie/shop.webp"],
        할인코드전송: ["/images/glowshelfie/discount.webp"],
      },
      links: [
        { label: "배포사이트", url: "https://glowshelfie.vercel.app/" },
        { label: "GitHub", url: "https://github.com/SeungHyunOK/Glowshelfie" },
      ],
    },
  ],
  Eobom: [
    {
      badges: ["팀", "해커톤", "모바일"],
      logo: "/images/eobom/eobom_icon.svg",
      title: "Eobom(이어봄)-노인,요양사를 이어주는 서비스",
      subTitle: "2025.02.10 ~ 2025.02.19 (FE 2명,BE 2명,UI/UX 1명,PM 1명)",
      introImg: "/images/eobom/all.gif",
      simpleDescription:
        "노인과 요양 보호사를 연결해주는 서비스로, 사용자가 간단한 등록 절차를 통해 자신의 건강 상태와 케어 요구사항을 파악한 후, 그에 맞는 최적의 요양 보호 서비스를 추천받을 수 있도록 설계되었습니다. \n\n *현재 벡엔드서버가 다운되있어서 로그인,회원가입이 불가능합니다.",
      features: ["이미지 최적화", "반응형 디자인"],
      techStack: {
        React: [
          "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        ],
        TypeScript: [
          "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        ],
        "Tailwind CSS": [
          "빠른 스타일링 구현과 일관된 반응형 디자인을 손쉽게 유지할 수 있어 개발 생산성을 높이고 유지보수를 간소화하기 위해서입니다.",
        ],
        Recoil: [
          "여러 컴포넌트에서 공통 데이터를 원활하게 활용하고, 상태 업데이트 시 발생하는 리렌더링 최적화를 위해 Recoil을 도입했습니다.",
        ],
      },
      workDetails: {
        "요양보호사 회원가입 기능 개발": [
          "코드 모듈화를 통해 유지보수성과 재사용성을 향상시킴.",
        ],
        "이미지 최적화": [".webp 확장자를 활용해 이미지 로딩 속도 최적화"],
      },
      troubleShooting: {
        "이미지 로딩 속도 지연 문제": [
          "해결: 이미지 최적화를 통한 로딩 속도 개선 (WebP 변환, Lazy Loading 적용)",
          "회고: 추가적인 성능 테스트 및 로딩 속도 분석 필요(Lighthouse, WebPageTest 활용)",
        ],
      },
      results: {
        전체: ["/images/eobom/all.gif"],
        "요양사 화면": ["/images/eobom/caregiver.webp"],
        "센터 화면": ["/images/eobom/center.webp"],
        "요양사 디자인": ["/images/eobom/figma2.webp"],
        "센터 디자인": ["/images/eobom/figma1.webp"],
        수료증: ["/images/eobom/licence.webp"],
        "부스 사진": ["/images/eobom/booth.webp"],
        "부스 사진2": ["/images/eobom/booth2.webp"],
        포스터: ["/images/eobom/foster.webp"],
      },
      links: [
        { label: "배포사이트", url: "https://eobom-243e0.web.app/login" },
        { label: "GitHub", url: "https://github.com/SeungHyunOK/eobom" },
      ],
    },
  ],
  Coworkers: [
    {
      badges: ["팀", "사이드", "반응형"],
      logo: "/images/coworkers/Logo.webp",
      title: "Coworkers",
      subTitle: "2024.10.07 ~ 2024.11.14 부트캠프-FE 5명",
      introImg: "/images/coworkers/co_all.gif",
      simpleDescription:
        "팀 협업과 업무 관리를 위한 플랫폼으로, 사용자가 간편하게 프로젝트에 참여하고 각 팀의 다양한 업무 도구에 빠르게 접근할 수 있도록 설계되었습니다. 반응형 디자인과 동적 라우팅 기능을 통해 PC, 태블릿, 모바일 등 모든 기기에서 일관된 사용자 경험을 제공합니다.",
      features: [
        "동적 라우팅 구현",
        "재사용 컴포넌트 기반 UI 구성",
        "일관된 코드 스타일 유지",
      ],
      techStack: {
        React: [
          "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        ],
        TypeScript: [
          "TypeScript는 정적 타입을 지원하는 JavaScript 슈퍼셋 언어로, 코드를 실행하기 전 오류를 잡아 줄 수 있습니다.",
        ],
        "Next.js": [
          "Next.js는 React 기반으로 SSR과 SSG를 지원해 초기 로딩 속도와 SEO에 유리합니다.",
        ],
      },
      workDetails: {
        "다이나믹 라우팅": [
          `로그인 상태를 감지해 "지금 시작하기" 클릭 시 홈이나 대시보드로 동적 라우팅 구현`,
        ],
        "컴포넌트 구조화": [
          "React와 TypeScript를 사용해 재사용 가능한 컴포넌트로 UI를 구조화하여 유지보수성을 향상",
        ],
        "코드 일관성": [
          "코드 가독성을 높이기 위해 ESLint와 Prettier를 적용하여 일관된 코드 스타일 유지",
        ],
      },
      troubleShooting: {
        "라우팅 이슈": [
          "해결: 로그인 상태 감지 로직 개선",
          "회고: 사용자 경험 개선 필요",
        ],
        "컴포넌트 관리": [
          "해결: 컴포넌트 분리 적용",
          "회고: 모듈화 필요성 인식",
        ],
      },
      results: {
        전체: ["/images/coworkers/co_all.gif"],
        랜딩: ["/images/coworkers/co_landing.webp"],
        게시판: ["/images/coworkers/co_board.webp"],
        팀페이지: ["/images/coworkers/co_teampage.webp"],
        개인정보: ["/images/coworkers/co_private.webp"],
        히스토리: ["/images/coworkers/co_myhistory.webp"],
      },
      links: [
        { label: "배포사이트", url: "https://coworkers-colla.netlify.app/" },
        { label: "GitHub", url: "https://github.com/team-collabor/coworkers" },
      ],
    },
  ],

  GSF_inventory: [
    {
      badges: ["솔로", "토이", "반응형"],
      logo: "/images/glowshelfieInventory/logo.webp",
      title: "GSF-inventory",
      subTitle: "2024.12.20 ~ 2024.12.25 솔로",
      introImg: "/images/glowshelfieInventory/home.webp",
      simpleDescription:
        "Glowshelfie의 재고를 효율적으로 관리하기 위한 웹 애플리케이션입니다. 사용자는 제품 정보 등록, 수정, 검색, 유통기한 확인 등을 간편하게 수행할 수 있으며, MongoDB와 Express 기반의 백엔드 서버와 연동하여 데이터를 실시간으로 처리합니다.",
      features: [
        "상품 CRUD 기능",
        "브랜드/카테고리 검색 필터",
        "유통기한 정렬 및 확인 기능",
        "로그인 인증 기능 (JWT 기반)",
      ],
      techStack: {
        React: [
          "컴포넌트 기반 구조로 UI를 구성하였으며, 사용자 인터페이스의 재사용성과 유지보수성을 높였습니다.",
        ],
        JavaScript: [
          "전체 애플리케이션의 로직을 JavaScript로 구현하여 동적인 UI 처리 및 비동기 작업을 처리했습니다.",
        ],
        CSS: [
          "직접 작성한 CSS를 통해 사용자 경험 중심의 디자인을 구성하였고, 반응형 요소를 적용하였습니다.",
        ],
        NodeJS: [
          "백엔드 서버를 Node.js 기반으로 구성하였으며, Express를 활용해 RESTful API를 구현했습니다.",
        ],
        MongoDB: [
          "NoSQL 기반 MongoDB를 사용해 제품 데이터 저장 및 검색을 효율적으로 수행하였습니다.",
        ],
        Vercel: [
          "프론트엔드 배포에 사용하였으며, 간편한 CI/CD 환경을 통해 개발한 기능을 즉시 배포했습니다.",
        ],
      },
      workDetails: {
        "재고 관리 UI 구성": [
          "React를 활용해 브랜드, 제품명, 수량, 유통기한 등 정보를 한눈에 확인할 수 있는 UI 구성",
        ],
        "CRUD 기능 구현": [
          "제품 추가, 수정, 삭제, 검색 기능을 모두 프론트-백엔드 연동으로 처리",
        ],
        "서버 연동": [
          "Express 서버와 MongoDB를 연동하여 제품 데이터의 실시간 등록 및 조회 가능하도록 구현",
        ],
      },
      troubleShooting: {
        "날짜 정렬 이슈": [
          "해결: 유통기한을 문자열이 아닌 Date 객체로 처리하여 정렬 정확도 개선",
          "회고: 프론트에서 단순 정렬 로직보단 DB단 처리로 성능 개선 필요성 인식",
        ],
        "CORS 에러 발생": [
          "해결: Express 서버에 CORS 설정 추가",
          "회고: 프론트와 백엔드 포트를 다르게 운영할 때의 기본 보안 개념 숙지",
        ],
      },
      results: {
        메인화면: ["/images/glowshelfieInventory/home.webp"],
        로그인: ["/images/glowshelfieInventory/login.webp"],
        "제품 추가": ["/images/glowshelfieInventory/add.webp"],
        "제품 업데이트": ["/images/glowshelfieInventory/update.webp"],
      },
      links: [
        {
          label: "배포사이트",
          url: "https://glowshelfie-inventory.vercel.app/",
        },
        {
          label: "GitHub",
          url: "https://github.com/SeungHyunOK/Glowshelfie-Inventory",
        },
      ],
    },
  ],

  Portfolio: [
    {
      badges: ["솔로", "포트폴리오", "PC"],
      logo: "/images/portfolio/logo.webp",
      title: "Portfolio_SeunghyunOK",
      subTitle: "2024.01.01 ~ 2024.01.10 솔로",
      introImg: "/images/portfolio/all.gif",
      simpleDescription:
        "기획,디자인 직접 제작한 포트폴리오입니다.\n 세심한 디테일과 일관된 디자인 철학을 통해 개인 역량을 효과적으로 어필하고자 제작하였습니다.",
      features: [
        "GSAP ScrollTrigger 사용",
        ".webp 이미지 최적화",
        "모던 디자인 구현",
      ],
      techStack: {
        React: [
          "React는 컴포넌트 기반으로 하며, 가상 DOM을 활용해 웹 애플리케이션의 성능을 최적화 합니다. 컴포넌트 재사용성을 높이고, 상태 관리를 용이하게 할 수 있습니다.",
        ],
        GSAP: [
          "고성능 JavaScript 애니메이션 라이브러리로, 스크롤 트리거 및 다양한 인터랙티브 애니메이션 효과를 구현하여 사용자 경험을 극대화하는 데 활용되었습니다.",
        ],
      },
      workDetails: {
        "스크롤 애니메이션": [
          "GSAP ScrollTrigger를 사용하여 스크롤 기반 애니메이션 구현",
        ],
        "이미지 로딩 속도 지연 문제": [
          ".webp 확장자를 활용해 이미지 로딩 속도 최적화",
        ],
      },
      troubleShooting: {
        "스크롤 이슈": [
          "해결: 스크롤 성능 최적화 적용",
          "회고: 전환 효과 개선 필요",
        ],
        "이미지 최적화": [
          "해결: .webp 포맷 적용",
          "회고: 로딩 속도 향상에 기여",
        ],
      },
      results: {
        인트로: ["/images/portfolio/intro.webp"],
        소개: ["/images/portfolio/about.webp"],
        스킬: ["/images/portfolio/skill.webp"],
        프로젝트: ["/images/portfolio/project.webp"],
        "공부 중": ["/images/portfolio/study.webp"],
        감사: ["/images/portfolio/thanks.webp"],
      },
      links: [
        { label: "배포사이트", url: "https://seunghyunok.vercel.app/" },
        { label: "GitHub", url: "https://github.com/SeungHyunOK" },
      ],
    },
  ],

  Artego: [
    {
      badges: ["팀", "사이드", "PC"],
      logo: "/images/artego/logo.jpg",
      title: "Artego",
      subTitle: "2025.04.07 ~ 2025.05.31",
      introImg: "/images/artego/all.gif",
      simpleDescription:
        "인디 작가 플랫폼 ‘부끄금지’ 팀 프로젝트입니다. 작가와 독자 사이의 인터랙션, 작품 피드 제공, 마이페이지 기능 구현까지 전체 흐름을 담당했습니다.",
      features: [
        "작가/독자 계정별 맞춤 피드 구현",
        "Zustand를 통한 전역 상태 관리",
      ],
      techStack: {
        Nextjs: ["Next.js App Router 기반, SSR 및 SSG로 개인화된 페이지 제공"],
        TypeScript: ["정적 타입 도입으로 안정성과 협업 생산성 향상"],
        Zustand: ["경량 전역 상태 관리 도구로 유저·피드 상태 관리"],
        TailwindCSS: ["유틸리티 클래스 기반으로 반응형 UI 설계"],
        TanStackQuery: ["서버 상태 관리, 캐싱 및 데이터 fetch 최적화에 사용"],
        "shadcn/ui": ["구성 요소 라이브러리로 모달·드롭다운·폼 빠르게 구성"],
        Supabase: ["인증, 데이터 저장 및 실시간 기능 제공"],
      },
      workDetails: {
        "작가 상세페이지 구현": [
          "URL 파라미터 기반 동적 라우팅으로 작가별 페이지 구성",
          "작가의 소개, 대표작, 전체 작품 리스트 등 종합 정보 제공",
          "사용자 친화적인 UI/UX를 고려한 레이아웃 설계 및 구현",
        ],
        "프로젝트 초기 셋업": [
          "Next.js App Router 구조 설계 및 타입 세이프한 라우팅 구성",
          "Zustand, TanStackQuery, shadcn/ui 등 핵심 라이브러리 설정 및 초기 환경 구성",
          "코드 컨벤션(Eslint, Prettier, Husky) 및 폴더 구조 통일화",
        ],
      },
      troubleShooting: {
        "서버 데이터중복 요청": [
          "해결: React Query 키 구조 최적화",
          "회고: 쿼리 무결성 중요성 다시 인식함",
        ],
        "페이지 렌더 차이 발생": [
          "해결: Next.js SSR과 CSR 간 상태 싱크 문제 해결",
          "회고: hydration 오류 대처 경험 축적",
        ],
      },
      results: {
        홈: ["/images/artego/home.webp"],
        로그인: ["/images/artego/login.webp"],
        제품상세페이지: ["/images/artego/detail.webp"],
        카테고리: ["/images/artego/categori.webp"],
        팔로잉페이지: ["/images/artego/autherpage.webp"],
        마이페이지: ["/images/artego/mypage.webp"],
      },
      links: [
        { label: "배포사이트", url: "https://indi-front.vercel.app/" },
        { label: "GitHub", url: "https://github.com/swyp-9-web/indi-front" },
      ],
    },
  ],
};

// ProjectName: [
//   {
//     badges: ["", "", ""],
//     logo: "/images",
//     title: "",
//     subTitle: "2024.12.01 ~ 2024.12.15 솔로",
//     introImg: "/images",
//     simpleDescription: "",
//     features: ["", "", ""],
//     techStack: {
//       "": [""],
//       "": [""],
//       "": [""],
//     },
//     workDetails: {
//       "": [""],
//       "": [""],
//       "": [""],
//       "": [""],
//     },
//     troubleShooting: {
//       "": ["해결: ", "회고: "],
//       "": ["해결: ", "회고: "],
//     },
//     results: {
//       "": ["/images/"],
//       "": ["/images/"],
//       "": ["/images/"],
//       "": ["/images/"],
//       "": ["/images/"],
//       "": ["/images/"],
//     },
//     links: [
//       { label: "배포사이트", url: "" },
//       { label: "GitHub", url: "" },
//     ],
//   },
// ],
