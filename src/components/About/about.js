import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./about.css";

export default function About() {
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
          React, TypeScript, Git, Next.js를 학습하며, 이를 활용한 3개의 React
          기반 프로젝트를 성공적으로 완료했습니다.
        </p>
        <span className="career-badge">
          <h3>수료</h3>
          <h3>2024.05 ~ 2024.11 </h3>
        </span>
      </div>
    </section>
  );
}
