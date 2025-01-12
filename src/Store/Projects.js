export const Projects = {
  Glowshelfie: [
    {
      title: "Glowshelfie",
      type: ["PC", "Tab", "Mobile"],
      participation: ["프론트 100%", "디자인 100%"],
      duration: "2024.12.01~2024.12.15",
      techStack: ["React", "TypeScript", "Next.js"],
      workDetails: [
        <>
          - 반응형 UI 설계와 최적화된 UX로 페이지 이탈률{" "}
          <span className="highlight">12% 감소</span>.
        </>,
        <>
          - 사용자 피부 데이터를 기반으로 한 맞춤형 추천 기능으로 사용자 참여율{" "}
          <span className="highlight">15% 증가</span>.
        </>,
        <>
          - 팔로워 수 전월 대비 <span className="highlight">2.3% 상승</span>.
        </>,
      ],
      images: [
        "/images/glowshelfie/all.gif",
        "/images/glowshelfie/mainpage.webp",
        "/images/glowshelfie/quiz_1.webp",
        "/images/glowshelfie/shop.webp",
        "/images/glowshelfie/discount.webp",
        "/images/glowshelfie/feed.webp",
        "/images/glowshelfie/feedClick.webp",
      ],
      links: [
        { label: "배포사이트", url: "https://glowshelfie.vercel.app/" },
        { label: "GitHub", url: "https://github.com/SeungHyunOK/Glowshelfie" },
      ],
      logo: ["/images/glowshelfie/glowshelfie_logo.png"],
    },
  ],
  Coworkers: [
    {
      title: "Coworkers",
      type: ["PC", "Tab", "Mobile"],
      participation: ["홈페이지", "개인정보 페이지"],
      duration: "2024.10.07~2024.11.14",
      techStack: ["React", "TypeScript", "Next.js"],
      workDetails: [
        `- 로그인 상태를 감지해 "지금 시작하기" 클릭 시 홈이나 대시보드로 동적 라우팅 구현.`,
        "- React와 TypeScript를 사용해 재사용 가능한 컴포넌트로 UI를 구조화하여 유지보수성을 향상.",
      ],
      images: [
        "/images/coworkers/co_all.gif",
        "/images/coworkers/co_landing.webp",
        "/images/coworkers/co_board.webp",
        "/images/coworkers/co_teampage.webp",
        "/images/coworkers/co_private.webp",
        "/images/coworkers/co_myhistory.webp",
        "/images/coworkers/co_todo.webp",
      ],
      links: [
        { label: "배포사이트", url: "https://coworkers-colla.netlify.app/" },
        { label: "GitHub", url: "https://github.com/team-collabor/coworkers" },
      ],
      logo: ["/images/coworkers/Logo.webp"],
    },
  ],
  Portfolio: [
    {
      title: "프론트엔드 포트폴리오-옥승현",
      type: ["PC"],
      participation: ["프론트 100%", "디자인 100%"],
      duration: "2024.01.01~2024.01.10",
      techStack: ["React", "GSAP"],
      workDetails: [
        "- 반응형 UI 설계와 최적화된 UX로 페이지 이탈률 12% 감소",
        "- 사용자 피부 데이터를 기반으로 한 맞춤형 추천 기능으로 사용자 참여율 15% 증가",
        "- 팔로워 수 전월 대비 2.3% 상승",
      ],
      images: [
        "/images/portfolio/all.gif",
        "/images/portfolio/intro.webp",
        "/images/portfolio/about.webp",
        "/images/portfolio/skill.webp",
        "/images/portfolio/project.webp",
        "/images/portfolio/thanks.webp",
      ],
      links: [
        { label: "배포사이트", url: "https://glowshelfie.vercel.app/" },
        { label: "GitHub", url: "https://github.com/SeungHyunOK/Glowshelfie" },
      ],
      logo: ["/images/portfolio/logo.webp"],
    },
  ],
};
