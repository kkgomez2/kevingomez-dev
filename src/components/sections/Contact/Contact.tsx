import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact-container section-container">
      <div className="contact section">
        <div className="contact-heading">
          <h1 className="section-title">Contact</h1>
        </div>
        <div className="contact-main-section">
          <div>
            If you're interested in chatting, shoot me an email!
            <div>
              <h2>kevin@kevingomez.dev</h2>
            </div>
            <div></div>
            You can also download my full resume here:
            <button>My Resume</button>
          </div>
          <div>
            Or connect with me on LinkedIn or GitHub.
            <div>
              <div>LinkedIn: https://www.linkedin.com/in/kkgomez2/</div>
              <div>GitHub: https://github.com/kkgomez2</div>
            </div>
          </div>
        </div>
        <div className="contact-section"></div>
      </div>
    </div>
  );
};

export default Contact;
