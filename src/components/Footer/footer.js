import "./footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Seunghyun Ok. All rights reserved.</p>
        <p>
          <a
            href="https://github.com/SeungHyunOK"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          | <a href="mailto:ohl2619@naver.com">Contact</a>
        </p>
      </div>
    </footer>
  );
}
