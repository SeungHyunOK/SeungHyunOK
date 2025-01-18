import React, { useState, useEffect, useRef } from "react";
import "./project.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Project({
  title,
  type,
  participation,
  duration,
  techStack,
  workDetails,
  images,
  links,
  logo,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const maxIndex = Math.ceil(images.length / 2) - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const openModal = (src) => {
    setModalImage(src);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalImage(null);
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const containerRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const containerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        end: "bottom center",
        scrub: 3,
      },
    });
    containerTimeline.fromTo(
      containerRef.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1, duration: 1 }
    );
  });

  return (
    <section className="project">
      <div className="project-container" ref={containerRef}>
        <div className="proDes">
          <h2>{title}</h2>
          <div className="proHeader">
            <div className="proItem">
              <h3>타입</h3>
              {type.map((ty, index) => (
                <p key={index}>{ty}</p>
              ))}
            </div>
            <div className="proItem">
              <h3>참여</h3>
              {participation.map((part, index) => (
                <p key={index}>{part}</p>
              ))}
            </div>
            <div className="proItem">
              <h3>기간</h3>
              <p>{duration}</p>
            </div>
            <div className="proItem">
              <h3>사용기술</h3>
              {techStack.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
          <div className="proBody">
            <h3>작업&결과</h3>
            {workDetails.map((work, index) => (
              <p key={index}>{work}</p>
            ))}
          </div>
          <div className="proFooter">
            <h3>스크린샷</h3>
            <div className="slider-container">
              <div
                className="slider"
                style={{
                  gridTemplateColumns: `repeat(${images.length}, 50%)`,
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {images.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Slide ${index}`}
                    onClick={() => openModal(src)}
                  />
                ))}
              </div>
              <button
                className="prev"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                ◀
              </button>
              <button
                className="next"
                onClick={nextSlide}
                disabled={currentIndex === maxIndex}
              >
                ▶
              </button>
            </div>
          </div>
          <div className="proLink">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <img
          src={logo}
          alt="project-logo"
          className="project-logo"
          loading="lazy"
          decoding="async"
        />
      </div>
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <img src={modalImage} alt="Modal" className="modal-image" />
        </div>
      )}
    </section>
  );
}
