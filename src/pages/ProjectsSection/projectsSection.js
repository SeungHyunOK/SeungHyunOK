import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "../../Store/Projects";
import Project from "./Project/project";
import "./projectsSection.css";

export default function ProjectsSection() {
  const projectsH1Ref = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ProjectsH1Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: projectsH1Ref.current,
        start: "top 90%",
        end: "top 20%",
      },
    });
    ProjectsH1Timeline.fromTo(
      projectsH1Ref.current,
      { opacity: 0, y: -100 },
      { opacity: 1, y: 0, ease: "power1.inOut" }
    );
  }, []);

  return (
    <section id="projects" className="projects-container">
      <h1 ref={projectsH1Ref} className="projects-container-title">
        프로젝트
      </h1>
      <div className="projectLists">
        {/* Glowshelfie */}
        <div className="project">
          <div className="project-a">
            <button onClick={() => openModal(Projects.Glowshelfie)}>
              자세히 보기
            </button>
            <a
              href="https://glowshelfie.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              배포 링크
            </a>
            <a
              href="https://github.com/SeungHyunOK/Glowshelfie"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/images/glowshelfie/all.gif"
            alt="glowshelfie"
            className="project-image"
          />
          <div className="project-content">
            <h2>Glowshelfie</h2>
            <p>맞춤 스킨케어 추천 플랫폼입니다.</p>
          </div>
          <div className="badges">
            <p>솔로</p>
            <p>사이드</p>
            <p>반응형</p>
          </div>
        </div>

        <div className="project">
          <div className="project-a">
            <button onClick={() => openModal(Projects.Eobom)}>
              자세히 보기
            </button>
            <a
              href="https://eobom-243e0.web.app/login"
              target="_blank"
              rel="noreferrer"
            >
              배포 링크
            </a>
            <a
              href="https://github.com/SeungHyunOK/eobom"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/images/eobom/all.gif"
            alt="eobom_gif"
            className="project-image"
          />
          <div className="project-content">
            <h2>Eobom</h2>
            <p>노인,요양사를 이어주는 돌봄서비스.</p>
          </div>
          <div className="badges">
            <p>팀</p>
            <p>해커톤</p>
            <p>모바일</p>
          </div>
        </div>

        {/* Coworkers 프로젝트 */}
        <div className="project">
          <div className="project-a">
            <button onClick={() => openModal(Projects.Coworkers)}>
              자세히 보기
            </button>
            <a
              href="https://coworkers-colla.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              배포 링크
            </a>
            <a
              href="https://github.com/team-collabor/coworkers"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/images/coworkers/co_all.gif"
            alt="coworkers_gif"
            className="project-image"
          />
          <div className="project-content">
            <h2>Coworkers</h2>
            <p>팀 협업 업무 관리 플랫폼입니다.</p>
          </div>
          <div className="badges">
            {" "}
            <p>팀</p>
            <p>사이드</p>
            <p>반응형</p>
          </div>
        </div>

        <div className="project">
          <div className="project-a">
            <button onClick={() => openModal(Projects.GSF_inventory)}>
              자세히 보기
            </button>
            <a
              href="https://glowshelfie-inventory.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              배포 링크
            </a>
            <a
              href="https://github.com/SeungHyunOK/Glowshelfie-Inventory"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/images/glowshelfieInventory/all.gif"
            alt="coworkers_gif"
            className="project-image"
          />
          <div className="project-content">
            <h2>GSF-inventory</h2>
            <p>Glowshelfie의 재고관리페이지.</p>
          </div>
          <div className="badges">
            {" "}
            <p>솔로</p>
            <p>토이</p>
            <p>반응형</p>
          </div>
        </div>

        {/* Portfolio-SeunghyunOK */}
        <div className="project">
          <div className="project-a">
            <button onClick={() => openModal(Projects.Portfolio)}>
              자세히 보기
            </button>
            <a
              href="https://seunghyunok.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              배포 링크
            </a>
            <a
              href="https://github.com/SeungHyunOK"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img
            src="/images/portfolio/all.gif"
            alt="portfolio"
            className="project-image"
          />
          <div className="project-content">
            <h2>Portfolio</h2>
            <p>옥승현의 포트폴리오입니다.</p>
          </div>
          <div className="badges">
            <p>솔로</p>
            <p>포트폴리오</p>
            <p>PC</p>
          </div>
        </div>
      </div>
      {isModalOpen &&
        selectedProject &&
        selectedProject.map((project, index) => (
          <Project
            isOpen={isModalOpen}
            onClose={closeModal}
            key={index}
            project={project}
          />
        ))}
    </section>
  );
}
