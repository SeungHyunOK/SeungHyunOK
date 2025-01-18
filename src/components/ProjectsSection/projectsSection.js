import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Projects } from "../../Store/Projects";
import Project from "./Project/project";
import "./projectsSection.css";

export default function ProjectsSection() {
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
  );
}
