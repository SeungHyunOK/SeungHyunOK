import "./project.css";
import { useState, useEffect } from "react";

function ToggleItem({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="projectDescription-toggle">
      <div className="projectDescription-toggleButton" onClick={handleToggle}>
        <img
          className="projectDescription-toggleButton-img"
          src="/icons/arrow_right.svg"
          alt="projectLogo"
          style={{
            transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
        <p>{title}</p>
      </div>
      {isOpen && (
        <div className="projectDescription-toogleSentence">{children}</div>
      )}
    </div>
  );
}

export default function Project({ project, isOpen, onClose }) {
  const [isResultOpen, setIsResultOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImage(imgSrc);
    setIsResultOpen(true);
  };

  const handleCloseModal = () => {
    setIsResultOpen(false);
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains("projectOverlay")) {
      onClose();
    }
  };

  const handleResultOverlayClick = (event) => {
    if (event.target.classList.contains("projectDescription-resultOverlay")) {
      handleCloseModal();
    }
  };

  return (
    <div className="projectOverlay" onClick={handleOverlayClick}>
      <div className="projectInlay">
        <div className="projectLinkContainer">
          <button className="projectLink" onClick={onClose}>
            <img
              className="projectLink-img"
              src="/icons/close.svg"
              alt="close"
            />
            나가기
          </button>
          {project.links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="projectLink"
            >
              <img
                className="projectLink-img"
                src={
                  link.label === "배포사이트"
                    ? "/icons/link.svg"
                    : "/icons/github.svg"
                }
                alt={link.label.toLowerCase()}
              />
              {link.label}
            </a>
          ))}
        </div>
        <div className="projectContainer">
          <div className="projectBadges">
            {project.badges.map((badge, index) => (
              <p key={index}>{badge}</p>
            ))}
          </div>
          <div className="projectTitle">
            <img src={project.logo} alt="projectLogo" className="projectLogo" />{" "}
            <h1>{project.title}</h1>
          </div>
          <p className="projectSubTitle">{project.subTitle}</p>
          <img
            className="projectImage-intro"
            src={project.introImg}
            alt="projectIntro"
          />
          <div className="projectSimpleDescription">
            <p>{project.simpleDescription}</p>
          </div>
          <div className="dividingLine" />
          <div className="projectDescription">
            <div className="projectDescription-section">
              <div className="projectDescription-title">주요기능 및 특징</div>
              <ul className="projectDescription-sectionUl">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="projectDescription-section">
              <div className="projectDescription-title">
                사용 기술 및 언어
                <p className="projectDescription-assistance">
                  클릭해서 세부내용을 확인해보세요!
                </p>
              </div>
              {Object.entries(project.techStack).map(([tech, details]) => (
                <ToggleItem key={tech} title={tech}>
                  <ul>
                    {details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </ToggleItem>
              ))}
            </div>

            <div className="projectDescription-section">
              <div className="projectDescription-title">작업 기여도</div>
              {Object.entries(project.workDetails).map(([work, details]) => (
                <ToggleItem key={work} title={work}>
                  <ul>
                    {details.map((detail, index) => (
                      <li key={index}>{detail}</li>
                    ))}
                  </ul>
                </ToggleItem>
              ))}
            </div>

            <div className="projectDescription-section">
              <div className="projectDescription-title">트러블 슈팅</div>
              {Object.entries(project.troubleShooting).map(
                ([trouble, details]) => (
                  <ToggleItem key={trouble} title={trouble}>
                    <ul>
                      {details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                      ))}
                    </ul>
                  </ToggleItem>
                )
              )}
            </div>

            <div className="projectDescription-section">
              <h2 className="projectDescription-title">작업화면</h2>
              <div className="projectDescription-results">
                {Object.entries(project.results).map(([screen, imgs]) => (
                  <div key={screen}>
                    {imgs.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="projectDescription-imageContainer"
                      >
                        <img
                          onClick={() => handleImageClick(imgSrc)}
                          className="projectDescription-image"
                          src={imgSrc}
                          alt={`${project.title} ${screen}`}
                        />
                        <p>{screen}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {isResultOpen && (
              <div
                className="projectDescription-resultOverlay"
                onClick={handleResultOverlayClick}
              >
                <div className="projectDescription-resultContainer">
                  <img
                    className="projectDescription-resultContainer-close"
                    src="/icons/close.svg"
                    alt="close"
                    onClick={handleCloseModal}
                  />
                  <img
                    className="projectDescription-resultContainer-selected"
                    src={selectedImage}
                    alt="zoomImage"
                    onClick={handleCloseModal}
                  />
                </div>
              </div>
            )}
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
