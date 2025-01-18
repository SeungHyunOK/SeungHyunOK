import "./thanks.css";

export default function Thanks() {
  return (
    <section className="thanks">
      <h1>Thank you!</h1>
      <p>
        저의 포트폴리오를 봐주셔서 감사합니다. 아래 연락처로 언제든
        문의해주세요!
      </p>
      <div className="thanksLink">
        <a href="mailto:ohl2619@naver.com">Email</a>
        <a
          href="https://github.com/SeungHyunOK"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
