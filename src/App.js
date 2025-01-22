import "./App.css";
import Nav from "./components/Nav/nav";
import { Helmet } from "react-helmet";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import ProjectsSection from "./components/ProjectsSection/projectsSection";
import Thanks from "./components/Thanks/thanks";
import Footer from "./components/Footer/footer";
import Study from "./components/Study/study";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function App() {
  const progressRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      progressRef.current,
      { attr: { value: 0 } },
      {
        attr: { value: 100 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
        ease: "power2.out",
      }
    );
  }, []);
  return (
    <div ref={containerRef}>
      <Helmet>
        <title>프론트엔드 개발자 - 옥승현</title>
        <meta
          name="description"
          content="프론트엔드 개발자 옥승현의 포트폴리오"
        />
        <meta property="og:title" content="프론트엔드 개발자 - 옥승현" />
        <meta property="og:description" content="옥승현의 포트폴리오" />
        <meta property="og:image" content="/images/IDpicture_metaImage.jpg" />
        <meta property="og:url" content="https://seunghyunok.vercel.app/" />
      </Helmet>
      <Nav />
      <div className="progressbar">
        <progress ref={progressRef} max="100" value="0"></progress>
      </div>
      <Intro />
      <About />
      <Skills />
      <ProjectsSection />
      <Study />
      <Thanks />
      <Footer />
    </div>
  );
}

export default App;
