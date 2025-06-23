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
      },
    });

    studyTimeline
      .fromTo(
        studyTitleRef.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.3 }
      )
      .fromTo(
        studyH2Ref,
        { opacity: 0, x: -100 },
        { opacity: 1, x: 0, duration: 0.3 }
      )
      .fromTo(
        studyArtRef,
        { opacity: 0, y: -100 },
        { opacity: 1, y: 0, duration: 0.3 }
      );
  });

  return (
    <div className="study-wrapper" ref={studyRef}>
      <div className="study-body">
        <div className="study-title" ref={studyTitleRef}>
          <h1>성장 중인 나의 기술</h1>
        </div>

        <div className="study-section">
          <h2>네이버 부스트캠프 10기 풀스텍</h2>

          <div className="study-article">
            <p>언어 데이터 분석 능력 함양</p>
            <p>딥러닝 모델을 활용한 자연어 처리 기술 습득</p>
            <p>실제 응용 사례를 기반으로 한 실무 능력 배양</p>
          </div>

          <div className="study-article">
            <h3>학습 내용</h3>
            <ul>
              <li>자연어 처리 기초 이론</li>
              <li>텍스트 전처리 및 토큰화 기법</li>
              <li>주요 딥러닝 모델 (RNN, LSTM, Transformer) 학습</li>
              <li>BERT와 GPT 같은 최신 언어 모델의 활용 사례</li>
              <li>프로젝트 기반 학습으로 실제 데이터셋을 활용한 문제 해결</li>
            </ul>
          </div>
        </div>

        <div className="study-section">
          <h2>진행 상황</h2>
          <div className="study-article">
            <ul>
              <li>
                선형회귀 그래프를 Python을 이용해서 코드로 변환하고있습니다.{" "}
              </li>
            </ul>
          </div>
        </div>

        <div className="study-section">
          <h2>다음 목표</h2>
          <div className="study-article">
            <ul>
              <li>경사하강법,평균 제곱근오차 공부하기</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
