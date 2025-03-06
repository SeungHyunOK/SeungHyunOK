import "./App.css";
import Nav from "./pages/Nav/nav";
import { Helmet } from "react-helmet";
import Intro from "./pages/Intro/intro";
import About from "./pages/About/about";
import Skills from "./pages/Skills/skills";
import ProjectsSection from "./pages/ProjectsSection/projectsSection";
import Thanks from "./pages/Thanks/thanks";
import Footer from "./pages/Footer/footer";
import Study from "./pages/Study/study";

function App() {
  return (
    <div>
      <Helmet>
        <title>프론트엔드 - 옥승현</title>
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
      <Study />
      <Thanks />
      <Footer />
    </div>
  );
}

export default App;
