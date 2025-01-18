import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./intro.css";

export default function Intro() {
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
  return (
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
  );
}
