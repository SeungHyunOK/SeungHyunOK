import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./intro.css";

export default function Intro() {
  const introTextRef = useRef(null);
  useEffect(() => {
    const intText = gsap.timeline();
    intText
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 0.5 })
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 0.1 })
      .to(introTextRef.current, { opacity: 0, duration: 0.1 })
      .to(introTextRef.current, { opacity: 1, duration: 1 });
  }, []);

  return (
    <section className="intro">
      <span ref={introTextRef} className="intro-sentenceContainer">
        <span className="intro-title-wrapper">
          <p>프론트엔드 옥승현</p>
        </span>
        <h2 className="intro-subTitle">Made by @SeunghyunOK</h2>
      </span>
    </section>
  );
}
