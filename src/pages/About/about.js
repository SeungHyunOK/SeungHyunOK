import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

export default function About() {
  const aboutSentenceRef = useRef(null);
  const aboutProfileRef = useRef(null);
  const careerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSentenceRef.current,
        start: "top 100%",
        toggleActions: "play none none none",
      },
    });

    aboutTimeline
      .fromTo(
        aboutSentenceRef.current,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(
        aboutProfileRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1 },
        "-=0.3"
      );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: careerRef.current,
        start: "top 80%", // career 요소가 뷰포트에 들어왔을 때
        toggleActions: "play none none none",
      },
    });

    careerTimeline.fromTo(
      careerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 0.5 }
    );
  }, []);

  return (
    <section id="aboutcarrer" className="aboutcarrer">
      <div className="about">
        <div className="about-container" ref={aboutSentenceRef}>
          <div className="about-sentence">
            <h2>Q. 왜 프론트엔드 개발자가 되었나요?</h2>
            <p>
              A. 제가 처음 웹 개발에 관심을 가지게 된 건, 단순한 HTML 페이지를
              만드는 재미에서 시작되었습니다. 그 후, 사용자와 바로 소통할 수
              있는 인터페이스를 구현하는 것에 매력을 느끼며 프론트엔드 개발자의
              길을 걷게 되었습니다.
            </p>
          </div>
          <div className="about-sentence">
            <h2>Q. 무엇을 가장 잘하나요?</h2>
            <p>
              A. 저는 React와 Next.js를 활용해 직관적이고 빠른 웹 애플리케이션을
              만드는 데 자신이 있습니다. 특히 사용자 경험(UX) 최적화와 성능
              개선에 강점을 가지고 있습니다.
            </p>
          </div>
          <div className="about-sentence">
            <h2>Q. 개발자로서 가장 중요하다고 생각하는 것은?</h2>
            <p>
              A. 기술은 사용자와의 연결고리라고 생각합니다. 사람들에게 더 나은
              경험을 제공하고, 문제를 해결하는 도구로 기술을 활용하는 것이 제가
              추구하는 목표입니다.
            </p>
          </div>
        </div>
        <img
          src="/images/IDpicture.webp"
          alt="IDpicture"
          title="옥승현"
          className="profile"
          ref={aboutProfileRef}
        />
      </div>
      <div className="career" ref={careerRef}>
        <h1>교육 & 경험</h1>

        <h2>Google Developers 2025 H1 AI Study Jam 참가</h2>
        <p>
          - Vertex AI, Palm API 등 Google Cloud 기반 생성형 AI 기술 학습 <br />
          -AI 모델 기획 및 프롬프트 설계 워크숍 참여 중 <br />- 실습 중심 과제로
          텍스트 생성/분류
        </p>
        <span className="career-badge">
          <h3>2025.03 ~ 현재</h3>
        </span>

        <h2>DND 해커톤 참가</h2>
        <p>
          12시간 동안 '사회 문제 해결'을 주제로 진행된 해커톤에 참가했습니다.
          <br />
          웹 개발을 주로 공부해왔지만, 이번 해커톤에서는 팀 내 iOS 앱 개발을
          담당하며 새로운 기술 스택을 경험했습니다.
          <br /> 제한된 시간 안에 기획부터 프로토타입까지 구현했으나 배포까지는
          완료하지 못했습니다.
          <br /> 짧은 시간 동안 협업, 문제 해결력, 기술 적응력을 키울 수 있었던
          도전적인 경험이었습니다.
        </p>
        <span className="career-badge">
          <h3>2025.05.23 ~ 05.24</h3>
        </span>

        <h2>스위프 웹 9기 해커톤 개인 참가 </h2>
        <p>
          - '인디 작가 × 소비자 직거래 마켓플레이스' MVP 개발 <br />
          - 창작자 포트폴리오 전시 + 쇼룸 + 마켓 기능 통합 플랫폼 기획
          <br />
          - 작가 초대/관리, 커뮤니티, 1:1 문의, 팔로우 등 유저 경험 중심 기능
          기획 및 구현
          <br />- Next.js App Router, TypeScript, Zustand, TailwindCSS 사용
        </p>
        <span className="career-badge">
          <h3>2025.04 ~ 05</h3>
        </span>

        <h2>구름EDU 인공지능 언어 마스터 과정</h2>
        <p>
          Python, Pandas, Scikit-learn을 활용한 데이터 분석 및 모델링 실습,
          <br />
          Kaggle 타이타닉 데이터를 기반으로 생존자 예측 모델 구현 <br />
          (데이터 전처리, 특성 선택, 모델 학습 및 성능 평가 경험)
        </p>
        <span className="career-badge">
          <h3>수료</h3>
          <h3>2025.03 ~ 05</h3>
        </span>

        <h2>2025년 블레이버스 MVP 개발 해커톤</h2>
        <p>
          해커톤 기간 동안, 팀원들과 함께 아이디어 구체화부터 프로토타입
          개발까지 전 과정을 경험하며,
          <br /> 제한된 시간 안에 최소 기능 제품(MVP)을 완성하는데 집중했습니다.
          <br /> 이를 통해 빠른 의사결정, 실시간 협업, 그리고 문제 해결 역량을
          크게 향상시킬 수 있었습니다.
        </p>
        <span className="career-badge">
          <h3>수료</h3>
          <h3>2025.02.10 ~ 2025.02.19</h3>
        </span>

        <h2>스프린트 프론트엔드 트랙8기 / 코드잇</h2>
        <p>
          약 1,000시간 동안 React, TypeScript, Git, Next.js를 집중적으로
          학습하고,
          <br />
          이를 활용해 총 3 개의 React 기반 프로젝트를 성공적으로 완료했습니다.
        </p>
        <span className="career-badge">
          <h3>수료</h3>
          <h3>2024.05 ~ 2024.11 </h3>
        </span>
      </div>
    </section>
  );
}
