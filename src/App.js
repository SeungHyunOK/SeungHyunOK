import "./App.css";
import Nav from "./components/Nav/nav";
import { Helmet } from "react-helmet";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Skills from "./components/Skills/skills";
import ProjectsSection from "./components/ProjectsSection/projectsSection";
import Thanks from "./components/Thanks/thanks";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <>
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
      <Intro />
      <About />
      <Skills />
      <ProjectsSection />
      <Thanks />
      <Footer />
    </>
  );
}

export default App;
