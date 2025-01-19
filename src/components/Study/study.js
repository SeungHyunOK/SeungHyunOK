import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./study.css";

export default function Study() {
  const studyTitleRef = useRef(null);
  const studyRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const studyH2Ref = gsap.utils.toArray(".study-section h2");
    const studyArtRef = gsap.utils.toArray(".study-article");
    const studyTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: studyRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: 2,
      },
    });

    studyTimeline
      .fromTo(
        studyTitleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 1 }
      )
      .fromTo(
        studyH2Ref,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 1 }
      )
      .fromTo(
        studyArtRef,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 1 }
      );
  });

  return (
    <div className="study-wrapper" ref={studyRef}>
      <div className="study-body">
        <div className="study-title" ref={studyTitleRef}>
          <h1>성장 중인 나의 기술</h1>
        </div>

        <div className="study-section">
          <h2>Zustand 학습 중</h2>

          <div className="study-article">
            <h3>왜 공부하고 있나요?</h3>
            <p>
              React의 상태 관리 솔루션으로 Redux에 비해 더 가볍고 단순한 구조를
              제공하기 때문입니다. 특히, 중소규모 프로젝트에서 간결하고 효율적인
              상태 관리를 구현할 수 있어 관심을 가지게 되었습니다.
            </p>
          </div>

          <div className="study-article">
            <h3>학습 내용</h3>
            <ul>
              <li>React Context와 비교하며 Zustand의 장점 이해.</li>
              <li>
                Zustand의 middleware를 활용한 상태 로깅 및 비동기 작업 처리 방법
                실습.
              </li>
            </ul>
          </div>
        </div>

        <div className="study-section">
          <h2>진행 상황</h2>

          <div className="study-article">
            <h3>학습 자료</h3>
            <ul>
              <li>
                <a
                  href="https://zustand-demo.pmnd.rs/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zustand 공식 문서
                </a>
              </li>
              <li>YouTube 튜토리얼 및 관련 블로그 포스팅</li>
            </ul>
          </div>

          <div className="study-article">
            <h3>진행 중인 연습</h3>
            <ul>
              <li>Redux와 Zustand의 코드량 및 효율성 비교.</li>
              <li>
                SSR (Server Side Rendering) 환경에서 Zustand 상태 관리 실험.
              </li>
            </ul>
          </div>
        </div>

        <div className="study-section">
          <h2>다음 목표</h2>
          <div className="study-article">
            <ul>
              <li>
                Zustand의 persist middleware를 사용하여 상태를 로컬 스토리지에
                저장하기.
              </li>
              <li>대규모 상태 관리 시 성능 최적화를 위한 구조 설계 실험.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
