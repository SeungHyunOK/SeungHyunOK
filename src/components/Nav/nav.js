import React, { useEffect, useRef, useState } from "react";
import "./nav.css";
import { gsap } from "gsap";

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  }, []);

  return (
    <nav className="nav-container" ref={containerRef}>
      <div className="nav">
        <div className="logo">프론트엔드 옥승현</div>
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li>
            <a href="#aboutcarrer">인터뷰&이력</a>
          </li>
          <li>
            <a href="#skills">기술</a>
          </li>
          <li>
            <a href="#projects">프로젝트</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
