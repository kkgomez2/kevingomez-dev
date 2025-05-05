import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container section-container">
      <div className="contact section">
        <div className="contact-heading">
          <h1 className="section-title">Let's chat!</h1>
        </div>
        <div className="contact-body">
          <div className="contact-email">
            <div>If you're interested in talking, shoot me an email!</div>
            <div className="contact-email-info">
              <img
                src="/icons/iconfinder_email-letter-inbox-send_2203552.svg"
                className="fill-white icon"
                title="email"
                alt="email icon"
              />
              <h2>kevin@kevingomez.dev</h2>
            </div>
          </div>
          <div className="contact-resume">
            You can also download my full resume here:
            <button>My Resume</button>
          </div>
          <div className="contact-links">
            Or connect with me on LinkedIn or GitHub!
            <div className="contact-links-list">
              <div className="contact-link">
                <img
                  src="/icons/InBug-White.png"
                  className="icon"
                  title="LinkedIn"
                  alt="LinkedIn icon"
                />{" "}
                linkedin.com/in/kkgomez2/
              </div>
              <div className="contact-link">
                <img
                  src="/icons/github-mark-white.svg"
                  className="icon"
                  title="GitHub"
                  alt="GitHub icon"
                />{" "}
                github.com/kkgomez2
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section"></div>
      </div>
    </div>
  );
};

export default Contact;
