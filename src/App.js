import "./App.css";
import Project from "./components/Project/Project";
import { Projects } from "./Store/Projects";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Nav from "./components/Nav/nav";
import { Helmet } from "react-helmet";

function App() {
  const introTextRef = useRef(null);
  useEffect(() => {
    const intText = gsap.timeline();
    intText
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 0.3 })
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 0.1 })
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 1 });
  }, []);

  const introRef = useRef(null);
  const introSubRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const introTitleRef = gsap.utils.toArray(".intro-title-wrapper p");
    const introEndTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: introRef.current,
        start: "top top",
        end: "bottom 50%",
        scrub: 3,
      },
    });

    introEndTimeline.to(introTitleRef, {
      opacity: 0,
      y: -150,
      stagger: 0.2,
      duration: 0.3,
    });

    introEndTimeline.to(introSubRef.current, {
      opacity: 0,
      x: 50,
      duration: 1,
    });
  }, []);

  const aboutSentenceRef = useRef(null);
  const aboutProfileRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: aboutSentenceRef.current,
        start: "top 80%",
        end: "top 25%",
        scrub: 3,
      },
    });
    aboutTimeline.fromTo(
      aboutSentenceRef.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 1 }
    );
    aboutTimeline.fromTo(
      aboutProfileRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1 }
    );
  }, []);

  const careerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const careerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: careerRef.current,
        start: "top 80%",
        end: "top 25%",
        scrub: 3,
      },
    });

    careerTimeline.fromTo(
      careerRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });

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
        start: "top 75%",
        end: "top 25%",
        scrub: 3,
      },
    });

    skillTimeline
      .to(skillH1Ref.current, { scale: 0.5, duration: 0.1 })
      .to(skillH1Ref.current, { scale: 1 });
    skillTimeline.fromTo(
      skillS1Ref.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1 }
    );
    skillTimeline.fromTo(
      skillS2Ref.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1 }
    );
    skillTimeline.fromTo(
      skillS3Ref.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1 }
    );
    skillTimeline.fromTo(
      skillS4Ref.current,
      { opacity: 0, y: -80 },
      { opacity: 1, y: 0, duration: 1 }
    );
  });

  const projectsH1Ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ProjectsH1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectsH1Ref.current,
        start: "top 75%",
        end: "top 20%",
        scrub: 3,
      },
    });
    ProjectsH1Timeline.fromTo(
      projectsH1Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, ease: "power1.inOut" }
    );
  });
  return (
    <>
      <Helmet>
        <title>프론트엔드-옥승현</title>
        <meta
          name="프론트엔드|포트폴리오-옥승현"
          content="프론트엔드 개발자 옥승현의 포트폴리오입니다"
        />
        <meta
          name="keywords"
          content="옥승현, 포트폴리오, 프론트엔드옥승현, 개발자옥승현"
        />
      </Helmet>

      <Nav />
      <section className="intro" ref={introRef}>
        <span ref={introTextRef} className="intro-sentenceContainer">
          <span className="intro-title-wrapper">
            <p>프</p>
            <p>론</p>
            <p>트</p>
            <p>엔</p>
            <p>드</p> <p>포</p>
            <p>트</p>
            <p>폴</p>
            <p>리</p>
            <p>오</p>
          </span>
          <h2 className="intro-subTitle" ref={introSubRef}>
            Made by @SeunghyunOK
          </h2>
        </span>
      </section>

      <section id="aboutcarrer" className="aboutcarrer">
        <div className="about">
          <div className="about-container" ref={aboutSentenceRef}>
            <div className="about-sentence">
              <h2>Q. 왜 프론트엔드 개발자가 되었나요?</h2>
              <p>
                A. 제가 처음 웹 개발에 관심을 가지게 된 건, 단순한 HTML 페이지를
                만드는 재미에서 시작되었습니다. 그 후, 사용자와 바로 소통할 수
                있는 인터페이스를 구현하는 것에 매력을 느끼며 프론트엔드
                개발자의 길을 걷게 되었습니다.
              </p>
            </div>
            <div className="about-sentence">
              <h2>Q. 무엇을 가장 잘하나요?</h2>
              <p>
                A. 저는 React와 Next.js를 활용해 직관적이고 빠른 웹
                애플리케이션을 만드는 데 자신이 있습니다. 특히 사용자 경험(UX)
                최적화와 성능 개선에 강점을 가지고 있습니다.
              </p>
            </div>
            <div className="about-sentence">
              <h2>Q. 개발자로서 가장 중요하다고 생각하는 것은?</h2>
              <p>
                A. 기술은 사용자와의 연결고리라고 생각합니다. 사람들에게 더 나은
                경험을 제공하고, 문제를 해결하는 도구로 기술을 활용하는 것이
                제가 추구하는 목표입니다.
              </p>
            </div>
          </div>
          <img
            src="/images/IDpicture.jpg"
            alt="IDpicture"
            title="옥승현"
            className="profile"
            ref={aboutProfileRef}
          />
        </div>
        <div className="career" ref={careerRef}>
          <h1>교육</h1>
          <h2>스프린트 프론트엔드 트랙8기 / 코드잇</h2>
          <p>
            React,TypeScript,Git,Next.js를 학습하고 3개의 React 프로젝트를 진행
            했습니다.
          </p>
          <span className="career-badge">
            <h3>수료</h3>
            <h3>2024.05 ~ 2024.11 </h3>
          </span>
        </div>
      </section>

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

      <section id="projects" className="projects">
        <h1 ref={projectsH1Ref}>프로젝트</h1>
        {Projects.Glowshelfie.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {Projects.Coworkers.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {Projects.Portfolio.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </section>

      <section className="thanks">
        <h1>Thank you!</h1>
        <p>
          저의 포트폴리오를 봐주셔서 감사합니다. 아래 연락처로 언제든
          문의해주세요!
        </p>
        <div className="thanksLink">
          <a href="mailto:ohl2619@naver.com">Email</a>
          <a
            href="https://github.com/SeungHyunOK"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
