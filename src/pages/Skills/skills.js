import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./skills.css";

export default function Skills() {
  const skillH1Ref = useRef(null);
  const skillS1Ref = useRef(null);
  const skillS2Ref = useRef(null);
  const skillS3Ref = useRef(null);
  const skillS4Ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const skillTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: skillH1Ref.current,
        start: "top 90%",
      },
    });

    skillTimeline
      .to(skillH1Ref.current, { scale: 0.5, duration: 0.1 })
      .to(skillH1Ref.current, { scale: 1 })
      .fromTo(
        skillS1Ref.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        skillS2Ref.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        skillS3Ref.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        skillS4Ref.current,
        { opacity: 0, y: -80 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
  });

  return (
    <section id="skills" className="skills">
      <h1 ref={skillH1Ref}>이런 기술들을 사용해봤어요</h1>
      <div className="skill-sectionContainer">
        <div className="skill-section" ref={skillS1Ref}>
          <h2>기본 웹 기술</h2>
          <span>
            <h3>HTML5</h3>
            <p>- HTML5: Semantic Markup, SEO</p>
          </span>
          <span>
            <h3>CSS3</h3>
            <p>- Flexbox, Grid, Animation.</p>
          </span>
        </div>
        <div className="skill-section" ref={skillS2Ref}>
          <h2>프레임워크&라이브러리</h2>
          <span>
            <h3>Next.js</h3>
            <p>- SSR와 CSR를 구현해보았습니다.</p>
          </span>
          <span>
            <h3>TypeScript</h3>
            <p>
              - TypeScript를 사용하여 코드의 가독성과 유지보수성을 향상시키고,
              정적 타입 검사를 통해 잠재적인 오류를 사전에 방지하며 안정적인
              애플리케이션 개발에 기여했습니다.
            </p>
          </span>
          <span>
            <h3>React</h3>
            <p>
              - 컴포넌트 기반 UI 개발을 통해 재사용 가능한 인터페이스를
              구현했습니다.
            </p>
          </span>
          <span>
            <h3>Zustand</h3>
            <p>
              - 간단하고 직관적인 상태 관리 라이브러리를 사용해 애플리케이션
              상태를 효율적으로 관리했습니다.
            </p>
          </span>
          <span>
            <h3>Tailwind CSS</h3>
            <p>
              - 유틸리티 클래스 기반의 스타일링을 통해 빠르고 일관성 있는
              디자인을 구현했습니다.
            </p>
          </span>
        </div>
        <div className="skill-section" ref={skillS3Ref}>
          <h2>디자인 & 기타</h2>
          <span>
            <h3>Figma</h3>
            <p>
              - UI/UX 설계를 위해 프로토타입과 와이어프레임을 제작했으며,
              팀원들과 디자인을 협업했습니다.
            </p>
          </span>
          <span>
            <h3>GSAP</h3>
            <p>
              - ScrollTrigger와 Timeline을 활용하여 웹 애니메이션을
              구현했습니다.
            </p>
          </span>
          <span>
            <h3>Vercel</h3>
            <p>
              - Next.js 프로젝트를 배포하며 CI/CD 파이프라인을 활용해 지속적인
              배포(Continuous Deployment)를 구현했습니다.
            </p>
          </span>
        </div>
        <div className="skill-section" ref={skillS4Ref}>
          <h2>협업 도구</h2>
          <span>
            <h3>GitHub</h3>
            <p>
              - 프로젝트의 버전 관리와 협업을 위해 GitHub을 사용하여 코드를
              효율적으로 관리했습니다.
            </p>
          </span>
          <span>
            <h3>Gather.town</h3>
            <p>
              - 가상 공간에서 팀 회의를 진행하고, 프로젝트 아이디어를 공유하며
              효율적인 협업 환경을 조성했습니다.
            </p>
          </span>
          <span>
            <h3>Discode</h3>
            <p>
              - 다양한 채널을 활용하여 팀원들과의 원활한 의사소통을 지원하고,
              프로젝트 관련 정보를 공유하며 실시간 협업을 진행했습니다.
            </p>
          </span>
          <span>
            <h3>Slack</h3>
            <p>
              - 실시간 메시징 및 파일 공유를 통해 팀원들과의 소통을 강화하고,
              주제별 채널을 활용하여 효율적인 정보 관리와 프로젝트 협업을
              지원했습니다.
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}
