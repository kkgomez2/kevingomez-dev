import "./Contact.scss";
import { Toaster, toast } from "react-hot-toast";
import InViewAppear from "../../utilities/InViewAppear";

const Contact = () => {
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kevin@kevingomez.dev");

      toast.success('Email copied!', {
        style: {
          border: '1px solid var(--brand-dark)',
          padding: '16px',
          color: 'var(--brand-dark)',
        },
        iconTheme: {
          primary: 'var(--brand-dark)',
          secondary: 'white',
        },
      });
    } catch (err: unknown) {
      if (err && typeof err === "object" && "message" in err) {
        console.error(err.message);
      }
    }
  };
  return (
    <div className="contact-container section-container segment" id="contact">
      <section className="contact section">
        <div>
          <Toaster />
        </div>
        <div className="contact-heading">
          <InViewAppear>
            <h1 className="section-title">Let's chat!</h1>
          </InViewAppear>
        </div>
        <div className="contact-body">
          <div className="contact-email">
            <InViewAppear color="--white">
              <div>Let's build something together. Shoot me an email!</div>
            </InViewAppear>

            <InViewAppear color="--brand-dark">
              <div
                className="contact-email-info"
                onClick={() => {
                  copyEmail();
                }}
              >
                <img
                  src="/icons/iconfinder_email-letter-inbox-send_2203552.svg"
                  className="fill-white icon"
                  title="email"
                  alt="email icon"
                />
                <h2>kevin@kevingomez.dev</h2>
              </div>
            </InViewAppear>
          </div>
          <div className="contact-sub">
            <InViewAppear color="--white">
              <div className="contact-resume">
                You can also download my full resume below:
                <button
                  onClick={() => window.open("/Kevin Gomez Resume (2025).pdf")}
                >
                  Resume
                </button>
              </div>
            </InViewAppear>
            <div className="contact-links">
              <InViewAppear color="--white">
                <>Or connect with me on LinkedIn or GitHub!</>
              </InViewAppear>
              <div className="contact-links-list">
                <InViewAppear color="--white">
                  <a href="https://linkedin.com/in/kkgomez2" target="_blank">
                    <div className="contact-link">
                      <img
                        src="/icons/InBug-White.png"
                        className="icon"
                        title="LinkedIn"
                        alt="LinkedIn icon"
                      />{" "}
                      linkedin.com/in/kkgomez2
                    </div>
                  </a>
                </InViewAppear>

                <InViewAppear color="--white">
                  <a href="https://github.com/kkgomez2" target="_blank">
                    <div className="contact-link">
                      <img
                        src="/icons/github-mark-white.svg"
                        className="icon"
                        title="GitHub"
                        alt="GitHub icon"
                      />{" "}
                      github.com/kkgomez2
                    </div>
                  </a>
                </InViewAppear>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-section"></div>
      </section>
    </div>
  );
};

export default Contact;
